import React, {useState} from 'react';
import {View, Pressable, Text, StyleSheet, Dimensions} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {MyTheme} from '../layout/theme';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import moment from 'moment';
import 'moment/locale/ru';

export default MyDatePicker = ({
  setVisible,
  setDate,
  setTitle,
  placeholder,
  visibility,
  title,
  type,
}) => {
  const showDatePicker = () => {
    setVisible(true);
  };
  const hideDatePicker = () => {
    setVisible(false);
  };

  const handleConfirm = date => {
    if (type === 'date') {
      setDate(moment(date.toJSON()).format('L'));
      setTitle(moment(date.toJSON()).format('LL'));
    } else if (type === 'time') {
      setDate(moment(date.toJSON()).format('h:mm'));
      setTitle(moment(date.toJSON()).format('h:mm'));
    }
    hideDatePicker();
  };

  console.log(placeholder.length);
  return (
    <View>
      <Pressable style={styles.visibleContainer} onPress={showDatePicker}>
        <View style={styles.button}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <Text style={styles.title}>{title}</Text>
              <AntDesignIcon
                name={type === 'date' ? 'calendar' : 'clockcircleo'}
                size={20}
                color={MyTheme.blue}
              />
            </View>
            <Text
              style={[
                styles.placeholderLabel,
                {
                  color:
                    placeholder == 'Выберите дату' ||
                    placeholder == 'Выберите время'
                      ? '#f2775c'
                      : MyTheme.black,
                },
              ]}>
              {placeholder}
            </Text>
          </View>
        </View>
      </Pressable>
      <DateTimePickerModal
        isVisible={visibility}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        confirmTextIOS="Подтвердить"
        mode={type}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  visibleContainer: {
    width: Dimensions.get('window').width / 2 - 20,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: MyTheme.grey,
    borderBottomWidth: 0.5,
    marginHorizontal: 5,
  },
  button: {
    width: '100%',
  },
  placeholderLabel: {
    alignSelf: 'flex-start',
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 17,
    lineHeight: 24,
    marginLeft: 10,
  },
  title: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 13,
    lineHeight: 16,
    color: MyTheme.grey,
  },
});
