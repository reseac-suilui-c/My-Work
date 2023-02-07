

const axios = require('axios').default;
var host = 'http://localhost:1000'

export const testFetchGetA = () =>
    fetch(host + '/', {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    }).then((response) => response.json()).then((json) => {
        console.log(JSON.stringify(json));
        return json;
    }).catch((error) => {
        console.error(error);
    });

export const testFetchGetAAdd2Func = (dataJson) =>
    // export const testFetchGetAAdd2Func = (a,b) =>
    fetch(host + '/add2func?a=' + dataJson.a + '&b=' + dataJson.b, {
        // fetch(host + '/add2func', {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    }).then((response) => response.json()).then((json) => {
        return json;
    }).catch((error) => {
        console.error(error);
    });

export const testFetchPostA = () =>
    fetch(host + '/', {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    }).then((response) => response.json()).then((json) => {
        return json;
    }).catch((error) => {
        console.error(error);
    });

export const testFetchPostAAdd2func = (data) =>
    fetch(host + '/add2func', {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }).then((response) => response.json()).then((json) => {
        return json;
    }).catch((error) => {
        console.error(error);
    });

export const testAxiosGetA = () =>
    axios({
        method: 'get',
        url: host + '/',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        responseType: 'json'
    }).then((result) => {
        return result.data
    })

export const testAxiosGetAAdd2func = (data) =>
    axios({
        method: 'get',
        // url: host + '/add2func?a=' + data.a + '&b=' + data.b,
        url: host + '/add2func',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        params: {
            a: data.a,
            b: data.b
        },
        responseType: 'json'
    }).then((result) => {
        return result.data
    })

export const testAxiosPostA = () =>
    axios({
        method: 'post',
        url: host + '/',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        responseType: 'json'
    }).then((result) => {
        return result.data
    })

export const testAxiosPostAAdd2func = (data) =>
    axios({
        method: 'post',
        url: host + '/add2func',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        data: JSON.stringify(data),
        responseType: 'json'
    }).then((result) => {
        return result.data
    })




// exports = {
//     testFetchGetA()
// }