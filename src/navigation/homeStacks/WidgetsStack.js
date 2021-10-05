import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {MyTheme} from '../../components/layout/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import CalculateDistance from '../../screens/homeScreen/widgets/calculateDistance/CalculateDistance';
import WidgetAutocomplite from '../../screens/homeScreen/widgets/calculateDistance/WidgetAutocomplite';
import CheckCompany from '../../screens/homeScreen/widgets/checkCompany/CheckCompany';
import WebScreen from '../../screens/homeScreen/widgets/checkCompany/WebScreen';

const Stack = createStackNavigator();

export default function WidgetsStack() {
  const transitData = useSelector(state => state.transitData);

  return (
    <Stack.Navigator
      initialRouteName="CalculateDistance"
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
        name="CalculateDistance"
        component={CalculateDistance}
        options={({navigation, route}) => ({
          headerTitle: 'Расчет расстояния',
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
        name="WidgetAutocomplite"
        component={WidgetAutocomplite}
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
        name="CheckCompany"
        component={CheckCompany}
        options={({navigation, route}) => ({
          headerTitle: 'Проверка компании',
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
        name="WebScreen"
        component={WebScreen}
        options={({navigation, route}) => ({
          headerTitle: ' ',
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
              <Text style={styles.buttonText}>К списку</Text>
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
