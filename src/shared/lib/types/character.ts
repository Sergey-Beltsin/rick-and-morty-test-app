import { Episode } from "./episode";

export enum CharacterStatus {
  Unknown = "Unknown",
  Alive = "Alive",
  Dead = "Dead",
}

export type Character = {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type CharacterWithFirstEpisode = Character & {
  episode: Episode;
};
