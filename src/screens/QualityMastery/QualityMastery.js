import {View, Text, ScrollView, TextInput} from 'react-native';
import React from 'react';
import Footer from '../../controllers/Footer/Footer';
import {colors} from '../../config/colors';
import InputLabel from '../../controllers/Label/InputLabel';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import QualityMasteryHesabla from './QualityMasteryHesabla';
import {Data} from './Data';

const QualityMastery = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 4}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 40,
              fontHeight: 40,
              color: colors.blue,
            }}>
            Keyfiyyət Mənimsəmə
          </Text>
        </View>
        <View style={{flex: 5, marginBottom: 10}}>
          <ScrollView style={{flex: 1, marginLeft: 15}}>
            <KeyboardAwareScrollView>
              <View style={{gap: 25}}>
                <View style={{flexDirection: 'row', gap: 60}}>
                  <View style={{width: '48%', height: 52}}>
                    <InputLabel Name="Şagirdlərin sayı" />
                  </View>
                  <View
                    style={{
                      width: '18%',
                      height: 52,
                      justifyContent: 'flex-end',
                    }}>
                    <TextInput
                      style={{
                        borderBottomWidth: 1,
                        fontSize: 20,
                        borderColor: colors.blue,
                      }}
                      placeholder="0"
                      keyboardType="numeric"
                      onChangeText={text => {
                        if (text == '') {
                          Data.StudentCount = 0;
                        } else {
                          Data.StudentCount = text;
                        }
                      }}></TextInput>
                  </View>
                </View>
                <View style={{flexDirection: 'row', gap: 60}}>
                  <View style={{width: '48%', height: 52}}>
                    <InputLabel Name="2 alanların sayı" />
                  </View>
                  <View
                    style={{
                      width: '18%',
                      height: 52,
                      justifyContent: 'flex-end',
                    }}>
                    <TextInput
                      style={{
                        borderBottomWidth: 1,
                        fontSize: 20,
                        borderColor: colors.blue,
                      }}
                      placeholder="0"
                      keyboardType="numeric"
                      onChangeText={text => {
                        if (text == '') {
                          Data.Mark2 = 0;
                        } else {
                          Data.Mark2 = text;
                        }
                      }}></TextInput>
                  </View>
                </View>
                <View style={{flexDirection: 'row', gap: 60}}>
                  <View style={{width: '48%', height: 52}}>
                    <InputLabel Name="3 alanların sayı" />
                  </View>
                  <View
                    style={{
                      width: '18%',
                      height: 52,
                      justifyContent: 'flex-end',
                    }}>
                    <TextInput
                      style={{
                        borderBottomWidth: 1,
                        fontSize: 20,
                        borderColor: colors.blue,
                      }}
                      placeholder="0"
                      keyboardType="numeric"
                      onChangeText={text => {
                        if (text == '') {
                          Data.Mark3 = 0;
                        } else {
                          Data.Mark3 = text;
                        }
                      }}></TextInput>
                  </View>
                </View>
                <View style={{flexDirection: 'row', gap: 60}}>
                  <View style={{width: '48%', height: 52}}>
                    <InputLabel Name="4 alanların sayı" />
                  </View>
                  <View
                    style={{
                      width: '18%',
                      height: 52,
                      justifyContent: 'flex-end',
                    }}>
                    <TextInput
                      style={{
                        borderBottomWidth: 1,
                        fontSize: 20,
                        borderColor: colors.blue,
                      }}
                      placeholder="0"
                      keyboardType="numeric"
                      onChangeText={text => {
                        if (text == '') {
                          Data.Mark4 = 0;
                        } else {
                          Data.Mark4 = text;
                        }
                      }}></TextInput>
                  </View>
                </View>
                <View style={{flexDirection: 'row', gap: 60}}>
                  <View style={{width: '48%', height: 52}}>
                    <InputLabel Name="5 alanların sayı" />
                  </View>
                  <View
                    style={{
                      width: '18%',
                      height: 52,
                      justifyContent: 'flex-end',
                    }}>
                    <TextInput
                      style={{
                        borderBottomWidth: 1,
                        fontSize: 20,
                        borderColor: colors.blue,
                      }}
                      placeholder="0"
                      keyboardType="numeric"
                      onChangeText={text => {
                        if (text == '') {
                          Data.Mark5 = 0;
                        } else {
                          Data.Mark5 = text;
                        }
                      }}></TextInput>
                  </View>
                </View>
              </View>
            </KeyboardAwareScrollView>
          </ScrollView>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          top: 0,
          alignItems: 'center',
        }}>
        <QualityMasteryHesabla />
      </View>
      <Footer />
    </View>
  );
};

export default QualityMastery;
