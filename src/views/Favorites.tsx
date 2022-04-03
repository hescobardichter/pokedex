/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {FlatListW} from '../components/flatList/favorites/FlatList';
import {StoreState} from '../types/states';

const Favorites = () => {
  let favorites = useSelector(
    (state: StoreState) => state.favoritesReducer.favorites,
    shallowEqual,
  );

  useFocusEffect(
    useCallback(() => {
      console.log('adsasee');
    }, []),
  );

  return <FlatListW pokemons={favorites} />;
};

export default Favorites;
