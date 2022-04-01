import React from 'react';
import {
  FlatList,
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import {IData} from '../../types/pokemon';
import {Item} from './Item';

export const FlatListW = (props: {data: IData[]}) => {
  const renderItem = (props: {item: any}) => <Item item={props.item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={props.data}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
        numColumns={2}
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
});
