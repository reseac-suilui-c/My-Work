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