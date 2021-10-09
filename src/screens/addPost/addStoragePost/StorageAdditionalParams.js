import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  ScrollView,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useDispatch, useSelector} from 'react-redux';
import CheckBox from '@react-native-community/checkbox';
import {MyTheme} from '../../../components/layout/theme';
import {additDataForCargoPost} from '../../../redux/actions/transitStore';

import {
  getFireSystem,
  getVentilation,
} from '../../../redux/actions/additionalData';

const fireSignalData = [
  {id: 1, name: 'Пожарная сигнализация'},
  {id: 2, name: 'Охранная сигнализация'},
  {id: 3, name: 'Площадка для отстоя и маневрирования транспорта'},
  {id: 4, name: 'Встроенные блоки офисных помещений'},
];

export default function StorageAdditionalParams() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFireSystem());
    dispatch(getVentilation());
  }, []);

  const additionalData = useSelector(state => state.additionalData);
  const [checkFireSistem, setCheckFireSistem] = useState({});
  const [checkVentilation, setCheckVentilation] = useState({});

  const [fireAlarm, setFireAlarm] = useState(false);
  const [securityAlarm, setSecurityAlarm] = useState(false);
  const [spotArea, setSpotArea] = useState(false);
  const [inlineBlock, setInlineBlock] = useState(false);

  const reverse = (obj, arr) => {
    for (let key in obj) {
      if (obj[key] === true) {
        arr.push(key);
      }
    }
    return arr;
  };
  let doc1 = [];
  let doc2 = [];

  const reverse2 = x => {
    if (!x) {
      return 0;
    } else {
      return 1;
    }
  };

  const Confirm = () => {
    let fireSistem = reverse(checkFireSistem, doc1);
    let ventilation = reverse(checkVentilation, doc2);
    let fire = reverse2(fireAlarm);
    let security = reverse2(securityAlarm);
    let spot = reverse2(spotArea);
    let inline = reverse2(inlineBlock);

    const data = {
      additionals: {
        fireSistem,
        ventilation,
        fire,
        security,
        spot,
        inline,
      },
    };
    dispatch(additDataForCargoPost(data));
    navigation.navigate('AddStorageForm');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.title}>Система пожаротушения</Text>
        <View style={styles.checkboxBlockSection}>
          {additionalData.fireSistem ? (
            additionalData.fireSistem.map((b, index) => {
              return (
                <View key={b.id} style={styles.checkboxBlock}>
                  <CheckBox
                    boxType="square"
                    disabled={false}
                    style={{marginRight: 10}}
                    value={checkFireSistem[b.id]}
                    onValueChange={newValue => {
                      setCheckFireSistem({
                        ...checkFireSistem,
                        [b.id]: newValue,
                      });
                    }}
                  />
                  <Text style={styles.label}>{b.name}</Text>
                </View>
              );
            })
          ) : (
            <ActivityIndicator size={'large'} color={MyTheme.blue} />
          )}
        </View>
        <Text style={styles.title}>Вентиляция</Text>
        <View style={styles.checkboxBlockSection}>
          {additionalData.ventilation ? (
            additionalData.ventilation.map((b, index) => {
              return (
                <View key={b.id} style={styles.checkboxBlock}>
                  <CheckBox
                    boxType="square"
                    disabled={false}
                    value={checkVentilation[b.id]}
                    onValueChange={newValue => {
                      setCheckVentilation({
                        ...checkVentilation,
                        [b.id]: newValue,
                      });
                    }}
                    style={{marginRight: 10}}
                  />
                  <Text style={styles.label}>{b.name}</Text>
                </View>
              );
            })
          ) : (
            <ActivityIndicator size={'large'} color={MyTheme.blue} />
          )}
        </View>
        <Text style={styles.title}>Дополнительно</Text>
        <View style={styles.checkboxBlockSection}>
          <View style={styles.checkboxBlock}>
            <CheckBox
              boxType="square"
              disabled={false}
              value={fireAlarm}
              onValueChange={newValue => setFireAlarm(newValue)}
              style={{marginRight: 10}}
            />
            <Text style={styles.label}>Пожарная сигнализация</Text>
          </View>
          <View style={styles.checkboxBlock}>
            <CheckBox
              boxType="square"
              disabled={false}
              value={securityAlarm}
              onValueChange={newValue => setSecurityAlarm(newValue)}
              style={{marginRight: 10}}
            />
            <Text style={styles.label}>Охранная сигнализация</Text>
          </View>
          <View style={styles.checkboxBlock}>
            <CheckBox
              boxType="square"
              disabled={false}
              value={spotArea}
              onValueChange={newValue => setSpotArea(newValue)}
              style={{marginRight: 10}}
            />
            <Text style={styles.label}>
              Площадка для отстоя и маневрирования транспорта
            </Text>
          </View>
          <View style={styles.checkboxBlock}>
            <CheckBox
              boxType="square"
              disabled={false}
              value={inlineBlock}
              onValueChange={newValue => setInlineBlock(newValue)}
              style={{marginRight: 10}}
            />
            <Text style={styles.label}>Встроенные блоки офисных помещений</Text>
          </View>
        </View>
        <TouchableOpacity onPress={Confirm} style={styles.confirm}>
          <Text style={styles.buttonText}>ПОДТВЕРДИТЬ</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: 'IBMPlexSans-SemiBold',
    textAlign: 'center',
    marginTop: 7,
    marginBottom: 7,
    color: MyTheme.grey,
  },
  checkboxBlockSection: {
    width: Dimensions.get('window').width - 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 0.5,
    borderColor: MyTheme.grey,
    backgroundColor: 'white',
  },
  checkboxBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Platform.OS === 'ios' ? 6 : 3,
    marginHorizontal: 5,
    marginLeft: 10,
  },
  confirm: {
    alignSelf: 'center',
    width: 300,
    height: 45,
    backgroundColor: MyTheme.blue,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'ios' ? 10 : 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  label: {
    width: '80%',
    marginLeft: 10,
    fontSize: 17,
  },
});
