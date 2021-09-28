import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View, Switch} from 'react-native';
import {MyTheme} from '../../../components/layout/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

//FIXME: нет url получение уведомлений, нужно будет делать через FlatList

export default function Notifications() {
  return (
    <View style={styles.container}>
      <View style={styles.sectionForm}>
        <View style={[styles.section, {borderBottomColor: 'white'}]}>
          <Text style={styles.title}>Уведомления</Text>
          <View style={styles.row}>
            <View style={styles.messageUpLine}>
              <Ionicons
                name="notifications-outline"
                color={MyTheme.blue}
                size={25}
              />
              <Text style={styles.messageTitle}>Водитель закончил заказ</Text>
              <Text style={styles.messageDate}>25.03.2021</Text>
            </View>
            <Text style={styles.messageText}>
              Заказ №000356 был закончен. Завершите заказ как получите
              подтверждение.
            </Text>
          </View>
          <View style={styles.row}>
            <View style={styles.messageUpLine}>
              <Ionicons
                name="notifications-outline"
                color={MyTheme.blue}
                size={25}
              />
              <Text style={styles.messageTitle}>Новая заявка</Text>
              <Text style={styles.messageDate}>25.03.2021</Text>
            </View>
            <Text style={styles.messageText}>
              По заказу №00325 поступила заявка от Баталгазиев Р.В.
            </Text>
          </View>
          <View style={styles.row}>
            <View style={styles.messageUpLine}>
              <Ionicons
                name="notifications-outline"
                color={MyTheme.blue}
                size={25}
              />
              <Text style={styles.messageTitle}>Аккаунт подтвержден</Text>
              <Text style={styles.messageDate}>25.03.2021</Text>
            </View>
            <Text style={styles.messageText}>
              Вы можете приступить к работе в сервисе и добавлять заказы
            </Text>
          </View>
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
  section: {
    width: Dimensions.get('window').width - 30,
    borderBottomWidth: 0.5,
    borderBottomColor: MyTheme.grey,
    alignItems: 'center',
    marginVertical: 10,
    paddingBottom: 10,
  },
  title: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 19,
    lineHeight: 28,
    color: MyTheme.black,
    marginBottom: 10,
  },
  row: {
    width: '100%',
    marginVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: MyTheme.grey,
  },
  messageUpLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageTitle: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 17,
    lineHeight: 28,
    color: MyTheme.black,
    width: '70%',
  },
  messageDate: {
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 12,
    lineHeight: 18,
    color: MyTheme.grey,
  },
  messageText: {
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 14,
    lineHeight: 18,
    color: MyTheme.grey,
    marginLeft: 30,
    marginBottom: 10,
  },
});
