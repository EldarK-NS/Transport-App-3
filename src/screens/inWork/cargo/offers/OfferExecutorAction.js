import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/core';
import {useDispatch, useSelector} from 'react-redux';
import {MyTheme} from '../../../../components/layout/theme';
import ContactBlock from '../../../../components/CardElements/ContactBlock';
import axios from 'axios';

//FIXME: нет url на отказ от предложения и получения данных по user_id, нужно модальное окно для указания причины отказа
//FIXME: подтверждение заказа не работает, возможно нужно передать id самой заявки

export default function OfferExecutorAction() {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const data = route.params;
  const auth = useSelector(state => state.auth);

  const acceptOffer = async () => {
    try {
      const res = await axios(
        `https://test.money-men.kz/api/acceptPost?token=${auth.token}&user_id=${data.data.user_id}`,
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const declineOffer = async () => {
    try {
      const res = await axios();
    } catch (error) {}
  };

  const currencyIcon = x => {
    if (x === 1) {
      return <Text>&#8376;</Text>;
    } else if (x === 2) {
      return <Text>&#8381;</Text>;
    } else if (x === 3) {
      return <Text>&#8372;</Text>;
    } else if (x === 4) {
      return <Text>&#65129;</Text>;
    } else if (x === 5) {
      return <Text>&#8364;</Text>;
    }
  };

  const currencyDescr = x => {
    if (x === 1) {
      return <Text>KZ тенге</Text>;
    } else if (x === 2) {
      return <Text> RU рубль</Text>;
    } else if (x === 3) {
      return <Text>UA гривна</Text>;
    } else if (x === 4) {
      return <Text>US доллар</Text>;
    } else if (x === 5) {
      return <Text>EU евро</Text>;
    }
  };

  //!Replace price
  function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  //!Call and Message
  const handleCall = () => {
    console.log('Call!!!');
  };
  const handleMessage = () => {
    console.log('Message!!!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionGrey}>
        <Text style={styles.label}>ЦЕНА:</Text>
      </View>
      <View style={styles.upBlock}>
        <View style={styles.rowPrice}>
          <View style={styles.cyrrencyWrapper}>
            <Text style={styles.currency}>
              {currencyIcon(data.data.currency)}
            </Text>
          </View>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>
              {numberWithSpaces(data.data.price)}{' '}
              {currencyDescr(data.data.currency)}
            </Text>
            <Text style={styles.date}>изм. {data.data.created_at}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={acceptOffer}>
          <Text style={styles.buttonText}>ПРИНЯТЬ ПРЕДЛОЖЕНИЕ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: MyTheme.black,
            },
          ]}
          onPress={declineOffer}>
          <Text
            style={[
              styles.buttonText,
              {color: MyTheme.black, fontFamily: 'IBMPlexSans-Regular'},
            ]}>
            ОТКАЗАТЬСЯ С ПРИЧИНОЙ
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sectionGrey}>
        <Text style={styles.label}>КОНТАКТЫ:</Text>
      </View>
      <ContactBlock
        companyName={data.data.fullName}
        personName="Иванов Иван"
        position={'Экспедитор'}
        phoneNumber1="+7 777 555 66 11"
        phoneNumber2="+7 777 444 33 22"
        email="test@trst.com"
        rating={5}
        Call={handleCall}
        Message={handleMessage}
      />
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
  upBlock: {
    width: Dimensions.get('window').width - 30,
    marginVertical: 15,
  },
  rowPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  cyrrencyWrapper: {
    width: 25,
    height: 25,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: MyTheme.blue,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 25,
  },
  currency: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 18,
    color: MyTheme.blue,
  },
  priceWrapper: {},
  price: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 20,
    lineHeight: 21,
    color: MyTheme.black,
  },
  date: {
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 14,
    lineHeight: 16,
    color: MyTheme.grey,
  },
  label: {
    fontFamily: 'IBMPlexSans-SemiBold',
    fontSize: 15,
    lineHeight: 24,
    color: MyTheme.grey,
  },
  sectionGrey: {
    height: 35,
    width: '100%',
    backgroundColor: MyTheme.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: MyTheme.blue,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 15,
    lineHeight: 24,
    color: 'white',
    fontFamily: 'IBMPlexSans-Bold',
  },
});
