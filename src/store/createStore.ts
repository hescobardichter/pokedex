
import {createStore, combineReducers} from 'redux';
import authReducer from '../reducers/auth.reducer';
import favoritesReducer from '../reducers/favorites.reducer';


export const store = createStore(combineReducers({
    authReducer,
    favoritesReducer
}));