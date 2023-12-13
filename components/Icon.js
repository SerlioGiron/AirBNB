import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import icons from '../src/constants/icons';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const Icon = ({onPress, icon, style, size = 32}) => {
  const image =  (
    <Image
      source={icons[icon]}
      style={[{width: size, height: size, resizeMode: 'cover'}, style]}
    />
  );

  if (onPress) {
    return <TouchableOpacity onPress={onPress}>{image}</TouchableOpacity>
  }

  return image;
};

export default Icon;
