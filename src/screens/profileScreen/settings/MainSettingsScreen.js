import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import SearchElementSimple from '../../../components/SearchElements/SearchElementSimple';
import {mainProfileSettings} from '../../../../assets/allData/profileData';

export default function MainSettingsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.funcBlock}>
        <FlatList
          data={mainProfileSettings}
          renderItem={({item}) => (
            <SearchElementSimple title={item.title} path={item.path} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  funcBlock: {
    width: '100%',
    backgroundColor: 'white',
    marginTop: 10,
  },
});
