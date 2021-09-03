import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {MyTheme} from '../../components/layout/theme';
import {useNavigation} from '@react-navigation/core';

export default function LoginScreen() {
  const [personLogin, setPersonLogin] = useState(true);
  const navigation = useNavigation();
  const handleSwitch = () => {
    setPersonLogin(!personLogin);
  };
  return (
    <View style={styles.container}>
      <View style={styles.Block}>
        <Text style={styles.title}>Вход</Text>
        <Text style={styles.subTitle}>Введите ваши данные для входа</Text>
        <View style={styles.switcherBlock}>
          <Pressable
            style={!personLogin ? styles.switcherWhite : styles.switcherBlue}
            onPress={handleSwitch}>
            <Text
              style={
                !personLogin ? styles.switherTextBlack : styles.switherTextWhite
              }>
              Юр. лицам
            </Text>
          </Pressable>
          <Pressable
            style={personLogin ? styles.switcherWhite : styles.switcherBlue}
            onPress={handleSwitch}>
            <Text
              style={
                personLogin ? styles.switherTextBlack : styles.switherTextWhite
              }>
              Физ. лицам
            </Text>
          </Pressable>
        </View>

        <TextInput placeholder="Номер телефона" style={styles.input} />
        <TextInput placeholder="Пароль" style={styles.input} />
        <Pressable style={styles.forget}>
          <Text style={styles.forgetPassword}>Забыли пароль?</Text>
        </Pressable>

        <View style={styles.button}>
          <Text style={styles.buttonText}>Войти в аккаунт</Text>
        </View>
        <View style={styles.questionBlock}>
          <Text style={styles.question}>Нет аккаунта?</Text>
          <Pressable onPress={() => navigation.navigate('CompanyFirst')}>
            <Text style={styles.link}> Зарегистрируйтесь</Text>
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
