import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './component/Header';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  const { appRoot } = styles;
  return (
    <View style={appRoot}>
      <Header title='Guess A number' />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  appRoot: {
    flex: 1,
  },
});
