import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {MyTheme} from '../../../../components/layout/theme';
import Balance from '../../../../screens/profileScreen/balance/Balance';
import BalanceHistory from '../../../../screens/profileScreen/balance/BalanceHistory';
const TopTab = createMaterialTopTabNavigator();

export default function BalanceStack() {
  return (
    <TopTab.Navigator
      initialRouteName="Balance"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold'},
        tabBarStyle: {backgroundColor: MyTheme.blue},
        tabBarPressColor: false,
        tabBarIndicatorStyle: {
          backgroundColor: 'white',
          height: 3,
          bottom: 0,
        },
      }}>
      <TopTab.Screen
        name="Balance"
        component={Balance}
        options={{tabBarLabel: 'Баланс'}}
      />
      <TopTab.Screen
        name="BalanceHistory"
        component={BalanceHistory}
        options={{tabBarLabel: 'История Счета'}}
      />
    </TopTab.Navigator>
  );
}
