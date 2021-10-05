//!in Success Screen need to remove left button "Back"

import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {MyTheme} from '../../../components/layout/theme';
import AddAuctionPostForm from '../../../screens/addPost/AddAuctionPost/AddAuctionPostForm';
import AuctionAutocomplite from '../../../screens/addPost/AddAuctionPost/AuctionAutocomplite';
import AuctionAdditionalParams from '../../../screens/addPost/AddAuctionPost/AuctionAdditionalParams';

const Stack = createStackNavigator();

export default function AuctionPostStack() {
  return (
    <Stack.Navigator
      initialRouteName="AddAuctionPostForm"
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
        name="AddAuctionPostForm"
        component={AddAuctionPostForm}
        options={({navigation, route}) => ({
          headerTitle: 'Добавить аукцион',
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
          headerRight: () => (
            <Pressable
              style={[styles.leftButton, {marginRight: 10}]}
              onPress={() => console.log('add auction post!')}>
              <AntDesign name="close" size={20} color="white" />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name="AuctionAutocomplite"
        component={AuctionAutocomplite}
        options={({navigation, route}) => ({
          headerTitle: 'Откуда-Куда',
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
        name="AuctionAdditionalParams"
        component={AuctionAdditionalParams}
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
