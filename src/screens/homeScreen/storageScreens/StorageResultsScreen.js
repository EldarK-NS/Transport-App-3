import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/core';
import {MyTheme} from '../../../components/layout/theme';
import {quantityItemsforCargoResults} from '../../../redux/actions/transitStore';
import axios from 'axios';

export default function StorageResultsScreen() {
  const [currentPage, setCurrentPage] = useState(1);
  const [message, setMessage] = useState(false);
  const [newData, setNewData] = useState([]);
  const [pageQuantity, setPageQuntity] = useState(null);
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  //! Get filtered items

  const filter = route.params;
  console.log('Filter', filter);

  const getData = async () => {
    let request = `https://test.money-men.kz/api/filterStorage?page=${currentPage}&`;
    const createRequest = () => {
      let newRequest = '';
      for (let i in filter.data) {
        if (filter.data[i] !== null) {
          newRequest = newRequest + i + '=' + filter.data[i] + '&';
        }
      }
      request = request + newRequest;
      return request;
    };
    try {
      const uri = await createRequest();
      const res = await axios({
        method: 'GET',
        url: uri,
      });
      console.log('res', res);
      if (res.data.success === true && res.data.data.length > 0) {
        setPageQuntity(res.data.pagination.max_page);
        dispatch(quantityItemsforCargoResults(res.data.pagination.total));
        setNewData([...newData, ...res.data.data]);
      } else if (res.data.success === true && res.data.data.length === 0) {
        setMessage(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    return () => {};
  }, [currentPage]);

  if (message) {
    Alert.alert(
      'Объявлений с такими параметрами нет',
      'Попробуйте изменить параметры поиска',
      [{text: 'OK', onPress: () => navigation.goBack()}],
    );
  }

  console.log(
    currentPage,
    'currentPage',
    'message',
    message,
    'newData',
    newData,
    'pageQuantity',
    pageQuantity,
  );

  //!Infinite scroll
  const renderLoader = () => {
    if (currentPage < pageQuantity) {
      return (
        <Pressable onPress={loadMoreItem}>
          <View style={styles.loader}>
            <Text style={styles.loaderText}>Загрузить еще ...</Text>
          </View>
        </Pressable>
      );
    } else {
      return null;
    }
  };

  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <View>
      <Text>StorageResultsScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
