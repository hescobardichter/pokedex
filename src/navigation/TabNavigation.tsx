import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import Pokedex from './StackNavigation';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: '',
          title: 'Pokedex',
          headerShown: false,
          tabBarIcon: () => renderImageMenu(),
        }}
        component={Pokedex}
      />
    </Tab.Navigator>
  );
};
export default TabNavigation;

function renderImageMenu() {
  return (
    <Image
      style={{
        width: 65,
        height: 65,
        top: -10,
        marginLeft: 10,
        marginRight: 10,
      }}
      source={require('../assets/pokeball.png')}
    />
  );
}
