import { SafeAreaView, Text } from 'react-native';

export default function HelloWord2() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello World 1!</Text>
      <Text style={styles.text}>Hello World 2!</Text>
      <Text style={styles.text}>Hello World 3!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  text: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
