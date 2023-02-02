import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import ReactDOM from "react-dom/client";

// import file API
import { callFuncGet, callAxiosGetA } from './callAPI/callCalAPI'


export default function App() {

  const [values, setVar] = React.useState();

  var dataIN = {
    A: 10,
    B: 2.5
  }

  const useCalGet = () => {
    callFunctionGet(dataIN).then((resultGet) => {
      setVar(resultGet)
    });
  }

  return (
    // <View style={styles.container}>
    <View>
      <Text>  Welcome..... to my world  </Text>

      <Text>{JSON.stringify(values)}</Text>

      {/* <Button onPress={() => useCalAxsGet()} title="Chase Me🧧" ></Button> */}
      <Button onPress={() => useCalGet()} title="Chase Mew" ></Button>

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