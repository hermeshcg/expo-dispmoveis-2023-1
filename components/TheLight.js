import {useState} from 'react'
import {SafeAreaView, Image, Switch, StyleSheet, Dimensions, Platform} from 'react-native'
import {StatusBar} from 'expo-status-bar'
import Constants from 'expo-constants'
import bulbOn from '../assets/bulb-on.jpg'
import bulbOff from '../assets/bulb-off.jpg'

const screenHeight = Dimensions.get('window').height;

export default function TheLight (){
  // variável pra saber se a lâmpada está acessa
  const [isEnabled, setIsEnable] = useState(0)
  // método para trocar o estado da lâmpada
  const toggleSwitch = () => setIsEnable(
    (previosState) => !previosState
  )

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light"/>
      <Image 
        fadeDuration={0} 
        source={isEnabled ? bulbOn : bulbOff}
        style={styles.image}/>
      <Switch 
        trackColor={{false: "#fff", true: "#52d964"}}
        thumbColor={isEnabled ? "#fff" : "#fff"}
        onValueChange={toggleSwitch}
        value={isEnabled}
        style = {styles.switch}/>
    </SafeAreaView>   
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    paddingTop: Constants.statusBarHeight
  },
  image: {
    maxWidth: "100%",
    maxHeight: screenHeight - 180,
    resizeMode: "contain",
    marginBottom: 20,
  },
  switch: {
    alignSelf: "center",
    transform: Platform.OS === "ios" ? []: [{scale: 1.5}]
  }
})