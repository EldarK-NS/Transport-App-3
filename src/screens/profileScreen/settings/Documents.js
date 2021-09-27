import React, {useState, useEffect} from 'react';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import {MyTheme} from '../../../components/layout/theme';
import CustomInput from '../../../components/SearchElements/CustomInput';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {getAllCountries} from '../../../redux/actions/additionalData';
import MyPicker from '../../../components/SearchElements/MyPicker';
import axios from 'axios';

//FIXME: нет url на добавление документов

export default function Documents() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [bin, setBin] = useState(null);
  const [address, setAddress] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone1, setPhone1] = useState(null);
  const [phone2, setPhone2] = useState(null);
  const [token, setToken] = useState(null);
  const additionalData = useSelector(state => state.additionalData);

  useEffect(() => {
    dispatch(getAllCountries());
  }, []);
  const auth = useSelector(state => state.auth);
  const transitData = useSelector(state => state.transitData);
  useEffect(() => {
    if (auth.token !== null) {
      setToken(auth.token);
    }
    return () => {
      setToken(null);
    };
  }, [auth]);

  //!Set Destination++++
  const [cityCoord, setCityCoord] = useState(null);
  const [cityString, setCityString] = useState(null);

  useEffect(() => {
    if (transitData.startPlaceCargo !== null) {
      setCityCoord(transitData.startPlaceCargo.id);
      setCityString(transitData.startPlaceCargo.string);
    }
  }, [transitData.startPlaceCargo]);
  //?---------------------------------------//

  //!Set Country

  const [countryModal, setCountryModal] = useState(false);
  const [countryId, setCountryId] = useState(null);
  const [countryString, setCountryString] = useState(null);

  const saveNewData = async () => {
    // try {
    //   const res = await axios({
    //     method: 'POST',
    //     url: `https://test.money-men.kz/api/updateProfile?token=${token}&name=${name}&secondName=${secondName}&email=${email}&phone=${phone1}&birthDay=${birthDate}&country_id=${countryId}&city=${cityCoord}&city_string=${cityString}&address=${address}`,
    //   });
    //   console.log(
    //     `${token} ${name} ${secondName} ${email} ${phone1} ${birthDate} ${countryId} ${cityCoord} ${cityString} ${address}`,
    //   );
    // } catch (error) {
    //   console.log(error);
    // }
    // setName(null);
    // setSurname(null);
    // setSecondName(null);
    // setAddress(null);
    // setEmail(null);
    // setPhone1(null);
    // setPhone2(null);
    // setIsDateVisibility(false);
    // setBirthDate(null);
    // setBirthDatePlaceholder();
    // setCityCoord(null);
    // setCityString(null);
    // setCountryModal(false);
    // setCountryId(null);
    // setCountryString(null);
  };

  const cancel = () => {
    // setName(null);
    // setSurname(null);
    // setSecondName(null);
    // setAddress(null);
    // setEmail(null);
    // setPhone1(null);
    // setPhone2(null);
    // setIsDateVisibility(false);
    // setBirthDate(null);
    // setBirthDatePlaceholder();
    // setCityCoord(null);
    // setCityString(null);
    // setCountryModal(false);
    // setCountryId(null);
    // setCountryString(null);
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <View style={styles.sectionForm}>
          <View style={styles.section}>
            <Text style={styles.title}>Налоговый номер компании</Text>
            <Text style={[styles.subTitle, {textAlign: 'center'}]}>
              Для резидентов РК БИН
            </Text>
            <CustomInput
              input={bin}
              setInput={setBin}
              label="БИН"
              placeholder={' '}
              type={'number'}
            />
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>
              Свидетельство или выписка о государственной регистрации компании
            </Text>
            <Text style={styles.subTitle}>
              Прикрепите скан-копию документа, в формате .jpg, .png, .pdf
            </Text>
            <Pressable style={styles.uploadButtonWrapper}>
              <AntDesignIcon name="upload" size={18} color={MyTheme.blue} />
              <Text style={styles.uploadButtonText}>ЗАГРУЗИТЬ ДОКУМЕНТ</Text>
            </Pressable>
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>
              Лицензия на транспортные или экспедиторские услуги
            </Text>
            <Text style={styles.subTitle}>
              Прикрепите скан-копию документа, в формате .jpg, .png, .pdf
            </Text>
            <Pressable style={styles.uploadButtonWrapper}>
              <AntDesignIcon name="upload" size={18} color={MyTheme.blue} />
              <Text style={styles.uploadButtonText}>ЗАГРУЗИТЬ ДОКУМЕНТ</Text>
            </Pressable>
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>Контактная информация</Text>
            <Text style={styles.subTitle}>
              Контактные данные компании, отображающиеся в сервисе
            </Text>
            <MyPicker
              modalOpen={countryModal}
              setModalOpen={setCountryModal}
              value={countryId}
              setValue={setCountryId}
              valueString={countryString}
              setValueString={setCountryString}
              placeholder="Страна"
              data={additionalData.countries}
            />

            <Pressable
              style={styles.formBlock}
              onPress={() => navigation.navigate('PersonPlace')}>
              <View style={styles.visibleContainer}>
                <View>
                  <Text style={styles.placeholderLabel}>Город</Text>
                  <Text style={styles.placeText}>{cityString}</Text>
                </View>
                <AntDesignIcon
                  name="caretdown"
                  size={10}
                  color={MyTheme.black}
                  style={{marginRight: 10}}
                />
              </View>
            </Pressable>
            <CustomInput
              input={address}
              setInput={setAddress}
              label="Адрес"
              placeholder={' '}
              type={'text'}
            />
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>Контактные данные</Text>
            <Text style={styles.subTitle}>
              Контактные данные администратора
            </Text>
            <CustomInput
              input={email}
              setInput={setEmail}
              label="электроная почта"
              placeholder={' '}
              type={'text'}
            />
            <CustomInput
              input={phone1}
              setInput={setPhone1}
              label="Телефон №1"
              placeholder={' '}
              type={'number'}
            />
            <CustomInput
              input={phone2}
              setInput={setPhone2}
              label="Телефон №2"
              placeholder={' '}
              type={'number'}
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
  },
  subTitle: {
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: MyTheme.grey,
    marginBottom: 10,
    width: '80%',
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
});
