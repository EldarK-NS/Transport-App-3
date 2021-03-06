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

export default function AuctionAutocomplite() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  //!StartPlace
  const [startPlace, setStartPlace] = useState(null);
  const [startPlaceString, setStartPlaceString] = useState(null);

  //!FinishPlace
  const [finishPlace, setFinishPlace] = useState(null);
  const [finishPlaceString, setFinishPlaceString] = useState(null);

  const GoBack = () => {
    const data = {
      start: {
        string: startPlaceString,
        id: startPlace,
      },
      end: {
        string: finishPlaceString,
        id: finishPlace,
      },
    };
    dispatch(saveStartEndPlaces(data));
    navigation.navigate('AddAuctionPostForm');
  };

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Откуда"
        onPress={(data, details = null) => {
          if (details.formatted_address.includes('Казахстан')) {
            setStartPlaceString(
              `${details.address_components[0].long_name}, KZ`,
            );
          } else {
            setStartPlaceString(
              `${details.address_components[0].long_name}, ${details.address_components[2].short_name}`,
            );
          }
          setStartPlace(data.place_id);
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
            top: 140,
          },
        }}
        fetchDetails
        query={{
          key: 'AIzaSyD-kk951XgVXsv3b0yqJntwbxDslSP2Oxo',
          language: 'ru',
        }}
      />
      <GooglePlacesAutocomplete
        placeholder="Куда"
        onPress={(data, details = null) => {
          if (details.formatted_address.includes('Казахстан')) {
            setFinishPlaceString(
              `${details.address_components[0].long_name}, KZ`,
            );
          } else {
            setFinishPlaceString(
              `${details.address_components[0].long_name}, ${details.address_components[2].short_name}`,
            );
          }
          setFinishPlace(data.place_id);
        }}
        styles={{
          textInput: styles.visibleContainer,
          container: {
            position: 'absolute',
            top: 80,
            left: 10,
            right: 10,
            zIndex: 0,
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
    marginTop: 430,
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
    fontFamily: 'IBMPlexSans-Regular',
  },
});
