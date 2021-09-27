import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import axios from 'axios';
import moment from 'moment';
import {useNavigation} from '@react-navigation/core';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {MyTheme} from '../layout/theme';

export default function SearchResultItemCustomer(props) {
  const {
    from,
    to,
    fromId,
    toId,
    driver,
    net,
    volume,
    type_transport,
    start_date,
    title,
    rating,
    companyName,
    price,
    status,
    auth,
    updated_at,
    path,
    postId,
    isFavorite,
    inProgress,
  } = props;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [token, setToken] = useState(null);
  const [distance, setDistance] = useState('');

  const statusColors = x => {
    if (x == 'Ожидает') {
      return {background: MyTheme.yellow, color: MyTheme.black};
    } else if (x == 'Отказ') {
      return {background: MyTheme.grey, color: MyTheme.black};
    } else if (x == 'Принято') {
      return {background: MyTheme.blue, color: 'white'};
    }
  };

  //! Get Distance
  const getDistance = async () => {
    try {
      const res = await axios(
        `https://test.money-men.kz/api/distance?from=${fromId}&to=${toId}`,
      );
      setDistance(res.data.distance);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDistance();
  }, [fromId, toId]);

  //!Replace price
  function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate(path, {
          id: postId,
          from: 'filter',
          distance,
        });
      }}>
      <View style={styles.mainBlock}>
        <View style={styles.mainLeftSide}>
          <View style={styles.titleBlock}>
            {status ? (
              <FontAwesome
                name="circle"
                size={8}
                color={status ? statusColors(status).background : 'black'}
                style={styles.dot}
              />
            ) : null}

            <Text style={styles.title}>
              {from}{' '}
              <FontAwesome5
                name="arrow-right"
                size={12}
                color="black"
                style={styles.arrowIcon}
              />{' '}
              {to} <Text style={styles.dist}> {distance}</Text>
            </Text>
          </View>

          {inProgress !== null ? (
            <Text style={styles.driver}>Водитель: {driver}</Text>
          ) : null}

          <Text style={styles.info}>
            {net} т, {volume} m&#179;, {type_transport},{' '}
            {moment(new Date(start_date)).format('MM/DD/YYYY')}, {title}
          </Text>
        </View>
        <View style={styles.mainRightSide}>
          {status !== null ? (
            <View style={styles.statusBlock}>
              <View
                style={{
                  backgroundColor: statusColors(status).background,
                  width: '100%',
                  padding: 2,
                }}>
                <Text
                  style={[
                    styles.coloredAction,
                    {color: statusColors(status).color},
                  ]}>
                  {status}
                </Text>
              </View>
              <Text style={styles.yourPrice}>ВАША ЦЕНА</Text>

              <Text style={styles.price}>
                {numberWithSpaces(price)}
                <Text style={styles.currency}> &#8376;</Text>
              </Text>
            </View>
          ) : (
            <View style={styles.barePrice}>
              <Text style={styles.price}>
                {numberWithSpaces(price)}{' '}
                <Text style={styles.currency}> &#8376;</Text>{' '}
              </Text>
              <Text style={styles.tax}>без НДС</Text>
            </View>
          )}
          {status === null ? (
            <Pressable onPress={addToFavorite}>
              {isFavorite ? (
                <AntDesign
                  name="star"
                  size={22}
                  color={MyTheme.blue}
                  style={styles.iconStar}
                />
              ) : (
                <AntDesign
                  name="staro"
                  size={22}
                  color={MyTheme.grey}
                  style={styles.iconStar}
                />
              )}
            </Pressable>
          ) : null}
        </View>
      </View>
      <View style={styles.footerBlock}>
        {status !== null ? (
          <View style={styles.footerContainer}>
            <View style={styles.companyDate}>
              <Text style={styles.companyName}>
                ТОО &laquo;ОУСА Альянс&raquo;
              </Text>
              <Text style={styles.reason}>
                изм. {moment(updated_at).format('LT')}
              </Text>
            </View>
            {status !== null && status === 'Ожидает' ? null : (
              <View style={styles.cargoStatus}>
                {status === 'Отказ' ? (
                  <View style={styles.reasonDenied}>
                    <Text style={styles.reason}>Причина отказа:</Text>
                    <Text style={styles.denied}>{status.reason}</Text>
                  </View>
                ) : status === 'Принято' ? (
                  <Pressable style={styles.buttonConfirm}>
                    <Text style={styles.buttonTitle}>ПОДТВЕРДИТЬ ЗАЯВКУ</Text>
                  </Pressable>
                ) : null}
              </View>
            )}
          </View>
        ) : (
          <View style={styles.companyDate}>
            {auth ? (
              <View style={styles.footerLeftSide}>
                <View style={styles.stars}>
                  {ratingsStar(rating, 6).map((item, index) => {
                    return (
                      <FontAwesome
                        name="star"
                        size={17}
                        color="#43CC8E"
                        key={index}
                        style={styles.smallStar}
                      />
                    );
                  })}
                </View>
                <Text style={styles.reason}>{companyName}</Text>
              </View>
            ) : (
              <View style={styles.lock}>
                <MaterialIcons name="lock" size={14} color="#A2A9B2" />
                <Text style={[styles.reason, {marginLeft: 2, fontSize: 12}]}>
                  Контакты доступны после регистрации
                </Text>
              </View>
            )}
            <Text style={styles.reason}>
              изм. {moment(updated_at).format('LT')}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: 15,
    paddingVertical: 15,
    paddingHorizontal: 5,
    width: Dimensions.get('window').width - 30,
    // width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: MyTheme.grey,
  },
  mainBlock: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  mainLeftSide: {
    // maxWidth: Dimensions.get('window').width * 0.68,
    width: '60%',
  },
  titleBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 17,
    marginLeft: 3,
    lineHeight: 20,
    color: MyTheme.black,
    fontFamily: 'IBMPlexSans-Medium',
  },
  dot: {
    alignSelf: 'flex-start',
    marginTop: 7,
    marginRight: 4,
  },
  arrowIcon: {},
  dist: {
    fontSize: 14,
    lineHeight: 18,
    marginLeft: 10,
    marginTop: 3,
    color: MyTheme.blue,
    fontFamily: 'IBMPlexSans-Regular',
  },
  driver: {
    fontSize: 14,
    lineHeight: 18,
    color: MyTheme.black,
    marginTop: 4,
    fontFamily: 'IBMPlexSans-Medium',
  },
  info: {
    fontSize: 14,
    lineHeight: 18,
    marginTop: 10,
    fontFamily: 'IBMPlexSans-Regular',
    color: MyTheme.black,
  },
  hiddenText: {
    fontSize: 12,
    lineHeight: 16,
    color: MyTheme.grey,
    fontFamily: 'IBMPlexSans-Regular',
  },
  mainRightSide: {
    justifyContent: 'center',
    // maxWidth: Dimensions.get('window').width * 0.28,
    width: '30%',
  },
  statusBlock: {
    borderWidth: 0.5,
    borderColor: MyTheme.grey,
    alignItems: 'center',
    marginBottom: 10,
  },
  coloredAction: {
    fontSize: 12,
    fontFamily: 'IBMPlexSans-SemiBold',
    alignSelf: 'center',
  },
  yourPrice: {
    fontSize: 10,
    fontFamily: 'IBMPlexSans-SemiBold',
    color: MyTheme.grey,
    marginVertical: 4,
  },
  barePrice: {
    alignItems: 'flex-end',
  },
  tax: {
    fontSize: 12,
    color: MyTheme.grey,
    fontFamily: 'IBMPlexSans-Regular',
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  companyName: {
    fontSize: 12,
    color: MyTheme.grey,
    fontFamily: 'IBMPlexSans-Regular',
    alignSelf: 'flex-end',
  },
  price: {
    fontSize: 16,
    color: MyTheme.black,
    fontFamily: 'IBMPlexSans-SemiBold',
    lineHeight: 24,
    // marginHorizontal: 5,
  },
  currency: {
    fontSize: 14,
  },
  iconStar: {
    alignSelf: 'flex-end',
  },
  footerContainer: {
    flexDirection: 'column',
  },
  companyDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reason: {
    fontSize: 12,
    color: MyTheme.grey,
    fontFamily: 'IBMPlexSans-Regular',
  },
  reasonDenied: {
    backgroundColor: MyTheme.lightGrey,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    padding: 2,
  },
  denied: {
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 14,
  },
  buttonConfirm: {
    backgroundColor: MyTheme.blue,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    paddingVertical: 10,
  },
  buttonTitle: {
    color: 'white',
  },
  footerLeftSide: {
    flexDirection: 'row',
  },
  stars: {
    flexDirection: 'row',
    marginRight: 5,
  },
  smallStar: {
    marginHorizontal: 1,
  },
  lock: {
    flexDirection: 'row',
  },
});
