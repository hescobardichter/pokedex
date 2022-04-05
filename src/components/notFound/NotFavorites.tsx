import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const NotFavorites = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>No ha capturado ningún Pokemon.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  title: {
    color: '#000',
    fontSize: 20,
  },
});
