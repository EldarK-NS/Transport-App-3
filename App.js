
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Platform,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigation';
import { MyTheme } from './src/components/layout/theme';


const App = () => {
  if (Platform.OS == 'ios') {
    StatusBar.setBarStyle('light-content', true);
  }

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container} backgroundColor={MyTheme.blue}>
        <StatusBar barStyle={'light-content'} />
        <RootNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default App;
