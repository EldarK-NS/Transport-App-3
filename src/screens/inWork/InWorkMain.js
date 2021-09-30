import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import SearchElementSimple from '../../components/SearchElements/SearchElementSimple';
import {in_work_main} from '../../../assets/allData/inWorkData';
export default function InWorkMain() {
  return (
    <View style={styles.container}>
      <FlatList
        data={in_work_main}
        renderItem={({item}) => {
          return <SearchElementSimple title={item.title} path={item.path} />;
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
});
