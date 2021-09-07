import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import AuthNavigator from '../navigation/AuthNavigation';
import RootNavigator from '../navigation/RootNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MyTheme} from '../components/layout/theme';
import {useSelector} from 'react-redux';

//! В useEffect переделать стейт на прев стейт

export default function StartPage() {
  const [token, setToken] = useState(null);
  const user = useSelector(state => state.auth);

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      setToken(value);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getToken();
  }, [user]);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (token !== null) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [token]);

  return (
    <SafeAreaView style={styles.container} backgroundColor={MyTheme.blue}>
      <StatusBar barStyle={'light-content'} />
      {!loading ? <AuthNavigator /> : <RootNavigator />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
