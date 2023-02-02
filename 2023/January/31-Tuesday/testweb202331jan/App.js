import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

import { createRoot } from 'react-dom/client';

// import file API
import { callAxiosGetA, callFetchGet } from './callAPI/callCalAPI'

const App = () => {
  const [values, setVal] = React.useState();

  var dataIN = {
    A: 5,
    B: 2
  }

  const useCalGet = () => {
    callFetchGet(dataIN).then((resultGet) => {
      // callFuncGet(dataIN).then((resultGet) => {
      console.log(dataIN);
      setVal(resultGet)
    })
  }

  const useCalAxsGet = () => {
    callAxiosGetA(dataIN).then((resultGet) => {
      setVal(resultGet)
    });
  }
  // *******************************************************
  var simpleAlertFunction = () => {
    //function to make simple alert
    Alert.alert('Alert Title', 'This is Simple Alert');
  }
  // *******************************************************

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Text>  Welcome..... to my world  </Text>
        <Text>{JSON.stringify(values)}</Text>
      </View>

      <View style={styles.buttonX}>
        <div>result:  <Text>{JSON.stringify(dataIN)}</Text> </div>
        <div>result_G:  <Text>{JSON.stringify(values)}</Text> </div>
      </View>

      <div style={styles.buttonY}>
        <Button onPress={() => useCalGet()} title="Chase Mew" ></Button>
      </div>
      {/* <Button onPress={useCalGet} title=" -- Chase Mew -- " ></Button> */}

      <div ><Button title={' ** Mew Mew ** '} onPress={() => alert('alerted!!! ' + JSON.stringify(dataIN))} /></div>

      <StatusBar style="auto" />
    </View >
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    autoWidth: true,
    autoHeight: true,
    // padding: 10,
    // margin: 5,
  },
  container: {
    // flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    // margin: 2,
  },
  buttonX: {
    // flex: 1,
    backgroundColor: 'lightpink',
    textDecorationColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
    marginBottom: 2,
  },
  buttonY: {
    // flex: 1,
    // backgroundColor: 'yellow',
    // textDecorationColor: 'green',
    borderColor: 'black',
    borderRadius: 20,
    borderBottomWidth: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
    marginBottom: 2,
  },
});

export default App;

// const root = createRoot(document.getElementById('root'));
// root.render(<App />)