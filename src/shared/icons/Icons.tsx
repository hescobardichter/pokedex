import React from 'react';
import {Image} from 'react-native';

export const renderImageHome = () => {
  return (
    <Image
      style={styles.icon}
      source={require('../../assets/ic_home/ic_home.png')}
    />
  );
};

const styles = {
  icon: {
    width: 24,
    height: 24,
    top: 5,
    marginLeft: 5,
    marginRight: 5,
  },
};
