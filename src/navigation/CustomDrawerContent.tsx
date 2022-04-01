import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {renderImageHome} from '../shared/icons/Icons';
import Store from '../store/store';

export const CustomDrawerContent = (props: any) => {
  const navigation = useNavigation();
  const handleClose = () => {
    Store.remove({
      key: 'userLogin',
    });
    navigation.navigate('Login');
  };
  const handleHome = () => {
    navigation.navigate('Home');
  };
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Cerrar Sesión"
        onPress={handleClose}
        icon={() => renderImageHome()}
      />
      <DrawerItem
        label="Home"
        onPress={handleHome}
        icon={() => renderImageHome()}
      />
    </DrawerContentScrollView>
  );
};
