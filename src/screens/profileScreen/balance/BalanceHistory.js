import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {MyTheme} from '../../../components/layout/theme';

//FIXME: нет url

export default function BalanceHistory() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>История счета</Text>
      <View style={styles.row}>
        <Text style={styles.title}>Пополение счета онлайн Paybox.kz</Text>
        <View style={styles.content}>
          <Text style={styles.text}>+ 65 000 тг</Text>
          <Text style={styles.date}>25.03.2021</Text>
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>Пополение счета онлайн Paybox.kz</Text>
        <View style={styles.content}>
          <Text style={styles.text}>+ 65 000 тг</Text>
          <Text style={styles.date}>25.03.2021</Text>
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>Пополение счета онлайн Paybox.kz</Text>
        <View style={styles.content}>
          <Text style={styles.text}>+ 65 000 тг</Text>
          <Text style={styles.date}>25.03.2021</Text>
        </View>
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
  title: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 16,
    lineHeight: 28,
    color: MyTheme.black,
  },
  mainTitle: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 21,
    lineHeight: 28,
    color: MyTheme.black,
    marginTop: 10,
  },
  row: {
    width: Dimensions.get('window').width - 30,
    borderBottomWidth: 0.5,
    borderBottomColor: MyTheme.grey,
    marginVertical: 10,
    paddingBottom: 10,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  text: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 17,
    lineHeight: 20,
    color: MyTheme.green,
    width: '70%',
  },
  date: {
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 15,
    lineHeight: 20,
    color: MyTheme.grey,
  },
});
