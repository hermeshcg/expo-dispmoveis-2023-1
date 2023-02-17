import { View, Text } from 'react-native';

export default function HelloWord1({ text }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: 'red',
          textTransform: 'uppercase',
        }}
      >
        {text}
      </Text>
    </View>
  );
}
