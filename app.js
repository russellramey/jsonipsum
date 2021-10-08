/*jshint esversion: 6*/
/************************************
*
* Dependencies
*
************************************/
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const getFormat = require('./modules/formats');

/************************************
*
* App Config
*
************************************/
// Initial express app
const app = express();

// Available formats array
const formats = ["word", "sentence", "paragraph", "data"];

// Default error object for 404
const error404 = {
    "error": true,
    "message": "The requested resource is not a valid endpoint or does not support current HTTP method.",
    "status" : 404,
    "endpoints" : {
        "word": "https://api.jsonipsum.com/get/word/",
        "sentence": "https://api.jsonipsum.com/get/sentence/",
        "paragraph": "https://api.jsonipsum.com/get/paragraph/",
        "data": "https://api.jsonipsum.com/get/data/"
    }
};

// Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Enable CORS on all routes
app.use(cors());

/************************************
*
* App Routes
*
************************************/
// Main get request
app.get("/get/:format/", (request, response, next) => {

    // Get format
    let format = request.params.format;

    // If format is valid
    if (formats.indexOf(format) >= 0) {

        // Get passed parameters
        let params = request.query;

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
app.post("/post/:format/", (request, response , next) => {

    // Get format
    let format = request.params.format;

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

// Default catch all (404)
app.get('*', function(req, res){
  res.status(404).json(error404);
});

/************************************
*
* App run
*
************************************/
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
