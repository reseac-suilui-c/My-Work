// function calculator
const callAxios = require('axios').default;
// set host value
var setHost = process.env.setHost || 'http://localhost:3000'

// get
export const callGet = () => {
        fetch(setHost + '/', {
                method: "GET",
                headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                },
        }).then((response) => response.json()).then((json) => {
                console.log(JSON.stringify(json));
                // console.log((json));
                return json;
                // }).then((json) => {
                //         console.log((json));
                //         return json;
        }).catch((error) => {
                console.log(error);
        });
}
// export const callGet = () => {
//         // alert('in : tt-- ' );
//         fetch(setHost + '/', {
//                 method: "GET",
//                 header: {
//                         Accept: "application/json",
//                         "Content-Type": "application/json",
//                         // "Cache- Control": "public",
//                 },
//         }).then((response) => response.json()).then((data) => {
//                 // }).then((data) => {
//                 console.log(JSON.stringify(data));
//                 // alert(data);
//                 return data;
//         }).catch((error) => {
//                 console.log(error);
//         });
// }

export const callAddGetN = (dataJson) => {
        alert('in : calAddGetN || A=' + dataJson.A + '&B=' + dataJson.B);

        fetch(setHost + '/calGetAdd?A=' + dataJson.A + '&B=' + dataJson.B, {
                method: "GET",
                header: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        // "Cache- Control": "public",
                },
        }).then((response) => response.json()).then((data) => {
                // }).then((data) => {
                // console.log(data);
                // alert(JSON.stringify(data));
                return data;
        }).catch((error) => {
                console.log(error);
        });
}

export const callAddGet = (dataJson) => {
        alert('in : calAddGet ' + dataJson.A + dataJson.B);

        fetch(setHost + '/calGetAdd?A=' + dataJson.A + '&B=' + dataJson.B, {
                method: "GET",
                header: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        // "Cache- Control": "public",
                },
        }).then((response) => response.json()).then((data) => {
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