import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  NativeModules,
  Button
} from 'react-native';

console.log(NativeModules.Counter);
NativeModules.Counter.increment(value => {
  console.log("The count is", value);
});
console.log({ constants: NativeModules.Counter.getConstants() });

function App() {

  // const decrement = () => {
  //   NativeModules.Counter.decrement()
  //     .then((result) => {
  //       console.log("Decrement result -->", result);
  //     })
  //     .catch((error) => {
  //       console.log("Decrement error ->", error.message, error.code);
  //     })
  // };

  const decrement = async () => {
    try {
      const result = await NativeModules.Counter.decrement();
      console.log("Decrement result -->", result);
    } catch (error) {
      console.log("Decrement error -->", error.message, error.code);
    }
  };

  return (
    <View style={styles.container}>
      <Text>App</Text>
      <Button title='Increase counter' onPress={() => { }} />
      <Button title='Decrease counter' onPress={decrement} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default App;
