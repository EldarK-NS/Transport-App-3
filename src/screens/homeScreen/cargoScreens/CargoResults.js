import React from 'react';
import {StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native';
import SearchResultItem from '../../../components/SearchElements/SearchResultItem';
import {searchResults} from '../../../../assets/data';

export default function CargoResults() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={searchResults}
        renderItem={({item}) => <SearchResultItem data={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
