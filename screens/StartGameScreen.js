import React, { useState } from 'react';
import { Alert, Button, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

import Card from '../component/Card';
import Input from '../component/Input';
import Colors from '../constants/colors';

const StartGameScreen = () => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectNumber, setSelectNumber] = useState('');

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };
  const resetInputValue = () => {
    setEnteredValue('');
  };

  const confirmInputValue = () => {
    const chosenNumber = parseInt(enteredValue);
    if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number!', 'Number has to be a number between 1 and 99', [
        { text: 'Okay', style: 'destructive', onPress: resetInputValue },
      ]);
      return;
    }
    setConfirmed(true);
    setSelectNumber(chosenNumber);
    setEnteredValue('');
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = <Text>Chosen Number:{selectNumber} </Text>;
  }

  const { gameScreenRoot, input, buttonContainer, inputContainer, title, button } = styles;
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={gameScreenRoot}>
        <Text style={title}>The Game Screen</Text>
        <Card style={inputContainer}>
          <Text> Select a number</Text>
          <Input
            style={input}
            blurOnSubmit
            autoCapitalize='none'
            keyboardType='numeric'
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={buttonContainer}>
            <View style={button}>
              <Button title='Reset' color={Colors.accent} onPress={resetInputValue} />
            </View>
            <View style={button}>
              <Button title='Confirm' color={Colors.primary} onPress={confirmInputValue} />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
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
  input: {
    width: 50,
    textAlign: 'center',
  },
});
