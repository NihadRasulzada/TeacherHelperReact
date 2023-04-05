import {View, Text} from 'react-native';
import React from 'react';
import Icons from '../../assets/Icons';

const Icon = props => {
  const {name} = props;
  const TargetIcon = Icons[props.name];
  return <TargetIcon {...props} />;
};

export default Icon;
