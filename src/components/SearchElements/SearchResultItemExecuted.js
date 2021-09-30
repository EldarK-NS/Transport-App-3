import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Pressable,
} from 'react-native';
import axios from 'axios';
import moment from 'moment';
import {useNavigation} from '@react-navigation/core';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch} from 'react-redux';
import {MyTheme} from '../layout/theme';
import EntypoIcon from 'react-native-vector-icons/Entypo';

export default function SearchResultItemExecuted(props) {
  const {
    from,
    to,
    fromId,
    toId,
    net,
    volume,
    type_transport,
    start_date,
    title,
    path,
    postId,
    offers,
  } = props;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [distance, setDistance] = useState('');

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
  //! Currency

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

  return (
    <View
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
            <FontAwesome
              name="circle"
              size={8}
              color={MyTheme.blue}
              style={styles.dot}
            />

            <Text style={styles.title}>
              {from}{' '}
              <FontAwesome5
                name="arrow-right"
                size={12}
                color="black"
                style={styles.arrowIcon}
              />{' '}
              {to}
            </Text>
          </View>

          <Text style={styles.info}>
            {net} т, {volume} m&#179;, {type_transport},{' '}
            {moment(new Date(start_date)).format('MM/DD/YYYY')}, {title}
          </Text>
        </View>
        <View style={styles.mainRightSide}>
          <View style={styles.titleWrapper}>
            <Text style={styles.coloredAction}>
              {offers.length} ПРЕДЛОЖЕНИЯ
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.footerBlock}>
        <Text>Предложения:</Text>
        <FlatList
          data={offers}
          renderItem={({item}) => {
            return (
              <Pressable
                style={styles.offerWrapper}
                onPress={() =>
                  navigation.navigate('OfferExecutorAction', {data: item})
                }>
                <View style={styles.offerBlock}>
                  <View style={{flexDirection: 'row'}}>
                    <Feather name="user-check" size={18} color={MyTheme.blue} />
                    <Text style={styles.companyName}>{item.fullName}</Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.price}>
                      {numberWithSpaces(item.price)}{' '}
                      {currencyIcon(item.currency)}
                    </Text>
                    <EntypoIcon
                      name="chevron-right"
                      size={15}
                      color={MyTheme.grey}
                      style={{marginLeft: 10}}
                    />
                  </View>
                </View>
                <Text style={styles.date}>{item.created_at}</Text>
              </Pressable>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    width: Dimensions.get('window').width - 30,
  },
  mainBlock: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  mainLeftSide: {
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
  dist: {
    fontSize: 14,
    lineHeight: 18,
    marginLeft: 10,
    marginTop: 3,
    color: MyTheme.blue,
    fontFamily: 'IBMPlexSans-Regular',
  },
  info: {
    fontSize: 14,
    lineHeight: 18,
    marginTop: 10,
    fontFamily: 'IBMPlexSans-Regular',
    color: MyTheme.black,
  },
  mainRightSide: {
    justifyContent: 'center',
    width: '30%',
  },
  coloredAction: {
    fontSize: 12,
    fontFamily: 'IBMPlexSans-SemiBold',
    alignSelf: 'center',
    color: MyTheme.grey,
    backgroundColor: MyTheme.yellow,
    padding: 5,
    width: 120,
    marginRight: 10,
  },

  tax: {
    fontSize: 12,
    color: MyTheme.grey,
    fontFamily: 'IBMPlexSans-Regular',
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  companyName: {
    fontSize: 14,
    color: MyTheme.black,
    fontFamily: 'IBMPlexSans-Medium',
    marginLeft: 10,
  },
  price: {
    fontSize: 14,
    color: MyTheme.blue,
    fontFamily: 'IBMPlexSans-Medium',
    lineHeight: 21,
  },
  currency: {
    fontSize: 14,
  },
  offerWrapper: {
    marginVertical: 10,
    borderBottomColor: MyTheme.grey,
    borderBottomWidth: 0.5,
  },
  date: {
    fontFamily: 'IBMPlexSans-Regular',
    color: MyTheme.grey,
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 28,
  },
  offerBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
