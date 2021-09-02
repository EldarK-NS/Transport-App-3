import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {MyTheme} from '../layout/theme';
import moment from 'moment';
import {useNavigation} from '@react-navigation/core';

export default function SearchResultItem(props) {
  const navigation = useNavigation();
  const {data} = props;
  function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
  const ratingsStar = (num, max) => {
    let rating = [];
    for (let i = 1; i < max; i++) {
      let x = max - num - i;
      rating.push(x);
    }
    return rating.reverse();
  };
  const getCargoCard = () => {
    if (data.navPath) {
      navigation.navigate(data.navPath, {screen: data.path});
    } else {
      navigation.navigate(data.path);
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={getCargoCard}>
      <View style={styles.mainBlock}>
        <View style={styles.mainLeftSide}>
          <View style={styles.titleBlock}>
            <FontAwesome
              name="circle"
              size={8}
              color={
                data.details.status
                  ? data.details.status.bacgroundcolor
                  : 'black'
              }
              style={styles.dot}
            />
            <Text style={styles.title}>
              {data.details.from_string}{' '}
              <FontAwesome5
                name="arrow-right"
                size={12}
                color="black"
                style={styles.arrowIcon}
              />{' '}
              {data.details.to_string}
            </Text>
          </View>

          {data.details.status ? (
            <Text style={styles.driver}>
              Водитель: {data.details.status.driver}
            </Text>
          ) : (
            <Text style={styles.dist}> {data.details.distance}</Text>
          )}

          <Text style={styles.info}>
            {data.details.net}т, {data.details.volume}m3,{' '}
            {data.details.type_transport},{' '}
            {moment(data.details.start_date).format('l')}, {data.details.title}
          </Text>
        </View>
        <View style={styles.mainRightSide}>
          {data.details.status ? (
            <View style={styles.statusBlock}>
              <View
                style={{
                  backgroundColor: data.details.status.bacgroundcolor,
                  width: '100%',
                  padding: 2,
                }}>
                <Text style={styles.coloredAction}>
                  {data.details.status.title}
                </Text>
              </View>
              <Text style={styles.yourPrice}>ВАША ЦЕНА</Text>

              <Text style={styles.price}>
                {numberWithSpaces(data.details.price)}
                <Text style={styles.currency}> &#8376;</Text>
              </Text>
            </View>
          ) : (
            <View style={styles.barePrice}>
              <Text style={styles.price}>
                {numberWithSpaces(data.details.price)}{' '}
                <Text style={styles.currency}> &#8376;</Text>{' '}
              </Text>
              <Text style={styles.tax}>без НДС</Text>
            </View>
          )}
          {!data.details.status && (
            <AntDesign
              name="staro"
              size={22}
              color={MyTheme.grey}
              style={styles.iconStar}
            />
          )}
        </View>
      </View>
      <View style={styles.footerBlock}>
        {data.details.status ? (
          <View style={styles.footerContainer}>
            <View style={styles.companyDate}>
              <Text style={styles.tax}>ТОО &laquo;ОУСА Альянс&raquo;</Text>
              <Text style={styles.reason}>
                изм. {moment(data.updated_at).format('LT')}
              </Text>
            </View>
            <View style={styles.cargoStatus}>
              {data.details.status.title === 'ОТКАЗ' ? (
                <View style={styles.reasonDenied}>
                  <Text style={styles.reason}>Причина отказа:</Text>
                  <Text style={styles.denied}>
                    {data.details.status.reason}
                  </Text>
                </View>
              ) : data.details.status.title === 'ПРИНЯТО' ? (
                <Pressable style={styles.buttonConfirm}>
                  <Text style={styles.buttonTitle}>ПОДТВЕРДИТЬ ЗАЯВКУ</Text>
                </Pressable>
              ) : null}
            </View>
          </View>
        ) : (
          <View style={styles.companyDate}>
            {data.auth ? (
              <View style={styles.footerLeftSide}>
                <View style={styles.stars}>
                  {ratingsStar(data.details.rating, 6).map((item, index) => {
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
                <Text style={styles.reason}>ТОО &laquo;ОУСА Альянс&raquo;</Text>
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
              изм. {moment(data.updated_at).format('LT')}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    // width: Dimensions.get('window').width - 30,
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: MyTheme.grey,
  },
  mainBlock: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    marginBottom: 5,
  },
  mainLeftSide: {
    // maxWidth: Dimensions.get('window').width * 0.68,
    width: '68%',
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
    // fontFamily: 'IBM-Medium',
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
    color: MyTheme.blue,
    // fontFamily: 'IBM-Regular',
  },
  driver: {
    fontSize: 14,
    lineHeight: 18,
    color: MyTheme.black,
    marginTop: 4,
    // fontFamily: 'IBM-Medium',
  },
  info: {
    fontSize: 14,
    lineHeight: 18,
    marginTop: 10,
    // fontFamily: 'IBM-Regular',
    color: MyTheme.black,
  },
  hiddenText: {
    fontSize: 12,
    lineHeight: 16,
    color: MyTheme.grey,
    // fontFamily: 'IBM-Regular',
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
    // fontFamily: 'IBM-SemiBold',
    alignSelf: 'center',
  },
  yourPrice: {
    fontSize: 10,
    // fontFamily: 'IBM-SemiBold',
    color: MyTheme.grey,
  },
  barePrice: {
    alignItems: 'flex-end',
  },
  tax: {
    fontSize: 12,
    color: MyTheme.grey,
    // fontFamily: 'IBM-Regular',
    alignSelf: 'center',
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    color: MyTheme.black,
    // fontFamily: 'IBM-SemiBold',
    lineHeight: 24,
    marginHorizontal: 5,
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
    // fontFamily: 'IBM-Regular',
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
    // fontFamily: 'IBM-Regular',
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
