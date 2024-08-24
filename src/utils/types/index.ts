type TSingleFilm = {
    title: string;
    created: string;
    director: unknown;
    producers: unknown;
    releaseDate: Date;
}
interface ICharacterType {
  name: string;
  birthYear: string;
  __typename?: string;
  filmConnection: {
    films: TSingleFilm[];
    total: number;
  };
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
  releaseDate?: Date
}

export type {ICharacterType, IFilm, TSingleFilm};
