import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
  Pressable,
} from 'react-native';
import {MyTheme} from '../../../components/layout/theme';
import InputDouble from '../../../components/SearchElements/InputDouble';
import MyPicker from '../../../components/SearchElements/MyPicker';
import MyDatePicker from '../../../components/SearchElements/MyDatePicker';
import {useNavigation, useRoute} from '@react-navigation/core';
import {useDispatch, useSelector} from 'react-redux';
import {getTransportTypes} from '../../../redux/actions/additionalData';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {getFilteredCargoPosts} from '../../../redux/actions/filteredData';

export default function CargoFilterScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  //!Set Destination
  const [fromString, setFromString] = useState('Алматы, Казахстан');
  const [destinString, setDestinString] = useState('Нур-Султан, Казахстан');
  const [fromCoord, setFromCoord] = useState(null);
  const [destinCoord, setDestinCoord] = useState(null);

  useEffect(() => {
    if (route.params) {
      setFromString(route.params.startString);
      setDestinString(route.params.finishString);
      setFromCoord(route.params.startCoord);
      setDestinCoord(route.params.finishCoord);
    }
  }, [route.params]);
  //---------------------------------------//
  //!Transport
  const transportPickerData = () => {
    const newData = [
      ...additionalData.transportTypes,
      {id: null, name: 'Любой'},
    ];
    return newData;
  };
  const [transportModal, setTransportModal] = useState(false);
  const [transportId, setTransportId] = useState(null);
  const [transportString, setTransportString] = useState('Любой');
  //---------------------------------------//
  //! Net and Volume
  const [netStart, setNetStart] = useState(null);
  const [netEnd, setNetEnd] = useState(null);
  const [volumeStart, setVolumeStart] = useState(null);
  const [volumeEnd, setVolumeEnd] = useState(null);
  //---------------------------------------//
  //! Set Loading Date
  const [isLoadingDateVisible, setIsLoadingDateVisibility] = useState(false);
  const [loadingDate, setLoadingDate] = useState(null);
  const [loadingDatePlaceholder, setLoadingDatePlaceholder] =
    useState('Выберите дату');

  //! Set Unloading Date
  const [isUnloadingDateVisible, setIsUnloadingDateVisibility] =
    useState(false);
  const [unloadingDate, setUnloadingDate] = useState(null);
  const [unloadingDatePlaceholder, setUnloadingDatePlaceholder] =
    useState('Выберите дату');
  //---------------------------------------//

  //! set Height, Width, Length

  const [widthStart, setWidthStart] = useState(null);
  const [widthtEnd, setWidthEnd] = useState(null);

  const [lengthStart, setLengthStart] = useState(null);
  const [lengthEnd, setLengthEnd] = useState(null);

  const [heightStart, setHeightStart] = useState(null);
  const [heightEnd, setHeightEnd] = useState(null);
  //---------------------------------------//
  const additionalData = useSelector(state => state.additionalData);
  useEffect(() => {
    dispatch(getTransportTypes());
  }, []);

  const filteredData = useSelector(state => state.filderedData);

  const getSearchResults = () => {
    const data = {
      fromCoord,
      destinCoord,
      transportId,
      netStart,
      netEnd,
      volumeStart,
      volumeEnd,
      loadingDate,
      unloadingDate,
      widthStart,
      widthtEnd,
      lengthStart,
      lengthEnd,
      heightStart,
      heightEnd,
    };
    dispatch(getFilteredCargoPosts(data));
    // navigation.navigate('MainCargo', {screen: 'CargoResults'});
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <Pressable
          style={styles.formBlock}
          onPress={() => navigation.navigate('GooglePlaces')}>
          <View style={styles.visibleContainer}>
            <View>
              <Text style={styles.placeholderLabel}>Откуда</Text>
              <Text style={styles.placeText}>{fromString}</Text>
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
              <Text style={styles.placeText}>{destinString}</Text>
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
          <View>
            <MyPicker
              modalOpen={transportModal}
              setModalOpen={setTransportModal}
              value={transportId}
              setValue={setTransportId}
              data={transportPickerData()}
              valueString={transportString}
              setValueString={setTransportString}
              placeholder="Транспорт"
            />
            <View style={styles.inputBlock}>
              <InputDouble
                inputFrom={netStart}
                inputTo={netEnd}
                setInputFrom={setNetStart}
                setInputTo={setNetEnd}
                label="Вес, тн"
              />
              <InputDouble
                inputFrom={volumeStart}
                inputTo={volumeEnd}
                setInputFrom={setVolumeStart}
                setInputTo={setVolumeEnd}
                label="Объем, м3"
              />
            </View>
          </View>
        </View>
        <View style={styles.formBlock}>
          <View>
            <MyDatePicker
              visibility={isLoadingDateVisible}
              setVisible={setIsLoadingDateVisibility}
              setDate={setLoadingDate}
              setTitle={setLoadingDatePlaceholder}
              placeholder={loadingDatePlaceholder}
              title={'Дата погрузки'}
            />
          </View>
          <View>
            <MyDatePicker
              visibility={isUnloadingDateVisible}
              setVisible={setIsUnloadingDateVisibility}
              setDate={setUnloadingDate}
              setTitle={setUnloadingDatePlaceholder}
              placeholder={unloadingDatePlaceholder}
              title={'Дата выгрузки'}
            />
          </View>
        </View>
        <View style={styles.formBlock}>
          <View style={styles.inputBlock}>
            <InputDouble
              inputFrom={widthStart}
              inputTo={widthtEnd}
              setInputFrom={setWidthStart}
              setInputTo={setWidthEnd}
              label="Ширина, см"
            />
            <InputDouble
              inputFrom={lengthStart}
              inputTo={lengthEnd}
              setInputFrom={setLengthStart}
              setInputTo={setLengthEnd}
              label="Длина, см"
            />
            <InputDouble
              inputFrom={heightStart}
              inputTo={heightEnd}
              setInputFrom={setHeightStart}
              setInputTo={setHeightEnd}
              label="Высота, см"
            />
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={getSearchResults}>
          <Text style={styles.buttonText}>НАЙТИ ГРУЗЫ</Text>
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
  button: {
    width: '80%',
    height: 50,
    backgroundColor: MyTheme.blue,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  buttonText: {
    fontSize: 15,
    lineHeight: 24,
    color: 'white',
    // fontFamily:'IBM-Bold',
    fontWeight: 'bold',
  },
  visibleContainer: {
    width: Dimensions.get('window').width - 20,
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
    // fontFamily: 'IBM-Regular',
    fontSize: 13,
    lineHeight: 16,
    color: MyTheme.grey,
  },
  placeText: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    // fontFamily: 'IBM-Regular',
    fontSize: 17,
    lineHeight: 24,
    color: MyTheme.black,
  },
});
