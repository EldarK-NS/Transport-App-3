import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {MyTheme} from '../../../../components/layout/theme';
import axios from 'axios';
import {useSelector} from 'react-redux';
import SearchResultItem from '../../../../components/SearchElements/SearchResultItem';
import SearchResultItemExecuted from '../../../../components/SearchElements/SearchResultItemExecuted';
export default function MySuggestions() {
  const [executeOrders, setExecuteOrders] = useState([]);
  const [executeData, setExecuteData] = useState([]);
  const [customerData, setCustomerData] = useState([]);

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

  console.log(executeData);

  //! get and set customerData
  const iAmCustomer = async () => {
    try {
      const res = await axios(
        `https://test.money-men.kz/api/customerOrdersInHold?token=${auth.token}`,
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
      <Text style={styles.title}>
        Я ИСПОЛНИТЕЛЬ ({customerData.length} объявлений)
      </Text>
      <View style={styles.items}>
        <FlatList
          data={customerData}
          renderItem={({item}) => (
            <SearchResultItem
              from={item.details[0].details[0].from_string}
              to={item.details[0].details[0].to_string}
              fromId={item.details[0].details[0].from}
              toId={item.details[0].details[0].to}
              distance={'600'}
              net={item.details[0].details[0].net}
              volume={item.details[0].details[0].volume}
              type_transport={item.details[0].details[0].type_transport}
              // start_date={item.details[0].start_date}
              title={item.details[0].details[0].title}
              // rating={4.5}
              // companyName={"TOO'MyCompany'"}
              price={item.price.price}
              currency={item.price.currency}
              user={item.user[0].fullName}
              status={item.status}
              auth={true}
              updated_at={item.details[0].updated_at}
              // path={'CargoCard'}
              postId={item.details[0].details.id}
              inProgress={null}
              // isFavorite={favoritesList.includes(item.id) ? true : false}
              // list={favoritesList}
            />
          )}
          showsVerticalScrollIndicator={false}
          style={executeData.length > 0 ? {height: '50%'} : {height: '100%'}}
        />
      </View>

      <Text style={styles.title}>Я ЗАКАЗЧИК (3)</Text>

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
          style={customerData.length > 0 ? {height: '50%'} : {height: '100%'}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '88%',
    backgroundColor: MyTheme.background,
  },
  items: {
    backgroundColor: 'white',
    alignItems: 'center',
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
