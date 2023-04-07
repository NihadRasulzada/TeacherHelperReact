import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../config/colors';
import Icon from '../Icon/Icon';

const PriceInput = props => {
  const [border, setBorder] = useState(props.Position);
  const [visibilityBackgroundColor, setVisibilityBackgroundColor] = useState(
    props.VisibilityBackgroundColor,
  );
  const [visibilityText, setVisibilityText] = useState(props.VisibilityText);
  const [count, setCount] = useState(props.Count);
  return (
    <View style={{flexDirection: 'row', gap: 1.5}}>
      <View
        style={{
          width: 138,
          height: 46,
          backgroundColor: visibilityBackgroundColor,
          borderTopLeftRadius:
            border === 'left' ? 15 : border === 'left_right' ? 15 : 0,
          borderBottomLeftRadius:
            border === 'left' ? 15 : border === 'left_right' ? 15 : 0,
          borderTopRightRadius:
            border === 'right' ? 15 : border === 'left_right' ? 15 : 0,
          borderBottomRightRadius:
            border === 'right' ? 15 : border === 'left_right' ? 15 : 0,
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
          {border === 'left_right' ? 'BSQ' : 'KSQ'} {count} {visibilityText}
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
