import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, StatusBar, Image, View} from 'react-native';
import AuthNavigator from '../navigation/AuthNavigation';
import RootNavigator from '../navigation/RootNavigation';
import {MyTheme} from '../components/layout/theme';
import {useSelector, useDispatch} from 'react-redux';
import {getToken} from '../redux/actions/auth';

//! В useEffect переделать стейт на прев стейт

export default function StartPage() {
  const dispatch = useDispatch();
  // const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(getToken());
  }, []);

  useEffect(() => {
    if (auth.token) {
      setIsAuth(true);
      setLoading(false);
    } else {
      setIsAuth(false);
      setLoading(false);
    }
  }, [auth]);

  if (loading) {
    return (
      <View style={styles.screenContainer}>
        <Image source={require('../../assets/images/BLIZ.KZ.png')} />
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container} backgroundColor={MyTheme.blue}>
      <StatusBar />
      {!isAuth ? <AuthNavigator /> : <RootNavigator />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
