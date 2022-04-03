import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FavoritesScreen from '../views/Favorites';
import PokemonScreen from '../views/Pokemon';

const Stack = createStackNavigator();

export const FavoriteStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{title: '', headerTransparent: true}}
      />
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{title: '', headerTransparent: true}}
      />
    </Stack.Navigator>
  );
};

export default FavoriteStack;
