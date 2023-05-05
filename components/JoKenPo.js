import { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Actions from './Actions';

export default function JoKenPo() {
  const [userChoice, setUserChoice] = useState(null);
  const [pcChoice, setPcChoice] = useState(null);
  const [result, setResult] = useState('');
  const [canPlay, setPlay] = useState(true);

  function play(choice) {
    // 1 - rock, 2 - paper 3 - scissors
    const randomPcChoice = Math.random() * 3 + 1;
    const resultString = '';

    if (choice == 1) {
      resultString = randomPcChoice === 3 ? 'WIN' : 'LOSE';
    } else if (choice == 2) {
      resultString = randomPcChoice === 1 ? 'WIN' : 'LOSE';
    } else {
      resultString = randomPcChoice === 2 ? 'WIN' : 'LOSE';
    }
    if (choice === randomPcChoice) {
      resultString = 'DRAW';
    }
    setPcChoice(randomPcChoice);
    setUserChoice(choice);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.result}>
          <Text style={styles.readyText}> Let´s Play </Text>
        </View>
        <View style={styles.screen}></View>
        <Actions play={play} canPlay={canPlay} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  content: {
    flex: 1,
    padding: 15,
  },
  result: {
    height: 100,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  screen: {
    flex: 1,
    flexDirection: 'row',
  },
  readyText: {
    marginTop: -48,
    alignSelf: 'center',
    textAlign: 'center',
    width: '100%',
    fontSize: 48,
    fontWeight: 'bold',
  },
});
