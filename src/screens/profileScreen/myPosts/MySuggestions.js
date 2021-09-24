import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {MyTheme} from '../../../components/layout/theme';
import axios from 'axios';
import {useSelector} from 'react-redux';
import SearchResultItem from '../../../components/SearchElements/SearchResultItem';

export default function MySuggestions() {
  const [executeData, setExecuteData] = useState([]);
  const [customerData, setCustomerData] = useState([]);

  const auth = useSelector(state => state.auth);

  const iAmExecutor = async () => {
    try {
      const res = await axios(
        `https://test.money-men.kz/api/executorOrdersInHold?token=${auth.token}`,
      );
      setExecuteData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
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

  console.log('CustomerData-inHold', customerData);
  console.log('ExecutorData-inHold', executeData);

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
          style={{height: '55%'}}
        />
      </View>

      <Text style={styles.title}>Я ЗАКАЗЧИК (3)</Text>

      <View style={styles.items}>
        <FlatList
          data={executeData}
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
              updated_at={item.details[0].details.updated_at}
              // path={'CargoCard'}
              postId={item.details[0].details.id}
              inProgress={null}
              // isFavorite={favoritesList.includes(item.id) ? true : false}
              // list={favoritesList}
            />
          )}
          showsVerticalScrollIndicator={false}
          style={{height: '55%'}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
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
