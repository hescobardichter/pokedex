/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, {useEffect} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {FlatListW} from '../components/flatList/favorites/FlatList';
import {StoreState} from '../types/states';

const Favorites = () => {
  const favorites = useSelector(
    (state: StoreState) => state.favoritesReducer.favorites,
    shallowEqual,
  );

  useEffect(() => {
    console.log('eeee');
  }, [favorites]);

  return <FlatListW pokemons={favorites} />;
};

export default Favorites;
