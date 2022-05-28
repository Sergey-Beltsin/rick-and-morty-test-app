import { CharacterWithFirstEpisode } from "../../../shared/lib/types";

export type CharactersStore = CharacterWithFirstEpisode[];

export type PaginationStore = {
  pages: number | null;
  currentPage: number;
};
