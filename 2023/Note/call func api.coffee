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