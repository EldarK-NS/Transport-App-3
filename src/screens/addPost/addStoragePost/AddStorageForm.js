import React, {useState, useEffect, useLayoutEffect} from 'react';
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
import CheckBox from '@react-native-community/checkbox';
import axios from 'axios';
import ImagePicker from 'react-native-image-crop-picker';
import Swiper from 'react-native-swiper';

//!FIXME: нет апишки на тип скалада.

const storageType = [
  {id: 1, name: 'Сухой склад (+14/+24)'},
  {id: 2, name: 'Холодильный склад (+2/+7)'},
  {id: 3, name: 'Морозильный склад (-18/-24)'},
  {id: 4, name: 'Мультитемпературный склад (+14/-24)'},
  {id: 5, name: 'Производственное помещение '},
  {id: 6, name: 'Земельный участок '},
  {id: 6, name: 'Неотапливаемый склад'},
];

export default function AddStorageForm() {
  const [modalShow, setModalShow] = useState(false);
  const [token, setToken] = useState(null);
  const [imageData, setImageData] = useState([]);

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

  //! Set photo icon

  const AddPhoto = () => {
    let imageList = [];
    ImagePicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      includeExif: true,
      forceJpg: true,
      compressImageQuality: 0.8,
      maxFiles: 4,
      mediaType: 'photo',
      includeBase64: true,
    })
      .then(response => {
        console.log('res', response);
        response.map(image => {
          imageList.push(`data:${image.mime};base64,` + image.data);
        });
        setImageData(imageList);
      })
      .catch(e => console.log('Error', e.message));
  };
  //! Remove photo
  const removeImage = x => {
    let newData = imageData.filter((item, idx) => idx !== x);
    setImageData(newData);
  };

  console.log('ID', imageData);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable style={styles.rightButton} onPress={AddPhoto}>
          <EntypoIcon name="camera" size={24} color={MyTheme.black} />
        </Pressable>
      ),
    });
  }, [navigation]);

  //!Fetch Additional Data
  useEffect(() => {
    dispatch(getTransportTypes());
    dispatch(getPaymentTypes());
    dispatch(getCurrencyTypes());
  }, []);

  const additionalData = useSelector(state => state.additionalData);
  const transitData = useSelector(state => state.transitData);

  //!Set Destination++++
  const [fromString, setFromString] = useState('Населенный пункт');
  const [destinString, setDestinString] = useState('Укажите адрес');
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

  //!Cargo description+++
  const [description, setDescription] = useState('');
  //?---------------------------------------//

  //! Area+++
  const [area, setArea] = useState(null);
  const [totalArea, setTotalArea] = useState(null);
  //?---------------------------------------//

  //! set Year, Floor+++

  const [year, setYear] = useState(null);
  const [floor, setFloor] = useState(null);
  //! Set Parking
  const [smallParking, setSmallParking] = useState(null);
  const [largeParking, setLargeParking] = useState(null);
  const [groundType, setGroundType] = useState(null);
  const [groundPress, setGroundPress] = useState(null);
  //?---------------------------------------//

  //!Storage Type+++

  const PickerData = (data, label) => {
    const newData = [...data, {id: null, name: label}];
    return newData;
  };

  const [storageTypeModal, setStorageTypeModal] = useState(false);
  const [storageTypeId, setStorageTypeId] = useState(null);
  const [storageTypeString, setStorageTypeString] = useState(null);

  //?---------------------------------------//

  //!Storage Class
  const [classA, setClassA] = useState(false);
  const [classAPlus, setClassAPlus] = useState(false);
  const [classB, setClassB] = useState(false);
  const [classC, setClassC] = useState(false);
  const [classD, setClassD] = useState(false);

  //!Price+++
  const [price, setPrice] = useState(null);
  //?---------------------------------------//

  //!
  const [shelf, setShelf] = useState(false);
  const [ramp, setRamp] = useState(false);

  //!Additional params+++

  const additionalParams = () => {
    navigation.navigate('StorageAdditionalParams');
  };
  // console.log('transitData', transitData);

  const [ventilation, setVentilation] = useState([]);
  const [fireSistem, setFireSistem] = useState([]);

  const [fireAlarm, setFireAlarm] = useState(0);
  const [securityAlarm, setSecurityAlarm] = useState(0);
  const [spotArea, setSpotArea] = useState(0);
  const [inlineBlock, setInlineBlock] = useState(0);

  useEffect(() => {
    if (transitData.additionalCargoPost !== null) {
      setVentilation(transitData.additionalCargoPost.ventilation);
      setFireSistem(transitData.additionalCargoPost.fireSistem);
      setFireAlarm(transitData.additionalCargoPost.fire);
      setSecurityAlarm(transitData.additionalCargoPost.security);
      setSpotArea(transitData.additionalCargoPost.spot);
      setInlineBlock(transitData.additionalCargoPost.inline);

      return () => {
        setVentilation([]);
        setFireSistem([]);
        setFireAlarm(0);
        setSecurityAlarm(0);
        setSpotArea(0);
        setInlineBlock(0);
      };
    }
  }, [transitData.additionalCargoPost]);
  //?---------------------------------------//

  const AddPost = async () => {
    // try {
    //   const res = await axios({
    //     method: 'GET',
    //     url: `https://test.money-men.kz/api/newAddPost?token=${token}&category_id=1&sub_id=1&title=${description}&from=${fromCoord}&to=${destinCoord}&volume=${volume}&net=${net}&start_date=${loadingDate}&end_date=${unloadingDate}&documents[]=${documents}&price=${price}&price_type=${currencyId}&payment_type=${paymentId}&type_transport=${transportTypeId}&type_sub_transport[]=${transportSubTypeId}&from_string=${fromString}&to_string=${destinString}&loading[]=${loadingConditions}&condition[]=${transportationConditions}&addition[]=${freightConditions}`,
    //   });
    //   console.log(res);
    //   if (res.data.message) {
    //     Alert.alert('Внимание', res.data.message, [
    //       {
    //         text: 'Перейти к пополнению балланса',
    //         onPress: () => console.log('Cancel Pressed'),
    //         style: 'cancel',
    //       },
    //       {text: 'OK', onPress: () => console.log('OK Pressed')},
    //     ]);
    //   }
    //   if (res.data.success) {
    //     dispatch(removeDataForCargoPost());
    //     setModalShow(true);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }

    console.log('add storage');
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
        <View style={[styles.sectionGrey, {height: 45}]}>
          <Text style={styles.label}>Добавьте фото склада</Text>
          <Text style={styles.imageNote}>
            (максимальное количество фотографий - 4)
          </Text>
        </View>
        <View style={styles.formBlock}>
          {/* <Banner data={imageData} remove={true} handleRemove={removeImage} /> */}
          <View style={styles.swiper}>
            <Swiper horizontal={true} loop={false} showsPagination={false}>
              {imageData.length > 0 ? (
                imageData.map((item, idx) => {
                  return (
                    <View key={idx}>
                      <Image
                        key={item.uri}
                        style={styles.image}
                        resizeMode="cover"
                        source={{uri: item}}
                      />
                      <Pressable
                        style={styles.removeButton}
                        onPress={() => removeImage(idx)}>
                        <EntypoIcon
                          name="circle-with-cross"
                          size={20}
                          color={MyTheme.black}
                        />
                      </Pressable>
                      <View style={styles.imageCircle}>
                        <Text style={styles.imageNumber}>{idx + 1}</Text>
                      </View>
                    </View>
                  );
                })
              ) : (
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={require('../../../../assets/images/no_image.jpeg')}
                />
              )}
            </Swiper>
          </View>
        </View>
        <View style={styles.sectionGrey}>
          <Text style={styles.label}>Месторасположение склада:</Text>
        </View>
        <Pressable
          style={styles.formBlock}
          onPress={() => navigation.navigate('AddStorageAutocomplite')}>
          <View style={styles.visibleContainer}>
            <View>
              <Text style={styles.placeholderLabel}>Город</Text>
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
              <Text style={styles.placeholderLabel}>Адрес</Text>
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
        <View style={styles.sectionGrey}>
          <Text style={styles.label}>Характеристики склада:</Text>
        </View>
        <View style={styles.formBlock}>
          <View style={styles.inputBlock1}>
            <InputShort
              input={area}
              setInput={setArea}
              label="Полезная площадь"
            />
            <InputShort
              input={totalArea}
              setInput={setTotalArea}
              label="Общая площадь"
            />
          </View>
          <View style={styles.inputBlock1}>
            <InputShort input={year} setInput={setYear} label="Год постройки" />
            <InputShort input={floor} setInput={setFloor} label="Этажность" />
          </View>
        </View>

        <View style={styles.formBlock}>
          <View style={styles.inputBlock1}>
            <InputShort
              input={smallParking}
              setInput={setSmallParking}
              label="Паркинг, легк. авто"
            />
            <InputShort
              input={largeParking}
              setInput={setLargeParking}
              label="Паркинг, груз авто"
            />
          </View>
          <View style={styles.inputBlock1}>
            <InputShort
              input={groundType}
              setInput={setGroundType}
              label="Тип пола"
            />
            <InputShort
              input={groundPress}
              setInput={setGroundPress}
              label="Давление на пол"
            />
          </View>
        </View>
        <View style={styles.sectionGrey}>
          <Text style={styles.label}>Класс склада:</Text>
        </View>
        <View style={styles.formBlock}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 10,
            }}>
            <View style={styles.checkBlock}>
              <CheckBox
                boxType="square"
                disabled={false}
                value={classA}
                onValueChange={newValue => setClassA(newValue)}
              />
              <Text style={styles.checkText}>A</Text>
            </View>
            <View style={styles.checkBlock}>
              <CheckBox
                boxType="square"
                disabled={false}
                value={classAPlus}
                onValueChange={newValue => setClassAPlus(newValue)}
              />
              <Text style={styles.checkText}>A+</Text>
            </View>
            <View style={styles.checkBlock}>
              <CheckBox
                boxType="square"
                disabled={false}
                value={classB}
                onValueChange={newValue => setClassB(newValue)}
              />
              <Text style={styles.checkText}>B</Text>
            </View>
            <View style={styles.checkBlock}>
              <CheckBox
                boxType="square"
                disabled={false}
                value={classC}
                onValueChange={newValue => setClassC(newValue)}
              />
              <Text style={styles.checkText}>C</Text>
            </View>
            <View style={styles.checkBlock}>
              <CheckBox
                boxType="square"
                disabled={false}
                value={classD}
                onValueChange={newValue => setClassD(newValue)}
              />
              <Text style={styles.checkText}>D</Text>
            </View>
          </View>
        </View>
        <View style={styles.sectionGrey}>
          <Text style={styles.label}>Тип склада:</Text>
        </View>
        <View style={styles.formBlock}>
          {/* <MyPicker
            modalOpen={transportTypeModal}
            setModalOpen={setTransporTypetModal}
            value={transportTypeId}
            setValue={setTransportTypeId}
            data={[...additionalData.transportTypes, {id: null, name: 'Любой'}]}
            valueString={transportTypeString}
            setValueString={setTransportTypeString}
            placeholder="Класс склада"
          /> */}

          <MyPicker
            modalOpen={storageTypeModal}
            setModalOpen={setStorageTypeModal}
            value={storageTypeId}
            setValue={setStorageTypeId}
            data={PickerData(storageType, 'Выбрать тип склада')}
            valueString={storageTypeString}
            setValueString={setStorageTypeString}
            placeholder="Тип склада"
          />
        </View>
        <View style={styles.sectionGrey}>
          <Text style={styles.label}>Стоимость аренды:</Text>
        </View>
        <View style={styles.formBlock}>
          <CustomInput
            input={price}
            setInput={setPrice}
            label="Цена"
            placeholder={'0'}
            type={'number'}
          />
        </View>
        <View style={styles.sectionGrey}>
          <Text style={styles.label}>Дополнительные параметры:</Text>
        </View>
        <View style={styles.formBlock}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 10,
            }}>
            <View style={[styles.checkBlock, {marginHorizontal: 20}]}>
              <CheckBox
                boxType="square"
                disabled={false}
                value={shelf}
                onValueChange={newValue => setShelf(newValue)}
              />
              <Text style={styles.checkText}>Стеллажи</Text>
            </View>
            <View style={[styles.checkBlock, {marginHorizontal: 20}]}>
              <CheckBox
                boxType="square"
                disabled={false}
                value={ramp}
                onValueChange={newValue => setRamp(newValue)}
              />
              <Text style={styles.checkText}>Пандус</Text>
            </View>
          </View>
        </View>
        <Pressable style={styles.formBlock} onPress={additionalParams}>
          <View style={styles.additParams}>
            <Text style={styles.additParamsText}>
              Система пожаротушения и сигнализация, Вентиляция.
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
  rightButton: {
    marginRight: 20,
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
  checkBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  checkText: {
    fontFamily: 'IBMPlexSans-SemiBold',
    fontSize: 15,
    marginHorizontal: 10,
  },
  fileWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 80,
    height: 30,
    marginHorizontal: 15,
  },
  imageNote: {
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 13,
    lineHeight: 16,
    color: MyTheme.grey,
  },
  swiper: {
    width: '100%',
    alignItems: 'center',
    height: 230,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  removeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  imageCircle: {
    position: 'absolute',
    left: 10,
    top: 10,
    width: 20,
    height: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageNumber: {
    fontFamily: 'IBMPlexSans-SemiBold',
    fontSize: 14,
    color: 'white',
  },
});
