interface ICharacterType {
  name: string;
  birthYear: string;
  __typename?: string;
}

interface IFilm {
  title: string;
  id: string;
  episodeID: number;
  director: string[];
  created: string;
  characterConnection: {
    characters: ICharacterType[];
  };
  producers: string[];
}

export type {IFilm, ICharacterType};
