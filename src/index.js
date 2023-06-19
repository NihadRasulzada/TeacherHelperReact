import React, {Component, useEffect, useState} from 'react';
import Home from './screens/Home/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Salary from './screens/Salary/Salary';
import YearlyPrice from './screens/YearlyPrice/YearlyPrice';
import TeacherProgram from './screens/TeacherProgram/TeacherProgram';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {LogBox, View, Text} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import firestore from '@react-native-firebase/firestore';
import {firebase} from './components/config';
import QualityMastery from './screens/QualityMastery/QualityMastery';

const Stack = createStackNavigator();

const App = () => {
  LogBox.ignoreAllLogs();
  const [isSwitchEnabled, setSwitch] = useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Salary"
          component={Salary}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="YearlyPrice"
          component={YearlyPrice}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TeacherProgram"
          component={TeacherProgram}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="QualityMastery"
          component={QualityMastery}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
