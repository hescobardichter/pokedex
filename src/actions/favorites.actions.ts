import { FavoritesActions } from "../types/favorites";

export const addFavorites = (data: any) => {
    return {
      type: FavoritesActions.ADD,
      payload: data,
    };
};

export const removeFavorites = (data: any) => {
    return {
      type: FavoritesActions.REMOVE,
      payload: data,
    };
};


export const clearFavorites = () => {
    return {
      type: FavoritesActions.CLEAR,
    };
};