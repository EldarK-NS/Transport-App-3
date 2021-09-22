import React, {useState, useEffect, useLayoutEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Pressable,
  TextInput,
  Modal,
  Alert,
} from 'react-native';
import InfoDistanceBlock from '../../../components/CardElements/InfoDistanceBlock';
import SecondCardBlock from '../../../components/CardElements/SecondCardBlock';
import PriceBlock from '../../../components/CardElements/PriceBlock';
import ContactBlock from '../../../components/CardElements/ContactBlock';
import {useRoute} from '@react-navigation/core';
import axios from 'axios';
import {MyTheme} from '../../../components/layout/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/core';
import MyModalPicker from '../../../components/SearchElements/MyModalPicker';
import {getCurrencyTypes} from '../../../redux/actions/additionalData';
import {useSelector, useDispatch} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';

export default function CargoCardScreen() {
  const [info, setInfo] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [offer, setOffer] = useState(null);
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const incomeData = route.params;

  const [currencyModal, setCurrencyModal] = useState(false);
  const [currencyId, setCurrencyId] = useState(null);
  const [currencyString, setCurrencyString] = useState(null);

  useEffect(() => {
    dispatch(getCurrencyTypes());
  }, []);
  const additionalData = useSelector(state => state.additionalData);
  const auth = useSelector(state => state.auth);

  //! Get Data By Id comes from route.params
  const getData = async () => {
    try {
      const res = await axios(
        `https://test.money-men.kz/api/getPostByID/${incomeData.id}`,
      );
      //! if res.data.success ===true else Alert
      setInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
    return () => {
      setInfo(null);
    };
  }, []);

  //! Set header left button
  const headerNavigation = () => {
    if (incomeData.from === 'favorite') {
      // navigation.reset({
      //   index: 0,
      //   routes: [{name: 'Profile', screen: 'MyFavorites'}],
      // });
      navigation.navigate('Profile', {screen: 'MyFavorites'});
    } else if (incomeData.from === 'filter') {
      navigation.goBack();
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable style={styles.leftButton} onPress={headerNavigation}>
          <AntDesign name="left" size={24} color="white" />
          <Text style={styles.buttonText}>Поиск</Text>
        </Pressable>
      ),
    });
  }, [navigation]);

  //! Loader
  if (!info) {
    return (
      <ActivityIndicator
        size="large"
        color={MyTheme.blue}
        style={{justifyContent: 'center', alignItems: 'center'}}
      />
    );
  }

  //FIXME: InfoDistanceBlock - область добавить, убрать страну из подзаголовка, возможно нужна будет цветовая стилизация Alert

  //! Modal Section
  const makeOffer = () => {
    setModalVisible(true);
  };

  const modalCancel = () => {
    setModalVisible(!modalVisible);
    setOffer(null);
    setCurrencyId(null);
    setCurrencyString(null);
  };

  const sendOffer = async () => {
    try {
      if (offer === null || currencyId === null) {
        Alert.alert('Ошибка', 'Укажите цену и валюту предложения', [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
      }
      const res = await axios({
        method: 'POST',
        url: `https://test.money-men.kz/api/sendRequest?token=${auth.token}&post_id=${incomeData.id}&price=${offer}&currency=${currencyId}`,
      });
      console.log('send Offer', res);
      if (!res.data.success) {
        return Alert.alert(
          `${res.data.message}`,
          'Если вы хотите отменить Ваше предложение перейдите в "Личный кабинет"',
          [
            {
              text: 'OK',
              onPress: () => modalCancel(),
            },
            ,
          ],
        );
      }
      if (res.data.success) {
        return Alert.alert(
          `${res.data.message}`,
          'Все ваши предложения отображаются в "Личном кабинете"',
          [
            {
              text: 'OK',
              onPress: () => {
                setModalVisible(!modalVisible);
                setOffer(null);
                setCurrencyId(null);
                setCurrencyString(null);
              },
            },
            ,
          ],
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  //!Call and Message
  const handleCall = () => {
    console.log('Call!!!');
  };
  const handleMessage = () => {
    console.log('Message!!!');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable style={styles.cancelButtonWrapper} onPress={modalCancel}>
              <Entypo name="cross" size={20} color="black" />
            </Pressable>
            <Text style={styles.modalText}>Ваше предложение!</Text>
            <View style={styles.inputBlock}>
              <TextInput
                value={offer}
                onChangeText={setOffer}
                placeholder="введите цену"
                style={styles.input}
                keyboardType="number-pad"
              />
            </View>
            <View>
              <MyModalPicker
                modalOpen={currencyModal}
                setModalOpen={setCurrencyModal}
                value={currencyId}
                setValue={setCurrencyId}
                valueString={currencyString}
                setValueString={setCurrencyString}
                data={[
                  ...additionalData.currencyTypes,
                  {id: null, name: 'Выберите валюту'},
                ]}
              />
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={sendOffer}>
              <Text style={styles.textStyle}>ОТПРАВИТЬ</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <View
        style={[
          styles.container,
          {backgroundColor: modalVisible ? MyTheme.background : 'white'},
        ]}>
        <InfoDistanceBlock
          titleText={info.data[0].details[0].title}
          pointA_Title={info.data[0].details[0].from_string}
          pointA_Subtitle={'Казахстан, Акмолинская область'}
          start_date={info.data[0].details[0].start_date}
          pointB_Title={info.data[0].details[0].to_string}
          pointB_Subtitle={'Казахстан, Алматинская область'}
          pointB_date={incomeData.distance}
          fromId={info.data[0].details[0].from}
          toId={info.data[0].details[0].to}
        />
        <SecondCardBlock
          net={info.data[0].details[0].net}
          volume={info.data[0].details[0].volume}
          title={info.data[0].details[0].title}
          transport_type={info.data[0].details[0].type_transport}
          transport_sub_type={info.data[0].details[0].type_sub_transport}
          addition={
            info.data[0].additional[0].addition
              ? info.data[0].additional[0].addition.join(', ')
              : 'стандартная'
          }
          docs={
            info.data[0].additional[0].loading
              ? info.data[0].additional[0].loading.join(', ')
              : 'стандартные'
          }
          loading={
            info.data[0].additional[0].docs
              ? info.data[0].additional[0].docs.join(', ')
              : 'стандартные '
          }
          notes={
            'Погрузка груза должна выполняться аккуратно. Коробки закрепить надежно. Оплата на месте получения.'
          }
        />
        <PriceBlock
          price={info.data[0].price[0].price}
          payment_type={info.data[0].price[0].payment_type}
          button={'Сделать предложение'}
          onHandlePress={makeOffer}
        />
        <ContactBlock
          companyName={
            info.data[0].user[0].companyDetails
              ? info.data[0].user[0].companyDetails[0].companyName
              : null
          }
          personName={info.data[0].user[0].fullName}
          position={'Экспедитор'}
          phoneNumber1={info.data[0].user[0].phone}
          phoneNumber2={info.data[0].user[0].phone}
          email={info.data[0].user[0].email}
          rating={5}
          Call={handleCall}
          Message={handleMessage}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 17,
    lineHeight: 22,
    color: 'white',
  },

  centeredView: {
    flex: 1,
    marginTop: 150,
    alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 7,
    elevation: 8,
  },
  button: {
    width: 200,
    height: 45,
    backgroundColor: MyTheme.blue,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonClose: {
    backgroundColor: MyTheme.blue,
  },
  textStyle: {
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: 15,
    lineHeight: 24,
    color: 'white',
  },
  modalText: {
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 18,
    lineHeight: 20,
    textAlign: 'center',
  },
  inputBlock: {
    width: 200,
    height: 35,
    borderWidth: 0.5,
    borderColor: MyTheme.grey,

    justifyContent: 'center',
    marginVertical: 25,
    borderRadius: 5,
  },
  input: {
    fontSize: 18,
    fontFamily: 'IBMPlexSans-Regular',
    marginLeft: 15,
  },
  cancelButtonWrapper: {
    position: 'absolute',
    top: 13,
    right: 20,
  },
});
