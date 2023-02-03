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
export const callGet = () => {
        fetch(setHost + '/', {
                method: "GET",
                header: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Cache- Control": "public",
                },
        }).then((response) => {
                console.log((response.json()));
                // response.json();
        }).then((data) => {
                return data;
        }).catch((error) => {
                console.log(error);
        });
}

export const callFetchGet = (dataJson) => {
        alert('in : callFetchGet ' + dataJson.A + dataJson.B);

        fetch(setHost + '/calAddGet?A=' + dataJson.A + '&B=' + dataJson.B, {
                method: "GET",
                header: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Cache- Control": "public",
                },
        }).then((response) => {
                console.log((response.json()));
                response.json();
        }).then((data) => {
                return data;
        }).catch((error) => {
                console.log(error);
        });
}

export const callAxiosGetA = (dataIn) => {
        callAxios({
                method: 'get',
                // url: host + '/add2func?a=' + data.a + '&b=' + data.b,
                url: setHost + '/',
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
                return result.dataIn;
        })
}

// ****************************************************************************
// post
// export const callFunctionPost = () =>
//         fetch(setHost + '/', {
//                 method: "POST",
//                 headers: {
//                         Accept: "application/json",
//                         "Content-Type": "application/json",
//                 },
//         }).then((resCalP) => resCalP.json()).then((returnRes) => {
//                 return returnRes;
//         }).catch((err_res) => {
//                 console.log(err_res);
//         });

// ****************************************************************************