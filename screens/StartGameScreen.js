import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import Card from '../component/Card';
import Colors from '../constants/colors';

const StartGameScreen = () => {
  const { gameScreenRoot, buttonContainer, inputContainer, title, button } = styles;
  return (
    <View style={gameScreenRoot}>
      <Text style={title}>The Game Screen</Text>
      <Card style={inputContainer}>
        <Text> Select a number</Text>
        <TextInput />
        <View style={buttonContainer}>
          <View style={button}>
            <Button title='Reset' color={Colors.accent} onPress={() => {}} />
          </View>
          <View style={button}>
            <Button title='Confirm' color={Colors.primary} onPress={() => {}} />
          </View>
        </View>
      </Card>
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
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: 90,
    borderRadius: 20,
  },
});
