import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const GameOverScreen = ({ roundNumber, userNumber, onRestart }) => {
  const { root } = styles;
  return (
    <View style={root}>
      <Text>The Game is over!!!!,</Text>
      <Text>Number of Rounds :{roundNumber}</Text>
      <Text>Number Was: {userNumber} </Text>
      <Button title='RESTART' onPress={onRestart} />
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
