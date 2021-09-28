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

//FIXME: нет апишки на удаление аккаунта

export default function RemoveAccount() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [hidePassword, setHidePassword] = useState(true);
  const [error, setError] = useState(null);
  const [password, setPassword] = useState(null);

  const auth = useSelector(state => state.auth);

  //!Hide password
  const showPassword = () => {
    setHidePassword(!hidePassword);
  };

  const deleteAccount = () => {
    if (password.trim() < 6) {
      return setError('Минимальная длина пароля 6 символов');
    } else if (confirm.trim() !== password2.trim()) {
      return setError('Пароли не совпадают!');
    }
  };

  if (error) {
    Alert.alert('Ошибка', error, [
      {
        text: 'OK',
        onPress: () => setError(null),
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
          <Text style={styles.title}>Введите текущий пароль</Text>
          <Text style={styles.subTitle}>
            Для подтверждения удаления, введите Ваш текущий пароль
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
        </View>
        <View style={[styles.section, {borderBottomColor: 'white'}]}>
          <Pressable
            style={[styles.button, {backgroundColor: '#F95927'}]}
            onPress={deleteAccount}>
            <Text style={[styles.buttonText, {color: 'white'}]}>
              УДАЛИТЬ МОЙ АККАУНТ
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
