import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import getColorByPokemonType from '../../../utils/color';
import {capitalize} from '../../../utils/string';

export const ItemFavorites = (props: any) => {
  const {item} = props;
  const navigation = useNavigation();

  const goToPokemon = () => {
    navigation.navigate('Pokemon', {pokemon: item});
  };

  const pokemonColor = getColorByPokemonType(
    item.types.length > 0 ? item.types[0].type.name : 'normal',
  );
  const bgStyles = {backgroundColor: pokemonColor, ...styles.card};

  return (
    <TouchableWithoutFeedback onPress={goToPokemon} style={styles.item}>
      <View style={bgStyles}>
        <View style={styles.spacing}>
          <Image
            source={{uri: item.sprites.other.home.front_default}}
            style={styles.image}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const {width} = Dimensions.get('window');
const itemWidth = (width - 20) / 3;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    width: itemWidth,
    margin: 3,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'left',
  },
  card: {
    flex: 1,
    height: 120,
    borderRadius: 10,
  },
  spacing: {
    flex: 1,
    padding: 7,
  },
  image: {
    width: 100,
    height: 100,
  },
});
