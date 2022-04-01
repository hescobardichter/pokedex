import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const NotFound = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>En el momento no tenemos datos.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  label: {
    color: 'white',
  },
});
