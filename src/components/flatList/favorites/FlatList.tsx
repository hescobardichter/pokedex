import {useFocusEffect} from '@react-navigation/native';
import React, {useState} from 'react';
import {FlatList, Dimensions, SafeAreaView, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {StoreState} from '../../../types/states';
import {ItemFavorites} from './Item';

interface IProps {
  pokemons: any;
}

export const FlatListW = (props: IProps) => {
  const {pokemons} = props;

  const renderItem = (props: {item: any}) => (
    <ItemFavorites item={props.item} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pokemons}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
        numColumns={3}
        extraData={pokemons}
        contentContainerStyle={styles.flatList}
      />
    </SafeAreaView>
  );
};

const dimension = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: dimension.width,
    marginTop: 10,
  },
  flatList: {
    paddingHorizontal: 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});
