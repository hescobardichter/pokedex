import React from 'react';
import {Dimensions, StyleSheet, TextInput} from 'react-native';

const dimension = Dimensions.get('window');

interface ITextField {
  value: string;
  setValue: any;
  placeholder: string;
  secureTextEntry: boolean;
  onChange?: any;
  style?: string;
  onKeyPress?: any;
  placeholderTextColor?: string | 'white';
}

const TextField = (props: any) => {
  const {
    value,
    setValue,
    placeholder,
    placeholderTextColor,
    secureTextEntry,
    onChange,
    onKeyPress,
    style,
  } = props;

  const getStyle = () => {
    let input = 'inputGray';
    if (style) {
      input = style;
    }
    return styles[input];
  };

  const handleChange = (text: string) => {
    setValue(text);
    if (onChange) {
      onChange(text);
    }
  };

  return (
    <TextInput
      style={getStyle()}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      onChangeText={text => handleChange(text)}
      defaultValue={value}
      onKeyPress={onKeyPress}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles: any = StyleSheet.create({
  inputGray: {
    width: dimension.width - 30,
    backgroundColor: 'gray',
    marginBottom: 10,
    fontSize: 17,
    color: 'white',
    paddingVertical: 15,
    paddingHorizontal: 15,
    height: 50,
    marginLeft: 15,
    marginRight: 15,
  },
  inputSearch: {
    width: dimension.width - 10,
    backgroundColor: 'white',
    fontSize: 17,
    color: '#000',
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginTop: 15,
    height: 50,
  },
});

export default TextField;
