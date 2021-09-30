import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SearchElementSimple from '../../../components/SearchElements/SearchElementSimple';
import {MyTheme} from '../../../components/layout/theme';
export default function CargoInWorkMain() {
  return (
    <View style={styles.container}>
      <View style={styles.sectionGrey}>
        <Text style={styles.label}>В работе</Text>
      </View>
      <SearchElementSimple title="Я исполнитель" />
      <SearchElementSimple title="Я заказчик" />
      <View style={styles.sectionGrey}>
        <Text style={styles.label}>Предложения</Text>
      </View>
      <SearchElementSimple title="Я исполнитель" path="OfferCustomer" />
      <SearchElementSimple title="Я заказчик" path="OfferExecutor" />
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
    // marginLeft: 15,
    color: MyTheme.grey,
    // textDecorationLine: 'underline',
  },
  sectionGrey: {
    height: 35,
    width: '100%',
    backgroundColor: MyTheme.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
