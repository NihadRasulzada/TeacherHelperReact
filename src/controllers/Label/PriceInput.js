import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../config/colors';
import Icon from '../Icon/Icon';

const PriceInput = props => {
  return (
    <View style={{flexDirection: 'row', gap: 1.5}}>
      <View
        style={{
          width: border === 207,
          height: 46,
          backgroundColor: visibilityBackgroundColor,
          borderRadius: 15,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 20,
            fontHeight: 20,
            color: colors.black,
          }}>
          BSQ {visibilityText}
        </Text>
        {visibilityText === ':' ? (
          <TextInput
            style={{
              width: 48,
              marginLeft: 3,
              fontSize: 20,
            }}
            placeholder="0"
          />
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};

export default PriceInput;
