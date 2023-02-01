import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import ReactDOM from "react-dom/client";

// import file API
import { callFuncGet, callAxiosGetA } from './callAPI/callCalAPI'


// export default function App() {

//   const [values, setVar] = React.useState();

//   var dataIN = {
//     A: 10,
//     B: 2.5
//   }

//   // syntax
//   // const name_Func = () => {
//   // name_FuncImport().then((var_collec_data) => {
//   //     setVar_in_useState(var_collec_data)
//   //   })
//   // }

//   const useCalGet = () => {
//     callFunctionGet(dataIN).then((resultGet) => {
//       setVar(resultGet)
//     });
//   }

//   return (
//     <View style={styles.container}>
//       <Text>Welcome..... to my world 🐼</Text>

//       <Text>*** {JSON.stringify(values)} ***</Text>

//       {/* <Button onPress={() => useCalGet()}>*🧧*</Button> */}

//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
var App = () => {
  const [values, setVar] = React.useState();

  var dataIN = {
    A: 10,
    B: 2
  }

  const useCalGet = () => {
    callFuncGet(dataIN).then((resultGet) => {
      // console.log(dataIN);
      setVar(resultGet)
    });
  }

  const useCalAxsGet = () => {
    callAxiosGetA(dataIN).then((resultGet) => {
      // console.log(dataIN);
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
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// const container = document.getElementById('root');
// const root = createRoot(container);

// root.render(<App />);

export default App;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);