import React from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import InfoDistanceBlock from '../../../components/CardElements/InfoDistanceBlock';
import SecondCardBlock from '../../../components/CardElements/SecondCardBlock';
import PriceBlock from '../../../components/CardElements/PriceBlock';
import ContactBlock from '../../../components/CardElements/ContactBlock';

export default function CargoCardScreen() {
  const handleCall = () => {
    console.log('Call!!!');
  };
  const handleMessage = () => {
    console.log('Message!!!');
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <InfoDistanceBlock
          titleText={'Фрукты, клубника 22 тн / 86 м³'}
          subtitleText={'Нур-Султан - Алматы, 14 июня'}
          pointA_Title={'Нур-Султан'}
          pointA_Subtitle={'Казахстан, Акмолинская область'}
          pointA_date={'14 июн'}
          pointB_Title={'Алматы'}
          pointB_Subtitle={'Казахстан, Алматинская область'}
          pointB_date={'~620 км, 4 ч 20 мин в пути'}
        />
        <SecondCardBlock
          firstRowTitle={'22 тн / 86 м³'}
          firstRowSubtitle={'Фрукты, клубника'}
          secondRowTitle={'Авто Тентовка'}
          secondRowSubtitle={'Загрузка, выгрузка: боковая'}
          thirdRowTitle={
            'Погрузка груза должна выполняться аккуратно. Коробки закрепить надежно. Оплата на месте получения.'
          }
        />
        <PriceBlock
          title={'Договорная цена'}
          subtitle={'без НДС, наличными'}
          button={'Сделать предложение'}
        />
        <ContactBlock
          companyName={'ТОО «ОУСА Альянс»'}
          personName={'Айсулу А.Л.'}
          position={'Экспедитор'}
          phoneNumber1={'+7 702 360 70 20'}
          phoneNumber2={'+7 702 360 70 30'}
          email={'aisulu@ousa-al.kz'}
          rating={5}
          Call={handleCall}
          Message={handleMessage}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
