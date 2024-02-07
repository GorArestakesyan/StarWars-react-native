import {NavigationContainer} from '@react-navigation/native';
import HomePage from '../screens/Homepage';
import {NAV_HEADER_OPTION} from '../utils/constants';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import BottomBarIcon from '../components/Icons/BottomBarIcon';
import AllCharacters from '../screens/Characters/AllCharacters';
import CharacterInfoPage from '../screens/Characters/CharacterInfo/CharacterInfoPage';

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
};

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        //@ts-ignore
        screenOptions={NAV_HEADER_OPTION}
        initialRouteName="TabNavigator">
        <Stack.Screen name={'TabNavigator'} component={TabNavigation} />
        <Stack.Screen
          name={'CharacterInfoPage'}
          component={CharacterInfoPage}
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
