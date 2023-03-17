import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Switch } from 'react-native-paper';

export default function Light() {
  const [turnedOn, setTurnedOn] = useState(false);

  const toggleSwitch = () => {
    setTurnedOn(!turnedOn);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={turnedOn ? 'light' : 'dark'} />
      {turnedOn ? (
        <Image src={'../assets/bulb-on.jpg'} />
      ) : (
        <Image src={'../assets/bulb-off.jpg'} />
      )}
      <Switch
        thumbColor={turnedOn ? '#fff' : '#000'}
        trackColor={{ false: '#fff', true: '#52d964' }}
        onValueChange={toggleSwitch}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
    paddingTop: Constants.statusBarHeight,
  },
  text: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
