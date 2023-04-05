import {View, Text, ScrollView, TextInput} from 'react-native';
import React, {useState} from 'react';
import Button from '../../controllers/Button/Button';
import {colors} from '../../config/colors';
import Footer from '../../controllers/Footer/Footer';
import InputLabel from '../../controllers/Label/InputLabel';
import {Switch} from 'react-native-gesture-handler';

const Salary = () => {
  const [switchValue, setSwitchValue] = useState(false);

  const toggleSwitch = value => {
    //To handle switch toggle
    setSwitchValue(value);
    //State changes according to switch
  };
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
              fontSize: 45,
              fontHeight: 45,
              color: colors.blue,
            }}>
            Əmək Haqqı
          </Text>
        </View>
        <View style={{flex: 5, marginBottom: 10}}>
          <ScrollView style={{flex: 1, marginLeft: 15}}>
            <View style={{flexDirection: 'row', gap: 60}}>
              <View style={{width: '48%', height: 52}}>
                <InputLabel Name="Stajı daxil edin" />
              </View>
              <View
                style={{width: '18%', height: 52, justifyContent: 'flex-end'}}>
                <TextInput
                  style={{
                    borderBottomWidth: 1,
                    fontSize: 20,
                    borderColor: colors.blue,
                  }}></TextInput>
              </View>
            </View>
            <View style={{flexDirection: 'row', gap: 60, marginTop: 25}}>
              <View style={{width: '61%', height: 52}}>
                <InputLabel Name="Sinif rəhbərisinizmi?" />
              </View>
              <View
                style={{
                  width: '18%',
                  height: 52,
                  justifyContent: 'flex-end',
                }}>
                <Switch onValueChange={toggleSwitch} value={switchValue} />
              </View>
            </View>
            <View style={{flexDirection: 'row', gap: 60, marginTop: 25}}>
              <View style={{width: '61%', height: 52}}>
                <InputLabel Name="Təhsiliniz" />
              </View>
              <View
                style={{
                  width: '18%',
                  height: 52,
                  justifyContent: 'flex-end',
                }}>
                <Switch onValueChange={toggleSwitch} value={switchValue} />
              </View>
            </View>
            <View style={{flexDirection: 'row', gap: 30, marginTop: 25}}>
              <View
                style={{
                  width: '58%',
                  height: 73,
                }}>
                <InputLabel
                  paddingRight={25}
                  paddingLeft={25}
                  Name="Lisey sinifləri üçün dərs yükünüz"
                />
              </View>
              <View
                style={{width: '18%', height: 52, justifyContent: 'flex-end'}}>
                <TextInput
                  style={{
                    borderBottomWidth: 1,
                    fontSize: 20,
                    borderColor: colors.blue,
                  }}></TextInput>
              </View>
            </View>
            <View style={{flexDirection: 'row', gap: 30, marginTop: 25}}>
              <View
                style={{
                  width: '58%',
                  height: 73,
                }}>
                <InputLabel
                  paddingRight={25}
                  paddingLeft={25}
                  Name="Adi siniflər üçün dərs yükünüz"
                />
              </View>
              <View
                style={{width: '18%', height: 52, justifyContent: 'flex-end'}}>
                <TextInput
                  style={{
                    borderBottomWidth: 1,
                    fontSize: 20,
                    borderColor: colors.blue,
                  }}></TextInput>
              </View>
            </View>
            <View style={{flexDirection: 'row', gap: 30, marginTop: 25}}>
              <View
                style={{
                  width: '58%',
                  height: 73,
                }}>
                <InputLabel
                  paddingRight={25}
                  paddingLeft={25}
                  Name="Əvəzçilik üzrə dərs saati miqdarı"
                />
              </View>
              <View
                style={{width: '18%', height: 52, justifyContent: 'flex-end'}}>
                <TextInput
                  style={{
                    borderBottomWidth: 1,
                    fontSize: 20,
                    borderColor: colors.blue,
                  }}></TextInput>
              </View>
            </View>
            <View style={{flexDirection: 'row', gap: 30, marginTop: 25}}>
              <View
                style={{
                  width: '48%',
                  height: 52,
                }}>
                <InputLabel Name="Həvəsləndirmə" />
              </View>
              <View
                style={{width: '18%', height: 52, justifyContent: 'flex-end'}}>
                <TextInput
                  style={{
                    borderBottomWidth: 1,
                    fontSize: 20,
                    borderColor: colors.blue,
                  }}></TextInput>
              </View>
            </View>
            <View style={{flexDirection: 'row', gap: 30, marginTop: 25}}>
              <View
                style={{
                  width: '61%',
                  height: 52,
                }}>
                <InputLabel Name="Sertfikasiyanız var?" />
              </View>
              <View
                style={{
                  width: '18%',
                  height: 52,
                  justifyContent: 'flex-end',
                }}>
                <Switch onValueChange={toggleSwitch} value={switchValue} />
              </View>
            </View>
            <View style={{flexDirection: 'row', gap: 30, marginTop: 25}}>
              <View
                style={{
                  width: '57%',
                  height: 52,
                }}>
                <InputLabel Name="Sertfikasiyanız balınız" />
              </View>
              <View
                style={{width: '18%', height: 52, justifyContent: 'flex-end'}}>
                <TextInput
                  style={{
                    borderBottomWidth: 1,
                    fontSize: 20,
                    borderColor: colors.blue,
                  }}></TextInput>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          top: 0,
          alignItems: 'center',
        }}>
        <Button
          width={'59%'}
          height={'35%'}
          borderWidth={4}
          borderColor={colors.blue}
          borderTopLeftRadius={50}
          borderTopRightRadius={50}
          borderBottomLeftRadius={50}
          borderBottomRightRadius={50}
          backgroundColor={colors.orange}
          fontWeight={400}
          fontSize={32}
          lineHeight={39}
          color={colors.white}
          name="HESABLA"
        />
      </View>
      <Footer />
    </View>
  );
};

export default Salary;
