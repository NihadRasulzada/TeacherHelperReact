import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        width: props.width,
        height: props.height,
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: props.borderWidth,
          borderColor: props.borderColor,
          borderTopLeftRadius: props.borderTopLeftRadius,
          borderTopRightRadius: props.borderTopRightRadius,
          borderBottomLeftRadius: props.borderBottomLeftRadius,
          borderBottomRightRadius: props.borderBottomRightRadius,
          backgroundColor: props.backgroundColor,
        }}>
        <Text
          style={{
            fontStyle: 'normal',
            fontWeight: props.fontWeight,
            fontSize: props.fontSize,
            lineHeight: props.lineHeight,
            color: props.color,
          }}>
          {props.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
