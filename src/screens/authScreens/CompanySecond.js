import React, {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {MyTheme} from '../../components/layout/theme';
import {useNavigation} from '@react-navigation/core';
import SmallPicker from '../../components/SearchElements/SmallPicker';

export default function CompanySecond() {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}
      keyboardVerticalOffset={50}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.Block}>
            <Text style={styles.title}>Регистрация. 2 шаг</Text>
            <Text style={styles.subTitle}>Введите данные контактного лица</Text>

            <Text style={styles.inputLabel}>Контакное лицо</Text>
            <TextInput placeholder="ФИО" style={styles.input} />
            <TextInput placeholder="Эл. адрес" style={styles.input} />
            <TextInput placeholder="Номер телефона" style={styles.input} />

            <Text style={styles.inputLabel}>Пароль</Text>
            <TextInput placeholder="Введите пароль" style={styles.input} />
            <TextInput placeholder="Повторите пароль" style={styles.input} />

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('CompanySecond')}>
              <Text style={styles.buttonText}>Регистрация</Text>
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
      </ScrollView>
    </KeyboardAvoidingView>
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
  inputLabel: {
    width: '75%',
    //   fontFamily:'IBM-Medium',
    fontSize: 17,
    lineHeight: 25,
    color: MyTheme.black,
    marginBottom: 10,
  },
  input: {
    width: 300,
    height: 45,
    borderWidth: 0.5,
    borderColor: MyTheme.grey,
    marginBottom: 10,
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
    marginTop: 30,
  },
  buttonText: {
    //   fontFamily:'IBM-Bold',
    fontSize: 16,
    color: 'white',
  },
  questionBlock: {
    flexDirection: 'row',
    marginBottom: 30,
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
