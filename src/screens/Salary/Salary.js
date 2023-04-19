import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef, useState, useMemo} from 'react';
import {colors} from '../../config/colors';
import Footer from '../../controllers/Footer/Footer';
import InputLabel from '../../controllers/Label/InputLabel';
import {strings} from '../../config/string';
import SalaryHesabla from './SalaryHesabla';
import {Data} from './Data';

const Salary = () => {
  const SwitchSelectorSR = () => {
    const [switchValueSR, setSwitchValueSR] = useState(Data.switchValueSR);

    useEffect(() => {
      SwitchSelectorSROnPress;
    }, [switchValueSR]);

    const SwitchSelectorSROnPress = () => {
      if (Data.switchValueSR === true) {
        Data.switchValueSR = false;
        setSwitchValueSR(false);
      } else {
        Data.switchValueSR = true;
        setSwitchValueSR(true);
      }
    };

    return (
      <TouchableOpacity
        onPress={SwitchSelectorSROnPress}
        style={{
          width: 64,
          height: 36,
          backgroundColor: switchValueSR ? colors.blue : colors.white,
          borderRadius: 35,
          alignItems: switchValueSR ? 'flex-end' : 'flex-start',
        }}>
        <View
          style={{
            width: 36,
            height: 36,
            backgroundColor: colors.white,
            borderRadius: 36,
            borderWidth: 3,
            borderColor: colors.orange,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 17,
              color: colors.black,
            }}>
            {switchValueSR ? strings.yes : strings.no}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const SwitchSelectorT = () => {
    const [switchValueT, setSwitchValueT] = useState(Data.switchValueT);

    useEffect(() => {
      SwitchSelectorTOnPress;
    }, [switchValueT]);

    const SwitchSelectorTOnPress = () => {
      if (Data.switchValueT === true) {
        Data.switchValueT = false;
        setSwitchValueT(false);
      } else {
        Data.switchValueT = true;
        setSwitchValueT(true);
      }
    };

    return (
      <TouchableOpacity
        onPress={SwitchSelectorTOnPress}
        style={{
          width: 64,
          height: 36,
          backgroundColor: switchValueT ? colors.blue : colors.white,
          borderRadius: 35,
          alignItems: switchValueT ? 'flex-end' : 'flex-start',
        }}>
        <View
          style={{
            width: 36,
            height: 36,
            backgroundColor: colors.white,
            borderRadius: 36,
            borderWidth: 3,
            borderColor: colors.orange,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 17,
              color: colors.black,
            }}>
            {switchValueT ? strings.ali : strings.orta}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const SwitchSelectorSTrueFalse = () => {
    if (Data.switchValueS === true) {
      return (
        <View style={{flexDirection: 'row', gap: 30, marginTop: 25}}>
          <View
            style={{
              width: '57%',
              height: 52,
            }}>
            <InputLabel Name="Sertfikasiyanız balınız" />
          </View>
          <View
            style={{
              width: '18%',
              height: 52,
              justifyContent: 'flex-end',
            }}>
            <TextInput
              style={{
                borderBottomWidth: 1,
                fontSize: 20,
                borderColor: colors.blue,
              }}
              placeholder="0"
              keyboardType="numeric"
              onChangeText={text => {
                if (text == '') {
                  Data.sbtxt = '0';
                } else {
                  Data.sbtxt = text;
                }
              }}></TextInput>
          </View>
        </View>
      );
    } else {
      return <></>;
    }
  };
  const SwitchSelectorS = () => {
    const [switchValueS, setSwitchValueS] = useState(Data.switchValueS);

    useEffect(() => {
      SwitchSelectorSOnPress;
    }, [switchValueS]);

    const SwitchSelectorSOnPress = () => {
      if (Data.switchValueS === true) {
        Data.switchValueS = false;
        setSwitchValueS(false);
      } else {
        Data.switchValueS = true;
        Data.sbtxt = '0';
        setSwitchValueS(true);
      }
    };

    return (
      <View>
        <View style={{flexDirection: 'row', gap: 25, marginTop: 25}}>
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
            <TouchableOpacity
              onPress={SwitchSelectorSOnPress}
              style={{
                width: 64,
                height: 36,
                backgroundColor: switchValueS ? colors.blue : colors.white,
                borderRadius: 35,
                alignItems: switchValueS ? 'flex-end' : 'flex-start',
              }}>
              <View
                style={{
                  width: 36,
                  height: 36,
                  backgroundColor: colors.white,
                  borderRadius: 36,
                  borderWidth: 3,
                  borderColor: colors.orange,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    lineHeight: 17,
                    color: colors.black,
                  }}>
                  {switchValueS ? strings.yes : strings.no}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <SwitchSelectorSTrueFalse />
      </View>
    );
  };
  const SwitchSelectorH = () => {
    const [switchValueH, setSwitchValueH] = useState(Data.switchValueH);

    if (switchValueH === 0) {
      return (
        <View
          style={{
            height: 41,
            width: 143,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 45,
              borderLeftWidth: 3,
              borderTopWidth: 3,
              borderBottomWidth: 3,
              borderColor: colors.orange,
              borderTopLeftRadius: 15,
              borderBottomLeftRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.blue,
            }}
            onPress={() => {
              Data.switchValueH = 0;
              setSwitchValueH(0);
            }}>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 19,
                color: colors.black,
              }}>
              Yox
            </Text>
          </TouchableOpacity>
          <View style={{flex: 3, backgroundColor: colors.orange}}></View>
          <TouchableOpacity
            style={{
              flex: 45,
              borderTopWidth: 3,
              borderBottomWidth: 3,
              borderColor: colors.orange,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.white,
            }}
            onPress={() => {
              Data.switchValueH = 1;
              setSwitchValueH(1);
            }}>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 19,
                color: colors.black,
              }}>
              H1
            </Text>
          </TouchableOpacity>
          <View style={{flex: 3, backgroundColor: colors.orange}}></View>
          <TouchableOpacity
            style={{
              flex: 45,
              borderRightWidth: 3,
              borderTopWidth: 3,
              borderBottomWidth: 3,
              borderColor: colors.orange,
              borderTopRightRadius: 15,
              borderBottomRightRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.white,
            }}
            onPress={() => {
              Data.switchValueH = 2;
              setSwitchValueH(2);
            }}>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 19,
                color: colors.black,
              }}>
              H2
            </Text>
          </TouchableOpacity>
        </View>
      );
    } else if (switchValueH === 1) {
      return (
        <View
          style={{
            height: 41,
            width: 143,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 45,
              borderLeftWidth: 3,
              borderTopWidth: 3,
              borderBottomWidth: 3,
              borderColor: colors.orange,
              borderTopLeftRadius: 15,
              borderBottomLeftRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.white,
            }}
            onPress={() => {
              Data.switchValueH = 0;
              setSwitchValueH(0);
            }}>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 19,
                color: colors.black,
              }}>
              Yox
            </Text>
          </TouchableOpacity>
          <View style={{flex: 3, backgroundColor: colors.orange}}></View>
          <TouchableOpacity
            style={{
              flex: 45,
              borderTopWidth: 3,
              borderBottomWidth: 3,
              borderColor: colors.orange,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.blue,
            }}
            onPress={() => {
              Data.switchValueH = 1;
              setSwitchValueH(1);
            }}>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 19,
                color: colors.black,
              }}>
              H1
            </Text>
          </TouchableOpacity>
          <View style={{flex: 3, backgroundColor: colors.orange}}></View>
          <TouchableOpacity
            style={{
              flex: 45,
              borderRightWidth: 3,
              borderTopWidth: 3,
              borderBottomWidth: 3,
              borderColor: colors.orange,
              borderTopRightRadius: 15,
              borderBottomRightRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.white,
            }}
            onPress={() => {
              Data.switchValueH = 2;
              setSwitchValueH(2);
            }}>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 19,
                color: colors.black,
              }}>
              H2
            </Text>
          </TouchableOpacity>
        </View>
      );
    } else if (switchValueH === 2) {
      return (
        <View
          style={{
            height: 41,
            width: 143,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 45,
              borderLeftWidth: 3,
              borderTopWidth: 3,
              borderBottomWidth: 3,
              borderColor: colors.orange,
              borderTopLeftRadius: 15,
              borderBottomLeftRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.white,
            }}
            onPress={() => {
              Data.switchValueH = 0;
              setSwitchValueH(0);
            }}>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 19,
                color: colors.black,
              }}>
              Yox
            </Text>
          </TouchableOpacity>
          <View style={{flex: 3, backgroundColor: colors.orange}}></View>
          <TouchableOpacity
            style={{
              flex: 45,
              borderTopWidth: 3,
              borderBottomWidth: 3,
              borderColor: colors.orange,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.white,
            }}
            onPress={() => {
              Data.switchValueH = 1;
              setSwitchValueH(1);
            }}>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 19,
                color: colors.black,
              }}>
              H1
            </Text>
          </TouchableOpacity>
          <View style={{flex: 3, backgroundColor: colors.orange}}></View>
          <TouchableOpacity
            style={{
              flex: 45,
              borderRightWidth: 3,
              borderTopWidth: 3,
              borderBottomWidth: 3,
              borderColor: colors.orange,
              borderTopRightRadius: 15,
              borderBottomRightRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.blue,
            }}
            onPress={() => {
              Data.switchValueH = 2;
              setSwitchValueH(2);
            }}>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 19,
                color: colors.black,
              }}>
              H2
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
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
                  }}
                  placeholder="0"
                  keyboardType="numeric"
                  onChangeText={text => {
                    if (text == '') {
                      Data.stxt = '0';
                    } else {
                      Data.stxt = text;
                    }
                  }}
                />
              </View>
            </View>
            <View style={{flexDirection: 'row', gap: 25, marginTop: 25}}>
              <View style={{width: '61%', height: 52}}>
                <InputLabel Name="Sinif rəhbərisinizmi?" />
              </View>
              <View
                style={{
                  width: '18%',
                  height: 52,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}>
                <SwitchSelectorSR />
              </View>
            </View>
            <View style={{flexDirection: 'row', gap: 25, marginTop: 25}}>
              <View style={{width: '61%', height: 52}}>
                <InputLabel Name="Təhsiliniz" />
              </View>
              <View
                style={{
                  width: '18%',
                  height: 52,
                  justifyContent: 'flex-end',
                }}>
                <SwitchSelectorT />
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
                  }}
                  placeholder="0"
                  keyboardType="numeric"
                  onChangeText={text => {
                    if (text == '') {
                      Data.lstxt = '0';
                    } else {
                      Data.lstxt = text;
                    }
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
                  }}
                  placeholder="0"
                  keyboardType="numeric"
                  onChangeText={text => {
                    if (text == '') {
                      Data.astxt = '0';
                    } else {
                      Data.astxt = text;
                    }
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
                  }}
                  placeholder="0"
                  keyboardType="numeric"
                  onChangeText={text => {
                    if (text == '') {
                      Data.estxt = '0';
                    } else {
                      Data.estxt = text;
                    }
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
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <SwitchSelectorH />
              </View>
            </View>
            <SwitchSelectorS />
          </ScrollView>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          top: 0,
          alignItems: 'center',
        }}>
        <SalaryHesabla />
      </View>
      <Footer />
    </View>
  );
};

export default Salary;
