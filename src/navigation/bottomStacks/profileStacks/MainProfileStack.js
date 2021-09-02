import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {MyTheme} from '../../../components/layout/theme';
import MainProfileScreen from '../../../screens/profileScreen/MainProfileScreen';
import MyPostsStack from './myPosts/MyPostsStack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import InProgressCardScreen from '../../../screens/profileScreen/myPosts/InProgress/InProgressCardScreen';

const Stack = createStackNavigator();

export default function MainProfileStack() {
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
        name="MainProfile"
        component={MainProfileScreen}
        options={{
          headerTitle: 'Личный кабинет ',
        }}
      />
      <Stack.Screen
        name="MyPosts"
        component={MyPostsStack}
        options={({navigation, route}) => ({
          headerTitle: 'Мои заявки',
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
        name="InProgressCard"
        component={InProgressCardScreen}
        options={({navigation, route}) => ({
          headerTitle: 'Заявка №000151',
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
      {/* <Stack.Screen name="MainSpecEquipment" component={SpecEquipmentStack} options={{ headerShown: false }} /> */}
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
    // fontFamily: "IBM-Regular",
    fontSize: 17,
    lineHeight: 22,
    color: 'white',
  },
});
