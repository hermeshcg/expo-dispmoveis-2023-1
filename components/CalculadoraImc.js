import { SafeAreaView, StatusBar, View, Text, Platform, StyleSheet } from "react-native";
import { CENTER, TEXT, BUTTON, BUTTON_TEXT } from "./style";
import Constants from "expo-constants";
import {useState} from 'react'
import GenderSelection from "./GenderSelection";
import HeightSelection from "./HeightSelection";

export default function CalculadoraImc() {
    const [gender, setGender] = useState("male");
    const [height, setHeight] = useState(150);

    return (
        <SafeAreaView style={styles.container}>
             <StatusBar style="light" />
             <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>BMI CALCULATOR</Text>
                </View>
                <GenderSelection style={styles.gender} gender={gender} setGender={setGender}/>
                <HeightSelection style={styles.height} height={height} setHeight={setHeight}
        />
             </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#1d2236",
      paddingTop: Constants.statusBarHeight,
    },
    content: {
      flex: 1,
    },
    header: {
      ...CENTER,
      height: 70,
      marginBottom: 15,
      borderBottomWidth: 5,
      borderBottomColor: "#16192e",
    },
    headerText: {
      ...TEXT,
      fontSize: 24,
      fontWeight: "500",
    },
    gender: {
      flex: 1,
    },
    height: {
      flex: 1,
    },
    weightAndAge: {
      flex: 1,
    },
    calculateButton: {
      ...BUTTON,
      marginTop: 10,
      marginBottom: Platform.OS === 'ios' ? 0 : 15,
    },
    calculateButtonText: {
      ...BUTTON_TEXT,
    },
  });