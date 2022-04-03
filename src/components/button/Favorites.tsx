import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface IProps {
  isFavorite: boolean;
  handleChange: any;
}

export const FavoritesBtn = (props: IProps) => {
  const {isFavorite, handleChange} = props;

  return (
    <TouchableOpacity onPress={handleChange}>
      <Image
        source={isFavorite ? imageIsFavorited() : imageNotFavorited()}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

const imageIsFavorited = () => {
  return require('../../assets/favorites/yes.png');
};

const imageNotFavorited = () => {
  return require('../../assets/favorites/no.png');
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});
