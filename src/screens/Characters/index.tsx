import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Pressable, StyleSheet, Text, TextStyle, ViewStyle} from 'react-native';
import {ICharacterType} from '../../utils/types';

interface EachCharacterProps {
  character: ICharacterType;
  allowClick: boolean;
  itemStyle?: ViewStyle;
  nameStyle?: TextStyle
  labelStyle?: TextStyle;
  showBirthYear?: boolean;
}

const EachCharacter: React.FC<EachCharacterProps> = ({
  character,
  itemStyle,
  showBirthYear = false,
  labelStyle,
  allowClick = false,
  nameStyle
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      key={character.name}
      disabled={!allowClick}
      style={[styles.container, itemStyle]}
      onPress={() => {
        navigation.navigate('CharacterInfoPage', {character});
      }}>
      <Text style={[styles.characterName, nameStyle]}>{character.name}</Text>
      {showBirthYear && (
        <Text style={[styles.characterName, labelStyle]}>
          Birth year :{' '}
          {character.birthYear !== 'unknown'
            ? character.birthYear
            : 'Not marked'}
        </Text>
      )}
    </Pressable>
  );
};

export default EachCharacter;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1.5,
    borderColor: '#FF5349',
    padding: 10,
    marginVertical: 1,
    marginHorizontal: 8,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  characterName: {
    color: '#FFF',
    fontWeight: '500',
  },
});
