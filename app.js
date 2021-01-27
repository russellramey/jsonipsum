/*jshint esversion: 6*/

// Import Modules
var express = require("express");
var bodyParser = require("body-parser");
var getFormat = require('./modules/formats');

// Start app
var app = express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Format array
var formats = ["word", "sentence", "paragraph", "data"];

// Error object for 404
var error404 = {
    "error": true,
    "message": "The requested resource is not a valid endpoint or does not support current HTTP method.",
    "status" : 404,
    "endpoints" : {
        "word": "https://jsonipsum.com/api/word/",
        "sentence": "https://jsonipsum.com/api/sentence/",
        "paragraph": "https://jsonipsum.com/api/paragraph/",
        "data": "https://jsonipsum.com/api/data/",
    }
};

// Main get request
app.get("/api/get/:format/", (request, response, next) => {

    // Get format
    var format = request.params.format;

    // If format is valid
    if (formats.indexOf(format) >= 0) {

        // Get passed parameters
        var params = request.query;

        // Call lorem funciton to get text, append to data
        data = getFormat.get_format(format, params, request);

        // HTTP Status
        status = 200;
    // Return error
    } else {

        // Return error if not valid FORMAT
        data = error404;
        // HTTP Status
        status = 404;

    }

    // Return parsed data as json
    response.status(status).json(data);

    // Debug, log Request URL to console
    console.log(request.url);
});

// Main post request, return data body back as reponse
app.post("/api/post/:format/", (request, response , next) => {

    // Get format
    var format = request.params.format;

    // If format is valid
    if (format === 'data') {

        // Get passed parameters
        let params = Object.assign(request.query, request.body);

        // Call lorem funciton to get text, append to data
        data = {
            success: true,
            status: 200,
            body: getFormat.get_format(format, params, request)
        };

        // HTTP Status
        status = 200;

    // Return error
    } else {
        // Return error if not valid FORMAT
        data = error404;
        // HTTP Status
        status = 404;
    }

    // Return data as json
    response.status(status).json(data);

});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
