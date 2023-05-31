import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Button from '../../controllers/Button/Button';
import {colors} from '../../config/colors';
import {strings} from '../../config/string';
import {Data} from './Data';

const YearlyPriceHesabla = ({
  isCheckedIY,
  isCheckedB,
  inputTextTopKSQ,
  inputTextBottomKSQ,
  inputTextBottomBSQ,
  inputTextTopBSQ,
}) => {
  const [KSQ0DialogVisible, setKSQ0DialogVisible] = useState(false);
  const [BSQ0DialogVisible, setBSQ0DialogVisible] = useState(false);
  const [KSQBSQ0DialogVisible, setKSQBSQ0DialogVisible] = useState(false);
  const [BYDialogVisible, setBYDialogVisible] = useState(false);
  const [IQDialogVisible, setIQDialogVisible] = useState(false);

  const [IQDialogIQ, setIQDialogIQ] = useState('');
  const [IQDialogIY, setIQDialogIY] = useState('');
  const [IQDialogBY, setIQDialogBY] = useState('');
  const [BYDialogBY, setBYDialogBY] = useState('');
  const [format, setFormat] = useState('');

  let isKSQ = false,
    isBSQ = false;

  const Price = value => {
    if (0 <= value && value < 31) {
      return 2;
    } else if (31 <= value && value < 61) {
      return 3;
    } else if (61 <= value && value < 81) {
      return 4;
    } else {
      return 5;
    }
  };

  const KSQ0DialogYes = () => {
    setKSQ0DialogVisible(false);
    if (isCheckedIY) {
      setIQDialogVisible(true);
    } else {
      setBYDialogVisible(true);
    }
  };
  const BSQ0DialogYes = () => {
    setBSQ0DialogVisible(false);
    if (isCheckedIY) {
      setIQDialogVisible(true);
    } else {
      setBYDialogVisible(true);
    }
  };
  const KSQBSQ0DialogYes = () => {
    setKSQBSQ0DialogVisible(false);
    if (isCheckedIY) {
      setIQDialogVisible(true);
    } else {
      setBYDialogVisible(true);
    }
  };

  const handlePress = () => {
    if (inputTextTopBSQ[0] == '') {
      inputTextTopBSQ[0] = 0;
    }
    if (inputTextBottomBSQ[0] == '') {
      inputTextBottomBSQ[0] = 0;
    }
    if (isCheckedIY) {
      if (isCheckedB) {
        inputTextBottomKSQ.map(value => {
          if (value == '0') {
            isKSQ = true;
          }
        });
        if (isKSQ) {
          setKSQ0DialogVisible(true);
          for (let index = 0; index < 6; index++) {
            if (inputTextBottomKSQ[index] !== '') {
              inputTextBottomKSQ[index] = parseFloat(inputTextBottomKSQ[index]);
            }
          }
          setIQDialogBY(parseInt(parseFloat(inputTextTopBSQ) * 100) / 100);
          let say = 0;
          let cem = 0;
          for (let index = 0; index < 6; index++) {
            if (typeof inputTextBottomKSQ[index] === 'number') {
              say++;
              cem += inputTextBottomKSQ[index];
            }
          }
          setIQDialogIY(parseInt((cem / say) * 100) / 100);
          setIQDialogIQ(
            parseInt(
              (parseFloat(parseFloat(inputTextTopBSQ) + cem / say) / 2) * 100,
            ) / 100,
          );
        } else {
          setIQDialogVisible(true);
          for (let index = 0; index < 6; index++) {
            if (inputTextBottomKSQ[index] !== '') {
              inputTextBottomKSQ[index] = parseFloat(inputTextBottomKSQ[index]);
            }
          }
          setIQDialogBY(parseInt(parseFloat(inputTextTopBSQ) * 100) / 100);
          let say = 0;
          let cem = 0;
          for (let index = 0; index < 6; index++) {
            if (typeof inputTextBottomKSQ[index] === 'number') {
              say++;
              cem += inputTextBottomKSQ[index];
            }
          }
          setIQDialogIY(parseInt((cem / say) * 100) / 100);
          setIQDialogIQ(
            parseInt(
              (parseFloat(parseFloat(inputTextTopBSQ) + cem / say) / 2) * 100,
            ) / 100,
          );
        }
      } else {
        inputTextBottomKSQ.map(value => {
          if (value == '0') {
            isKSQ = true;
          }
        });
        inputTextBottomBSQ == '0' ? (isBSQ = true) : (isBSQ = false);

        for (let index = 0; index < 6; index++) {
          if (inputTextBottomKSQ[index] !== '') {
            inputTextBottomKSQ[index] = parseFloat(inputTextBottomKSQ[index]);
          }
        }
        setIQDialogBY(parseInt(parseFloat(inputTextTopBSQ) * 100) / 100);
        let say = 0;
        let cem = 0;
        for (let index = 0; index < 6; index++) {
          if (typeof inputTextBottomKSQ[index] === 'number') {
            say++;
            cem += inputTextBottomKSQ[index];
          }
        }
        setIQDialogIY(
          parseInt(
            ((cem / say) * 0.4 + parseFloat(inputTextBottomBSQ) * 0.6) * 100,
          ) / 100,
        );
        setIQDialogIQ(
          parseInt(
            ((parseFloat(inputTextTopBSQ) + parseFloat(IQDialogIY)) / 2) * 100,
          ) / 100,
        );

        if (isKSQ === true && isBSQ === true) {
          setKSQBSQ0DialogVisible(true);
        } else if (isKSQ === true) {
          setKSQ0DialogVisible(true);
        } else if (isBSQ === true) {
          setBSQ0DialogVisible(true);
        } else {
          setIQDialogVisible(true);
        }
      }
    } else {
      if (isCheckedB) {
        inputTextTopKSQ.map(value => {
          if (value == '0') {
            isKSQ = true;
          }
        });
        for (let index = 0; index < 6; index++) {
          if (inputTextTopKSQ[index] !== '') {
            inputTextTopKSQ[index] = parseFloat(inputTextTopKSQ[index]);
          }
        }
        let say = 0;
        let cem = 0;
        for (let index = 0; index < 6; index++) {
          if (typeof inputTextTopKSQ[index] === 'number') {
            say++;
            cem += inputTextTopKSQ[index];
          }
        }
        setBYDialogBY(parseInt((cem / say) * 100) / 100);
        if (isKSQ) {
          setKSQ0DialogVisible(true);
        } else {
          setBYDialogVisible(true);
        }
      } else {
        inputTextTopKSQ.map(value => {
          if (value == '0') {
            isKSQ = true;
          }
        });
        inputTextTopBSQ == '0' || inputTextTopBSQ == ''
          ? (isBSQ = true)
          : (isBSQ = false);
        if (inputTextTopBSQ == '') {
          inputTextTopBSQ = 0;
        }
        for (let index = 0; index < 6; index++) {
          if (inputTextTopKSQ[index] !== '') {
            inputTextTopKSQ[index] = parseFloat(inputTextTopKSQ[index]);
          }
        }
        let say = 0;
        let cem = 0;
        for (let index = 0; index < 6; index++) {
          if (typeof inputTextTopKSQ[index] === 'number') {
            say++;
            cem += inputTextTopKSQ[index];
          }
        }
        setBYDialogBY(
          parseInt(
            ((cem / say) * 0.4 + parseFloat(inputTextTopBSQ) * 0.6) * 100,
          ) / 100,
        );

        if (isKSQ === true && isBSQ === true) {
          setKSQBSQ0DialogVisible(true);
        } else if (isKSQ === true) {
          setKSQ0DialogVisible(true);
        } else if (isBSQ === true) {
          setBSQ0DialogVisible(true);
        } else {
          setBYDialogVisible(true);
        }
      }
    }
  };

  const KSQ0Dialog = ({visible, onClose}) => {
    return (
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={onClose}>
        <View style={styles.modalContainer}>
          <View style={styles.dialogContainer}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 25, lineHeight: 30, color: colors.black}}>
                KSQ qiymətlərinin 0 olduğuna əminsiz?
              </Text>
            </View>
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
                  onPress={onClose}>
                  <Text
                    style={{
                      fontSize: 28,
                      lineHeight: 34,
                      color: colors.black,
                    }}>
                    {strings.no}
                  </Text>
                </TouchableOpacity>
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
                  onPress={KSQ0DialogYes}>
                  <Text
                    style={{
                      fontSize: 28,
                      lineHeight: 34,
                      color: colors.black,
                    }}>
                    {strings.yes}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  };
  const BSQ0Dialog = ({visible, onClose}) => {
    return (
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={onClose}>
        <View style={styles.modalContainer}>
          <View style={styles.dialogContainer}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 25, lineHeight: 30, color: colors.black}}>
                BSQ qiymətlərinin 0 olduğuna əminsiz?
              </Text>
            </View>
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
                  onPress={onClose}>
                  <Text
                    style={{
                      fontSize: 28,
                      lineHeight: 34,
                      color: colors.black,
                    }}>
                    {strings.no}
                  </Text>
                </TouchableOpacity>
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
                  onPress={BSQ0DialogYes}>
                  <Text
                    style={{
                      fontSize: 28,
                      lineHeight: 34,
                      color: colors.black,
                    }}>
                    {strings.yes}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  };
  const KSQBSQ0Dialog = ({visible, onClose}) => {
    return (
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={onClose}>
        <View style={styles.modalContainer}>
          <View style={styles.dialogContainer}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 25, lineHeight: 30, color: colors.black}}>
                BSQ və KSQ qiymətlərinin 0 olduğuna əminsiz?
              </Text>
            </View>
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
                  onPress={onClose}>
                  <Text
                    style={{
                      fontSize: 28,
                      lineHeight: 34,
                      color: colors.black,
                    }}>
                    {strings.no}
                  </Text>
                </TouchableOpacity>
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
                  onPress={KSQBSQ0DialogYes}>
                  <Text
                    style={{
                      fontSize: 28,
                      lineHeight: 34,
                      color: colors.black,
                    }}>
                    {strings.yes}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  const BYDialog = ({visible, onClose}) => {
    return (
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={onClose}>
        <View style={styles.modalContainer}>
          <View style={styles.dialogContainer}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <Text style={{fontSize: 25, lineHeight: 30, color: colors.black}}>
                B / Q
              </Text>
            </View>
            <View style={{flexDirection: 'row', gap: 10}}>
              <Text style={{fontSize: 25, lineHeight: 30, color: colors.black}}>
                Birinci Yarımil:
              </Text>
              <Text style={{fontSize: 25, lineHeight: 30, color: colors.black}}>
                {BYDialogBY + '/' + Price(BYDialogBY)}
              </Text>
            </View>
            <View
              style={{
                marginTop: 16,
                alignItems: 'center',
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
                  onClose();
                  setFormat('');
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
      </Modal>
    );
  };
  const IQDialog = ({visible, onClose}) => {
    return (
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={onClose}>
        <View style={styles.modalContainer}>
          <View style={styles.dialogContainer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <Text style={{fontSize: 25, lineHeight: 30, color: colors.black}}>
                B / Q
              </Text>
            </View>
            <View style={{flexDirection: 'row', gap: 10}}>
              <Text style={{fontSize: 20, lineHeight: 25, color: colors.black}}>
                Birinci Yarımil:
              </Text>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text
                  style={{
                    fontSize: 25,
                    lineHeight: 30,
                    color: colors.black,
                  }}>
                  {IQDialogBY + '/' + Price(IQDialogBY)}
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', gap: 10}}>
              <Text style={{fontSize: 20, lineHeight: 25, color: colors.black}}>
                Ikinci Yarımil:
              </Text>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text
                  style={{
                    fontSize: 25,
                    lineHeight: 30,
                    color: colors.black,
                  }}>
                  {IQDialogIY + '/' + Price(IQDialogIY)}
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', gap: 10}}>
              <Text style={{fontSize: 25, lineHeight: 30, color: colors.black}}>
                Illik Qiymət:
              </Text>
              <Text
                style={{
                  fontSize: 33,
                  lineHeight: 40,
                  color: colors.black,
                  justifyContent: 'flex-end',
                }}>
                {IQDialogIQ + '/' + Price(IQDialogIQ)}
              </Text>
            </View>
            <View
              style={{
                marginTop: 16,
                alignItems: 'center',
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
                  onClose();
                  setFormat('');
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
      </Modal>
    );
  };

  return (
    <View style={{width: '59%', height: '77%'}}>
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
        fontSize={28}
        lineHeight={34}
        color={colors.white}
        name="HESABLA"
        onPress={handlePress}
      />
      <KSQ0Dialog
        visible={KSQ0DialogVisible}
        onClose={() => {
          setKSQ0DialogVisible(false);
        }}
      />
      <BSQ0Dialog
        visible={BSQ0DialogVisible}
        onClose={() => {
          setBSQ0DialogVisible(false);
        }}
      />
      <KSQBSQ0Dialog
        visible={KSQBSQ0DialogVisible}
        onClose={() => {
          setKSQBSQ0DialogVisible(false);
        }}
      />
      <BYDialog
        visible={BYDialogVisible}
        onClose={() => {
          setBYDialogVisible(false);
        }}
      />
      <IQDialog
        visible={IQDialogVisible}
        onClose={() => {
          setIQDialogVisible(false);
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
    padding: 50,
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

export default YearlyPriceHesabla;
