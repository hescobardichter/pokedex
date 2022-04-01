/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../components/pokemon/Header';
import Type from '../components/pokemon/Type';
import Stats from '../components/pokemon/Stats';
import {usePokemon} from '../hooks/usePokemon';

const Pokemon = (props: {navigation: any; route: any}) => {
  const {
    navigation,
    route: {params},
  } = props;

  const {pokemon} = usePokemon(params);

  const buildPokemon = (pokemon: any) => {
    return (
      <ScrollView>
        <Header
          name={pokemon.name}
          order={pokemon.order}
          image={pokemon.sprites.other['official-artwork'].front_default}
          type={pokemon.types ? pokemon.types[0].type.name : ''}
        />
        <Type types={pokemon.types} />
        <Stats stats={pokemon.stats} />
      </ScrollView>
    );
  };

  const loading = () => {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  };

  return pokemon ? buildPokemon(pokemon) : loading();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
});

export default Pokemon;
