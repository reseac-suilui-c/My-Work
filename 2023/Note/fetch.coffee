# syntax
data type [name func] = () =>
fetch(path, {json data
}).then((variable) => variable.json() [**create var for collect data in json format**] ).then([**convert variable to use for Export**]  (var return) => {
     retuen var return; } ).catch( (var error) => { //* log or anything *//});
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

# syntax
fetch('https://example.com/some/path/to/json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    // Do something with data
});

fetch(url)
.then(response => {
        // handle the response
})
.catch(error => {
        // handle the error
});


fetch('/readme.txt')
    .then(response => response.text())
    .then(data => console.log(data));


var responseClone; // 1
fetch('https://example.com/some/path/to/json')
.then(function (response) {
    responseClone = response.clone(); // 2
    return response.json();
})
.then(function (data) {
    // Do something with data
}, function (rejectionReason) { // 3
    console.log('Error parsing JSON from response:', rejectionReason, responseClone); // 4
    responseClone.text() // 5
    .then(function (bodyText) {
        console.log('Received the following instead of valid JSON:', bodyText); // 6
    });
});

https://support.stripe.com/questions/how-to-fix-syntaxerror-unexpected-token-in-json-at-position-0