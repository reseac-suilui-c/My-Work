import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

// import file API
import { callFunctionGet } from './callAPI/callCalAPI'


export default function App() {

  const [values, setVar] = React.useState();

  var dataIN = {
    A: 10,
    B: 2.5
  }

  // syntax
  // const name_Func = () => {
  // name_FuncImport().then((var_collec_data) => {
  //     setVar_in_useState(var_collec_data)
  //   })
  // }

  const useCalGet = () => {
    callFunctionGet(dataIN).then((resultGet) => {
      setVar(resultGet)
    });
  }

  return (
    <View style={styles.container}>
      <Text>Welcome..... to my world 🐼</Text>

      <Text>*** {JSON.stringify(values)} ***</Text>

      <Button onPress={() => useCalGet()}>*🧧*</Button>

      <StatusBar style="auto" />
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
