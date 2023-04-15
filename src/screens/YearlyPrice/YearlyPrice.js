import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  StyleSheet,
  Modal,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Footer from '../../controllers/Footer/Footer';
import {colors} from '../../config/colors';
import Icon from '../../controllers/Icon/Icon';
import Button from '../../controllers/Button/Button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {strings} from '../../config/string';
import YearlyPriceHesabla from './YearlyPriceHesabla';
import {ScrollView} from 'react-native-gesture-handler';

const YearlyPrice = () => {
  const [isCheckedIY, setIsCheckedIY] = useState(false);
  const [isCheckedB, setIsCheckedB] = useState(false);
  let inputTextTopKSQ = ['0', '0', '0', '0', '0', '0'];
  let inputTextBottomKSQ = ['0', '0', '0', '0', '0', '0'];
  let inputTextBottomBSQ = ['0'];
  let inputTextTopBSQ = ['0'];

  const BYIBSQ = () => {
    return (
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
              keyboardType="numeric"
              onChangeText={text => {
                inputTextTopBSQ[0] = text;
              }}
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
              keyboardType="numeric"
              onChangeText={text => {
                inputTextTopBSQ[0] = text;
              }}
            />
          )}
        </View>
      </View>
    );
  };

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
        const f = () => {
          setVisibilityBackgroundColor(newarr);
        };
        f();

        newarr = [...visibilityText];
        newarr[i] = '';
        const fi = () => {
          setVisibilityText(newarr);
        };
        fi();

        newarr = [...iconName];
        newarr[i] = 'increase';
        newarr[i + 1] = '';
        const fiw = () => {
          setIconName(newarr);
        };
        fiw();
        inputTextTopKSQ[i] = '';
      } else {
        let newarr = [...visibilityBackgroundColor];
        newarr[i] = colors.blue;
        const f = () => {
          setVisibilityBackgroundColor(newarr);
        };
        f();

        newarr = [...visibilityText];
        newarr[i] = ':';
        const fi = () => {
          setVisibilityText(newarr);
        };
        fi();

        newarr = [...iconName];
        newarr[i] = 'decrease';
        newarr[i + 1] = 'increase';
        const fiw = () => {
          setIconName(newarr);
        };
        fiw();
        inputTextTopKSQ[i] = '0';
      }
    };

    useEffect(() => {
      handleLogout();
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
                    keyboardType="numeric"
                    placeholder="0"
                    onChangeText={text => {
                      inputTextTopKSQ[0] = text;
                    }}
                  />
                ) : (
                  <>{(inputTextTopKSQ[0] = '')}</>
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
                    keyboardType="numeric"
                    placeholder="0"
                    onChangeText={text => {
                      inputTextTopKSQ[1] = text;
                    }}
                  />
                ) : (
                  <>{(inputTextTopKSQ[1] = '')}</>
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
                    keyboardType="numeric"
                    onChangeText={text => {
                      inputTextTopKSQ[2] = text;
                    }}
                  />
                ) : (
                  <>{(inputTextTopKSQ[2] = '')}</>
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
                    keyboardType="numeric"
                    onChangeText={text => {
                      inputTextTopKSQ[3] = text;
                    }}
                  />
                ) : (
                  <>{(inputTextTopKSQ[3] = '')}</>
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
                    keyboardType="numeric"
                    onChangeText={text => {
                      inputTextTopKSQ[4] = text;
                    }}
                  />
                ) : (
                  <>{(inputTextTopKSQ[4] = '')}</>
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
                    keyboardType="numeric"
                    onChangeText={text => {
                      inputTextTopKSQ[5] = text;
                    }}
                  />
                ) : (
                  <>{(inputTextTopKSQ[5] = '')}</>
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
        inputTextBottomKSQ[i] = '';
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
        inputTextBottomKSQ[i] = '0';
      }
    };

    useEffect(() => {
      handleLogout();
      if (isCheckedIY === false) {
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
                    keyboardType="numeric"
                    onChangeText={text => {
                      inputTextBottomKSQ[0] = text;
                    }}
                  />
                ) : (
                  <>{(inputTextBottomKSQ[0] = '')}</>
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
                    keyboardType="numeric"
                    onChangeText={text => {
                      inputTextBottomKSQ[1] = text;
                    }}
                  />
                ) : (
                  <>{(inputTextBottomKSQ[1] = '')}</>
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
                    keyboardType="numeric"
                    onChangeText={text => {
                      inputTextBottomKSQ[2] = text;
                    }}
                  />
                ) : (
                  <>{(inputTextBottomKSQ[2] = '')}</>
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
                    keyboardType="numeric"
                    onChangeText={text => {
                      inputTextBottomKSQ[3] = text;
                    }}
                  />
                ) : (
                  <>{(inputTextBottomKSQ[3] = '')}</>
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
                    keyboardType="numeric"
                    onChangeText={text => {
                      inputTextBottomKSQ[4] = text;
                    }}
                  />
                ) : (
                  <>{(inputTextBottomKSQ[4] = '')}</>
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
                    keyboardType="numeric"
                    onChangeText={text => {
                      inputTextBottomKSQ[5] = text;
                    }}
                  />
                ) : (
                  <>{(inputTextBottomKSQ[5] = '')}</>
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
      <ScrollView>
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
              <BYIBSQ />
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
                      keyboardType="numeric"
                      onChangeText={text => {
                        inputTextBottomBSQ[0] = text;
                      }}
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
              <YearlyPriceHesabla
                isCheckedIY={isCheckedIY}
                isCheckedB={isCheckedB}
                inputTextTopKSQ={inputTextTopKSQ}
                inputTextBottomKSQ={inputTextBottomKSQ}
                inputTextBottomBSQ={inputTextBottomBSQ}
                inputTextTopBSQ={inputTextTopBSQ}
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
                  name={
                    isCheckedIY === true ? 'checkbox_true' : 'checkbox_false'
                  }
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{flexDirection: 'row', gap: 5}}
                onPress={() => {
                  isCheckedB
                    ? isCheckedIY
                      ? (setIsCheckedB(false), (inputTextBottomBSQ[0] = '0'))
                      : (setIsCheckedB(false),
                        (inputTextTopBSQ[0] = '0'),
                        (inputTextBottomBSQ[0] = '0'))
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
                  name={
                    isCheckedB === true ? 'checkbox_true' : 'checkbox_false'
                  }
                />
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
      <View style={{height: 100}}></View>
      <Footer />
    </View>
  );
};

export default YearlyPrice;
