import React, {useState} from 'react';
import {
  Text,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import {MyTheme} from '../../../components/layout/theme';
import InputDouble from '../../../components/SearchElements/InputDouble';
import MyPicker from '../../../components/SearchElements/MyPicker';
import {useNavigation} from '@react-navigation/core';

export default function CargoFilterScreen() {
  const navigation = useNavigation();
  const [sportModal, setSportModal] = useState(false);
  const sports = [
    {title: 'Football11', id: '1'},
    {title: 'Football2', id: '2'},
    {title: 'Football3', id: '3'},
    {title: 'Football4', id: '4'},
    {title: 'Football5', id: '5'},
    {title: 'Football6', id: '6'},
    {title: 'Football7', id: '7'},
  ];
  const [sport, setSport] = useState(sports[0].id);
  const [sportString, setSportString] = useState(sports[0].title);

  const [inputFrom, setInputFrom] = useState('');
  const [inputTo, setInputTo] = useState('');

  const getSearchResults = () => {
    navigation.navigate('MainCargo', {screen: 'CargoResults'});
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} endFillColor={'white'}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : 'height'}
        style={{flex: 1}}
        keyboardVerticalOffset={20}>
        <View style={styles.container}>
          <View style={styles.formBlock}>
            <MyPicker
              modalOpen={sportModal}
              setModalOpen={setSportModal}
              value={sport}
              setValue={setSport}
              data={sports}
              valueString={sportString}
              setValueString={setSportString}
              placeholder="Oткуда"
            />
            <MyPicker
              modalOpen={sportModal}
              setModalOpen={setSportModal}
              value={sport}
              setValue={setSport}
              data={sports}
              valueString={sportString}
              setValueString={setSportString}
              placeholder="Oткуда"
            />
          </View>
          <View style={styles.formBlock}>
            <View>
              <MyPicker
                modalOpen={sportModal}
                setModalOpen={setSportModal}
                value={sport}
                setValue={setSport}
                data={sports}
                valueString={sportString}
                setValueString={setSportString}
                placeholder="Oткуда"
              />
              <View style={styles.inputBlock}>
                <InputDouble
                  inputFrom={inputFrom}
                  inputTo={inputTo}
                  setInputFrom={setInputFrom}
                  setInputTo={setInputTo}
                  label="Вес, тн"
                />
                <InputDouble
                  inputFrom={inputFrom}
                  inputTo={inputTo}
                  setInputFrom={setInputFrom}
                  setInputTo={setInputTo}
                  label="Вес, тн"
                />
              </View>
            </View>
          </View>
          <View style={styles.formBlock}>
            <View>
              <MyPicker
                modalOpen={sportModal}
                setModalOpen={setSportModal}
                value={sport}
                setValue={setSport}
                data={sports}
                valueString={sportString}
                setValueString={setSportString}
                placeholder="Oткуда"
              />
            </View>
          </View>
          <View style={styles.formBlock}>
            <View>
              <MyPicker
                modalOpen={sportModal}
                setModalOpen={setSportModal}
                value={sport}
                setValue={setSport}
                data={sports}
                valueString={sportString}
                setValueString={setSportString}
                placeholder="Oткуда"
              />
            </View>
            <View style={styles.inputBlock}>
              <InputDouble
                inputFrom={inputFrom}
                inputTo={inputTo}
                setInputFrom={setInputFrom}
                setInputTo={setInputTo}
                label="Вес, тн"
              />
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={getSearchResults}>
            <Text style={styles.buttonText}>НАЙТИ ГРУЗЫ</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: MyTheme.background,
  },
  formBlock: {
    backgroundColor: 'white',
    marginVertical: 5,
    width: '100%',
    alignItems: 'center',
    borderRadius: 7,
  },
  inputBlock: {
    marginTop: 10,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: MyTheme.blue,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  buttonText: {
    fontSize: 15,
    lineHeight: 24,
    color: 'white',
    // fontFamily:'IBM-Bold',
    fontWeight: 'bold',
  },
});
