import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import EmployeesListItem from '../../../components/SearchElements/EmployeesListItem';
import {MyTheme} from '../../../components/layout/theme';
import axios from 'axios';
import {useSelector} from 'react-redux';

export default function OwnEmployee() {
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
      <FlatList
        data={employeeList}
        renderItem={({item}) => <EmployeesListItem data={item} />}
        keyExtractor={item => item.id}
      />
      <View style={styles.buttonBlock}>
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.whiteText}>ВЫБРАТЬ ВОДИТЕЛЯ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.blackText}>Отменить выбор</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonBlock: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButton: {
    width: '80%',
    height: 50,
    backgroundColor: MyTheme.blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginVertical: 15,
  },
  whiteText: {
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: 15,
    lineHeight: 24,
    color: 'white',
  },
  cancelButton: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: MyTheme.black,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginBottom: 20,
  },
  blackText: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 15,
    lineHeight: 24,
    color: MyTheme.black,
  },
});
