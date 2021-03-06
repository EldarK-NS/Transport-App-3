import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AddPostScreen from '../../../screens/addPost/AddPostScreen';
import CargoPostStack from './CargoPostStack';
import {MyTheme} from '../../../components/layout/theme';
import AuctionPostStack from './AuctionPostStack';
import StoragePostStack from './StoragePostStack';

const Stack = createStackNavigator();

export default function MainAddPostStack() {
  return (
    <Stack.Navigator
      initialRouteName="MainAddPosts"
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
        name="MainAddPosts"
        component={AddPostScreen}
        options={{
          headerTitle: 'Добавить объявление ',
        }}
      />
      <Stack.Screen
        name="AddCargoPost"
        component={CargoPostStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddAuctionPost"
        component={AuctionPostStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddStoragePost"
        component={StoragePostStack}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen name="MainSpecEquipment" component={SpecEquipmentStack} options={{ headerShown: false }} /> */}
    </Stack.Navigator>
  );
}
