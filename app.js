// Import Modules
var express = require("express");
var bodyParser = require("body-parser");
var getFormat = require('./modules/formats');

// Start app
var app = express();
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Main get request
app.get("/api/v1/text/:format/", (request, response, next) => {

    // Get format
    var formats = ["word", "sentence", "paragraph", "custom", "post", "todo", "user", "blog", "team", "comment", "photo"];
    var format = request.params.format;

    // If format is valid
    if (formats.indexOf(format) >= 0) {

        // Get passed parameters
        var params = request.query;

        // Call lorem funciton to get text, append to data
        data = getFormat.get_format(format, params, request);

    // Return error
    } else {

        // Return error if not valid FORMAT
        data = {
            "error" : "/" + format + " is not a valid endpoint",
            "status" : 404,
            "endpoints" : {
                "word" : "https://jsonipsum.com/api/v1/text/word/",
                "sentence" : "https://jsonipsum.com/api/v1/text/sentence/",
                "paragraph" : "https://jsonipsum.com/api/v1/text/paragraph/",
                "custom" : "https://jsonipsum.com/api/v1/text/custom/",
                "html" : "https://jsonipsum.com/api/v1/text/html/"
            }
        };
    }

    // Return parsed data as json
    response.json(data);

    // Debug, log Request URL to console
    console.log(request.url);
});




// Main post request, return data body back as reponse
app.post("/api/v1/text/:format/", (request, response) => {

    // Get format
    var format = request.params.format;

    // Default id for returned body
    request.body.id = 101;
    // Create data response object
    data = {
        "success" : true,
        "body": request.body
    };

    // Return data as json
    response.json(data);

    // Debug, log Request URL to console
    console.log(request.url);
});




// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
