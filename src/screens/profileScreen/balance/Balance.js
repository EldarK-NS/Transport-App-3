import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {MyTheme} from '../../../components/layout/theme';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

export default function Balance() {
  return (
    <KeyboardAwareScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Text style={styles.mainTitle}>Мой баланс</Text>
        <View style={styles.section}>
          <View style={styles.downSection}>
            <View style={styles.content}>
              <View style={styles.contentText}>
                <Text style={styles.title}>Статус:</Text>
                <Text style={styles.info}>Лимитед</Text>
              </View>
              <View style={styles.contentText}>
                <Text style={styles.title}>Рейтинг:</Text>
                <Text style={styles.info}>
                  <Feather name="star" size={20} color={MyTheme.blue} />
                  5.0
                </Text>
              </View>
              <View style={styles.contentText}>
                <Text style={styles.title}>Ваш баланс:</Text>
                <Text style={[styles.info, {color: MyTheme.green}]}>
                  15 000 &#8376;
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={[
            styles.section,
            {borderWidth: 0.5, borderRadius: 5, marginVertical: 15},
          ]}>
          <Image
            source={require('../../../../assets/images/pay-logo.png')}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.payContent}>
            <Text style={styles.payTitle}>Онлайн любым способом</Text>
            <Text style={styles.title}>
              Банковской картой, онлайн-платежи и кошельки через сервис платеже
              Paybox.kz
            </Text>
            <View style={styles.button}>
              <Text style={styles.buttonText}>ПОПОЛНИТЬ ОНЛАЙН</Text>
            </View>
          </View>
        </View>
        <View style={[styles.section, {borderWidth: 0.5, borderRadius: 5}]}>
          <Image
            source={require('../../../../assets/images/pay-logo.png')}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.payContent}>
            <Text style={styles.payTitle}>Запросить счет на оплату</Text>
            <Text style={styles.title}>
              Вы сможете пополнить счет как юр. лицо со всеми необходимыми
              документами и выписками.
            </Text>
            <View style={styles.button}>
              <Text style={styles.buttonText}>ЗАПРОСИТЬ СЧЕТ</Text>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  section: {
    width: Dimensions.get('window').width - 30,
    marginVertical: 10,
    backgroundColor: 'white',
    borderBottomColor: MyTheme.grey,
    borderBottomWidth: 0.5,
  },
  downSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 14,
  },
  content: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  contentText: {
    justifyContent: 'center',
  },
  mainTitle: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 19,
    lineHeight: 28,
    color: MyTheme.black,
    marginTop: 10,
  },
  title: {
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 15,
    lineHeight: 16,
    color: MyTheme.grey,
  },
  info: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 17,
    lineHeight: 24,
    color: MyTheme.blue,
  },
  button: {
    width: '90%',
    backgroundColor: MyTheme.green,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginVertical: 15,
  },
  buttonText: {
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: 15,
    lineHeight: 24,
    color: 'white',
  },
  image: {
    width: 100,
    height: 35,
    marginVertical: 15,
    marginLeft: 15,
  },
  payTitle: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 17,
    lineHeight: 28,
    color: MyTheme.black,
    marginBottom: 10,
  },
  payContent: {
    width: '95%',
    marginHorizontal: 15,
  },
});
