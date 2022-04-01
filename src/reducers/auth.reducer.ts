import { combineReducers } from 'redux';
import { AuthActions } from '../types/auth';

const initialState = {
    user : {

    }
}

const authReducer = (state = initialState, action: AuthActions) => {
    switch (action) {
      case AuthActions.LOGIN:
        return state;
      default:
        return state;
    }
  };
  
  export default combineReducers({
    auth: authReducer
  });