import {View, Text} from 'react-native';
import React from 'react';
import Footer from '../../controllers/Footer/Footer';
import {colors} from '../../config/colors';
import Icon from '../../controllers/Icon/Icon';

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 60,
            lineHeight: 60,
            textAlign: 'center',
            color: colors.blue,
            marginTop: '10%',
          }}>
          Müəllim köməkçisi
        </Text>
        <Text
          style={{
            fontSize: 30,
            lineHeight: 36,
            textAlign: 'center',
            color: colors.blue,
            marginTop: '2.3%',
          }}>
          Məlumat
        </Text>
        <Text
          style={{
            width: '82%',
            fontSize: 20,
            lineHeight: 20,
            textAlign: 'center',
            color: colors.black,
            marginTop: '2.3%',
          }}>
          İlk mobil proqramımızla qarşınızdayıq. Bu proqramı hazırlayarkən
          məqsədimiz müəllimlərin işini rahatlaşdırmaq, rifah səviyyəsini
          artırmaqdır.
        </Text>
        <Text
          style={{
            fontSize: 30,
            lineHeight: 36,
            textAlign: 'center',
            color: colors.blue,
            marginTop: '3%',
          }}>
          İstifadə qaydası
        </Text>
        <Text
          style={{
            width: '68%',
            fontSize: 20,
            lineHeight: 20,
            textAlign: 'center',
            color: colors.black,
            marginTop: '1.3%',
          }}>
          Aşağıdakı ox düyməsinə toxunun.{' '}
        </Text>
      </View>
      <Footer Route="Home" />
    </View>
  );
};

export default Home;
