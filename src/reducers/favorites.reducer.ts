import { combineReducers } from 'redux';
import { Action } from '../types/action';
import { FavoritesActions } from '../types/favorites';

const initialState = {
    favorites : []
}

const favoritesReducer = (state: any = initialState, action: Action ) => {
    const { type,  payload } = action;
    switch (type) {
      case FavoritesActions.ADD:
        const favorites = state.favorites;
        favorites.push(payload)
        return {
          ...state,
          favorites: favorites
        };
      case FavoritesActions.REMOVE:
        const filter = state.favorites.filter((favorite: any) => favorite.id !== payload.id);
        return {
          ...state,
          favorites: filter
        };
      case FavoritesActions.CLEAR:
        return initialState;
      default:
        return state;
    }
  };
  
  export default favoritesReducer;