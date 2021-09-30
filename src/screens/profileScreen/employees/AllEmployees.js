import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
  FlatList,
} from 'react-native';
import {MyTheme} from '../../../components/layout/theme';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';

//FIXME: нет апишки для редактирования сотрудника

export default function AllEmployees() {
  const navigation = useNavigation();
  const [employeeList, setEmployeeList] = useState([]);
  const auth = useSelector(state => state.auth);

  const getMyEmployee = async () => {
    try {
      const res = await axios(
        `https://test.money-men.kz/api/getEmployee?token=${auth.token}`,
      );
      setEmployeeList(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyEmployee();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Сотрудники</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={employeeList}
        renderItem={({item}) => {
          return (
            <View style={styles.section}>
              <View style={styles.imageRow}>
                <Image style={styles.image} />
                <View style={styles.nameSection}>
                  <Text style={styles.name}>{item.fio}</Text>
                  <Text style={styles.position}>{item.position}</Text>
                </View>
              </View>
              <View style={styles.contentSection}>
                <Text style={styles.content}>{item.phone}</Text>
                <Text style={styles.content}>{item.email}</Text>
              </View>
              <View style={styles.buttonSection}>
                <Pressable
                  style={styles.imageButton}
                  onPress={() => navigation.navigate('UpdateEmployee')}>
                  <Text style={styles.buttonText}>ИЗМЕНИТЬ</Text>
                </Pressable>
                <Pressable style={styles.icon}>
                  <FontAwesome5
                    name={'trash-alt'}
                    size={22}
                    color={MyTheme.blue}
                  />
                </Pressable>
              </View>
            </View>
          );
        }}
      />
      <Pressable
        style={styles.addButton}
        onPress={() => navigation.navigate('UpdateEmployee')}>
        <Text style={styles.addButtonText}>ДОБАВИТЬ СОТРУДНИКА</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  section: {
    width: Dimensions.get('window').width - 30,
    padding: 5,
    borderWidth: 0.5,
    borderColor: MyTheme.grey,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  title: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 19,
    lineHeight: 28,
    color: MyTheme.black,
    marginVertical: 10,
  },
  imageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginLeft: 15,
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'red',
  },
  nameSection: {
    marginLeft: 15,
  },
  name: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 17,
    lineHeight: 28,
    color: MyTheme.black,
  },
  position: {
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 15,
    lineHeight: 24,
    color: MyTheme.grey,
  },
  contentSection: {
    marginLeft: 75,
    marginBottom: 15,
  },
  content: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 14,
    lineHeight: 28,
    color: MyTheme.black,
  },
  buttonSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  imageButton: {
    width: '75%',
    height: 40,
    borderWidth: 1,
    borderColor: MyTheme.blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginHorizontal: 15,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: MyTheme.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 14,
    lineHeight: 24,
    color: MyTheme.blue,
  },
  addButton: {
    width: '80%',
    borderRadius: 25,
    height: 45,
    backgroundColor: MyTheme.blue,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  addButtonText: {
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: 15,
    lineHeight: 24,
    color: 'white',
  },
});
