//React Native Button
//https://aboutreact.com/react-native-button/

//import React in our code
import React from 'react';

//import all the components we are going to use
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import {
  testFetchGetA, testFetchGetAAdd2Func, testFetchPostA, testFetchPostAAdd2func,
  testAxiosGetA, testAxiosGetAAdd2func, testAxiosPostA, testAxiosPostAAdd2func
} from './action/CallAPIAction'

const App = () => {

  const [value, setValue] = React.useState()  

  var dataJson = {
    a: 50,
    b: 20
  }
  
  const testFetchGetA_Func = () => {
    testFetchGetA().then((result) => {
     setValue(result)
    })
  }

  const testFetchGetAAdd2Func_Func = () => {
    testFetchGetAAdd2Func(dataJson).then((result) => {
     setValue(result)
    })
  }

  const testFetchPostA_Func = () => {
    testFetchPostA().then((result) => {
     setValue(result)
    })
  }
  const testFetchPostAAdd2func_Func = () => {
    testFetchPostAAdd2func(dataJson).then((result) => {
     setValue(result)
    })
  }
  const testAxiosGetA_Func = () => {
    testAxiosGetA().then((result) => {
     setValue(result)
    })
  }
  const testAxiosGetAAdd2func_Func = () => {
    testAxiosGetAAdd2func(dataJson).then((result) => {
     setValue(result)
    })
  }
  const testAxiosPostA_Func = () => {
    testAxiosPostA().then((result) => {
     setValue(result)
    })
  }
  const testAxiosPostAAdd2func_Func = () => {
    testAxiosPostAAdd2func(dataJson).then((result) => {
     setValue(result)
    })
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
         <View style={{ width: 200, backgroundColor: 'powderblue', marginRight: 20 }}>
          <Button onPress={testFetchGetA_Func} title="testFetchGetA" color="#841584" />
        </View>
       <View style={{ width: 200, backgroundColor: 'skyblue', marginRight: 20 }}>
          <Button onPress={testFetchGetAAdd2Func_Func} title="testFetchGetAAdd2Func" color="#841584" />
        </View>
        <View style={{ width: 200, backgroundColor: 'steelblue', marginRight: 20 }}>
          <Button onPress={testFetchPostA_Func} title="testFetchPostA" color="#841584" />
        </View>
        <View style={{ width: 250, backgroundColor: 'steelblue', marginRight: 20 }}>
          <Button onPress={testFetchPostAAdd2func_Func} title="testFetchPostAAdd2func" color="#841584" />
        </View>
      </View>
      <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', }}>{JSON.stringify(value)}</Text>
      <View style={[styles.container]}>
        <View style={{ width: 200, backgroundColor: 'powderblue', marginRight: 20 }}>
          <Button onPress={() => testAxiosGetA_Func()} title="testAxiosGetA" color="steelblue" />
        </View>
        <View style={{ width: 200, backgroundColor: 'skyblue', marginRight: 20 }}>
          <Button onPress={() => testAxiosGetAAdd2func_Func()} title="testAxiosGetAAdd2func" color="steelblue" />
        </View>
        <View style={{ width: 200, backgroundColor: 'steelblue', marginRight: 20 }}>
          <Button onPress={() => testAxiosPostA_Func()} title="testAxiosPostA" color="steelblue" />
        </View>
        <View style={{ width: 250, backgroundColor: 'steelblue', marginRight: 20 }}>
          <Button onPress={() => testAxiosPostAAdd2func_Func()} title="testAxiosPostAAdd2func" color="steelblue" />
        </View>
      </View>

    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
