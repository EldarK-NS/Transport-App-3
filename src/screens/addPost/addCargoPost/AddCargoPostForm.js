import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
  Pressable,
  Modal,
  Image,
  Alert,
} from 'react-native';
import {MyTheme} from '../../../components/layout/theme';
import InputDouble from '../../../components/SearchElements/InputDouble';
import InputShort from '../../../components/SearchElements/InputShort';
import MyPicker from '../../../components/SearchElements/MyPicker';
import MyDatePicker from '../../../components/SearchElements/MyDatePicker';
import {useNavigation} from '@react-navigation/core';
import {useDispatch, useSelector} from 'react-redux';
import {
  getTransportTypes,
  getTransportSubTypes,
  getPaymentTypes,
  getCurrencyTypes,
} from '../../../redux/actions/additionalData';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import CustomInput from '../../../components/SearchElements/CustomInput';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {removeDataForCargoPost} from '../../../redux/actions/transitStore';
import axios from 'axios';
import {SimpleInput} from '../../../components/SearchElements/SimpleInput';

export default function AddCargoPostForm() {
  const [modalShow, setModalShow] = useState(false);
  const [token, setToken] = useState(null);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const auth = useSelector(state => state.auth);

  useEffect(() => {
    setToken(auth.token);
    return () => {
      setToken(null);
    };
  }, [auth]);
  //?---------------------------------------//

  //!Fetch Additional Data
  useEffect(() => {
    dispatch(getTransportTypes());
    dispatch(getPaymentTypes());
    dispatch(getCurrencyTypes());
  }, []);

  const additionalData = useSelector(state => state.additionalData);
  const transitData = useSelector(state => state.transitData);

  //!Set Destination++++
  const [fromString, setFromString] = useState('Выберите пункт отправки');
  const [destinString, setDestinString] = useState('Выберите пункт доставки');
  const [fromCoord, setFromCoord] = useState(null);
  const [destinCoord, setDestinCoord] = useState(null);

  useEffect(() => {
    if (transitData.startPlaceCargo !== null) {
      setFromCoord(transitData.startPlaceCargo.id);
      setFromString(transitData.startPlaceCargo.string);
      setDestinCoord(transitData.endPlaceCargo.id);
      setDestinString(transitData.endPlaceCargo.string);
    }
  }, [transitData.endPlaceCargo]);

  //?---------------------------------------//

  //! Set Loading Date+++
  const [isLoadingDateVisible, setIsLoadingDateVisibility] = useState(false);
  const [loadingDate, setLoadingDate] = useState(null);
  const [loadingDatePlaceholder, setLoadingDatePlaceholder] =
    useState('Выберите дату');

  //! Set Unloading Date+++
  const [isUnloadingDateVisible, setIsUnloadingDateVisibility] =
    useState(false);
  const [unloadingDate, setUnloadingDate] = useState(null);
  const [unloadingDatePlaceholder, setUnloadingDatePlaceholder] =
    useState('Выберите дату');
  //?---------------------------------------//

  //!Cargo description+++
  const [description, setDescription] = useState('');
  //?---------------------------------------//

  //! Net and Volume+++
  const [net, setNet] = useState(null);
  const [volume, setVolume] = useState(null);
  //?---------------------------------------//

  //! set Height, Width, Length+++

  const [width, setWidth] = useState(null);
  const [length, setLength] = useState(null);
  const [height, setHeight] = useState(null);
  //?---------------------------------------//

  //!Quantity+++
  const [quantity, setQuantity] = useState(null);
  //?---------------------------------------//

  //!Transport+++
  const transportPickerData = () => {
    const newData = [
      ...additionalData.transportTypes,
      {id: null, name: 'Любой'},
    ];
    return newData;
  };

  const PickerData = (data, label) => {
    const newData = [...data, {id: null, name: label}];
    return newData;
  };

  const [transportTypeModal, setTransporTypetModal] = useState(false);
  const [transportTypeId, setTransportTypeId] = useState(null);
  const [transportTypeString, setTransportTypeString] = useState('Любой');

  const [transportSubTypeModal, setTransportSubTypeModal] = useState(false);
  const [transportSubTypeId, setTransportSubTypeId] = useState(null);
  const [transportSubTypeString, setTransportSubTypeString] = useState(null);

  useEffect(() => {
    dispatch(getTransportSubTypes(transportTypeId));
    setTransportSubTypeId(null);
    setTransportSubTypeString(null);
  }, [transportTypeId]);
  //?---------------------------------------//

  //!Price+++
  const [price, setPrice] = useState(null);

  const [paymentModal, setPaymentModal] = useState(false);
  const [paymentId, setPaymentId] = useState(null);
  const [paymentString, setPaymentString] = useState('Выберите способ оплаты');

  const [currencyModal, setCurrencyModal] = useState(false);
  const [currencyId, setCurrencyId] = useState(null);
  const [currencyString, setCurrencyString] = useState(
    'Выберите валюту платежа',
  );
  //?---------------------------------------//
  //!Additional params+++

  const additionalParams = () => {
    navigation.navigate('AdditionalParams');
  };

  const [documents, setDocuments] = useState(null);
  const [loadingConditions, setLoadingConditions] = useState(null);
  const [freightConditions, setFreightConditions] = useState(null);
  const [transportationConditions, setTransportationConditions] =
    useState(null);

  useEffect(() => {
    if (transitData.additionalCargoPost !== null) {
      setDocuments(transitData.additionalCargoPost.documents);
      setLoadingConditions(transitData.additionalCargoPost.loadCond);
      setFreightConditions(transitData.additionalCargoPost.freightCond);
      setTransportationConditions(transitData.additionalCargoPost.transCond);
      return () => {
        setDocuments(null);
        setLoadingConditions(null);
        setFreightConditions(null);
        setTransportationConditions(null);
      };
    }
  }, [transitData.additionalCargoPost]);
  //?---------------------------------------//
  const AddPost = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: `https://test.money-men.kz/api/newAddPost?token=${token}&category_id=1&sub_id=1&title=${description}&from=${fromCoord}&to=${destinCoord}&volume=${volume}&net=${net}&start_date=${loadingDate}&end_date=${unloadingDate}&documents[]=${documents}&price=${price}&price_type=${currencyId}&payment_type=${paymentId}&type_transport=${transportTypeId}&type_sub_transport[]=${transportSubTypeId}&from_string=${fromString}&to_string=${destinString}&loading[]=${loadingConditions}&condition[]=${transportationConditions}&addition[]=${freightConditions}`,
      });
      console.log(res);
      if (res.data.message) {
        Alert.alert('Внимание', res.data.message, [
          {
            text: 'Перейти к пополнению балланса',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
      }
      if (res.data.success) {
        dispatch(removeDataForCargoPost());
        setModalShow(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      // extraHeight={200}
      enableAutomaticScroll={false}
      // extraScrollHeight={200}
    >
      <View style={styles.container}>
        <Modal transparent={true} visible={modalShow}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#000000aa',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#fff',
                margin: 20,
                padding: 40,
                borderRadius: 20,
                width: Dimensions.get('window').width - 50,
                height: Dimensions.get('window').height - 200,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../../../assets/images/Bitmap.png')}
                style={styles.modalImage}
              />
              <Text style={styles.modalTitle}>Объявление опубликованно!</Text>
              <Text style={styles.modalSubTitle}>
                Теперь, другие участники сервиса видят ваше объявление и ваши
                контактные данные.
              </Text>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setModalShow(false);
                  navigation.reset({
                    index: 0,
                    routes: [{name: 'Home'}],
                  });
                }}>
                <Text style={styles.modalbButtonText}>К ОБЪЯВЛЕНИЮ</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Pressable
          style={styles.formBlock}
          onPress={() => navigation.navigate('PlaceAutocomplite2')}>
          <View style={styles.visibleContainer}>
            <View>
              <Text style={styles.placeholderLabel}>Откуда</Text>
              <Text
                style={[
                  styles.placeText,
                  {
                    color: !fromCoord ? '#f2775c' : MyTheme.black,
                  },
                ]}>
                {fromString}
              </Text>
            </View>
            <AntDesignIcon
              name="caretdown"
              size={10}
              color={MyTheme.black}
              style={{marginRight: 10}}
            />
          </View>
          <View style={styles.visibleContainer}>
            <View>
              <Text style={styles.placeholderLabel}>Куда</Text>
              <Text
                style={[
                  styles.placeText,
                  {
                    color: !destinCoord ? '#f2775c' : MyTheme.black,
                  },
                ]}>
                {destinString}
              </Text>
            </View>
            <AntDesignIcon
              name="caretdown"
              size={10}
              color={MyTheme.black}
              style={{marginRight: 10}}
            />
          </View>
        </Pressable>
        <View style={styles.formBlock}>
          <View style={styles.inputBlock1}>
            <MyDatePicker
              visibility={isLoadingDateVisible}
              setVisible={setIsLoadingDateVisibility}
              setDate={setLoadingDate}
              setTitle={setLoadingDatePlaceholder}
              placeholder={loadingDatePlaceholder}
              title={'Дата погрузки'}
              type={'date'}
            />

            <MyDatePicker
              visibility={isUnloadingDateVisible}
              setVisible={setIsUnloadingDateVisibility}
              setDate={setUnloadingDate}
              setTitle={setUnloadingDatePlaceholder}
              placeholder={unloadingDatePlaceholder}
              title={'Дата выгрузки'}
              type={'date'}
            />
          </View>
        </View>
        <View style={styles.sectionGrey}>
          <Text style={styles.label}>Характеристики груза:</Text>
        </View>
        <View style={styles.formBlock}>
          <View>
            <View style={styles.textInputBlock}>
              <SimpleInput
                label={'Описание груза'}
                setInputText={setDescription}
                inputText={description}
              />
            </View>
            <View style={styles.inputBlock1}>
              <InputShort input={net} setInput={setNet} label="Вес, тн" />
              <InputShort
                input={volume}
                setInput={setVolume}
                label="Объем, м3"
              />
            </View>
          </View>
        </View>

        <View style={styles.formBlock}>
          <View style={styles.formBlock}>
            <View style={styles.inputBlock1}>
              <InputShort input={width} setInput={setWidth} label="Ширина, м" />
              <InputShort
                input={length}
                setInput={setLength}
                label="Длина, м"
              />
            </View>
            <View style={styles.inputBlock1}>
              <InputShort
                input={height}
                setInput={setHeight}
                label="Высота, м"
              />
              <InputShort
                input={quantity}
                setInput={setQuantity}
                label="Количество мест"
              />
            </View>
          </View>
        </View>
        <View style={styles.sectionGrey}>
          <Text style={styles.label}>Транспорт:</Text>
        </View>
        <View style={styles.formBlock}>
          <MyPicker
            modalOpen={transportTypeModal}
            setModalOpen={setTransporTypetModal}
            value={transportTypeId}
            setValue={setTransportTypeId}
            data={[...additionalData.transportTypes, {id: null, name: 'Любой'}]}
            valueString={transportTypeString}
            setValueString={setTransportTypeString}
            placeholder="Способ транспортировки"
          />
          <MyPicker
            modalOpen={transportSubTypeModal}
            setModalOpen={setTransportSubTypeModal}
            value={transportSubTypeId}
            setValue={setTransportSubTypeId}
            data={[
              ...additionalData.transportSubTypes,
              {id: null, name: 'Выбрать тип транспорта'},
            ]}
            valueString={transportSubTypeString}
            setValueString={setTransportSubTypeString}
            placeholder="Тип транспорта"
          />
        </View>
        <View style={styles.sectionGrey}>
          <Text style={styles.label}>Стоимость первозки:</Text>
        </View>
        <View style={styles.formBlock}>
          <CustomInput
            input={price}
            setInput={setPrice}
            label="Цена"
            placeholder={'0'}
            type={'number'}
          />
          <MyPicker
            modalOpen={currencyModal}
            setModalOpen={setCurrencyModal}
            value={currencyId}
            setValue={setCurrencyId}
            valueString={currencyString}
            setValueString={setCurrencyString}
            placeholder="Валюта"
            data={[
              ...additionalData.currencyTypes,
              {id: null, name: 'Выбрать валюту платежа'},
            ]}
          />
          <MyPicker
            modalOpen={paymentModal}
            setModalOpen={setPaymentModal}
            value={paymentId}
            setValue={setPaymentId}
            valueString={paymentString}
            setValueString={setPaymentString}
            placeholder="Способ оплаты"
            data={[
              ...additionalData.paymentTypes,
              {id: null, name: 'Выбрать способ оплаты'},
            ]}
          />
        </View>
        <View style={styles.sectionGrey}>
          <Text style={styles.label}>Дополнительные параметры:</Text>
        </View>
        <Pressable style={styles.formBlock} onPress={additionalParams}>
          <View style={styles.additParams}>
            <Text style={styles.additParamsText}>
              Документы, Способ погрузки, Условия перевозки
            </Text>
            <EntypoIcon name="chevron-right" size={18} color={MyTheme.grey} />
          </View>
        </Pressable>
        <TouchableOpacity style={styles.button} onPress={AddPost}>
          <Text style={styles.buttonText}>ДОБАВИТЬ ОБЪЯВЛЕНИЕ</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: MyTheme.background,
  },
  formBlock: {
    backgroundColor: 'white',
    marginVertical: 5,
    width: '100%',
    alignItems: 'center',
    borderRadius: 7,
  },
  inputBlock: {
    marginTop: 10,
  },
  inputBlock1: {
    // marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: MyTheme.blue,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  buttonText: {
    fontSize: 15,
    lineHeight: 24,
    color: 'white',
    fontFamily: 'IBMPlexSans-Bold',
    fontWeight: 'bold',
  },
  visibleContainer: {
    width: Dimensions.get('window').width - 30,
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: MyTheme.grey,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
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
  label: {
    fontFamily: 'IBMPlexSans-SemiBold',
    fontSize: 15,
    lineHeight: 24,
    // marginLeft: 15,
    color: MyTheme.grey,
    // textDecorationLine: 'underline',
  },
  sectionGrey: {
    height: 35,
    width: '100%',
    backgroundColor: MyTheme.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  additParams: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('window').width - 30,
    borderBottomWidth: 0.5,
    borderBottomColor: MyTheme.grey,
  },
  additParamsText: {
    marginLeft: 10,
    paddingVertical: 10,
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 17,
    lineHeight: 24,
    color: MyTheme.black,
    width: 250,
  },
  modalContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  modalTitle: {
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: 21,
    lineHeight: 24,
    color: MyTheme.blue,
    fontWeight: 'bold',
    marginBottom: 20,
    width: '75%',
    textAlign: 'center',
  },
  modalSubTitle: {
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 14,
    lineHeight: 18,
    color: MyTheme.grey,
    marginBottom: 40,
    width: '85%',
    textAlign: 'center',
  },
  modalButton: {
    width: 220,
    height: 45,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: MyTheme.blue,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MyTheme.background,
  },
  modalbButtonText: {
    fontFamily: 'IBMPlexSans-SemiBold',
    fontSize: 14,
    lineHeight: 24,
    color: MyTheme.blue,
    fontWeight: '600',
  },
  modalImage: {
    width: 84,
    height: 84,
    marginBottom: 30,
  },
  textInputBlock: {
    marginBottom: 10,
  },
});
