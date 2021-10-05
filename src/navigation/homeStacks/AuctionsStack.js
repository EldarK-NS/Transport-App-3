import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {MyTheme} from '../../components/layout/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AuctionsFilterScreen from '../../screens/homeScreen/mainAuction/AuctionsFilterScreen';

const Stack = createStackNavigator();

export default function AuctionsStack() {
  return (
    <Stack.Navigator
      initialRouteName="AuctionsFilter"
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
        name="AuctionsFilter"
        component={AuctionsFilterScreen}
        options={({navigation, route}) => ({
          headerTitle: 'Поиск аукционов',
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

      {/* <Stack.Screen
        name="CargoResults"
        component={CargoResults}
        options={({navigation, route}) => ({
          headerTitle: transitData.itemsQuantity + ' объявлений',
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
              <Text style={styles.buttonText}>Поиск</Text>
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              style={[styles.leftButton, {marginRight: 10}]}
              onPress={() => navigation.goBack()}>
              <Text style={styles.buttonText}>Фильтр</Text>
              <MaterialCommunityIcons
                name="filter-variant"
                size={24}
                color="white"
              />
            </Pressable>
          ),
        })}
      /> */}
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
