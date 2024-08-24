import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  default as DirectorIcon,
  default as PersonsIcon,
  default as RecIcon,
} from '../../../node_modules/react-native-vector-icons/dist/Ionicons';
import EachCharacter from '../../screens/Characters';
import {ICharacterType, IFilm} from '../../utils/types';

interface MovieComponentProps {
  item: IFilm;
  showCharacters: boolean;
}

const Movie = ({item, showCharacters}: MovieComponentProps) => {
  return (
    <View key={item.id} style={styles.movieContainer}>
      <Text style={styles.title}>
        Title: {item.title} {new Date(item.created).getFullYear()}
      </Text>
      <View style={styles.producersBox}>
        <RecIcon name="recording-sharp" size={23} color="#FF5349" />
        <Text style={styles.producers}>
          Producers : {item.producers?.join(', ')}
        </Text>
      </View>
      <View style={styles.directorBox}>
        <Text style={styles.director}>Director: {item.director}</Text>
        <DirectorIcon name="person-circle" size={25} color="#FFF" />
      </View>
      {showCharacters && (
        <View style={styles.charactersBox}>
          <Text style={styles.characters}>Characters</Text>
          <PersonsIcon name="people-circle-outline" size={26} color="#FFF" />
        </View>
      )}
      {showCharacters && (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {item.characterConnection.characters.map(
            (character: ICharacterType) => (
              <EachCharacter
                character={character}
                key={character.name}
                allowClick={true}
              />
            ),
          )}
        </ScrollView>
      )}
    </View>
  );
};

export default Movie;

const styles = StyleSheet.create({
  movieContainer: {
    paddingVertical: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#FFF',
    paddingHorizontal: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  producersBox: {
    alignItems: 'center',
    width: '95%',
    flexDirection: 'row',
    gap: 10,
  },
  producers: {
    color: '#FFF',
    letterSpacing: 0.9,
  },
  characters: {
    color: '#FFF',
    fontWeight: '700',
  },
  director: {
    color: '#FFF',
    fontWeight: '500',
  },
  directorBox: {
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFF',
    textAlign: 'center',
    paddingVertical: 20,
  },
  charactersBox: {
    flexDirection: 'row',
    gap: 13,
    paddingVertical: 10,
    alignItems: 'center',
  },
});
