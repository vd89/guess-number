import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Card = (props) => {
  const { cardRoot } = styles;
  return <View style={{ ...cardRoot, ...props.style }}>{props.children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  cardRoot: {
    shadowColor: '#0000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
});
