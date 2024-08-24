import React from 'react';
import {FlatList, ImageBackground, StyleSheet, Text} from 'react-native';

import {useQuery} from '@apollo/client';

import EachCharacter from '..';
import ErrorHandler from '../../../components/errorHandler';
import CustomLoader from '../../../components/loader';

import {GET_STAR_WARS_MOVIE_CHARACTERS} from '../../../utils/services/apolloClient/queries';

const AllCharacters = () => {
  const {loading, error, data} = useQuery(GET_STAR_WARS_MOVIE_CHARACTERS);

  if (loading) return <CustomLoader />;
  if (error) return <ErrorHandler errorMessage={error.message} />;

  if (!data || !data.allPeople.people || !data.allPeople.people) {
    return <ErrorHandler errorMessage={'Not found any data'} />;
  }
  return (
    <ImageBackground
      source={require('../../../assets/images/2329840.jpg')}
      style={styles.background}>
      <Text style={styles.pageTitle}>List of Star Wars characters</Text>
      <FlatList
        data={data.allPeople.people}
        showsVerticalScrollIndicator
        indicatorStyle="white"
        style={{flex: 1}}
        renderItem={({item}) => (
          <EachCharacter
            character={item}
            itemStyle={styles.listItem}
            labelStyle={styles.itemLabel}
            nameStyle={styles.nameStyle}
            showBirthYear={true}
            allowClick={true}
          />
        )}
      />
    </ImageBackground>
  );
};

export default AllCharacters;

const styles = StyleSheet.create({
  background: {height: '100%'},
  pageTitle: {
    fontSize: 28,
    color: '#FFF',
    paddingVertical: 20,
    fontWeight: '200',
    textAlign: 'center',
  },
  listItem: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 40,
    width: '90%',
    alignSelf: 'center',
    marginVertical: 5,
    backgroundColor: 'rgba(255,255,255,0.6)',
  },
  itemLabel: {
    color: '#000',
    fontStyle: 'italic',
    fontWeight: '800',
  },
  nameStyle: {
    color: '#000',
    fontWeight: '700',
  },
});
