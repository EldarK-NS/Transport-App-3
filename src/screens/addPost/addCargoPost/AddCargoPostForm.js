import React, {useState, useEffect} from 'react';
import {
  Text,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import {MyTheme} from '../../../components/layout/theme';
import InputDouble from '../../../components/SearchElements/InputDouble';
import MyPicker from '../../../components/SearchElements/MyPicker';
import {useNavigation} from '@react-navigation/core';
import {ScrollView} from 'react-native-gesture-handler';
import MyDatePicker from '../../../components/SearchElements/MyDatePicker';
import {useDispatch, useSelector} from 'react-redux';
import {getAllCountries} from '../../../redux/actions/additionalData';

export default function AddCargoPostForm() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountries());
  }, []);

  const additionalData = useSelector(state => state.additionalData);
  console.log('Data on Screen--', additionalData);

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

  const goToSuccessResult = () => {
    navigation.navigate('SuccessResults');
  };

  //! Set Date
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [datePlaceholder, setDatePlaceholder] = useState('Выберите дату');

  return (
    <ScrollView showsVerticalScrollIndicator={false} endFillColor={'white'}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : 'height'}
        style={{flex: 1}}
        keyboardVerticalOffset={20}>
        <View style={styles.container}>
          <View style={styles.titleBlock}>
            <Text
              style={styles.subTitle}
              numberOfLines={2}
              ellipsizeMode={'clip'}>
              Заполните всю необходимую информацию о вашем грузе.
            </Text>
          </View>
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
              placeholder="Куда"
            />
            <MyDatePicker
              setVisible={setDatePickerVisibility}
              setDate={setSelectedDate}
              setTitle={setDatePlaceholder}
              placeholder={datePlaceholder}
              visibility={isDatePickerVisible}
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
                placeholder="Нужен транспорт"
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
                  label="Объем, м3"
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
                placeholder="Форма оплаты"
              />
            </View>
            <View style={styles.inputBlock}>
              <InputDouble
                inputFrom={inputFrom}
                inputTo={inputTo}
                setInputFrom={setInputFrom}
                setInputTo={setInputTo}
                label="Стоимость перевозки, тн"
              />
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={goToSuccessResult}>
            <Text style={styles.buttonText}>ДОБАВИТЬ ОБЪЯВЛЕНИЕ</Text>
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
  titleBlock: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 18,
    paddingBottom: 11,
    backgroundColor: 'white',
  },
  title: {
    // fontFamily: "IBM-Medium",
    fontSize: 21,
    lineHeight: 24,
    color: MyTheme.black,
    marginBottom: 7,
  },
  subTitle: {
    // fontFamily: "IBM-Regular",
    fontSize: 14,
    lineHeight: 18,
    color: MyTheme.grey,
    width: '60%',
    textAlign: 'center',
  },
});
