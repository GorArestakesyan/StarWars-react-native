import {
  ParamListBase,
  RouteProp,
  useNavigation,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {default as BackIcon} from 'react-native-vector-icons/dist/Ionicons';
import Movie from '../../../components/Movie';
import {ICharacterType, IFilm} from '../../../utils/types';

interface CharacterInfoPageProps {
  route: RouteProp<{params: {character: ICharacterType}}, 'params'>;
}

const CharacterInfoPage: React.FC<CharacterInfoPageProps> = ({ route }) => {
  const { params } = route;
  const character = params.character;

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const goBack = () => navigation.goBack();

  return (
    <ImageBackground
      source={require('../../../assets/images/star-wars-wallpaper.jpg')}
      style={{flex: 1}}>
      <View>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.backBtn}
          onPress={goBack}>
          <BackIcon name="arrow-back-sharp" size={18} color="#FF5349" />
          <Text style={styles.backBtnText}>Go Back</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.characterName}>{character.name}</Text>
      <Text style={styles.characterBirthyear}>
        {character.birthYear !== undefined
          ? character.birthYear
          : 'Birth year not marked'}
      </Text>
      <Text style={styles.sub}>
        Films in which{' '}
        <Text style={styles.subCharacterName}>{character.name}</Text> appears..
      </Text>
      <FlatList
        data={character.filmConnection.films}
        renderItem={({item}: {item: IFilm}) => (
          <Movie item={item} showCharacters={false} />
        )}
      />
    </ImageBackground>
  );
};

export default CharacterInfoPage;

const styles = StyleSheet.create({
  characterName: {
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'center',
    paddingVertical: 10,
    color: '#FFF',
  },
  characterBirthyear: {
    fontSize: 20,
    fontWeight: '300',
    textAlign: 'center',
    color: '#FFF',
    paddingTop: 10,
    paddingBottom: 25,
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    gap: 13,
  },
  backBtnText: {
    fontSize: 18,
    color: '#FF5349',
  },
  sub: {
    color: '#FF5349',
    padding: 5,
    letterSpacing: 0.7,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
  subCharacterName: {
    fontWeight: '700',
    fontSize: 15,
    fontStyle: 'italic',
  },
});
