import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = (props) => {
  const { textInputRoot } = styles;
  return <TextInput style={{ ...textInputRoot, ...props.style }} {...props} />;
};

export default Input;

const styles = StyleSheet.create({
  textInputRoot: {
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
