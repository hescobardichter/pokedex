import React from 'react';
import {createSwitchNavigator} from '@react-navigation/compat';
import Login from './../views/auth/Login';
import Loading from './../components/loading/Loading';
import DrawerNavigation from '../navigation/DrawerNavigator';

const Router = createSwitchNavigator(
  {
    Loading,
    DrawerNavigation,
    Login,
  },
  {
    initialRouteName: 'Login',
  },
);
export default Router;
