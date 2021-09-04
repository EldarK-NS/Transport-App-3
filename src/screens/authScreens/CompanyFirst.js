import React, {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {MyTheme} from '../../components/layout/theme';
import {useNavigation} from '@react-navigation/core';
import SmallPicker from '../../components/SearchElements/SmallPicker';

export default function CompanyFirst() {
  const [personLogin, setPersonLogin] = useState(true);
  const navigation = useNavigation();
  const handleSwitch = () => {
    setPersonLogin(!personLogin);
  };

  const [pickerModal, setPickerModal] = useState(false);
  const statusList = [
    {title: 'ИП', id: '1'},
    {title: 'ТОО', id: '2'},
    {title: 'АО', id: '3'},
  ];
  const [status, setStatus] = useState(statusList[0].id);
  const [statusString, setStatusString] = useState(statusList[0].title);

  return (
    <View style={styles.container}>
      <View style={styles.Block}>
        <Text style={styles.title}>Регистрация</Text>
        <Text style={styles.subTitle}>
          Введите информацию для начала регистрации
        </Text>
        <View style={styles.switcherBlock}>
          <Pressable
            style={!personLogin ? styles.switcherWhite : styles.switcherBlue}
            onPress={handleSwitch}>
            <Text
              style={
                !personLogin ? styles.switherTextBlack : styles.switherTextWhite
              }>
              Юр. лицо
            </Text>
          </Pressable>
          <Pressable
            style={personLogin ? styles.switcherWhite : styles.switcherBlue}
            onPress={handleSwitch}>
            <Text
              style={
                personLogin ? styles.switherTextBlack : styles.switherTextWhite
              }>
              Физ. лицо
            </Text>
          </Pressable>
        </View>
        <View style={styles.inputRow}>
          <SmallPicker
            style={styles.picker}
            modalOpen={pickerModal}
            setModalOpen={setPickerModal}
            value={status}
            setValue={setStatus}
            data={statusList}
            valueString={statusString}
            setValueString={setStatusString}
            // placeholder="Oткуда"
          />
          <TextInput placeholder="Название компании" style={styles.inputName} />
        </View>
        <TextInput
          placeholder="Налоговый номер компании/БИН"
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CompanySecond')}>
          <Text style={styles.buttonText}>Перейти на второй шаг</Text>
        </TouchableOpacity>
        <View style={styles.questionBlock}>
          <Text style={styles.question}>Зарегистрированны? </Text>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}> Войти</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.Block}>
        <View style={styles.line} />

        <Text style={styles.rules}>
          Авторизируясь вы автоматически соглашаетесь с
          <Text style={styles.link}>
            правилами сервиса и пользовательским соглашением сервиса
          </Text>{' '}
          Bliz.kz
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  Block: {
    alignItems: 'center',
  },
  title: {
    //   fontFamily:'IBM-Medium',
    fontSize: 29,
    lineHeight: 48,
    color: MyTheme.black,
    marginTop: 70,
    marginBottom: 5,
  },
  subTitle: {
    //   fontFamily:'IBM-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: MyTheme.grey,
    marginBottom: 28,
  },
  switcherBlock: {
    flexDirection: 'row',
    marginBottom: 45,
  },
  switcherBlue: {
    width: 150,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: MyTheme.blue,
  },
  switcherWhite: {
    width: 150,
    height: 45,
    borderWidth: 1,
    borderColor: MyTheme.grey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  switherTextBlack: {
    //   fontFamily:'IBM-Regular',
    fontSize: 17,
    color: MyTheme.black,
  },
  switherTextWhite: {
    //   fontFamily:'IBM-Regular',
    fontSize: 17,
    color: 'white',
  },
  inputRow: {
    flexDirection: 'row',
    width: 300,
    marginBottom: 15,
  },
  picker: {},
  inputName: {
    width: 178,
    height: 45,
    borderWidth: 0.5,
    borderColor: MyTheme.grey,
    marginLeft: 10,
    padding: 10,
  },
  input: {
    width: 300,
    height: 45,
    borderWidth: 0.5,
    borderColor: MyTheme.grey,
    marginBottom: 20,
    padding: 10,
  },
  forget: {
    width: '75%',
    alignItems: 'flex-end',
    marginBottom: 25,
  },
  forgetText: {
    //   fontFamily:'IBM-Medium',
    fontSize: 14,
    lineHeight: 20,
    color: MyTheme.black,
  },
  button: {
    width: 300,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: MyTheme.blue,
    borderRadius: 5,
    marginBottom: 25,
  },
  buttonText: {
    //   fontFamily:'IBM-Bold',
    fontSize: 16,
    color: 'white',
  },
  questionBlock: {
    flexDirection: 'row',
  },
  question: {
    //   fontFamily:'IBM-Regular',
    fontSize: 14,
  },
  link: {
    //   fontFamily:'IBM-Regular',
    fontSize: 14,
    color: MyTheme.blue,
  },
  line: {
    width: '95%',
    height: 0.5,
    backgroundColor: MyTheme.grey,
    marginBottom: 15,
  },
  rules: {
    //   fontFamily:'IBM-Regular',
    fontSize: 14,
    width: '90%',
    textAlign: 'center',
    marginBottom: 25,
  },
});
