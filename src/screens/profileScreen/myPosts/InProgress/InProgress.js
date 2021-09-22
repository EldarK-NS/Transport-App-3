//TODO: остановил показа так как нужно определиться как будут приходить данные с бека, главный вопрос по статусу

import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import SearchResultItem from '../../../../components/SearchElements/SearchResultItem';
import {MyTheme} from '../../../../components/layout/theme';
import axios from 'axios';
import {useSelector} from 'react-redux';

export default function InProgress() {
  const [executeData, setExecuteData] = useState([]);
  const [customerData, setCustomerData] = useState([]);

  const auth = useSelector(state => state.auth);

  const iAmExecutor = async () => {
    try {
      const res = await axios(
        `https://test.money-men.kz/api/executorOrdersInWork?token=${auth.token}`,
      );
      setExecuteData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const iAmCustomer = async () => {
    try {
      const res = await axios(
        `https://test.money-men.kz/api/customerOrdersInWork?token=${auth.token}`,
      );
      setCustomerData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    iAmExecutor();
    iAmCustomer();
    return () => {
      setExecuteData([]);
      setCustomerData([]);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Я ИСПОЛНИТЕЛЬ (6)</Text>

      <View style={styles.items}>
        <Text>Заявки в Работе-я исплняю чужие объявления</Text>
        {/* <FlatList
          data={myPostsInProgress_customer}
          renderItem={({item}) => <SearchResultItem data={item} />}
          showsVerticalScrollIndicator={false}
          style={{height: '55%'}}
        /> */}
      </View>

      <Text style={styles.title}>Я ЗАКАЗЧИК (3)</Text>

      <View style={styles.items}>
        <Text>Мои объявления в Работе (исполняется)</Text>
        {/* <FlatList
          data={myPostsInProgress_executor}
          renderItem={({item}) => <SearchResultItem data={item} />}
          showsVerticalScrollIndicator={false}
          style={{height: '35%'}}
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // height: '100%',
    justifyContent: 'center',
    backgroundColor: MyTheme.background,
  },
  items: {
    backgroundColor: 'white',
  },
  title: {
    fontFamily: 'IBMPlexSans-SemiBold',
    fontSize: 13,
    color: MyTheme.grey,
    marginLeft: 16,
    marginTop: 10,
    width: '100%',
    height: 25,
  },
});
