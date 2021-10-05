import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/homeScreen/HomeScreen';
import CargoStack from './CargoStack';
import SpecEquipmentStack from './SpecEquipmentStack';
import {MyTheme} from '../../components/layout/theme';
import StorageStack from './StorageStack';
import AuctionsStack from './AuctionsStack';
import TransportStack from './TransportStack';
import WidgetsStack from './WidgetsStack';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerStyle: {
          backgroundColor: MyTheme.blue,
        },
        headerTitleStyle: {
          color: 'white',
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="Main" component={HomeScreen} />
      <Stack.Screen
        name="MainCargo"
        component={CargoStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainSpecEquipment"
        component={SpecEquipmentStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Storage"
        component={StorageStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Auctions"
        component={AuctionsStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Transport"
        component={TransportStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Widgets"
        component={WidgetsStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
