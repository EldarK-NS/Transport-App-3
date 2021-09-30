import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';

import {MyTheme} from '../../../components/layout/theme';
import CustomInput from '../../../components/SearchElements/CustomInput';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import MyPicker from '../../../components/SearchElements/MyPicker';
import axios from 'axios';

//FIXME: нет url на обновление профиля компаниии

export default function UpdateEmployee() {
  const navigation = useNavigation();
  const [positions, setPositions] = useState(null);
  const [name, setName] = useState(null);
  const [surname, setSurname] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);

  const auth = useSelector(state => state.auth);

  const getPositions = async () => {
    try {
      const res = await axios('https://test.money-men.kz/api/getPositions');
      setPositions(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPositions();
    return () => {
      setPositions(null);
    };
  }, []);

  //!Set companyTypes

  const [positionsModal, setPositionsModal] = useState(false);
  const [positionId, setPositionId] = useState(null);
  const [position, setPosition] = useState(null);

  const saveNewData = async () => {
    console.log(name, surname, phone, email, positionId, position);
  };

  const cancel = () => {
    console.log('cancel');
  };

  return (
    <KeyboardAwareScrollView style={{height: '100%', backgroundColor: 'white'}}>
      <View style={styles.container}>
        <View style={styles.sectionForm}>
          <View style={styles.section}>
            <Text style={styles.title}>Редактировать сотрудника</Text>
            <CustomInput
              input={name}
              setInput={setName}
              label="Имя"
              placeholder={' '}
              type={'text'}
            />
            <CustomInput
              input={surname}
              setInput={setSurname}
              label="Фамилия"
              placeholder={' '}
              type={'text'}
            />
            <View style={{marginBottom: 15}}>
              {!positions ? (
                <ActivityIndicator size="small" color={MyTheme.blue} />
              ) : (
                <MyPicker
                  modalOpen={positionsModal}
                  setModalOpen={setPositionsModal}
                  value={positionId}
                  setValue={setPositionId}
                  valueString={position}
                  setValueString={setPosition}
                  placeholder="Должность"
                  data={[
                    ...positions,
                    {id: null, name: 'Выбрать должность сотрудника'},
                  ]}
                />
              )}
            </View>
            <CustomInput
              input={phone}
              setInput={setPhone}
              label="Номер телефона"
              placeholder={' '}
              type={'text'}
            />

            <CustomInput
              input={email}
              setInput={setEmail}
              label="Эл. почта"
              placeholder={' '}
              type={'text'}
            />
          </View>
          <View style={[styles.section, {borderBottomColor: 'white'}]}>
            <Pressable
              style={[styles.button, {backgroundColor: MyTheme.blue}]}
              onPress={saveNewData}>
              <Text style={[styles.buttonText, {color: 'white'}]}>
                СОХРАНИТЬ ИЗМЕНЕНИЯ
              </Text>
            </Pressable>
            <Pressable style={styles.button} onPress={cancel}>
              <Text style={styles.buttonText}>ОТМЕНИТЬ</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
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
    marginVertical: 20,
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
  visibleContainer: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: MyTheme.grey,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    marginBottom: 7,
  },
  placeholderLabel: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 13,
    lineHeight: 16,
    color: MyTheme.grey,
  },
  placeText: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 17,
    lineHeight: 24,
    color: MyTheme.black,
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
  uploadButtonWrapper: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: MyTheme.blue,
    height: 40,
    borderRadius: 20,
    padding: 10,
    marginBottom: 15,
  },
  uploadButtonText: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 15,
    marginLeft: 5,
    color: MyTheme.blue,
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
  },
  imageSection: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: MyTheme.blue,
  },
  imageButton: {
    width: 165,
    height: 40,
    borderWidth: 1,
    borderColor: MyTheme.blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginHorizontal: 15,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: MyTheme.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
