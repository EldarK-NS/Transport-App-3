import React from 'react';
import {Pressable, StyleSheet, Image, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {MyTheme} from '../../../../components/layout/theme';
import AllEmployees from '../../../../screens/profileScreen/employees/AllEmployees';
import UpdateEmployee from '../../../../screens/profileScreen/employees/UpdateEmployee';

const Stack = createStackNavigator();

export default function EmployeeStack() {
  return (
    <Stack.Navigator
      initialRouteName="AllEmployees"
      screenOptions={{
        headerStyle: {
          backgroundColor: MyTheme.blue,
        },
        headerTitleStyle: {
          color: 'white',
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="AllEmployees"
        component={AllEmployees}
        options={({navigation, route}) => ({
          headerTitle: 'Сотрудники',
          headerTitleStyle: {
            fontSize: 17,
            fontWeight: 'bold',
            color: 'white',
          },
          headerLeft: () => (
            <Pressable
              style={styles.leftButton}
              onPress={() => navigation.goBack()}>
              <AntDesign name="left" size={24} color="white" />
              <Text style={styles.buttonText}>Назад</Text>
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name="UpdateEmployee"
        component={UpdateEmployee}
        options={({navigation, route}) => ({
          headerTitle: 'Редактировать',
          headerTitleStyle: {
            fontSize: 17,
            fontWeight: 'bold',
            color: 'white',
          },
          headerLeft: () => (
            <Pressable
              style={styles.leftButton}
              onPress={() => navigation.goBack()}>
              <AntDesign name="left" size={24} color="white" />
              <Text style={styles.buttonText}>Назад</Text>
            </Pressable>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  leftButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 17,
    lineHeight: 22,
    color: 'white',
  },
  icon: {
    marginRight: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
});
