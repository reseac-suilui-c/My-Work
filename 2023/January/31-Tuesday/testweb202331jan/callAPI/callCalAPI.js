// function calculator
const callAxios = require('axios');
// set host value
var setHost = 'http://localhost:2000'

// get
// syntax
// data type [name func] = () =>
// fetch(path, {json data
// }).then((variable) => variable.json() [**create var for collect data in json format**] ).then([**convert variable to use for Export**]  (var return) => {
//      retuen var return; } ).catch( (var error) => { //* log or anything *//});
export const callFunctionGet = () =>
        fetch(setHost + '/', {
                method: "GET",
                headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                },
        }).then((resCalGet) => resCalGet.json()).then((returnRes) => {
                return returnRes;
        }).catch((err_res) => {
                console.log(err_res);
        });

// ****************************************************************************
// post
export const callFunctionPost = () =>
        fetch(setHost + '/', {
                method: "POST",
                headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                },
        }).then((resCalGet) => resCalGet.json()).then((returnRes) => {
                return returnRes;
        }).catch((err_res) => {
                console.log(err_res);
        });

// ****************************************************************************