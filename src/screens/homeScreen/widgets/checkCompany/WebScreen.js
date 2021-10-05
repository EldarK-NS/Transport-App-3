import React, {useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/core';
import {WebView} from 'react-native-webview';
import {MyTheme} from '../../../../components/layout/theme';
import * as Progress from 'react-native-progress';

export default function WebScreen() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setLoaded] = useState(false);
  const route = useRoute();
  const link = route.params;
  console.log(link.data);
  return (
    <View>
      <View style={{width: '100%', height: '100%'}}>
        {!isLoaded ? (
          <Progress.Bar
            progress={progress}
            width={null}
            borderWidth={0}
            borderRadius={0}
            color={'orange'}
          />
        ) : null}
        <WebView
          source={{
            uri: `${link.data}`,
          }}
          onLoadProgress={({nativeEvent}) => setProgress(nativeEvent.progress)}
          onLoadEnd={() => setLoaded(true)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
