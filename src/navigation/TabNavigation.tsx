import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, ImageSourcePropType} from 'react-native';
import Pokedex from './StackNavigation';
import FavoriteStack from './FavoriteStackNavigation';

const Tab = createBottomTabNavigator();

const home = require('../assets/pokeball.png');
const favorite = require('../assets/favorites.png');

const TabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: '',
          title: 'Pokedex',
          headerShown: false,
          tabBarIcon: () => renderImageMenu(home),
        }}
        component={Pokedex}
      />
      <Tab.Screen
        name="Favorites"
        options={{
          tabBarLabel: '',
          title: 'Favoritos',
          headerShown: false,
          tabBarIcon: () => renderImageMenu(favorite),
        }}
        component={FavoriteStack}
      />
    </Tab.Navigator>
  );
};
export default TabNavigation;

function renderImageMenu(icon: ImageSourcePropType) {
  return (
    <Image
      style={{
        width: 65,
        height: 65,
        top: -10,
        marginLeft: 10,
        marginRight: 10,
      }}
      source={icon}
    />
  );
}
