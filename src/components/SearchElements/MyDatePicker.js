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

  return (
    <View>
      <Pressable style={styles.visibleContainer} onPress={showDatePicker}>
        <View style={styles.button}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.placeholderLabel}>{placeholder}</Text>
          </View>
          <AntDesignIcon
            name={type === 'date' ? 'calendar' : 'clockcircleo'}
            size={17}
            color={MyTheme.blue}
            style={{marginRight: 10}}
          />
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
    width: Dimensions.get('window').width - 30,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: MyTheme.grey,
    borderBottomWidth: 0.5,
    // marginVertical: 10
  },

  button: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  placeholderLabel: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 17,
    lineHeight: 24,
    color: MyTheme.black,
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
