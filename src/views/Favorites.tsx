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
import {shallowEqual, useSelector} from 'react-redux';
import {FlatListW} from '../components/flatList/favorites/FlatList';
import {NotFavorites} from '../components/notFound/NotFavorites';
import {StoreState} from '../types/states';

const Favorites = () => {
  let favorites = useSelector(
    (state: StoreState) => state.favoritesReducer.favorites,
    shallowEqual,
  );
  return favorites.length > 0 ? (
    <FlatListW pokemons={favorites} />
  ) : (
    <NotFavorites />
  );
};

export default Favorites;
