//!in Success Screen need to remove left button "Back"

import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {MyTheme} from '../../../components/layout/theme';
import AddStorageForm from '../../../screens/addPost/addStoragePost/AddStorageForm';
import AddStorageAutocomplite from '../../../screens/addPost/addStoragePost/AddStorageAutocomplite';
import StorageAdditionalParams from '../../../screens/addPost/addStoragePost/StorageAdditionalParams';

const Stack = createStackNavigator();

export default function StoragePostStack() {
  return (
    <Stack.Navigator
      initialRouteName="AddStorageForm"
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
        name="AddStorageForm"
        component={AddStorageForm}
        options={({navigation, route}) => ({
          headerTitle: 'Добавить склад',
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
        name="AddStorageAutocomplite"
        component={AddStorageAutocomplite}
        options={({navigation, route}) => ({
          headerTitle: 'Местонахождение',
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
        name="StorageAdditionalParams"
        component={StorageAdditionalParams}
        options={({navigation, route}) => ({
          headerTitle: 'Доп. параметры',
          headerTitleStyle: {
            fontSize: 17,
            fontWeight: 'bold',
            color: 'white',
          },
          headerLeft: () => null,
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
});
