import {NavigationContainer, RouteProp} from '@react-navigation/native';
import React from 'react';
import HomePage from '../screens/Homepage';
import {NAV_HEADER_OPTION} from '../utils/constants';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import BottomBarIcon from '../components/Icons/BottomBarIcon';
import AllCharacters from '../screens/Characters/AllCharacters';
import CharacterInfoPage from '../screens/Characters/CharacterInfo/CharacterInfoPage';
import { ICharacterType } from '../utils/types';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={NAV_HEADER_OPTION}>
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          tabBarShowLabel: false,
          tabBarIconStyle: styles.homePageIcon,
          tabBarActiveTintColor: '#000',
          tabBarIcon: ({focused, color}) => (
            <BottomBarIcon
              focused={focused}
              color={color}
              iconName="film-outline"
              size={29}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AllCharacters"
        component={AllCharacters}
        options={{
          tabBarShowLabel: false,
          tabBarIconStyle: styles.homePageIcon,
          tabBarActiveTintColor: '#000',
          tabBarIcon: ({focused, color}) => (
            <BottomBarIcon
              focused={focused}
              color={color}
              iconName="list-outline"
              size={34}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};interface CharacterInfoPageProps {
  route: RouteProp<{params: {character: ICharacterType}}, 'params'>;
}

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={NAV_HEADER_OPTION}
        initialRouteName="TabNavigator">
        <Stack.Screen name={'TabNavigator'} component={TabNavigation} />
        <Stack.Screen
          name={'CharacterInfoPage'}
          component={CharacterInfoPage as React.FC<Partial<CharacterInfoPageProps>>}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  homePageIcon: {
    top: '10%',
  },
});
