import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View, Switch} from 'react-native';
import {MyTheme} from '../../../components/layout/theme';

//FIXME: нет url на обновление профиля компаниии

export default function Notifications() {
  //!Switchers
  const [isEnabled1, setIsEnabled1] = useState(true);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

  const [isEnabled2, setIsEnabled2] = useState(true);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

  const [isEnabled3, setIsEnabled3] = useState(true);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.sectionForm}>
        <View style={[styles.section, {borderBottomColor: 'white'}]}>
          <Text style={styles.title}>Уведомления на эл. почту</Text>
          <Text style={styles.subTitle}>
            Отметьте, какие уведомления присылать на ваш эл. адрес
          </Text>
          <View style={styles.switherWrapper}>
            <Text
              style={[
                styles.switcherText,
                !isEnabled1 && {textDecorationLine: 'line-through'},
              ]}>
              О переносе моих объявлений в архив
            </Text>
            <Switch
              trackColor={{false: MyTheme.black, true: MyTheme.blue}}
              thumbColor={'white'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch1}
              value={isEnabled1}
            />
          </View>
          <View style={styles.switherWrapper}>
            <Text
              style={[
                styles.switcherText,
                !isEnabled2 && {textDecorationLine: 'line-through'},
              ]}>
              О новых сообщениях от пользователей сайта
            </Text>
            <Switch
              trackColor={{false: MyTheme.black, true: MyTheme.blue}}
              thumbColor={'white'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch2}
              value={isEnabled2}
            />
          </View>
          <View style={styles.switherWrapper}>
            <Text
              style={[
                styles.switcherText,
                !isEnabled3 && {textDecorationLine: 'line-through'},
              ]}>
              О новых сообщениях от Администрации сайта
            </Text>
            <Switch
              trackColor={{false: MyTheme.black, true: MyTheme.blue}}
              thumbColor={'white'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch3}
              value={isEnabled3}
            />
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
  },
  subTitle: {
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: MyTheme.grey,
    marginBottom: 10,
    width: '80%',
    textAlign: 'center',
  },

  switherWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: MyTheme.grey,
    marginBottom: 15,
    paddingVertical: 10,
  },
  switcherText: {
    marginLeft: 10,
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 17,
    width: '80%',
  },
});
