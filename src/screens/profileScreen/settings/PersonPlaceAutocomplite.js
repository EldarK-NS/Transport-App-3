import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {MyTheme} from '../../../components/layout/theme';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useNavigation} from '@react-navigation/core';
import {useDispatch} from 'react-redux';
import {saveStartEndPlaces} from '../../../redux/actions/transitStore';
export default function StoragePlaceAutocomplite() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  //!StartPlace
  const [place, setPlace] = useState(null);
  const [placeString, setPlaceString] = useState(null);

  const GoBack = () => {
    const data = {
      start: {
        string: placeString,
        id: place,
      },
    };
    dispatch(saveStartEndPlaces(data));
    navigation.navigate('PersonalInformation');
  };

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Населенный пункт"
        onPress={(data, details = null) => {
          setPlaceString(details.address_components[0].long_name);
          setPlace(data.place_id);
        }}
        styles={{
          textInput: styles.visibleContainer,
          container: {
            position: 'absolute',
            top: 10,
            left: 10,
            right: 10,
          },
          listView: {
            position: 'absolute',
            top: 70,
          },
        }}
        fetchDetails
        query={{
          key: 'AIzaSyD-kk951XgVXsv3b0yqJntwbxDslSP2Oxo',
          language: 'ru',
        }}
      />
      <TouchableOpacity onPress={GoBack} style={styles.confirm}>
        <Text style={styles.buttonText}>ПОДТВЕРДИТЬ</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  visibleContainer: {
    width: Dimensions.get('window').width - 20,
    height: 60,
    borderBottomColor: MyTheme.grey,
    borderBottomWidth: 0.5,
  },
  confirm: {
    marginTop: 370,
    alignSelf: 'center',
    width: 300,
    height: 50,
    backgroundColor: MyTheme.blue,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'IBMPlexSans-SemiBold',
  },
});
