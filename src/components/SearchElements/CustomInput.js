import React from 'react';
import {StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';
import {MyTheme} from '../layout/theme';

export default function CustomInput({
  setInput,
  input,
  label,
  placeholder,
  type,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          onChangeText={setInput}
          value={input}
          keyboardType={type === 'number' ? 'number-pad' : 'default'}
          returnKeyType="done"
          autoCapitalize="none"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 30,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  label: {
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 13,
    lineHeight: 16,
    color: MyTheme.grey,
    marginLeft: 8,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 45,
    paddingLeft: 12,
    borderWidth: 0.5,
    borderColor: MyTheme.grey,
    fontSize: 17,
    fontFamily: 'IBMPlexSans-Regular',
    color: MyTheme.black,
    lineHeight: 20,
    marginBottom: 5,
  },
});
