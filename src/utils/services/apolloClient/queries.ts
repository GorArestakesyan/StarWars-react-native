import {gql} from '@apollo/client';

export const GET_STAR_WARS_MOVIES = gql`
  query StarWarsMovies($after: String) {
    allFilms(after: $after) {
      films {
        characterConnection {
          characters {
            birthYear
            name
            created
            filmConnection {
              films {
                title
                created
                director
                producers
                releaseDate
              }
              totalCount
            }
          }
        }
        created
        director
        episodeID
        id
        producers
        releaseDate
        title
      }
      totalCount
    }
  }
`;
export const GET_STAR_WARS_MOVIE_CHARACTERS = gql`
  query StarWarsMoviesCharacters {
    allPeople {
      people {
        birthYear
        name
        filmConnection {
          films {
            title
            created
            director
            producers
          }
        }
      }
      totalCount
    }
  }
`;
