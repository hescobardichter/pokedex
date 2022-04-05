import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import Pokedex from './StackNavigation';
import FavoriteStack from './FavoriteStackNavigation';
import {shallowEqual, useSelector} from 'react-redux';
import {StoreState} from '../types/states';

const Tab = createBottomTabNavigator();

const home = require('../assets/pokeball.png');
const favorite = require('../assets/favorites.png');

const TabNavigation = () => {
  let favorites = useSelector(
    (state: StoreState) => state.favoritesReducer.favorites,
    shallowEqual,
  );

  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: '',
          title: 'Pokedex',
          headerShown: false,
          tabBarIcon: () => renderImageMenu(home, false),
        }}
        component={Pokedex}
      />
      <Tab.Screen
        name="Favorites"
        options={{
          tabBarLabel: '',
          title: 'Favoritos',
          headerShown: false,
          tabBarIcon: () => renderImageMenu(favorite, true, favorites.length),
        }}
        component={FavoriteStack}
      />
    </Tab.Navigator>
  );
};
export default TabNavigation;

function renderImageMenu(
  icon: ImageSourcePropType,
  showCar: boolean,
  cant = 0,
) {
  return (
    <View style={styles.view}>
      <Image style={styles.icon} source={icon} />
      {showCar && (
        <View style={styles.car}>
          <Text style={styles.textCar}>{cant}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    position: 'relative',
  },
  icon: {
    width: 65,
    height: 65,
    top: -10,
    marginLeft: 10,
    marginRight: 10,
  },
  car: {
    backgroundColor: 'white',
    width: 30,
    height: 30,
    position: 'absolute',
    top: -20,
    right: 5,
    borderRadius: 30,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#5f51a6',
    borderWidth: 3,
    flex: 1,
  },
  textCar: {
    fontSize: 18,
    color: '#5f51a6',
    fontWeight: 'bold',
  },
});
