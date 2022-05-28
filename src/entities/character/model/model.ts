import { createEffect, createEvent, createStore, sample } from "effector";
import { useStore } from "effector-react";

import { CharactersStore, PaginationStore } from "./model.types";
import { getCharacters } from "../../../shared/lib/api/character";
import {
  Character,
  CharacterWithFirstEpisode,
} from "../../../shared/lib/types";
import { getEpisodeById } from "../../../shared/lib/api/episode";

const getCharactersFx = createEffect(async (page?: number) => {
  const { data } = await getCharacters(page);

  return data;
});

const getCharactersWithFirstEpisodeFx = createEffect(
  async (characters: Character[]) => {
    const result = await Promise.all(
      characters.map(async (item) => {
        const { data } = await getEpisodeById(item.episode[0]);

        return {
          ...item,
          episode: { ...data },
        } as CharacterWithFirstEpisode;
      }),
    );

    return result;
  },
);

const $characters = createStore<CharactersStore>([]).on(
  getCharactersWithFirstEpisodeFx.doneData,
  (_, characters) => characters,
);

const handleSetCurrentPage = createEvent<number>();

const $pagination = createStore<PaginationStore>({
  pages: null,
  currentPage: 1,
})
  .on(getCharactersFx.doneData, (store, { info: { pages } }) => ({
    ...store,
    pages,
  }))
  .on(handleSetCurrentPage, (store, currentPage) => ({
    ...store,
    currentPage,
  }));

sample({
  clock: getCharactersFx.doneData,
  source: $characters,
  fn: (_, characters) => characters.results,
  target: getCharactersWithFirstEpisodeFx,
});

sample({
  clock: handleSetCurrentPage,
  source: $pagination,
  fn: (_, page) => page,
  target: getCharactersFx,
});

export const useCharactersStore = (): CharactersStore => useStore($characters);

export const usePaginationStore = (): PaginationStore => useStore($pagination);

export const actions = {
  getCharactersFx,
  handleSetCurrentPage,
};
