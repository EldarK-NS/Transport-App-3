import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Dimensions,
} from 'react-native';
import {links} from '../../../../../assets/allData/webLinks';
import {MyTheme} from '../../../../components/layout/theme';
import {useNavigation} from '@react-navigation/core';

export default function CheckCompany() {
  const navigation = useNavigation();

  return (
    <View>
      <FlatList
        data={links}
        renderItem={({item}) => {
          return (
            <Pressable
              style={styles.container}
              onPress={() =>
                navigation.navigate('WebScreen', {data: item.link})
              }>
              <View style={styles.titleSection}>
                <View style={styles.numberWrapper}>
                  <Text style={styles.number}>{item.id}</Text>
                </View>
                <Text style={styles.title}>{item.name}</Text>
              </View>

              <View style={styles.bottomLine}></View>
            </Pressable>
          );
        }}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  titleSection: {
    marginLeft: 16,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
  },
  title: {
    width: '90%',
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 17,
    color: MyTheme.black,
    lineHeight: 24,
    marginBottom: 5,
  },
  bottomLine: {
    backgroundColor: MyTheme.grey,
    width: Dimensions.get('window').width * 0.93,
    height: 1,
    alignSelf: 'center',
  },
  numberWrapper: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: MyTheme.blue,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 3,
    marginRight: 5,
  },
  number: {
    fontFamily: 'IBMPlexSans-SemiBold',
    fontSize: 14,
    color: MyTheme.blue,
  },
});
