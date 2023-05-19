import React from 'react';
import { View, StyleSheet } from 'react-native';

const components = () => {
  return <View />;
};

export default components;
const styles = StyleSheet.create({
  weightAndAgeSelection: {
    ...ROW,
  },
  weightAndAgeBox: {
    ...CENTER,
    ...BOX,
    margin: 15,
  },
  label: {
    ...TEXT_LABEL,
  },
  value: {
    ...TEXT_VALUE,
  },
  weightAndAgeButtonGroup: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  weightAndAgeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#5e606e',
    ...CENTER,
  },
});
