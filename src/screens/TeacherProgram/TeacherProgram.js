import {View, Text} from 'react-native';
import React from 'react';
import Footer from '../../controllers/Footer/Footer';
import {colors} from '../../config/colors';

const TeacherProgram = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingTop: 45,
        }}>
        <Text
          style={{
            fontSize: 45,
            lineHeight: 45,
            color: colors.blue,
          }}>
          Dərs Planlaması
        </Text>
      </View>
      <View style={{flex: 1}}>
        <Text
          style={{
            fontSize: 20,
            lineHeight: 20,
            textAlign: 'center',
            color: colors.black,
            marginLeft: 35,
            marginRight: 35,
          }}>
          Səhifə hazırlanma ərəfəsindədir. Bu səhifə müəllimlərin illik dərs
          cədvəlini planlamasına kömək üçün nəzərdə tutulur.
        </Text>
        
      </View>
      <Footer />
    </View>
  );
};

export default TeacherProgram;
