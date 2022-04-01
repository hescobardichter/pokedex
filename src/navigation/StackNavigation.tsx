import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PokedexScreen from '../views/Home';
import PokemonScreen from '../views/Pokemon';

const Stack = createStackNavigator();

export const Pokedex = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={PokedexScreen}
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

export default Pokedex;
