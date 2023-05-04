import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import Button from '../../controllers/Button/Button';
import React, {useState} from 'react';
import {colors} from '../../config/colors';
import {Ali, Data, Orta} from './Data';

const SalaryHesabla = () => {
  const [HesablaDialogVisible, setHesablaDialogVisible] = useState(false);

  const [HMtxt, setHMtxt] = useState(0);
  const [AMtxt, setAMtxt] = useState(0);
  const [GVtxt, setGVtxt] = useState(0);
  const [Htxt, setHtxt] = useState(0);
  const [DSMFtxt, setDSMFtxt] = useState(0);
  const [TStxt, setTStxt] = useState(0);
  const [ISGtxt, setISGtxt] = useState(0);
  const [CTtxt, setCTtxt] = useState(0);

  let SRtxt = 0;
  let H1txt = 0;
  let H2txt = 0;
  let sbart = 0;
  let s = 0;
  let s1 = 0;
  let s2 = 0;
  let s3 = 0;

  const Tutulma = () => {
    let t, h;
    s += H2txt;
    if (s < 200) {
      t = s - s * 0.0725;
      h = 0;
    } else {
      t = s - (s - 200) * 0.14 - s * 0.075;
      h = (s - 200) * 0.14;
    }
    setHMtxt(parseInt(s + H1txt));
    setAMtxt(parseInt(t + H1txt));
    setGVtxt(parseInt(h));
    setHtxt(parseInt(s * 0.03));
    setDSMFtxt(parseInt(s * 0.02));
    setTStxt(parseInt(s * 0.02));
    setISGtxt(parseInt(s * 0.005));
    setCTtxt(parseInt(s - t));
  };

  const handlePress = () => {
    if (Data.switchValueSR == true) {
      SRtxt = 40;
    } else {
      SRtxt = 0;
    }

    if (Data.switchValueH == 1) {
      H1txt = 90;
      H2txt = 0;
    } else if (Data.switchValueH == 2) {
      H2txt = 100;
      H1txt = 0;
    } else {
      H1txt = 0;
      H2txt = 0;
    }

    if (Data.switchValueS == true) {
      if (parseInt(Data.sbtxt) >= 50) {
        sbart = 1.35;
      } else {
        sbart = 1.1;
      }
    }

    if (Data.switchValueT == true) {
      if (0 <= parseInt(Data.stxt) && parseInt(Data.stxt) <= 3) {
        s1 = (Ali.stavka[0] / 18) * parseInt(Data.lstxt) * 1.15;
        s2 = (Ali.stavka[0] / 18) * parseInt(Data.astxt);
        s3 = (Ali.stavka[0] / 76.2) * parseInt(Data.estxt);
        s = s2 + s1 + s3;
        if (Data.switchValueS == true) {
          s = s * sbart;
        }
      } else if (3 < parseInt(Data.stxt) && parseInt(Data.stxt) <= 8) {
        s1 = (Ali.stavka[1] / 18) * parseInt(Data.lstxt) * 1.15;
        s2 = (Ali.stavka[1] / 18) * parseInt(Data.astxt);
        s3 = (Ali.stavka[1] / 76.2) * parseInt(Data.estxt);
        s = s2 + s1 + s3;
        if (Data.switchValueS == true) {
          s = s * sbart;
        }
      } else if (8 < parseInt(Data.stxt) && parseInt(Data.stxt) <= 13) {
        s1 = (Ali.stavka[2] / 18) * parseInt(Data.lstxt) * 1.15;
        s2 = (Ali.stavka[2] / 18) * parseInt(Data.astxt);
        s3 = (Ali.stavka[2] / 76.2) * parseInt(Data.estxt);
        s = s2 + s1 + s3;
        if (Data.switchValueS == true) {
          s = s * sbart;
        }
      } else if (13 < parseInt(Data.stxt) && parseInt(Data.stxt) <= 18) {
        s1 = (Ali.stavka[3] / 18) * parseInt(Data.lstxt) * 1.15;
        s2 = (Ali.stavka[3] / 18) * parseInt(Data.astxt);
        s3 = (Ali.stavka[3] / 76.2) * parseInt(Data.estxt);
        s = s2 + s1 + s3;
        if (Data.switchValueS == true) {
          s = s * sbart;
        }
      } else if (18 < parseInt(Data.stxt)) {
        s1 = (Ali.stavka[4] / 18) * parseInt(Data.lstxt) * 1.15;
        s2 = (Ali.stavka[4] / 18) * parseInt(Data.astxt);
        s3 = (Ali.stavka[4] / 76.2) * parseInt(Data.estxt);
        s = s2 + s1 + s3;
        if (Data.switchValueS == true) {
          s = s * sbart;
        }
      }
    } else {
      if (0 <= parseInt(Data.stxt) && parseInt(Data.stxt) <= 3) {
        s1 = (Orta.stavka[0] / 18) * parseInt(Data.lstxt) * 1.15;
        s2 = (Orta.stavka[0] / 18) * parseInt(Data.astxt);
        s3 = (Orta.stavka[0] / 76.2) * parseInt(Data.estxt);
        s = s2 + s1 + s3;
        if (Data.switchValueS == true) {
          s = s * sbart;
        }
      } else if (3 < parseInt(Data.stxt) && parseInt(Data.stxt) <= 8) {
        s1 = (Orta.stavka[1] / 18) * parseInt(Data.lstxt) * 1.15;
        s2 = (Orta.stavka[1] / 18) * parseInt(Data.astxt);
        s3 = (Orta.stavka[1] / 76.2) * parseInt(Data.estxt);
        s = s2 + s1 + s3;
        if (Data.switchValueS == true) {
          s = s * sbart;
        }
      } else if (8 < parseInt(Data.stxt) && parseInt(Data.stxt) <= 13) {
        s1 = (Orta.stavka[2] / 18) * parseInt(Data.lstxt) * 1.15;
        s2 = (Orta.stavka[2] / 18) * parseInt(Data.astxt);
        s3 = (Orta.stavka[2] / 76.2) * parseInt(Data.estxt);
        s = s2 + s1 + s3;
        if (Data.switchValueS == true) {
          s = s * sbart;
        }
      } else if (13 < parseInt(Data.stxt) && parseInt(Data.stxt) <= 18) {
        s1 = (Orta.stavka[3] / 18) * parseInt(Data.lstxt) * 1.15;
        s2 = (Orta.stavka[3] / 18) * parseInt(Data.astxt);
        s3 = (Orta.stavka[3] / 76.2) * parseInt(Data.estxt);
        s = s2 + s1 + s3;
        if (Data.switchValueS == true) {
          s = s * sbart;
        }
      } else if (18 < parseInt(Data.stxt)) {
        s1 = (Orta.stavka[4] / 18) * parseInt(Data.lstxt) * 1.15;
        s2 = (Orta.stavka[4] / 18) * parseInt(Data.astxt);
        s3 = (Orta.stavka[4] / 76.2) * parseInt(Data.estxt);
        s = s2 + s1 + s3;
        if (Data.switchValueS == true) {
          s = s * sbart;
        }
      }
    }

    Tutulma();

    setHesablaDialogVisible(true);
  };

  const HesablaDialog = ({visible, onClose}) => {
    return (
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={onClose}>
        <View style={styles.modalContainer}>
          <View style={styles.dialogContainer}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 18,
                  lineHeight: 22,
                  color: colors.black,
                }}>
                Hesablanacaq maaşınız:
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  lineHeight: 22,
                  color: colors.black,
                }}>
                {HMtxt}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 18,
                  lineHeight: 22,
                  color: colors.black,
                }}>
                Alacağınız məbləğ:
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  lineHeight: 22,
                  color: colors.black,
                }}>
                {AMtxt}
              </Text>
            </View>
            <View style={{alignItems: 'center', marginTop: 16}}>
              <Text style={{fontSize: 33, lineHeight: 40, color: colors.black}}>
                Tutulmalar
              </Text>
            </View>
            <View>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 18,
                    lineHeight: 22,
                    color: colors.black,
                  }}>
                  Gəlir vergisi:
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    lineHeight: 22,
                    color: colors.black,
                  }}>
                  {GVtxt}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 18,
                    lineHeight: 22,
                    color: colors.black,
                  }}>
                  Həmkarlar:
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    lineHeight: 22,
                    color: colors.black,
                  }}>
                  {Htxt}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 18,
                    lineHeight: 22,
                    color: colors.black,
                  }}>
                  DSMF:
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    lineHeight: 22,
                    color: colors.black,
                  }}>
                  {DSMFtxt}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 18,
                    lineHeight: 22,
                    color: colors.black,
                  }}>
                  Tibbi Sığortası:
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    lineHeight: 22,
                    color: colors.black,
                  }}>
                  {TStxt}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 18,
                    lineHeight: 22,
                    color: colors.black,
                  }}>
                  İşsizlikdən sığortaya görə:
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    lineHeight: 22,
                    color: colors.black,
                  }}>
                  {ISGtxt}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 18,
                    lineHeight: 22,
                    color: colors.black,
                  }}>
                  Cəmi tutulma:
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    lineHeight: 22,
                    color: colors.black,
                  }}>
                  {CTtxt}
                </Text>
              </View>
            </View>
            <View>
              <View
                style={{
                  marginTop: 16,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 36,
                  }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: colors.white,
                      borderWidth: 3,
                      borderColor: colors.blue,
                      borderRadius: 10,
                      width: 116,
                      height: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => {
                      setHesablaDialogVisible(false);
                    }}>
                    <Text
                      style={{
                        fontSize: 28,
                        lineHeight: 34,
                        color: colors.black,
                      }}>
                      Çıxış
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={{width: '59%', height: '35%'}}>
      <Button
        width={'100%'}
        height={'100%'}
        borderWidth={4}
        borderColor={colors.blue}
        borderTopLeftRadius={50}
        borderTopRightRadius={50}
        borderBottomLeftRadius={50}
        borderBottomRightRadius={50}
        backgroundColor={colors.orange}
        fontWeight={400}
        fontSize={32}
        lineHeight={39}
        color={colors.white}
        name="HESABLA"
        onPress={handlePress}
      />
      <HesablaDialog
        visible={HesablaDialogVisible}
        onClose={() => {
          setHesablaDialogVisible(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dialogContainer: {
    backgroundColor: colors.orange,
    padding: 20,
    borderRadius: 20,
  },
  dialogTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dialogMessage: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default SalaryHesabla;
