import React from 'react';
import {Pressable, StyleSheet, Image, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {MyTheme} from '../../../../components/layout/theme';

import MainSettingsScreen from '../../../../screens/profileScreen/settings/MainSettingsScreen';
import PersonalInformation from '../../../../screens/profileScreen/settings/PersonalInformation';
import Documents from '../../../../screens/profileScreen/settings/Documents';
import CompanyProfile from '../../../../screens/profileScreen/settings/CompanyProfile';
import ChangePassword from '../../../../screens/profileScreen/settings/ChangePassword';
import Notifications from '../../../../screens/profileScreen/settings/Notifications';
import RemoveAccount from '../../../../screens/profileScreen/settings/RemoveAccount';
import PersonPlaceAutocomplite from '../../../../screens/profileScreen/settings/PersonPlaceAutocomplite';
const Stack = createStackNavigator();

export default function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="MainSettings"
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
        name="MainSettings"
        component={MainSettingsScreen}
        options={({navigation, route}) => ({
          headerTitle: 'Настройки',
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
        name="PersonalInformation"
        component={PersonalInformation}
        options={({navigation, route}) => ({
          headerTitle: 'Личная информация',
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
        name="Documents"
        component={Documents}
        options={({navigation, route}) => ({
          headerTitle: 'Документы',
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
        name="CompanyProfile"
        component={CompanyProfile}
        options={({navigation, route}) => ({
          headerTitle: 'Профиль компании',
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
        name="ChangePassword"
        component={ChangePassword}
        options={({navigation, route}) => ({
          headerTitle: 'Изменить пароль',
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
        name="Notifications"
        component={Notifications}
        options={({navigation, route}) => ({
          headerTitle: 'Уведомления',
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
        name="RemoveAccount"
        component={RemoveAccount}
        options={({navigation, route}) => ({
          headerTitle: 'Удалить аккаунт',
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
        name="PersonPlace"
        component={PersonPlaceAutocomplite}
        options={({navigation, route}) => ({
          headerTitle: 'Город, страна',
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
