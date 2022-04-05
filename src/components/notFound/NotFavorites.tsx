import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export const NotFavorites = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/pato.png')} style={styles.image} />
      <Text style={styles.title}>No ha capturado ningún Pokémon.</Text>
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
  image: {
    width: 160,
    height: 160,
    marginBottom: 20,
  },
});
