import { AxiosPromise } from "axios";

import { axios } from "../base";
import { Character } from "../../types";

export const getCharacters = (): AxiosPromise<{ results: Character[] }> =>
  axios("/character");
