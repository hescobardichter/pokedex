import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StoreState} from '../types/states';
import {
  addFavorites,
  removeFavorites,
  clearFavorites,
} from '../actions/favorites.actions';

export const useFavorites = (pokemon: any) => {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);
  const favorites = useSelector(
    (state: StoreState) => state.favoritesReducer.favorites,
  );

  useEffect(() => {
    const some = favorites.some(f => f.id === pokemon.id);
    if (some) {
      setIsFavorite(true);
    }
  });

  const addFavorite = () => {
    dispatch(addFavorites(pokemon));
    setIsFavorite(true);
  };
  const removeFavorite = () => {
    dispatch(removeFavorites(pokemon));
    setIsFavorite(false);
  };
  const clearFavorite = () => {
    dispatch(clearFavorites());
  };

  const handleChange = () => {
    if (isFavorite) {
      return removeFavorite();
    }
    return addFavorite();
  };

  return {
    favorites,
    isFavorite,
    addFavorite,
    removeFavorite,
    clearFavorite,
    handleChange,
  };
};
