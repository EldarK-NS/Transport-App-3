import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainStack from './homeStacks/MainStack';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {MyTheme} from '../components/layout/theme';
import MainAddPostStack from './bottomStacks/addPostStack/MainAddPostStack';
import MainProfileStack from './bottomStacks/profileStacks/MainProfileStack';
import MessagesStack from './bottomStacks/messagesStack/MessagesStack';
import InWorkStack from './bottomStacks/inWorkStacks/InWorkStack';
const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            return <Feather name="home" size={size} color={color} />;
          }
          if (route.name === 'InWork') {
            return <Feather name="file-text" size={size} color={color} />;
          }
          if (route.name === 'AddPost') {
            return <Feather name="plus-circle" size={size} color={color} />;
          }
          if (route.name === 'Message') {
            return <FontAwesome name="envelope-o" size={size} color={color} />;
          }
          if (route.name === 'Profile') {
            return <Feather name="user" size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: MyTheme.blue,
        tabBarInactiveTintColor: MyTheme.grey,
        //   tabBarShowLabel: false,
        headerStyle: {
          backgroundColor: '#008EFF',
        },
        headerTitleStyle: {
          fontFamily: 'IBMPlexSans-SemiBold',
          color: 'white',
        },
        tabBarHideOnKeyboard: true,
      })}>
      <Tab.Screen
        name="Home"
        component={MainStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Главная',
        }}
      />
      <Tab.Screen
        name="InWork"
        component={InWorkStack}
        options={{
          headerShown: false,
          tabBarLabel: 'В работе',
        }}
      />
      <Tab.Screen
        name="AddPost"
        component={MainAddPostStack}
        options={{headerShown: false, tabBarLabel: 'Добавить'}}
      />
      <Tab.Screen
        name="Message"
        component={MessagesStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Сообщения',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={MainProfileStack}
        options={{headerShown: false, tabBarLabel: 'Кабинет'}}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
