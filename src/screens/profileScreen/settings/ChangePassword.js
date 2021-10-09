import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
} from 'react-native';
import {MyTheme} from '../../../components/layout/theme';
import CustomInput from '../../../components/SearchElements/CustomInput';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';

import axios from 'axios';
import Entypo from 'react-native-vector-icons/Entypo';

//TODO: DONE!!!!

export default function ChangePassword() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirm, setHideConfirm] = useState(true);
  const [message, setMessage] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirm, setConfirm] = useState(null);

  const auth = useSelector(state => state.auth);

  //!Hide password
  const showPassword = () => {
    setHidePassword(!hidePassword);
  };
  const showConfirm = () => {
    setHideConfirm(!hideConfirm);
  };
  console.log(auth.token);
  const changePassword = async () => {
    if (password.trim().length < 6) {
      return setMessage({
        title: 'Ошибка',
        text: 'Минимальная длина пароля 6 символов',
      });
    } else if (confirm.trim() !== password.trim()) {
      return setMessage({
        title: 'Ошибка',
        text: 'Пароли не совпадают!',
      });
    }
    try {
      const res = await axios(
        `https://test.money-men.kz/api/changePassword?token=${auth.token}&password=${password}`,
      );
      if (res.data.success == true) {
        setMessage({
          title: 'Успех',
          text: 'Ваш пароль изменен!',
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (message) {
    Alert.alert(message.title, message.text, [
      {
        text: 'OK',
        onPress: () => {
          setMessage(null);
          navigation.navigate('MainSettings');
        },
        style: 'cancel',
      },
    ]);
  }

  const cancel = () => {
    console.log('cancel');
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionForm}>
        <View style={styles.section}>
          <Text style={styles.title}>Введите новый пароль</Text>
          <Text style={styles.subTitle}>
            Мы также вышлем ваш новый пароль SMS-сообщением
          </Text>
          <View style={styles.passwordBlock}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Пароль"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={hidePassword}
              returnKeyType="done"
            />
            <Entypo
              name="eye"
              size={24}
              color={MyTheme.black}
              onPress={showPassword}
            />
          </View>
          <View style={styles.passwordBlock}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Повторите пароль"
              value={confirm}
              onChangeText={setConfirm}
              secureTextEntry={hideConfirm}
              returnKeyType="done"
            />
            <Entypo
              name="eye"
              size={24}
              color={MyTheme.black}
              onPress={showConfirm}
            />
          </View>
        </View>
        <View style={[styles.section, {borderBottomColor: 'white'}]}>
          <Pressable
            style={[styles.button, {backgroundColor: MyTheme.blue}]}
            onPress={changePassword}>
            <Text style={[styles.buttonText, {color: 'white'}]}>
              ИЗМЕНИТЬ ПАРОЛЬ
            </Text>
          </Pressable>
          <Pressable style={styles.button} onPress={cancel}>
            <Text style={styles.buttonText}>ОТМЕНИТЬ</Text>
          </Pressable>
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

  buttonText: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 14,
    lineHeight: 24,
    color: MyTheme.blue,
  },
  formBlock: {
    backgroundColor: 'white',
    marginVertical: 5,
    width: '100%',
    alignItems: 'center',
    borderRadius: 7,
  },
  passwordBlock: {
    width: Dimensions.get('window').width - 30,
    height: 45,
    padding: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: MyTheme.grey,
  },
  passwordInput: {
    width: '90%',
    height: 45,
  },

  button: {
    width: '90%',
    height: 45,
    borderWidth: 1,
    borderColor: MyTheme.blue,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});
