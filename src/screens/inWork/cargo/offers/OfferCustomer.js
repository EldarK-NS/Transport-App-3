import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {MyTheme} from '../../../../components/layout/theme';
import axios from 'axios';
import {useSelector} from 'react-redux';
import SearchResultItemCustomer from '../../../../components/SearchElements/SearchResultItemCustomer';

export default function OfferCustomer() {
  const [customerData, setCustomerData] = useState([]);

  //! get Token
  const auth = useSelector(state => state.auth);

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
    iAmCustomer();
    return () => {
      setCustomerData([]);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.sectionGrey}>
        <Text style={styles.label}>
          Я ИСПОЛНИТЕЛЬ ({customerData.length} объявлений)
        </Text>
      </View>
      <View style={styles.items}>
        <FlatList
          data={customerData}
          renderItem={({item}) => (
            <SearchResultItemCustomer
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
});
