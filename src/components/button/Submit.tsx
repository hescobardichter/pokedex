import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

const dimension = Dimensions.get('window');

const SubmitButton = (props: any) => {
  const {handleSubmit, loading, text} = props;
  return (
    <TouchableOpacity onPress={handleSubmit} style={styles.submit}>
      {loading ? <Spinner /> : <Text style={styles.buttonLabel}>{text}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  submit: {
    width: dimension.width - 30,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FA6C6C',
    marginLeft: 15,
    marginRight: 15,
  },
  buttonLabel: {
    fontSize: 18,
    color: 'white',
  },
});

export default SubmitButton;
