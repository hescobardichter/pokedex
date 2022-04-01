import React from 'react';
import {
  FlatList,
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {IData} from '../../types/pokemon';
import {capitalize} from '../../utils/string';

const Item = (props: {item: any}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{capitalize(props.item.name)}</Text>
  </View>
);

export const FlatListW = (props: {data: IData[]}) => {
  const renderItem = (props: {item: any}) => <Item item={props.item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={props.data}
        renderItem={renderItem}
        keyExtractor={item => item.name}
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
  item: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 4,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 24,
    color: '#000',
    alignItems: 'center',
    textAlign: 'center',
  },
});
