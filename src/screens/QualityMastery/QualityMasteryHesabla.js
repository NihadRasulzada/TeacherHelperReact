import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Button from '../../controllers/Button/Button';
import {colors} from '../../config/colors';
import {Data} from './Data';
import Toast from 'react-native-toast-message';

const ToastContainer = ({visible, type, text1, text2}) => {
  if (!visible) {
    return null;
  }

  return (
    <View
      style={{
        position: 'absolute',
        zIndex: 1,
        left: 0,
        right: 0,
        backgroundColor: type === 'success' ? 'green' : 'red',
        padding: 10,
        borderRadius: 5,
      }}>
      <Text style={{color: 'white'}}>{text1}</Text>
      <Text style={{color: 'white'}}>{text2}</Text>
    </View>
  );
};

const QualityMasteryHesabla = () => {
  const [toastVisible, setToastVisible] = React.useState(false);
  const [toastType, setToastType] = React.useState('');
  const [toastText1, setToastText1] = React.useState('');
  const [toastText2, setToastText2] = React.useState('');

  useEffect(() => {
    if (toastVisible) {
      setTimeout(() => {
        setToastVisible(false);
        setToastType('');
        setToastText1('');
        setToastText2('');
      }, 3000);
    }
  }, [toastVisible]);
  const [HesablaDialogVisible, setHesablaDialogVisible] = useState(false);

  const showToast = (type, text1, text2) => {
    setToastVisible(true);
    setToastType(type);
    setToastText1(text1);
    setToastText2(text2);
  };

  const handlePress = () => {
    if (
      parseFloat(Data.Mark2) +
        parseFloat(Data.Mark3) +
        parseFloat(Data.Mark4) +
        parseFloat(Data.Mark5) !=
      parseFloat(Data.StudentCount)
    ) {
      setHesablaDialogVisible(false);
      showToast('success', 'Məlumat', 'Məlumatları düzgün daxil edin');
    } else {
      setHesablaDialogVisible(true);
      Data.Quality =
        parseInt(
          ((parseFloat(Data.Mark5) + parseFloat(Data.Mark4)) /
            parseFloat(Data.StudentCount)) *
            10000,
        ) / 100;
      Data.Mastery =
        parseInt(
          ((parseFloat(Data.Mark5) +
            parseFloat(Data.Mark4) +
            parseFloat(Data.Mark3)) /
            parseFloat(Data.StudentCount)) *
            10000,
        ) / 100;
    }

    console.log('StudentCount:' + Data.StudentCount);
    console.log('Mark2:' + Data.Mark2);
    console.log('Mark3:' + Data.Mark3);
    console.log('Mark4:' + Data.Mark4);
    console.log('Mark5:' + Data.Mark5);
    console.log('');
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
                  fontSize: 22,
                  lineHeight: 26,
                  color: colors.black,
                }}>
                Keyfiyyət:
              </Text>
              <Text
                style={{
                  fontSize: 22,
                  lineHeight: 26,
                  color: colors.black,
                }}>
                {Data.Quality}%
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 22,
                  lineHeight: 26,
                  color: colors.black,
                }}>
                Mənimsəmə:
              </Text>
              <Text
                style={{
                  fontSize: 22,
                  lineHeight: 26,
                  color: colors.black,
                }}>
                {Data.Mastery}%
              </Text>
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
      <ToastContainer
        visible={toastVisible}
        type={toastType}
        text1={toastText1}
        text2={toastText2}
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

export default QualityMasteryHesabla;
