import Realm from 'realm';

const StarWarsFilmSchema = {
  name: 'StarWarsFilm',
  properties: {
    characters: 'Character[]',
    created: 'string?',
    director: 'string?',
    episodeID: 'int?',
    id: 'string?',
    producers: 'string[]',
    releaseDate: 'string?',
    title: 'string?',
  },
};

const CharacterSchema = {
  name: 'Character',
  properties: {
    birthYear: 'string?',
    name: 'string?',
    created: 'string?',
    films: 'IFilm[]',
  },
};

const FilmSchema = {
  name: 'Film',
  properties: {
    title: 'string?',
    created: 'string?',
    director: 'string?',
    producers: 'string[]',
    releaseDate: 'string?',
  },
};

const PeopleSchema = {
  name: 'People',
  properties: {
    name: 'string',
    birthYear: 'string',
  },
};

const schema = [StarWarsFilmSchema, CharacterSchema, FilmSchema, PeopleSchema];

const realm = new Realm({
  schema,
  schemaVersion: 1,
});
export default realm;
