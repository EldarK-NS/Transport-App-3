//!in Success Screen need to remove left button "Back"

import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AddCargoPostForm from '../../../screens/addPost/addCargoPost/AddCargoPostForm';
import {MyTheme} from '../../../components/layout/theme';
import SuccessResultScreen from '../../../screens/addPost/addCargoPost/SuccessResultScreen';

const Stack = createStackNavigator();

export default function CargoPostStack() {
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
        name="AddPostForm"
        component={AddCargoPostForm}
        options={({navigation, route}) => ({
          headerTitle: 'Добавить груз',
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
              onPress={() => console.log('add cargo post!')}>
              <AntDesign name="close" size={20} color="white" />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name="SuccessResults"
        component={SuccessResultScreen}
        options={({navigation, route}) => ({
          headerTitle: 'Добавить груз',
          headerTitleStyle: {
            fontSize: 17,
            fontWeight: 'bold',
            color: 'white',
          },
          headerRight: () => (
            <Pressable
              style={[styles.leftButton, {marginRight: 10}]}
              onPress={() => console.log('add cargo post-success')}>
              <AntDesign name="close" size={20} color="white" />
            </Pressable>
          ),
        })}
      />
      {/* <Stack.Screen name="CargoCard" component={CargoCardScreen}
                options={({ navigation, route }) => ({
                    headerTitle: "",
                    headerLeft: () => (
                        <Pressable
                            style={styles.leftButton}
                            onPress={() => navigation.goBack()}
                        >
                            <AntDesign name="left" size={24} color="white" />
                            <Text style={styles.buttonText}>Назад</Text>
                        </Pressable>
                    ),
                    headerRight: () => (
                        <Pressable
                            style={[styles.leftButton, { marginRight: 10 }]}
                            onPress={() => navigation.goBack()}
                        >
                            <AntDesign
                                name="staro"
                                size={20}
                                color="white"
                                style={styles.icon}
                            />
                            <AntDesign
                                name="upload"
                                size={20}
                                color="white"
                                style={styles.icon}
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
    // fontFamily: "IBM-Regular",
    fontSize: 17,
    lineHeight: 22,
    color: 'white',
  },
  icon: {
    marginRight: 15,
  },
});
