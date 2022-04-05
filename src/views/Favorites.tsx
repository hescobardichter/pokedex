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
import {StyleSheet, View} from 'react-native';
import {shallowEqual, useSelector} from 'react-redux';
import {FlatListW} from '../components/flatList/favorites/FlatList';
import {NotFavorites} from '../components/notFound/NotFavorites';
import {StoreState} from '../types/states';

const Favorites = () => {
  let favorites = useSelector(
    (state: StoreState) => state.favoritesReducer.favorites,
    shallowEqual,
  );
  return (
    <View style={styles.container}>
      {favorites.length > 0 ? (
        <FlatListW pokemons={favorites} />
      ) : (
        <NotFavorites />
      )}
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
});

export default Favorites;
