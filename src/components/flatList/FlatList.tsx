import React from 'react';
import {
  FlatList,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {IData} from '../../types/pokemon';
import {Item} from './Item';

interface IProps {
  data: IData[];
  loadPokemons: any;
  isNext: any;
}

export const FlatListW = (props: IProps) => {
  const renderItem = (props: {item: any}) => <Item item={props.item} />;

  const {loadPokemons, data, isNext} = props;

  const loadMore = () => {
    loadPokemons();
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatList}
        onEndReached={isNext && loadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          isNext && (
            <ActivityIndicator
              size="large"
              style={styles.spinner}
              color="#AEAEAE"
            />
          )
        }
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
