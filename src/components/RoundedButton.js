import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors'

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  onPress,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size).radius, style]} onPress={onPress}>
      <Text style={[styles().text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: colors.white,
      borderWidth: 2
    },
    text: {
      color: colors.white,
      fontSize: size / 3,
    },
  });