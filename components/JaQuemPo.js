import {useState, useRef} from 'react'
import { SafeAreaView, View, Text, StyleSheet, Animated } from "react-native";
import Constants from 'expo-constants'
import Actions from './Actions'
import DisplayResult from './DisplayResult';

export default function JaQuemPo(){
    const [userChoice, setUserChoice] = useState(null)
    const [pcChoice, setPcChoice] = useState(null)
    const [result, setResult] = useState("")
    const [canPlay, setPlay] = useState(true)

    const fadeAnimation = useRef(new Animated.Value(0)).current

    function play(choice){ // 1 - rock, 2 - paper 3 - scissors
        const randomPcChoice = Math.floor((Math.random() * 3 )) + 1
        let resultString = ""

        if (choice == 1){
            resultString = randomPcChoice === 3 ? "WIN": "LOSE"
        }
        else if (choice == 2){
            resultString = randomPcChoice === 1 ? "WIN": "LOSE"
        }
        else {
            resultString = randomPcChoice === 2 ? "WIN": "LOSE"
        }
        if (choice === randomPcChoice){
            resultString = "DRAW"
        }
        setPcChoice(randomPcChoice)
        setUserChoice(choice)

        setTimeout( () => {
            setResult(resultString)
        }, 300)

        Animated.sequence([
            Animated.timing(fadeAnimation, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }),
            Animated.timing(fadeAnimation, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true
            }).start()
        ])

        setPlay(false)
        setTimeout( () => {
            setPlay(true)
        }, 600)
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.result}>
                    <Animated.Text style={[styles.resultText, {opacity: fadeAnimation}]}>
                            {result}
                    </Animated.Text>                    
                </View>
                <View style={styles.screen}>
                    { !result ? (<Text style={styles.readyText}> Let´s Play </Text> ) : 
                        <DisplayResult userChoice={userChoice} computerChoice={pcChoice}/>
                    }
                </View>
                <Actions play={play} canPlay={canPlay}/>
            </View>
        </SafeAreaView>
    )
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
        justifyContent: "flex-end",
        alignItems: "center",
    },
    resultText: {
        fontSize: 48, fontWeight: "bold"
    },
    screen: {
        flex: 1,
        flexDirection: "row",
    },
    readyText: {
        marginTop: -48,
        alignSelf: "center",
        textAlign: "center",
        width: "100%",
        fontSize: 48,
        fontWeight: "bold",
      },
})