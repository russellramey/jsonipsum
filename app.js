// Modules
var express = require("express");
var getFormat = require('./modules/formats');

// Start
var app = express();

// Main get request
app.get("/api/v1/text/:format/", (request, response, next) => {

    // Get format
    var formats = ["sentence", "group", "paragraph"];
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
                "sentence" : "https://jsonipsum.com/api/v1/text/sentence/",
                "paragraph" : "https://jsonipsum.com/api/v1/text/paragraph/",
                "group" : "https://jsonipsum.com/api/v1/text/group/"
            }
        };
    }

    // Return parsed data as json
    response.json(data);

    // Debug, log Request URL to console
    console.log(request.url);
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
