import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View } from 'react-native';

import ReactDOM from "react-dom/client";
import * as ReactDOMClient from 'react-dom/client';
import { createRoot } from 'react-dom/client';

// import file API
import { callAxiosGetA, callFetchGet } from './callAPI/callCalAPI'


export default function App({ name }) {
  // function App() {
  const [valR, setVal] = React.useState()

  var dataIN = {
    A: 5,
    B: 2
  }

  const useCalGet = () => {
    callFetchGet(dataIN).then((resultGet) => {
      // callFuncGet(dataIN).then((resultGet) => {
      console.log(dataIN);
      console.log(JSON.stringify(resultGet));
      setVal(resultGet)
    });
  }

  const useCalAxsGet = () => {
    callAxiosGetA(dataIN).then((resultGet) => {
      // console.log(dataIN);
      setVal(resultGet)
    });
  }

  // useEffect(() => {
  //   setData(data)
  // },);

  return (
    // <View style={styles.container}>
    <View>
      < Text > Welcome..... to my world  </Text >

      {/* <Text>{JSON.stringify(valR)}</Text> */}

      {/* <Button onPress={() => useCalGet()} title="Chase Mew" ></Button> */}
      {/* <Button onPress={() => console.log('press')} title="Chase Mew" ></Button>  */}
      <div>result:  <Text>{JSON.stringify(dataIN)}</Text> </div>

      <div>result_G:  <Text>{JSON.stringify(valR)}</Text> </div><Button onPress={() => useCalGet()} title="Chase Mew" ></Button>

      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonB: {
    flex: 1,
    // backgroundColor: 'lightpink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// const App = () => {
//   const [values, setVar] = React.useState();

//   var dataIN = {
//     A: 5,
//     B: 2
//   }

//   const useCalGet = () => {
//     callFuncGet(dataIN).then((resultGet) => {
//       // console.log(dataIN);
//       setVar(resultGet)
//     });
//   }

//   const useCalAxsGet = () => {
//     callAxiosGetA(dataIN).then((resultGet) => {
//       // console.log(dataIN);
//       setVar(resultGet)
//     });
//   }

//   return (
//     // <View style={styles.container}>
//     <View>
//       <Text>  Welcome..... to my world  </Text>

//       <Text>{JSON.stringify(values)}</Text>

//       {/* <Button onPress={() => useCalAxsGet()} title="Chase Me🧧" ></Button> */}
//       <Button onPress={() => useCalGet()} title="Chase Mew" ></Button>

//       <StatusBar style="auto" />
//     </View>
//   );
// };

// export default App;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

const root = createRoot(document.getElementById('root'));
root.render(<App />)