import {TouchableOpacity, View, Text, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import Footer from '../../controllers/Footer/Footer';
import {colors} from '../../config/colors';
import PriceInput from '../../controllers/Label/PriceInput';
import Icon from '../../controllers/Icon/Icon';
import {ScrollView} from 'react-native-gesture-handler';

const Input = () => {
  return (
    <TextInput
      style={{
        width: 48,
        marginLeft: 3,
        fontSize: 20,
      }}
      placeholder="0"
    />
  );
};

const Inputs = props => {
  const [position, setPosition] = useState(props.Position);
  const [topVisibility, setTopVisibility] = useState([
    true,
    true,
    true,
    true,
    false,
    false,
  ]);
  const [bottomVisibility, setBottomVisibility] = useState([
    true,
    true,
    true,
    true,
    true,
    false,
  ]);
  const [content, setContent] = useState(props.Content);
  let fun;
  useEffect(
    (fun = async i => {
      return (
        <PriceInput
          Position={position}
          VisibilityBackgroundColor={
            content === 'top'
              ? topVisibility[i]
                ? colors.blue
                : colors.gray
              : bottomVisibility[i]
              ? colors.blue
              : colors.gray
          }
          VisibilityText={
            content === 'top'
              ? topVisibility[i]
                ? ':'
                : ''
              : bottomVisibility[i]
              ? ':'
              : ''
          }
          VisibilityInput={
            content === 'top' ? (
              topVisibility[i] ? (
                <Input />
              ) : (
                <></>
              )
            ) : bottomVisibility[i] ? (
              <Input />
            ) : (
              <></>
            )
          }
          Count={i + 1}
        />
      );
      console.log('200');
    }),
    topVisibility,
  );
  var output = [];
  let i = position === 'left' ? 0 : 3;
  let m = position === 'left' ? 3 : 6;
  let arr = [];
  for (i; i < m; i++) {
    var item = (
      <View style={{flexDirection: 'row', gap: 1.5}}>
        {position === 'left' ? (
          <TouchableOpacity
            onPress={() => {
              if (content === 'top') {
                if (topVisibility[i]) {
                  arr = [...topVisibility];
                  arr[i] = false;
                  setTopVisibility(arr);
                } else {
                  arr = [...topVisibility];
                  arr[i] = true;
                  setTopVisibility(arr);
                }
              } else {
                if (bottomVisibility[i]) {
                  arr = [...bottomVisibility];
                  arr[i] = false;
                  setBottomVisibility(arr);
                } else {
                  arr = [...bottomVisibility];
                  arr[i] = true;
                  setBottomVisibility(arr);
                }
              }
            }}>
            <Icon
              name={
                content === 'top'
                  ? topVisibility[i]
                    ? 'decrease'
                    : 'increase'
                  : bottomVisibility[i]
                  ? 'decrease'
                  : 'increase'
              }
            />
          </TouchableOpacity>
        ) : (
          <></>
        )}
        {fun(i)}
        {position === 'right' ? (
          <TouchableOpacity
            onPress={() => {
              if (content === 'top') {
                if (topVisibility[i]) {
                  arr = [...topVisibility];
                  arr[i] = false;
                  setTopVisibility(arr);
                } else {
                  arr = [...topVisibility];
                  arr[i] = true;
                  setTopVisibility(arr);
                }
              } else {
                if (bottomVisibility[i]) {
                  arr = [...bottomVisibility];
                  arr[i] = false;
                  setBottomVisibility(arr);
                } else {
                  arr = [...bottomVisibility];
                  arr[i] = true;
                  setBottomVisibility(arr);
                }
              }
            }}>
            <Icon
              name={
                content === 'top'
                  ? topVisibility[i]
                    ? 'decrease'
                    : 'increase'
                  : bottomVisibility[i]
                  ? 'decrease'
                  : 'increase'
              }
            />
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </View>
    );
    output[i] = item;
  }

  return <View>{output}</View>;
};

const YearlyPrice = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 38}}>
        <View style={{flex: 70, alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 30,
              color: colors.black,
            }}>
            Birinci Yarımil KSQ
          </Text>
          <View style={{flexDirection: 'row', gap: 10}}>
            <Inputs Position="left" Content={'top'} />
            <Inputs Position="right" Content={'top'} />
          </View>
        </View>
        <View style={{flex: 30, alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 30,
              lineHeight: 30,
              color: colors.black,
            }}>
            Birinci Yarımil BSQ
          </Text>
          <PriceInput
            Position="left_right"
            VisibilityBackgroundColor={colors.blue}
            VisibilityText={':'}
            VisibilityInput={<Input />}
            Count={''}
          />
        </View>
      </View>
      <View style={{borderWidth: 1, marginLeft: 7, marginRight: 7}}></View>
      <View style={{flex: 37}}>
        <View style={{flex: 70, alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 30,
              color: colors.black,
            }}>
            İkinci Yarımil KSQ
          </Text>
          <View style={{flexDirection: 'row', gap: 10}}>
            <Inputs Position="left" Content={'bottom'} />
            <Inputs Position="right" Content={'bottom'} />
          </View>
        </View>
        <View style={{flex: 30, alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 30,
              color: colors.black,
            }}>
            İkinci Yarımil BSQ
          </Text>
          <PriceInput Position="left_right" Visibility={true} Count="" />
        </View>
      </View>
      <View style={{borderWidth: 1, marginLeft: 7, marginRight: 7}}></View>
      <View style={{flex: 25}}></View>
      <Footer />
    </View>
  );
};

export default YearlyPrice;
