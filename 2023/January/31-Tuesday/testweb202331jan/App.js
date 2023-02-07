import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

import { createRoot } from 'react-dom/client';

// import file API
import { callAxiosGetA, callFetchGet, callGet, callAddGet, callAddGetN } from './callAPI/callCalAPI'

const App = () => {
  const [values, setVal] = React.useState([]);

  var dataIN = {
    A: 5,
    B: 2,
    // "A": 5,
    // "B": 2
  }


  const useCalGet = () => {
    // callGet().then((result) => {
    //   setValue(result)
    //   console.log(JSON.stringify(result));
    // });
    callGet().then((result) => { setVal(result) });

  }

  const useCalAddGet = () => {
    var result = callAddGet(dataIN);
    setVal(result);
    console.log(JSON.stringify(result));
  }

  const useCalAddGetN = () => {
    callAddGetN(dataIN).then((resultGet) => {
      setVal(resultGet);
      console.log(resultGet);
    });
  }
  // ******** axios *******
  const useCalAxsGet = () => {
    callAxiosGetA(dataIN).then((resultGet) => {
      setVal(resultGet)
    });
  }
  // *******************************************************
  var simpleAlertFunction = () => {
    //function to make simple alert
    alert('alerted!!! ' + JSON.stringify(dataIN));
  }
  // *******************************************************

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Text>  Welcome..... to my world  </Text>
      </View>

      <View style={styles.buttonX}>
        <div><Text>result:  {JSON.stringify(dataIN)} </Text> </div>
        <div><Text>result_G:  {values} </Text> </div>
      </View>
      {/* <div ><Button title={' ** Mew Mew ** '} onPress={() => simpleAlertFunction()} /></div> */}
      <div><Text>===================================</Text></div>
      <div style={styles.buttonY}><Button title="Chase Mew Get" onPress={() => useCalGet()} ></Button></div>
      <div style={styles.buttonY}><Button title="Mew Add Get" onPress={() => useCalAddGet()} ></Button></div>
      <div style={styles.buttonY}><Button title="Mew Add GetN" onPress={() => useCalAddGetN()} ></Button></div>

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