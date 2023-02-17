import {View, Text} from 'react-native'

export default function HelloWord1 ({text}){
  return(
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "green"
    }}>
      <Text  style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "green"
    }}>
        {text}
      </Text>
    </View>
  )
}