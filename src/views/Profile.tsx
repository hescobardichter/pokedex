/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: 'red',
  },
});

export default Profile;
