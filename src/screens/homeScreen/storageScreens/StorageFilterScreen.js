import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useDispatch, useSelector} from 'react-redux';

import {MyTheme} from '../../../components/layout/theme';
import InputDouble from '../../../components/SearchElements/InputDouble';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {removeDataForCargoPost} from '../../../redux/actions/transitStore';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

//TODO: нужно ли очищать поля после возврата назад из результатов поиска

export default function StorageFilterScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const transitData = useSelector(state => state.transitData);
  //!Set Destination++++
  const [placeCoord, setPlaceCoord] = useState(null);
  const [placeString, setPlaceString] = useState(null);

  useEffect(() => {
    if (transitData.startPlaceCargo !== null) {
      setPlaceCoord(transitData.startPlaceCargo.id);
      setPlaceString(transitData.startPlaceCargo.string);
    }
  }, [transitData.startPlaceCargo]);
  //?---------------------------------------//

  //!Quantity+++
  const [areaStart, setAreaStart] = useState(null);
  const [areaEnd, setAreaEnd] = useState(null);
  //?---------------------------------------//

  //!Price+++
  const [priceStart, setPriceStart] = useState(null);
  const [priceEnd, setPriceEnd] = useState(null);

  //?---------------------------------------//

  const getSearchResults = () => {
    const data = {
      city_id: placeCoord,
      area_start: areaStart,
      area_end: areaEnd,
      price_start: priceStart,
      price_end: priceEnd,
    };

    dispatch(removeDataForCargoPost());
    navigation.navigate('StorageResults', {data});
  };

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      enableAutomaticScroll={false}>
      <View style={styles.container}>
        <View style={styles.sectionGrey}>
          <Text style={styles.label}>Место дислокации склада:</Text>
        </View>
        <Pressable
          style={styles.formBlock}
          onPress={() => navigation.navigate('StoragePlace')}>
          <View style={styles.visibleContainer}>
            <View>
              <Text style={styles.placeholderLabel}>Населенный пункт</Text>
              <Text style={styles.placeText}>{placeString}</Text>
            </View>
            <AntDesignIcon
              name="caretdown"
              size={10}
              color={MyTheme.black}
              style={{marginRight: 10}}
            />
          </View>
        </Pressable>
        <View style={styles.formBlock}></View>
        <View style={styles.sectionGrey}>
          <Text style={styles.label}>Площадь, Стоимость аренды:</Text>
        </View>

        <View style={styles.formBlock}>
          <View style={styles.inputBlock}>
            <InputDouble
              inputFrom={areaStart}
              inputTo={areaEnd}
              setInputFrom={setAreaStart}
              setInputTo={setAreaEnd}
              label="Площадь"
            />
            <InputDouble
              inputFrom={priceStart}
              inputTo={priceEnd}
              setInputFrom={setPriceStart}
              setInputTo={setPriceEnd}
              label="Цена"
            />
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={getSearchResults}>
          <Text style={styles.buttonText}>НАЙТИ СКЛАДЫ</Text>
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
    marginTop: 100,
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
    marginVertical: 15,
  },
  buttonText: {
    fontSize: 15,
    lineHeight: 24,
    color: 'white',
    fontFamily: 'IBMPlexSans-Bold',
  },
  visibleContainer: {
    width: Dimensions.get('window').width - 20,
    height: 50,
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
    fontSize: 12,
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
    color: MyTheme.grey,
    fontWeight: 'bold',
  },
  sectionGrey: {
    height: 35,
    width: '100%',
    backgroundColor: MyTheme.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
