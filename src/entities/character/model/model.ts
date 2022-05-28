import { createEffect, createStore, sample } from "effector";
import { useStore } from "effector-react";

import { CharactersStore } from "./model.types";
import { getCharacters } from "../../../shared/lib/api/character";
import {
  Character,
  CharacterWithFirstEpisode,
} from "../../../shared/lib/types";
import { getEpisodeById } from "../../../shared/lib/api/episode";

const getCharactersFx = createEffect(async () => {
  const {
    data: { results },
  } = await getCharacters();
  console.log(results);

  return results;
});

const getCharactersWithFirstEpisodeFx = createEffect(
  async (characters: Character[]) => {
    console.log(characters);
    const result = await Promise.all(
      characters.map(async (item) => {
        const { data } = await getEpisodeById(item.episode[0]);

        return {
          ...item,
          episode: { ...data },
        } as CharacterWithFirstEpisode;
      }),
    );
    console.log(result);

    return result;
  },
);

const $characters = createStore<CharactersStore>([]).on(
  getCharactersWithFirstEpisodeFx.doneData,
  (_, characters) => characters,
);

sample({
  clock: getCharactersFx.doneData,
  source: $characters,
  fn: (_, characters) => characters,
  target: getCharactersWithFirstEpisodeFx,
});

export const useCharactersStore = (): CharactersStore => useStore($characters);

export const actions = {
  getCharactersFx,
};
