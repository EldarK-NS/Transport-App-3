import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Pressable, Dimensions} from 'react-native';
import {MyTheme} from '../../../../components/layout/theme';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation, useRoute} from '@react-navigation/core';
import MapDistanceComponent from '../../../../components/Maps/MapDistanceComponent';
import axios from 'axios';

export default function CalculateDistance() {
  const navigation = useNavigation();
  const route = useRoute();
  //!Set Destination++++
  const [fromString, setFromString] = useState(null);
  const [destinString, setDestinString] = useState(null);
  const [fromCoord, setFromCoord] = useState(null);
  const [destinCoord, setDestinCoord] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  const param = route.params;

  useEffect(() => {
    if (param) {
      setFromCoord(param.data.start.id);
      setFromString(param.data.start.string);
      setDestinCoord(param.data.end.id);
      setDestinString(param.data.end.string);
    }
    return () => {
      setFromCoord(null);
      setFromString(null);
      setDestinCoord(null);
      setDestinString(null);
    };
  }, [param]);

  const getDistance = async () => {
    try {
      const res = await axios(
        `https://test.money-men.kz/api/distance?from=${fromCoord}&to=${destinCoord}`,
      );
      if (res.data.success === true) {
        setDistance(res.data.distance);
        setDuration(res.data.duration);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (fromCoord !== null && destinCoord !== null) {
      getDistance();
    }
    return () => {
      setDistance(null);
      setDuration(null);
    };
  }, [fromCoord, destinCoord]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Расчет расстояний</Text>
      <Text style={[styles.subTitle, {textAlign: 'center'}]}>
        Добавьте место отправления и прибытия, и расcчитайте расстояние и
        маршрут между ними
      </Text>
      <Pressable
        style={styles.formBlock}
        onPress={() => navigation.navigate('WidgetAutocomplite')}>
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
      <View style={styles.informBlock}>
        <View style={styles.informWrapper}>
          <Text style={styles.informTitle}>Расстояние:</Text>
          <Text style={styles.informSubtitle}>{distance}</Text>
        </View>
        <View style={styles.informWrapper}>
          <Text style={styles.informTitle}>Время в пути:</Text>
          <Text style={styles.informSubtitle}>{duration}</Text>
        </View>
      </View>
      <View style={styles.map}>
        {fromString !== null && destinString !== null ? (
          <MapDistanceComponent
            coordinates={{pointA_Title: fromString, pointB_Title: destinString}}
          />
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
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
    marginBottom: 5,
    width: '83%',
  },
  formBlock: {
    backgroundColor: 'white',
    marginVertical: 5,
    width: '100%',
    alignItems: 'center',
    borderRadius: 7,
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
  map: {
    width: Dimensions.get('window').width - 30,
    height: Dimensions.get('window').height / 2,
    borderWidth: 0.5,
    borderColor: MyTheme.grey,
  },
  informBlock: {
    width: Dimensions.get('window').width - 20,
    marginVertical: 10,
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  informWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  informTitle: {
    fontSize: 17,
    fontFamily: 'IBMPlexSans-SemiBold',
    marginRight: 10,
  },
  informSubtitle: {
    fontSize: 17,
    fontFamily: 'IBMPlexSans-SemiBold',
    color: MyTheme.blue,
  },
});
