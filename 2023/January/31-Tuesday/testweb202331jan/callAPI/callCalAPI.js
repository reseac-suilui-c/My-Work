// function calculator
const callAxios = require('axios').default;
// set host value
var setHost = process.env.setHost || 'http://localhost:19006'

// get
// syntax
// data type [name func] = () =>
// fetch(path, {json data
// }).then((variable) => variable.json() [**create var for collect data in json format**] ).then([**convert variable to use for Export**]  (var return) => {
//      retuen var return; } ).catch( (var error) => { //* log or anything *//});
// export const callFunctionGet = () =>
//         fetch(setHost + '/', {
//                 method: "GET",
//                 headers: {
//                         Accept: "application/json",
//                         "Content-Type": "application/json",
//                 },
//         }).then((resCalGet) => resCalGet.json()).then((returnRes) => {
//                 return returnRes;
//         }).catch((err_res) => {
//                 console.log(err_res);
//         });

export const callFuncGet = (dataJson) =>

        fetch(setHost + '/calGet?A=' + dataJson.A + '&B=' + dataJson.B, {
                // fetch(host + '/add2func', {
                method: "GET",
                headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                }
        })
                .then((response) => response.json())
                .then((responseJson) => {
                        console.log(responseJson);
                        return responseJson;
                })
                .catch((error) => { console.error(error); });


// export const callFunctionGet = (dataIn) =>
//         fetch(setHost + '/calGet?A=' + dataIn.A + '&B=' + dataIn.B, {
//                 method: "GET",
//                 headers: {
//                         Accept: "application/json",
//                         "Content-Type": "application/json",
//                 },
//         }).then((resCalGet) => resCalGet.json()).then((returnRes) => {
//                 return returnRes;
//         }).catch((err) => {
//                 console.log(err);
//         });

export const callAxiosGetA = (dataIn) =>
        callAxios({
                method: 'get',
                // url: host + '/add2func?a=' + data.a + '&b=' + data.b,
                url: setHost + '/callAxiosGetA',
                headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                },
                params: {
                        A: dataIn.A,
                        B: dataIn.B
                },
                responseType: 'json'
        }).then((result) => {
                return result.dataIn
        })
// ****************************************************************************
// post
export const callFunctionPost = () =>
        fetch(setHost + '/', {
                method: "POST",
                headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                },
        }).then((resCalP) => resCalP.json()).then((returnRes) => {
                return returnRes;
        }).catch((err_res) => {
                console.log(err_res);
        });

// ****************************************************************************