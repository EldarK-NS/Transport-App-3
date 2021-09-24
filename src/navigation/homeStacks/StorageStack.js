import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {MyTheme} from '../../components/layout/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import StorageFilterScreen from '../../screens/homeScreen/storageScreens/StorageFilterScreen';
import StorageResultsScreen from '../../screens/homeScreen/storageScreens/StorageResultsScreen';
import StoragePlaceAutocomplite from '../../screens/homeScreen/storageScreens/StoragePlaceAutocomplite';

const Stack = createStackNavigator();

export default function StorageStack() {
  const transitData = useSelector(state => state.transitData);

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
        name="StorageFilter"
        component={StorageFilterScreen}
        options={({navigation, route}) => ({
          headerTitle: 'Поиск складов',
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
        name="StoragePlace"
        component={StoragePlaceAutocomplite}
        options={({navigation, route}) => ({
          headerTitle: 'Выбор города',
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
        name="StorageResults"
        component={StorageResultsScreen}
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
