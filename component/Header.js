import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';

const Header = ({ title }) => {
  const { headerRoot, headerTitle } = styles;
  return (
    <View style={headerRoot}>
      <Text style={headerTitle}>{title} </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerRoot: {
    width: '100%',
    height: 60,
    paddingTop: 15,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: 'black',
    fontSize: 20,
  },
});
