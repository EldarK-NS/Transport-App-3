import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {MyTheme} from '../../../components/layout/theme';

export default function SuccessResultScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/images/Bitmap.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Объявление опубликованно!</Text>
      <Text style={styles.subTitle}>
        Теперь, другие участники сервиса видят ваше объявление и ваши контактные
        данные.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>К ОБЪЯВЛЕНИЮ</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    // fontFamily:'IBM-Bold',
    fontSize: 21,
    lineHeight: 24,
    color: MyTheme.black,
    marginBottom: 20,
    width: '50%',
    textAlign: 'center',
  },
  subTitle: {
    // fontFamily:'IBM-Regular',
    fontSize: 14,
    lineHeight: 18,
    color: MyTheme.grey,
    marginBottom: 25,
    width: '70%',
    textAlign: 'center',
  },
  button: {
    width: 220,
    height: 45,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: MyTheme.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    // fontFamily:'IBM-SemiBold',
    fontSize: 14,
    lineHeight: 24,
    color: MyTheme.blue,
  },
  image: {
    width: 84,
    height: 84,
    marginBottom: 30,
  },
});
