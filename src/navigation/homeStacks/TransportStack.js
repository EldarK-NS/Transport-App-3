import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {MyTheme} from '../../components/layout/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TransportFilter from '../../screens/homeScreen/transport/TransportFilter';
//FIXME: переделать отображение на карте через геокоординаты
const Stack = createStackNavigator();

export default function TransportStack() {
  return (
    <Stack.Navigator
      initialRouteName="TransportFilter"
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
        name="TransportFilter"
        component={TransportFilter}
        options={({navigation, route}) => ({
          headerTitle: 'Поиск транспорта',
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
