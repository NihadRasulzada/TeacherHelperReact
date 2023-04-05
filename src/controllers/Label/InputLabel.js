import {View, Text} from 'react-native';
import React from 'react';
import {colors} from '../../config/colors';

const InputLabel = props => {
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
      }}>
      <View
        style={{
          flex: 1,
          borderWidth: 4,
          borderColor: colors.blue,
          borderTopRightRadius: 50,
          borderBottomLeftRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: props.paddingLeft,
          paddingRight: props.paddingRight,
        }}>
        <Text
          style={{
            fontWeight: 400,
            fontSize: 20,
            lineHeight: 24,
            color: colors.black,
          }}>
          {props.Name}
        </Text>
      </View>
    </View>
  );
};

export default InputLabel;
