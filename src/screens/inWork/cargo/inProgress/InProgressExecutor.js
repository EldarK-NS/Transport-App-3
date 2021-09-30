import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MyTheme} from '../../../../components/layout/theme';

export default function InProgressExecutor() {
  return (
    <View style={styles.container}>
      <View style={styles.sectionGrey}>
        <Text style={styles.label}>Я ЗАКАЗЧИК ( объявлений)</Text>
      </View>
      <View style={styles.items}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  label: {
    fontFamily: 'IBMPlexSans-SemiBold',
    fontSize: 15,
    lineHeight: 24,
    color: MyTheme.grey,
  },
  sectionGrey: {
    height: 35,
    width: '100%',
    backgroundColor: MyTheme.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  items: {
    backgroundColor: 'white',
    alignItems: 'center',
  },
});
