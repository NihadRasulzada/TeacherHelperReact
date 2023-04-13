import {View, Text, TouchableOpacity, RefreshControlBase} from 'react-native';
import * as React from 'react';
import {useState} from 'react';
import Icon from '../Icon/Icon';
import {colors} from '../../config/colors';
import Button from '../Button/Button';
import {useNavigation} from '@react-navigation/native';

const HiddenOrVisibleFooterLayoutButton = props => {
  const [navigation, setNavigation] = useState(useNavigation());
  const onTouchedtoSalary = () => {
    navigation.navigate('Salary');
  };
  const onTouchedtoYearlyPrice = () => {
    navigation.navigate('YearlyPrice');
  };
  const onTouchedtoTeacherProgram = () => {
    navigation.navigate('TeacherProgram');
  };
  if (props.Visibility) {
    return (
      <View
        style={{
          flex: 8,
          alignItems: 'center',
          marginTop: 18,
          gap: 24,
        }}>
        <View
          style={{
            width: '60%',
            height: '15%',
          }}>
          <Button
            width={'100%'}
            height={'100%'}
            borderWidth={5}
            borderColor={colors.orange}
            borderTopLeftRadius={25}
            borderTopRightRadius={25}
            borderBottomLeftRadius={25}
            borderBottomRightRadius={25}
            backgroundColor={colors.white}
            fontWeight={400}
            fontSize={30}
            lineHeight={30}
            color={colors.orange}
            onPress={onTouchedtoSalary}
            name="Əmək haqqı"
          />
        </View>
        <View
          style={{
            width: '60%',
            height: '15%',
          }}>
          <Button
            width={'100%'}
            height={'100%'}
            borderWidth={5}
            borderColor={colors.orange}
            borderTopLeftRadius={25}
            borderTopRightRadius={25}
            borderBottomLeftRadius={25}
            borderBottomRightRadius={25}
            backgroundColor={colors.white}
            fontWeight={400}
            fontSize={30}
            lineHeight={30}
            color={colors.orange}
            onPress={onTouchedtoYearlyPrice}
            name="İllik qiymət"
          />
        </View>
        <View
          style={{
            width: '60%',
            height: '15%',
          }}>
          <Button
            width={'100%'}
            height={'100%'}
            borderWidth={5}
            borderColor={colors.orange}
            borderTopLeftRadius={25}
            borderTopRightRadius={25}
            borderBottomLeftRadius={25}
            borderBottomRightRadius={25}
            backgroundColor={colors.white}
            fontWeight={400}
            fontSize={30}
            lineHeight={30}
            color={colors.orange}
            onPress={onTouchedtoTeacherProgram}
            name="Dərs Planlaması"
          />
        </View>
      </View>
    );
  }
};

const Footer = props => {
  const [visible, setVisible] = useState(false);
  const [icon, setIcon] = useState(
    props.Route !== 'Home'
      ? 'arrov'
      : visible === false
      ? 'expandLess'
      : 'expandMore',
  );
  const [navigation, setNavigation] = useState(useNavigation());
  const Clickable = () => {
    if (props.Route !== 'Home') {
      navigation.navigate('Home');
    } else {
      if (visible === false) {
        setVisible(true);
        setIcon('expandMore');
      } else {
        setVisible(false);
        setIcon('expandLess');
      }
    }
  };
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: visible === true ? '61%' : 100,
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.blue,
          borderTopRightRadius: 35,
          borderTopLeftRadius: 35,
          flexDirection: 'column',
        }}>
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: 'center',
            marginTop: 10,
          }}
          onPress={Clickable}>
          <Icon name={icon} />
        </TouchableOpacity>
        <HiddenOrVisibleFooterLayoutButton Visibility={visible} />
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginBottom: 22,
          }}>
          <Text
            style={{
              fontSize: 20,
              lineHeight: 24,
            }}>
            TrigoIntegro
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Footer;
