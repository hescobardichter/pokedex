import React from 'react';
import {StyleSheet, View, SafeAreaView, Text, Image} from 'react-native';
import {capitalize} from 'lodash';
import getColorByPokemonType from '../../utils/color';
import {FavoritesBtn} from '../button/Favorites';
import {useFavorites} from '../../hooks/useFavorites';

interface IProps {
  pokemon: any;
}

export default function Header(props: IProps) {
  const {pokemon} = props;
  const {id, name, order} = pokemon;
  const image = pokemon.sprites.other['official-artwork'].front_default;
  const type = pokemon.types ? pokemon.types[0].type.name : '';
  const color = getColorByPokemonType(type);
  const {isFavorite, handleChange} = useFavorites(pokemon);
  const bgStyle = [{backgroundColor: color, ...styles.bg}];

  return (
    <>
      <View style={bgStyle} />

      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{capitalize(name)}</Text>
          <FavoritesBtn isFavorite={isFavorite} handleChange={handleChange} />
        </View>
        <View style={styles.contentImg}>
          <Image source={{uri: image}} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: 420,
    position: 'absolute',
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{scaleX: 2}],
  },
  content: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 27,
  },
  order: {
    color: '#fff',
    fontWeight: 'bold',
  },
  contentImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 30,
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: 'contain',
  },
});
