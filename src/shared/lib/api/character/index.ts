import { AxiosPromise } from "axios";

import { axios } from "../base";
import { Character } from "../../types";

export const getCharacters = (
  page?: number,
): AxiosPromise<{
  info: { pages: number };
  results: Character[];
}> => axios(`/character${page ? `?page=${page}` : ""}`);
