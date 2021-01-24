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
var formats = ["word", "sentence", "paragraph", "data", "post", "todo", "user", "blog", "team", "comment", "photo"];

// Error object for 404
var error404 = {
    "error": true,
    "message": "The requested resource is not a valid endpoint.",
    "status" : 404,
    "endpoints" : {
        "word": "https://jsonipsum.com/api/v1/text/word/",
        "sentence": "https://jsonipsum.com/api/v1/text/sentence/",
        "paragraph": "https://jsonipsum.com/api/v1/text/paragraph/",
        "custom": "https://jsonipsum.com/api/v1/text/custom/",
        "post": "https://jsonipsum.com/api/v1/text/post/",
        "todo": "https://jsonipsum.com/api/v1/text/todo/",
        "user": "https://jsonipsum.com/api/v1/text/user/",
        "blog": "https://jsonipsum.com/api/v1/text/blog/",
        "team": "https://jsonipsum.com/api/v1/text/team/",
        "comment": "https://jsonipsum.com/api/v1/text/comment/",
        "photo": "https://jsonipsum.com/api/v1/text/photo/"
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
    if (formats.indexOf(format) >= 0) {

        // Start id at 101 for response
        var id = 101;

        // If body is an array, loop thru each item
        if(Array.isArray(request.body)){
            request.body.forEach(function(item){
                item.id = id++;
            });
        } else {
            request.body.id = id;
        }

        // Create data response object
        data = {
            "success" : true,
            "body": request.body
        };

        // Return data
        status = 200;

    // Return error
    } else {

        // Return error if not valid FORMAT
        data = error404;
        status = 404;
    }

    // Return data as json
    response.status(status).json(data);

});




// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
