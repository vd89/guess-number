import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const StartGameScreen = () => {
  const { gameScreenRoot } = styles;
  return (
    <View style={gameScreenRoot}>
      <Text>The Game Screen</Text>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  gameScreenRoot: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
