import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './component/Header';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const { appRoot } = styles;

  const configNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };
  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
  } else if (guessRounds > 0) {
    content = <GameOverScreen userNumber={userNumber} roundNumber={guessRounds} onRestart={configNewGameHandler} />;
  }
  return (
    <View style={appRoot}>
      <Header title='Guess A number' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  appRoot: {
    flex: 1,
  },
});
