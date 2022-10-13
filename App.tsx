import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { AsyncStorage } from 'react-native';

export default function App() {
  const [value, setValue] = useState("")
  const storeFunction = () => {
    const key0 = 32847239472
    AsyncStorage.setItem("ITEM", JSON.stringify(key0))
  }

  const getFunction = () => {
    AsyncStorage.getItem("ITEM").then((value) => {
      console.log(typeof value);
      setValue(value)
    })
  }

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
  }, [])

  return (
    <View style={styles.container}>
      <Text>{value}</Text>
      <TouchableHighlight onPress={() => storeFunction()}><Text>set item</Text></TouchableHighlight>
      <TouchableHighlight onPress={() => getFunction()}><Text>get item</Text></TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
