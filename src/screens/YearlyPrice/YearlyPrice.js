import {TouchableOpacity, View, Text, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import Footer from '../../controllers/Footer/Footer';
import {colors} from '../../config/colors';
import PriceInput from '../../controllers/Label/PriceInput';
import Icon from '../../controllers/Icon/Icon';

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
          <Input_Top />
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
          <Input_Bottom />
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
          <PriceInput
            Position="left_right"
            VisibilityBackgroundColor={colors.blue}
            VisibilityText={':'}
            Count={''}
          />
        </View>
      </View>
      <View style={{borderWidth: 1, marginLeft: 7, marginRight: 7}}></View>
      <View style={{flex: 25}}></View>
      <Footer />
    </View>
  );
};

export default YearlyPrice;
