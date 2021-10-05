import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/core';
import {getAllFavoritesCargoPosts} from '../../../redux/actions/profileFavorites';
import {MyTheme} from '../../../components/layout/theme';

export default function Favorites() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [token, setToken] = useState(null);

  //!Get & Set Token
  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      setToken(value);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getToken();
  }, []);

  //! Get User FavoritesList
  useEffect(() => {
    if (token) {
      dispatch(getAllFavoritesCargoPosts(token));
    }
  }, [token]);

  const profileFavorites = useSelector(state => state.profileFavorites);
  //TODO: решить вопрос с расстоянием, жду Мукана если вставит поле с расстоянием в details
  // const [distance, setDistance] = useState('');

  // // //! Get Distance
  // const getDistance = async (x, y) => {
  //   try {
  //     const res = await axios(
  //       `https://test.money-men.kz/api/distance?from=${x}&to=${y}`,
  //     );
  //     setDistance(res.data.distance);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const [newData, setNewData] = useState([]);
  useEffect(() => {
    setNewData(
      profileFavorites.cargoPosts.map(item => ({
        key: item.id,
        start_date: item.details[0].start_date,
        end_date: item.details[0].end_date,
        title: item.details[0].title,
        from: item.details[0].from_string,
        to: item.details[0].to_string,
        net: item.details[0].net,
        volume: item.details[0].volume,
        price: 200000,
        updated: item.updated_at,
        // distance: distance,
      })),
    );
    return () => {
      setNewData([]);
    };
  }, [profileFavorites]);

  //!Replace price
  function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };
  const deleteRow = async (rowMap, rowKey) => {
    try {
      await axios(
        `https://test.money-men.kz/api/cancelPostFavourites?token=${token}&post_id=${rowKey}`,
      );
      dispatch(getAllFavoritesCargoPosts(token));
    } catch (error) {
      console.log(error);
    }
  };

  const showItemCard = postId => {
    navigation.navigate('MainCargo', {
      screen: 'CargoCard',
      params: {id: postId, from: 'favorite'},
    });
  };

  const VisibleItem = props => {
    const {data} = props;
    return (
      <View style={styles.rowFront}>
        <TouchableHighlight style={styles.rowFrontVisible}>
          <TouchableOpacity
            style={styles.innerRow}
            onPress={() => showItemCard(data.item.key)}>
            <View style={styles.description}>
              <Text
                style={[styles.title, {color: MyTheme.blue}]}
                numberOfLines={1}>
                {data.item.title}
              </Text>
              <Text style={styles.details}>
                {data.item.start_date}-{data.item.end_date}
              </Text>
              <Text style={styles.details}>{data.item.from}</Text>
              <Text style={styles.details} numberOfLines={1}>
                {data.item.net} тн / {data.item.volume} m&#179;,{' '}
                {data.item.distance}
              </Text>
            </View>
            <View style={styles.price}>
              <Text style={styles.priceTitle} numberOfLines={1}>
                Цена (&#8376;)
              </Text>
              <Text style={styles.title} numberOfLines={1}>
                {numberWithSpaces(data.item.price)}
              </Text>
            </View>
          </TouchableOpacity>
        </TouchableHighlight>
      </View>
    );
  };

  const HiddenItemWithActions = props => {
    const {onClose, onDelete} = props;
    return (
      <View style={styles.rowBack}>
        <Text>Left</Text>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnLeft]}
          onPress={onClose}>
          <Text style={styles.deleteButton}>Отмена</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnRight]}
          onPress={onDelete}>
          <Text style={styles.deleteButton}>Удалить</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = (data, rowMap) => {
    return <VisibleItem data={data} />;
  };
  const renderHiddenItem = (data, rowMap) => {
    return (
      <HiddenItemWithActions
        data={data}
        rowMap={rowMap}
        onClose={() => closeRow(rowMap, data.item.key)}
        onDelete={() => deleteRow(rowMap, data.item.key)}
      />
    );
  };

  return (
    <View>
      <SwipeListView
        data={newData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75}
        rightOpenValue={-150}
        disableRightSwipe
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    flex: 1,
  },
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    height: 90,
    margin: 5,
    marginBottom: 10,
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  rowFrontVisible: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    height: 100,
    padding: 10,
    marginBottom: 10,
  },
  innerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  description: {
    width: '75%',
  },
  price: {
    height: '100%',
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceTitle: {
    fontSize: 12,
    color: MyTheme.grey,
    fontFamily: 'IBMPlexSans-Regular',
    marginVertical: 5,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    margin: 5,
    marginBottom: 15,
    borderRadius: 5,
  },
  backRightBtn: {
    alignItems: 'flex-end',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
    paddingRight: 17,
  },
  backRightBtnLeft: {
    backgroundColor: '#1f65ff',
    height: 100,
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    height: 100,
    right: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  trash: {
    height: 25,
    width: 25,
    marginRight: 7,
  },
  title: {
    fontSize: 16,
    fontFamily: 'IBMPlexSans-SemiBold',
    marginBottom: 3,
    color: MyTheme.black,
  },
  details: {
    fontSize: 14,
    color: MyTheme.grey,
  },
  warning: {
    fontSize: 18,
    color: 'red',
    fontFamily: 'IBMPlexSans-SemiBold',
    alignSelf: 'center',
  },
  deleteButton: {
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: 13,
    color: 'white',
  },
});
