import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  LogBox,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Footer from '../../controllers/Footer/Footer';
import {colors} from '../../config/colors';
import PriceInput from '../../controllers/Label/PriceInput';
import Icon from '../../controllers/Icon/Icon';
import Button from '../../controllers/Button/Button';
import {ScrollView} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const YearlyPrice = () => {
  const [isCheckedIY, setIsCheckedIY] = useState(false);
  const [isCheckedB, setIsCheckedB] = useState(false);

  const Input_Top = () => {
    const [visibilityBackgroundColor, setVisibilityBackgroundColor] = useState([
      colors.blue,
      colors.blue,
      colors.blue,
      colors.blue,
      colors.gray,
      colors.gray,
    ]);
    const [visibilityText, setVisibilityText] = useState([
      ':',
      ':',
      ':',
      ':',
      '',
      '',
    ]);
    const [iconName, setIconName] = useState([
      'decrease',
      'decrease',
      'decrease',
      'decrease',
      'increase',
      '',
    ]);

    const handleLogout = i => {
      if (visibilityBackgroundColor[i] === colors.blue) {
        for (let index = i; index < 6; index++) {
          if (visibilityBackgroundColor[index] === colors.gray) {
            i = index - 1;
            break;
          }
        }
        if (visibilityBackgroundColor[5] === colors.blue) {
          i = 5;
        }

        let newarr = [...visibilityBackgroundColor];
        newarr[i] = colors.gray;
        setVisibilityBackgroundColor(newarr);

        newarr = [...visibilityText];
        newarr[i] = '';
        setVisibilityText(newarr);

        newarr = [...iconName];
        newarr[i] = 'increase';
        newarr[i + 1] = '';
        setIconName(newarr);
      } else {
        let newarr = [...visibilityBackgroundColor];
        newarr[i] = colors.blue;
        setVisibilityBackgroundColor(newarr);

        newarr = [...visibilityText];
        newarr[i] = ':';
        setVisibilityText(newarr);

        newarr = [...iconName];
        newarr[i] = 'decrease';
        newarr[i + 1] = 'increase';
        setIconName(newarr);
      }

      console.log(setVisibilityBackgroundColor);
    };

    useEffect(() => {
      handleLogout();
      for (let index = 0; index < 6; index++) {
        if (isCheckedIY === true) {
          setVisibilityBackgroundColor([
            colors.gray,
            colors.gray,
            colors.gray,
            colors.gray,
            colors.gray,
            colors.gray,
          ]);
          setVisibilityText(['', '', '', '', '', '']);
          setIconName(['', '', '', '', '', '']);
        }
      }
    }, []);

    return (
      <View style={{flexDirection: 'row', gap: 10}}>
        <View style={{gap: 5}}>
          <View style={{flexDirection: 'row', gap: 1.5}}>
            {iconName[0] !== '' ? (
              <TouchableOpacity
                onPress={() => {
                  handleLogout(0);
                }}>
                <Icon name={iconName[0]} />
              </TouchableOpacity>
            ) : (
              <View style={{width: 41, height: 41}}></View>
            )}
            <View style={{flexDirection: 'row', gap: 1.5}}>
              <View
                style={{
                  width: 138,
                  height: 46,
                  backgroundColor: visibilityBackgroundColor[0],
                  borderTopLeftRadius: 15,
                  borderBottomLeftRadius: 15,
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
                  {'KSQ 1'} {visibilityText[0]}
                </Text>
                {visibilityText[0] === ':' ? (
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
          </View>
          <View style={{flexDirection: 'row', gap: 1.5}}>
            {iconName[1] !== '' ? (
              <TouchableOpacity
                onPress={() => {
                  handleLogout(1);
                }}>
                <Icon name={iconName[1]} />
              </TouchableOpacity>
            ) : (
              <View style={{width: 41, height: 41}}></View>
            )}
            <View style={{flexDirection: 'row', gap: 1.5}}>
              <View
                style={{
                  width: 138,
                  height: 46,
                  backgroundColor: visibilityBackgroundColor[1],
                  borderTopLeftRadius: 15,
                  borderBottomLeftRadius: 15,
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
                  {'KSQ 2'} {visibilityText[1]}
                </Text>
                {visibilityText[1] === ':' ? (
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
          </View>
          <View style={{flexDirection: 'row', gap: 1.5}}>
            {iconName[2] !== '' ? (
              <TouchableOpacity
                onPress={() => {
                  handleLogout(2);
                }}>
                <Icon name={iconName[2]} />
              </TouchableOpacity>
            ) : (
              <View style={{width: 41, height: 41}}></View>
            )}
            <View style={{flexDirection: 'row', gap: 1.5}}>
              <View
                style={{
                  width: 138,
                  height: 46,
                  backgroundColor: visibilityBackgroundColor[2],
                  borderTopLeftRadius: 15,
                  borderBottomLeftRadius: 15,
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
                  {'KSQ 3'} {visibilityText[2]}
                </Text>
                {visibilityText[2] === ':' ? (
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
          </View>
        </View>
        <View style={{gap: 5}}>
          <View style={{flexDirection: 'row', gap: 1.5}}>
            <View style={{flexDirection: 'row', gap: 1.5}}>
              <View
                style={{
                  width: 138,
                  height: 46,
                  backgroundColor: visibilityBackgroundColor[3],
                  borderTopRightRadius: 15,
                  borderBottomRightRadius: 15,
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
                  {'KSQ 4'} {visibilityText[3]}
                </Text>
                {visibilityText[3] === ':' ? (
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
            {iconName[3] !== '' ? (
              <TouchableOpacity
                onPress={() => {
                  handleLogout(3);
                }}>
                <Icon name={iconName[3]} />
              </TouchableOpacity>
            ) : (
              <View style={{width: 41, height: 41}}></View>
            )}
          </View>
          <View style={{flexDirection: 'row', gap: 1.5}}>
            <View style={{flexDirection: 'row', gap: 1.5}}>
              <View
                style={{
                  width: 138,
                  height: 46,
                  backgroundColor: visibilityBackgroundColor[4],
                  borderTopRightRadius: 15,
                  borderBottomRightRadius: 15,
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
                  {'KSQ 5'} {visibilityText[4]}
                </Text>
                {visibilityText[4] === ':' ? (
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
            {iconName[4] !== '' ? (
              <TouchableOpacity
                onPress={() => {
                  handleLogout(4);
                }}>
                <Icon name={iconName[4]} />
              </TouchableOpacity>
            ) : (
              <View style={{width: 41, height: 41}}></View>
            )}
          </View>
          <View style={{flexDirection: 'row', gap: 1.5}}>
            <View style={{flexDirection: 'row', gap: 1.5}}>
              <View
                style={{
                  width: 138,
                  height: 46,
                  backgroundColor: visibilityBackgroundColor[5],
                  borderTopRightRadius: 15,
                  borderBottomRightRadius: 15,
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
                  {'KSQ 6'} {visibilityText[5]}
                </Text>
                {visibilityText[5] === ':' ? (
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
            {iconName[5] !== '' ? (
              <TouchableOpacity
                onPress={() => {
                  handleLogout(5);
                }}>
                <Icon name={iconName[5]} />
              </TouchableOpacity>
            ) : (
              <View style={{width: 41, height: 41}}></View>
            )}
          </View>
        </View>
      </View>
    );
  };
  const Input_Bottom = () => {
    const [visibilityBackgroundColor, setVisibilityBackgroundColor] = useState([
      colors.gray,
      colors.gray,
      colors.gray,
      colors.gray,
      colors.gray,
      colors.gray,
    ]);
    const [visibilityText, setVisibilityText] = useState([
      '',
      '',
      '',
      '',
      '',
      '',
    ]);
    const [iconName, setIconName] = useState(['', '', '', '', '', '']);

    const handleLogout = i => {
      if (visibilityBackgroundColor[i] === colors.blue) {
        for (let index = i; index < 6; index++) {
          if (visibilityBackgroundColor[index] === colors.gray) {
            i = index - 1;
            break;
          }
        }
        if (visibilityBackgroundColor[5] === colors.blue) {
          i = 5;
        }

        let newarr = [...visibilityBackgroundColor];
        newarr[i] = colors.gray;
        setVisibilityBackgroundColor(newarr);

        newarr = [...visibilityText];
        newarr[i] = '';
        setVisibilityText(newarr);

        newarr = [...iconName];
        newarr[i] = 'increase';
        newarr[i + 1] = '';
        setIconName(newarr);
      } else {
        let newarr = [...visibilityBackgroundColor];
        newarr[i] = colors.blue;
        setVisibilityBackgroundColor(newarr);

        newarr = [...visibilityText];
        newarr[i] = ':';
        setVisibilityText(newarr);

        newarr = [...iconName];
        newarr[i] = 'decrease';
        newarr[i + 1] = 'increase';
        setIconName(newarr);
      }

      console.log(setVisibilityBackgroundColor);
    };

    useEffect(() => {
      handleLogout();
      if (isCheckedIY === true) {
        setVisibilityBackgroundColor([
          colors.blue,
          colors.blue,
          colors.blue,
          colors.blue,
          colors.gray,
          colors.gray,
        ]);
        setVisibilityText([':', ':', ':', ':', '', '']);
        setIconName([
          'decrease',
          'decrease',
          'decrease',
          'decrease',
          'increase',
          '',
        ]);
      }
    }, []);

    return (
      <View style={{flexDirection: 'row', gap: 10}}>
        <View style={{gap: 5}}>
          <View style={{flexDirection: 'row', gap: 1.5}}>
            {iconName[0] !== '' ? (
              <TouchableOpacity
                onPress={() => {
                  handleLogout(0);
                }}>
                <Icon name={iconName[0]} />
              </TouchableOpacity>
            ) : (
              <View style={{width: 41, height: 41}}></View>
            )}
            <View style={{flexDirection: 'row', gap: 1.5}}>
              <View
                style={{
                  width: 138,
                  height: 46,
                  backgroundColor: visibilityBackgroundColor[0],
                  borderTopLeftRadius: 15,
                  borderBottomLeftRadius: 15,
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
                  {'KSQ 1'} {visibilityText[0]}
                </Text>
                {visibilityText[0] === ':' ? (
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
          </View>
          <View style={{flexDirection: 'row', gap: 1.5}}>
            {iconName[1] !== '' ? (
              <TouchableOpacity
                onPress={() => {
                  handleLogout(1);
                }}>
                <Icon name={iconName[1]} />
              </TouchableOpacity>
            ) : (
              <View style={{width: 41, height: 41}}></View>
            )}
            <View style={{flexDirection: 'row', gap: 1.5}}>
              <View
                style={{
                  width: 138,
                  height: 46,
                  backgroundColor: visibilityBackgroundColor[1],
                  borderTopLeftRadius: 15,
                  borderBottomLeftRadius: 15,
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
                  {'KSQ 2'} {visibilityText[1]}
                </Text>
                {visibilityText[1] === ':' ? (
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
          </View>
          <View style={{flexDirection: 'row', gap: 1.5}}>
            {iconName[2] !== '' ? (
              <TouchableOpacity
                onPress={() => {
                  handleLogout(2);
                }}>
                <Icon name={iconName[2]} />
              </TouchableOpacity>
            ) : (
              <View style={{width: 41, height: 41}}></View>
            )}
            <View style={{flexDirection: 'row', gap: 1.5}}>
              <View
                style={{
                  width: 138,
                  height: 46,
                  backgroundColor: visibilityBackgroundColor[2],
                  borderTopLeftRadius: 15,
                  borderBottomLeftRadius: 15,
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
                  {'KSQ 3'} {visibilityText[2]}
                </Text>
                {visibilityText[2] === ':' ? (
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
          </View>
        </View>
        <View style={{gap: 5}}>
          <View style={{flexDirection: 'row', gap: 1.5}}>
            <View style={{flexDirection: 'row', gap: 1.5}}>
              <View
                style={{
                  width: 138,
                  height: 46,
                  backgroundColor: visibilityBackgroundColor[3],
                  borderTopRightRadius: 15,
                  borderBottomRightRadius: 15,
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
                  {'KSQ 4'} {visibilityText[3]}
                </Text>
                {visibilityText[3] === ':' ? (
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
            {iconName[3] !== '' ? (
              <TouchableOpacity
                onPress={() => {
                  handleLogout(3);
                }}>
                <Icon name={iconName[3]} />
              </TouchableOpacity>
            ) : (
              <View style={{width: 41, height: 41}}></View>
            )}
          </View>
          <View style={{flexDirection: 'row', gap: 1.5}}>
            <View style={{flexDirection: 'row', gap: 1.5}}>
              <View
                style={{
                  width: 138,
                  height: 46,
                  backgroundColor: visibilityBackgroundColor[4],
                  borderTopRightRadius: 15,
                  borderBottomRightRadius: 15,
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
                  {'KSQ 5'} {visibilityText[4]}
                </Text>
                {visibilityText[4] === ':' ? (
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
            {iconName[4] !== '' ? (
              <TouchableOpacity
                onPress={() => {
                  handleLogout(4);
                }}>
                <Icon name={iconName[4]} />
              </TouchableOpacity>
            ) : (
              <View style={{width: 41, height: 41}}></View>
            )}
          </View>
          <View style={{flexDirection: 'row', gap: 1.5}}>
            <View style={{flexDirection: 'row', gap: 1.5}}>
              <View
                style={{
                  width: 138,
                  height: 46,
                  backgroundColor: visibilityBackgroundColor[5],
                  borderTopRightRadius: 15,
                  borderBottomRightRadius: 15,
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
                  {'KSQ 6'} {visibilityText[5]}
                </Text>
                {visibilityText[5] === ':' ? (
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
            {iconName[5] !== '' ? (
              <TouchableOpacity
                onPress={() => {
                  handleLogout(5);
                }}>
                <Icon name={iconName[5]} />
              </TouchableOpacity>
            ) : (
              <View style={{width: 41, height: 41}}></View>
            )}
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <KeyboardAwareScrollView style={{paddingBottom: '12%'}}>
        <View style={{flex: 38}}>
          <View
            style={{
              flex: 70,
              alignItems: 'center',
              marginTop: 13,
            }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 30,
                color: colors.black,
                marginBottom: 8,
              }}>
              Birinci Yarımil KSQ
            </Text>
            <Input_Top />
          </View>
          <View style={{flex: 30, alignItems: 'center', marginTop: 24}}>
            <Text
              style={{
                fontSize: 30,
                lineHeight: 30,
                color: colors.black,
              }}>
              Birinci Yarımil BSQ
            </Text>
            <View style={{flexDirection: 'row', gap: 1.5, marginBottom: 14}}>
              <View
                style={{
                  width: 207,
                  height: 46,
                  backgroundColor:
                    isCheckedB === false
                      ? colors.blue
                      : isCheckedIY === true
                      ? colors.blue
                      : colors.gray,
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
                  {isCheckedIY === true
                    ? 'Birinci yarımil:'
                    : isCheckedB === true
                    ? 'BSQ'
                    : 'BSQ:'}
                </Text>
                {isCheckedIY === true ? (
                  <TextInput
                    style={{
                      width: 48,
                      marginLeft: 3,
                      fontSize: 20,
                    }}
                    placeholder="0"
                  />
                ) : isCheckedB === true ? (
                  <></>
                ) : (
                  <TextInput
                    style={{
                      width: 48,
                      marginLeft: 3,
                      fontSize: 20,
                    }}
                    placeholder="0"
                  />
                )}
              </View>
            </View>
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
            <Input_Bottom />
          </View>
          <View
            style={{
              flex: 30,
              alignItems: 'center',
              marginTop: 24,
              marginBottom: 14,
            }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 30,
                color: colors.black,
              }}>
              İkinci Yarımil BSQ
            </Text>
            <View style={{flexDirection: 'row', gap: 1.5}}>
              <View
                style={{
                  width: 207,
                  height: 46,
                  backgroundColor:
                    isCheckedIY === false
                      ? colors.gray
                      : isCheckedB === true
                      ? colors.gray
                      : colors.blue,
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
                  {isCheckedIY === false
                    ? 'BSQ'
                    : isCheckedB === true
                    ? 'BSQ'
                    : 'BSQ:'}
                </Text>
                {isCheckedIY === false ? (
                  <></>
                ) : isCheckedB === true ? (
                  <></>
                ) : (
                  <TextInput
                    style={{
                      width: 48,
                      marginLeft: 3,
                      fontSize: 20,
                    }}
                    placeholder="0"
                  />
                )}
              </View>
            </View>
          </View>
        </View>
        <View style={{borderWidth: 1, marginLeft: 7, marginRight: 7}}></View>
        <View style={{flex: 25}}>
          <View
            style={{
              flex: 28,
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <Button
              width={'59%'}
              height={'77%'}
              borderWidth={4}
              borderColor={colors.blue}
              borderTopLeftRadius={50}
              borderTopRightRadius={50}
              borderBottomLeftRadius={50}
              borderBottomRightRadius={50}
              backgroundColor={colors.orange}
              fontWeight={400}
              fontSize={28}
              lineHeight={34}
              color={colors.white}
              name="HESABLA"
            />
          </View>
          <View
            style={{
              flex: 72,
              flexDirection: 'row',
              marginTop: 20,
              justifyContent: 'center',
              marginBottom: 10,
              gap: 25,
            }}>
            <TouchableOpacity
              style={{flexDirection: 'row', gap: 5}}
              onPress={() => {
                isCheckedIY === true
                  ? setIsCheckedIY(false)
                  : setIsCheckedIY(true);
              }}>
              <Text
                style={{
                  fontWeight: 400,
                  fontSize: 20,
                  lineHeight: 20,
                  color: colors.black,
                }}>
                İkinci Yarımil
              </Text>

              <Icon
                name={isCheckedIY === true ? 'checkbox_true' : 'checkbox_false'}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{flexDirection: 'row', gap: 5}}
              onPress={() => {
                isCheckedB === true
                  ? setIsCheckedB(false)
                  : setIsCheckedB(true);
              }}>
              <Text
                style={{
                  fontWeight: 400,
                  fontSize: 20,
                  lineHeight: 20,
                  color: colors.black,
                }}>
                BSQ yoxdur
              </Text>

              <Icon
                name={isCheckedB === true ? 'checkbox_true' : 'checkbox_false'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <Footer />
    </View>
  );
};

export default YearlyPrice;
