import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Button from '../../controllers/Button/Button';
import {colors} from '../../config/colors';
import {strings} from '../../config/string';

const YearlyPriceHesabla = props => {
  const [isCheckedIY, setIsCheckedIY] = useState(props.isCheckedIY);
  const [isCheckedB, setIsCheckedB] = useState(props.isCheckedB);
  const [inputTextTopKSQ, setInputTextTopKSQ] = useState(props.inputTextTopKSQ);
  const [inputTextBottomKSQ, setInputTextBottomKSQ] = useState(
    props.inputTextBottomKSQ,
  );
  const [inputTextBottomBSQ, setInputTextBottomBSQ] = useState(
    props.inputTextBottomBSQ,
  );
  const [inputTextTopBSQ, setInputTextTopBSQ] = useState(props.inputTextTopBSQ);

  const handlePress = () => {
    console.log('isCheckedIY', isCheckedIY);
    console.log('isCheckedB', isCheckedB);
    console.log('inputTextTopKSQ', inputTextTopKSQ);
    console.log('inputTextBottomKSQ', inputTextBottomKSQ);
    console.log('inputTextBottomBSQ', inputTextBottomBSQ);
    console.log('inputTextTopBSQ', inputTextTopBSQ);
  };

  const [KSQ0DialogVisible, setKSQ0DialogVisible] = useState(false);
  const [BSQ0DialogVisible, setBSQ0DialogVisible] = useState(false);
  const [KSQBSQ0DialogVisible, setKSQBSQ0DialogVisible] = useState(false);
  const [BYDialogVisible, setBYDialogVisible] = useState(false);
  const [IQDialogVisible, setIQDialogVisible] = useState(false);

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
                  onPress={onClose}>
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
                  onPress={onClose}>
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
                  onPress={onClose}>
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
                Q / B
              </Text>
            </View>
            <View style={{flexDirection: 'row', gap: 10}}>
              <Text style={{fontSize: 25, lineHeight: 30, color: colors.black}}>
                Birinci Yarımil:
              </Text>
              <Text style={{fontSize: 25, lineHeight: 30, color: colors.black}}>
                90/5
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
                onPress={onClose}>
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
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <Text style={{fontSize: 25, lineHeight: 30, color: colors.black}}>
                Q / B
              </Text>
            </View>
            <View style={{flexDirection: 'row', gap: 10}}>
              <Text style={{fontSize: 25, lineHeight: 30, color: colors.black}}>
                Birinci Yarımil:
              </Text>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text
                  style={{fontSize: 25, lineHeight: 30, color: colors.black}}>
                  90/5
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', gap: 10}}>
              <Text style={{fontSize: 25, lineHeight: 30, color: colors.black}}>
                Ikinci Yarımil:
              </Text>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text
                  style={{
                    fontSize: 25,
                    lineHeight: 30,
                    color: colors.black,
                  }}>
                  80/5
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', gap: 10}}>
              <Text style={{fontSize: 33, lineHeight: 40, color: colors.black}}>
                Illik Qiymət:
              </Text>
              <Text
                style={{
                  fontSize: 33,
                  lineHeight: 40,
                  color: colors.black,
                  justifyContent: 'flex-end',
                }}>
                80/5
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
                onPress={onClose}>
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
    padding: 20,
    borderRadius: 10,
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
