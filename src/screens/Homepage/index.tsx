import {useQuery} from '@apollo/client';
import React from 'react';
import {FlatList, ImageBackground} from 'react-native';

import Movie from '../../components/Movie';
import ErrorHandler from '../../components/errorHandler';
import CustomLoader from '../../components/loader';
import {GET_STAR_WARS_MOVIES} from '../../utils/services/apolloClient/queries';

const HomePage: React.FC = () => {
  const {loading, error, data} = useQuery(GET_STAR_WARS_MOVIES, {
    variables: {after: '2000'},
  });

  if (loading) return <CustomLoader />;
  if (error) return <ErrorHandler errorMessage={error.message} />;

  if (!data || !data.allFilms || !data.allFilms.films) {
    return <ErrorHandler errorMessage={'No data available'} />;
  }

  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../assets/images/star-wars-rise-of-the-dark-side-wallpaper-scaled.jpg')}>
      <FlatList
        data={data.allFilms.films}
        horizontal={false}
        pagingEnabled={false}
        renderItem={({item}) => <Movie item={item} showCharacters={true} />}
      />
    </ImageBackground>
  );
};

export default HomePage;
