import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import NavigationHome from './NavigationHome';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: () => renderImageMenu(),
        }}
        component={NavigationHome}
      />
    </Tab.Navigator>
  );
};
export default TabNavigation;

function renderImageMenu() {
  return (
    <Image
      style={{
        width: 30,
        height: 30,
        top: 5,
        marginLeft: 10,
        marginRight: 10,
      }}
      source={require('../assets/ic_home/ic_home.png')}
    />
  );
}
