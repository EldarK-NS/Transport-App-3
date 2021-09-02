import {directiveLiteral} from '@babel/types';
import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {myPostsInProgress_customer} from '../../../../../assets/allData/myPostsData';
import {MyTheme} from '../../../../components/layout/theme';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import CargoStatusBlock from '../../../../components/CardElements/CargoStatusBlock';

const data = myPostsInProgress_customer[2];

export default function InProgressCardScreen() {
  console.log(data);
  return (
    <View style={styles.container}>
      {/* <View style={styles.sectionWhite}>
        <Text style={styles.coloredAction}>
          В РАБОТЕ: {data.details.status.title}
        </Text>
        <Text style={styles.title}>
          {data.details.title}, {data.details.net}/{data.details.volume}m3
        </Text>
        <Text style={styles.destinationString}>
          {data.details.from_string}-{data.details.to_string},{' '}
          {data.details.start_date}
        </Text>
      </View>
      <View style={styles.sectionGrey}>
        <Text style={styles.label}>ВОДИТЕЛЬ ГРУЗА:</Text>
      </View>
      <View style={styles.sectionWhite}>
        <View style={styles.driverBlock}>
          <View style={styles.driverLeftSide}>
            <Text style={styles.worningText}>ВЫБЕРИТЕ ВОДИТЕЛЯ</Text>
            <Text
              style={styles.smallGreyText}
              ellipsizeMode={'clip'}
              numberOfLines={4}>
              Обязательно выберите водителя для перевозки до начала погрузки
            </Text>
          </View>
          <View style={styles.driverRightSide}>
            <EntypoIcon name="chevron-right" size={15} color={MyTheme.grey} />
          </View>
        </View>
      </View>
      <View style={styles.sectionGrey}>
        <Text style={styles.label}>СТАТУС ПЕРЕВОЗКИ:</Text>
      </View> */}
      <CargoStatusBlock />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionGrey: {
    height: 55,
    backgroundColor: MyTheme.background,
    borderWidth: 1,
    borderColor: 'red',
  },
  label: {
    // fontFamily: 'IBM-SemiBold',
    fontSize: 13,
    lineHeight: 24,
    marginTop: 24,
    marginLeft: 15,
    color: MyTheme.grey,
    fontWeight: 'bold',
  },
  sectionWhite: {
    padding: 15,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'green',
  },
  coloredAction: {
    backgroundColor: data.details.status.bacgroundcolor,
    padding: 2,
    // fontFamily:'IBM-SemiBold',
    fontSize: 12,
    width: '50%',
    marginBottom: 15,
  },
  title: {
    // fontFamily:'IBM-SemiBold',
    fontSize: 21,
    lineHeight: 24,
    color: MyTheme.black,
  },
  destinationString: {
    // fontFamily:'IBM-Regular',
    fontSize: 15,
    lineHeight: 24,
    color: MyTheme.black,
  },
  smallGreyText: {
    // fontFamily:'IBM-Regular',
    fontSize: 14,
    lineHeight: 17,
    color: MyTheme.grey,
    width: '75%',
  },
  driverBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  driverLeftSide: {
    width: '90%',
  },
  driverRightSide: {
    width: '10%',
    alignItems: 'flex-end',
  },
  worningText: {
    // fontFamily: 'IBM-Bold',
    fontSize: 14,
    lineHeight: 24,
    color: MyTheme.blue,
    fontWeight: 'bold',
  },
});
