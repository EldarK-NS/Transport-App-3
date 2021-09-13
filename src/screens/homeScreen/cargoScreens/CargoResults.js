import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  Alert,
  Pressable,
} from 'react-native';
import SearchResultItem from '../../../components/SearchElements/SearchResultItem';
import axios from 'axios';
import {useNavigation, useRoute} from '@react-navigation/core';
import {MyTheme} from '../../../components/layout/theme';

export default function CargoResults() {
  const navigation = useNavigation();
  const route = useRoute();

  const [currentPage, setCurrentPage] = useState(1);
  const [message, setMessage] = useState(false);
  const [newData, setNewData] = useState([]);
  const [pageQuantity, setPageQuntity] = useState(null);
  const filter = route.params;

  const getData = async () => {
    let request = `https://test.money-men.kz/api/filterPost?page=${currentPage}&`;
    const createRequest = () => {
      let newRequest = '';
      console.log('Filter', filter.data);
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
      console.log('URI', uri);
      const res = await axios({
        method: 'GET',
        url: uri,
      });
      console.log(res.data);
      if (res.data.success === true && res.data.data.length > 0) {
        setPageQuntity(res.data.pagination.max_page);
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
  }, [currentPage]);

  if (message) {
    Alert.alert(
      'Объявлений с такими параметрами нет',
      'Попробуйте изменить параметры поиска',
      [{text: 'OK', onPress: () => navigation.goBack()}],
    );
  }

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
    <SafeAreaView style={styles.container}>
      <FlatList
        data={newData}
        renderItem={({item}) => (
          <SearchResultItem
            from={item.details[0].from_string}
            to={item.details[0].to_string}
            distance={'600'}
            net={item.details[0].net}
            volume={item.details[0].volume}
            type_transport={item.details[0].type_transport}
            start_date={item.details[0].start_date}
            title={item.details[0].title}
            rating={4.5}
            companyName={"TOO'MyCompany'"}
            price={200000}
            staus={null}
            auth={true}
            updated_at={item.updated_at}
            path={'CargoCard'}
            postId={item.id}
          />
        )}
        keyExtractor={item => item.id}
        ListFooterComponent={renderLoader}
        scrollsToTop={false}
        // onEndReached={loadMoreItem}
        onEndReachedThreshold={0}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  loader: {
    width: '50%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MyTheme.blue,
    borderRadius: 20,
    alignSelf: 'center',
    marginVertical: 10,
  },
  loaderText: {
    // fontFamily:'IBM-Regular',
    fontSize: 15,
    color: 'white',
  },
});
