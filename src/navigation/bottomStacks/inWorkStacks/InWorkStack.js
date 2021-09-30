//!in Success Screen need to remove left button "Back"

import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {MyTheme} from '../../../components/layout/theme';
import CargoInWorkStack from './CargoInWork/CargoInWorkStack';
import InWorkMain from '../../../screens/inWork/InWorkMain';
import Favorites from '../../../screens/inWork/favorites/Favorites';
import InWorkEmployeeStack from './inWorkEmployee/InWorkEmployeeStack';
const Stack = createStackNavigator();

export default function InWorkStack() {
  return (
    <Stack.Navigator
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
        name="InWorkMain"
        component={InWorkMain}
        options={({navigation, route}) => ({
          headerTitle: ' В работе',
          headerTitleStyle: {
            fontSize: 17,
            fontWeight: 'bold',
            color: 'white',
          },
        })}
      />
      <Stack.Screen
        name="CargoInWork"
        component={CargoInWorkStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="InWorkEmployee"
        component={InWorkEmployeeStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={({navigation, route}) => ({
          headerTitle: 'Доп. параметры',
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
});
