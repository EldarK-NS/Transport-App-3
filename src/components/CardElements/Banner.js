import React, {useState} from 'react';
import {StyleSheet, View, Image, Pressable} from 'react-native';
import Swiper from 'react-native-swiper';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {MyTheme} from '../layout/theme';

export default function Banner({data, remove, handleRemove}) {
  console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.swiper}>
        <Swiper horizontal={true} loop={true} showsPagination={false}>
          {data.length > 0 ? (
            data.map((item, idx) => {
              return (
                <View key={idx}>
                  <Image
                    key={item.uri}
                    style={styles.image}
                    resizeMode="cover"
                    source={{uri: item}}
                  />
                  {remove ? (
                    <Pressable
                      style={styles.removeButton}
                      onPress={handleRemove}>
                      <EntypoIcon
                        name="circle-with-cross"
                        size={20}
                        color={MyTheme.black}
                      />
                    </Pressable>
                  ) : null}
                </View>
              );
            })
          ) : (
            <Image
              style={styles.image}
              resizeMode="cover"
              source={require('../../../assets/images/no_image.jpeg')}
            />
          )}
        </Swiper>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  swiper: {
    width: '100%',
    alignItems: 'center',
    height: 230,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  removeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
});
