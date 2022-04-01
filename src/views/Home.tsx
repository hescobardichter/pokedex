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
import {View, StyleSheet, Text} from 'react-native';
import {FlatListW} from '../components/flatList/FlatList';
import TextField from '../components/input/Text';
import {NotFound} from '../components/notFound/NotFound';
import {useHome} from '../hooks/useHome';

const Home = () => {
  const {pokemons, search, setSearch, onFilter, onKeyPress} = useHome();
  return (
    <View style={styles.container}>
      <TextField
        placeholder="Buscar..."
        placeholderTextColor="#000"
        setValue={setSearch}
        value={search}
        secureTextEntry={false}
        style="inputSearch"
        onChange={onFilter}
        onKeyPress={onKeyPress}
      />
      {pokemons.length > 0 ? <FlatListW data={pokemons} /> : <NotFound />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: 'blue',
  },
});

export default Home;
