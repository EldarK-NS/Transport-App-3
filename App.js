import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import StartPage from './src/screens/StartPage';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StartPage />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
