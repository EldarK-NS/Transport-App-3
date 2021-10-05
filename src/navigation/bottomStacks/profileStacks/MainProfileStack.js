import React from 'react';
import {Text, Pressable, StyleSheet, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {MyTheme} from '../../../components/layout/theme';
import MainProfileScreen from '../../../screens/profileScreen/MainProfileScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import {Logout} from '../../../redux/actions/auth';
import SettingsStack from './settings/SettingsStack';
import MyNotifications from '../../../screens/profileScreen/notifications/MyNotifications';
import BalanceStack from './balance/BalanceStack';
import EmployeeStack from './employees/EmployeeStack';

const Stack = createStackNavigator();

export default function MainProfileStack() {
  const dispatch = useDispatch();
  const logout = () => {
    console.log('logout');
    dispatch(Logout());
  };

  return (
    <Stack.Navigator
      initialRouteName="MainProfile"
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
        name="MainProfile"
        component={MainProfileScreen}
        options={{
          headerTitle: 'Личный кабинет ',
          headerRight: ({navigation, route}) => (
            <Pressable onPress={logout} style={{marginRight: 20}}>
              <AntDesign size={25} color="white" name="logout" />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="MyEmployees"
        component={EmployeeStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyNotifications"
        component={MyNotifications}
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
        name="MyBalance"
        component={BalanceStack}
        options={({navigation, route}) => ({
          headerTitle: 'Баланс',
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
        name="Settings"
        component={SettingsStack}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen name="MainSpecEquipment" component={SpecEquipmentStack} options={{ headerShown: false }} /> */}
    </Stack.Navigator>
  );
}
//! InProgressCard - это отдельный скрин который не вошел в основной стек объявлеий и его пришлось вынести за пределы MyPosts
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
});
