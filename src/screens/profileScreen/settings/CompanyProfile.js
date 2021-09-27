import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
  Switch,
  Image,
} from 'react-native';
import {MyTheme} from '../../../components/layout/theme';
import CustomInput from '../../../components/SearchElements/CustomInput';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {getCompanyTypes} from '../../../redux/actions/additionalData';
import MyPicker from '../../../components/SearchElements/MyPicker';
import axios from 'axios';

//FIXME: нет url на обновление профиля компаниии

export default function CompanyProfile() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [bin, setBin] = useState(null);
  const [name, setName] = useState(null);
  const [token, setToken] = useState(null);

  const additionalData = useSelector(state => state.additionalData);

  useEffect(() => {
    dispatch(getCompanyTypes());
  }, []);
  const auth = useSelector(state => state.auth);
  useEffect(() => {
    if (auth.token !== null) {
      setToken(auth.token);
    }
    return () => {
      setToken(null);
    };
  }, [auth]);

  //!Switchers
  const [isEnabled1, setIsEnabled1] = useState(true);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

  const [isEnabled2, setIsEnabled2] = useState(true);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

  //!Set companyTypes

  const [companyTypesModal, setCompanyTypesModal] = useState(false);
  const [companyTypeId, setCompanyTypeId] = useState(null);
  const [companyType, setCompanyType] = useState(null);

  const saveNewData = async () => {
    console.log('save');
  };

  const cancel = () => {
    console.log('cancel');
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <View style={styles.sectionForm}>
          <View style={styles.section}>
            <Text style={styles.title}>Идентификационный номер компании</Text>
            <Text style={styles.subTitle}>Для резидентов РК БИН</Text>
            <CustomInput
              input={bin}
              setInput={setBin}
              label="БИН"
              placeholder={' '}
              type={'number'}
            />
          </View>
          <View style={[styles.section, {borderBottomColor: 'white'}]}>
            <Text style={styles.title}>Форма и название юр. лица</Text>
            <Text style={styles.subTitle}>
              В названии, не указывайте форму и кавычки
            </Text>
            <View style={{marginBottom: 10}}>
              <MyPicker
                modalOpen={companyTypesModal}
                setModalOpen={setCompanyTypesModal}
                value={companyTypeId}
                setValue={setCompanyTypeId}
                valueString={companyType}
                setValueString={setCompanyType}
                placeholder="Форма юр. лица"
                data={additionalData.companyTypes}
              />
            </View>
            <CustomInput
              input={name}
              setInput={setName}
              label="Название"
              placeholder={' '}
              type={'text'}
            />
            <View style={styles.switherWrapper}>
              <Text
                style={[
                  styles.switcherText,
                  !isEnabled1 && {textDecorationLine: 'line-through'},
                ]}>
                Прямой заказчик грузоперевозок
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
                Прямой перевозчик
              </Text>
              <Switch
                trackColor={{false: MyTheme.black, true: MyTheme.blue}}
                thumbColor={'white'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch2}
                value={isEnabled2}
              />
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>Логотип компании</Text>
            <Text style={styles.subTitle}>
              Настоящий логотип вашей компании в форматах .jpg, .jpeg, .png
            </Text>
            <View style={styles.imageSection}>
              <Image
                style={styles.image}
                source={require('../../../../assets/images/BLIZ.KZ.png')}
                resizeMode="contain"
              />

              <View style={styles.imageButton}>
                <Text style={styles.buttonText}>ИЗМЕНИТЬ</Text>
              </View>
              <Pressable style={styles.icon}>
                <FontAwesome5
                  name={'trash-alt'}
                  size={22}
                  color={MyTheme.blue}
                />
              </Pressable>
            </View>
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
