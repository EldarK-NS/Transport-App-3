import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import {MyTheme} from '../../../../components/layout/theme';
import SearchResultItemExecuted from '../../../../components/SearchElements/SearchResultItemExecuted';
import axios from 'axios';
import {useSelector} from 'react-redux';

export default function OfferExecutor() {
  const [executeOrders, setExecuteOrders] = useState([]);
  const [executeData, setExecuteData] = useState([]);

  //! get Token
  const auth = useSelector(state => state.auth);

  //! get executeOrders
  const iAmExecutor = async () => {
    let uniq = {};
    let filteredArr = [];
    try {
      const res = await axios(
        `https://test.money-men.kz/api/executorOrdersInHold?token=${auth.token}`,
      );
      const newData = await res.data.data.filter(
        obj => !uniq[obj.details[0].id] && (uniq[obj.details[0].id] = true),
      );
      await newData.forEach(item => {
        filteredArr.push(item.order_id);
        return filteredArr;
      });
      setExecuteOrders(filteredArr);
    } catch (error) {
      console.log(error);
    }
  };

  //! set executeData
  let linksArray = [];
  const getAllExecutedData = async () => {
    await executeOrders.forEach(item => {
      linksArray.push(
        `https://test.money-men.kz/api/detailOffer?token=${auth.token}&order_id=${item}`,
      );
      return linksArray;
    });
    const promiseArray = linksArray.map(url => axios.get(url));

    try {
      const executedData = (await Promise.all(promiseArray)).map(
        res => res.data,
      );
      setExecuteData(executedData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllExecutedData();
  }, [executeOrders]);
  useEffect(() => {
    iAmExecutor();
    return () => {
      setExecuteData([]);
    };
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.sectionGrey}>
        <Text style={styles.label}>Я ЗАКАЗЧИК</Text>
      </View>
      <View style={styles.items}>
        <FlatList
          data={executeData}
          renderItem={({item}) => (
            <SearchResultItemExecuted
              from={item.details[0].from_string}
              to={item.details[0].to_string}
              fromId={item.details[0].from}
              toId={item.details[0].to}
              distance={'600'}
              net={item.details[0].net}
              volume={item.details[0].volume}
              type_transport={item.details[0].type_transport}
              title={item.details[0].title}
              price={600}
              currency={100}
              offers={item.data}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  label: {
    fontFamily: 'IBMPlexSans-SemiBold',
    fontSize: 15,
    lineHeight: 24,
    // marginLeft: 15,
    color: MyTheme.grey,
    // textDecorationLine: 'underline',
  },
  sectionGrey: {
    height: 35,
    width: '100%',
    backgroundColor: MyTheme.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  items: {
    backgroundColor: 'white',
    alignItems: 'center',
  },
  line: {
    width: '100%',
    height: 5,
    backgroundColor: MyTheme.background,
  },
  separator: {
    width: '100%',
    height: 5,
    backgroundColor: MyTheme.background,
  },
});
