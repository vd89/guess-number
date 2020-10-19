import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';

const NumberContainer = (props) => {
  const { numberContainerRoot, number } = styles;
  return (
    <View style={numberContainerRoot}>
      <Text style={number}>{props.children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  numberContainerRoot: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: Colors.accent,
    fontSize: 22,
  },
});
