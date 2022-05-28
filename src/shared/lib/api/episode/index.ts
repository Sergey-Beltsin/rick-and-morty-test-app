import axios, { AxiosPromise } from "axios";

import { Episode } from "../../types";

export const getEpisodeById = (url: string): AxiosPromise<Episode> =>
  axios(url);
