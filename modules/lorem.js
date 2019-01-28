// Import LoremIpsum module
var loremIpsum = require('lorem-ipsum');

// Custom modules
module.exports = {

    // Generate Lorem Ipsum
    generate_lorem_ipusm : function generate_lorem_ipusm(style, length, count, html) {
        // Vars
        var text = '';
        var options = '';

        // Check and process length arg
        if (length === 'short'){
            options = {
                s: [4,8],
                p: [3,6]
            };
        } else if (length === 'long'){
            options = {
                s: [16,24],
                p: [7,12]
            };
        } else {
            options = {
                s: [8,16],
                p: [5,8]
            };
        }

        // Check if html arg exists
        if (html === 'true'){
            html = 'html';
        } else {
            html = 'plain';
        }

        // Check if count arg exitst
        if(!count || count > 100){
            count = 1;
        }

        // Build base arguments
        var args = {
            count: 1,
            units: style,
            sentenceLowerBound: options.s[0],
            sentenceUpperBound: options.s[1],
            paragraphLowerBound: options.p[0],
            paragraphUpperBound: options.p[1],
            format: html,
        };

        // Construct data
        for (i = 1; i <= count; i++){
            if (i != count){
                text += loremIpsum(args) + ' ';
            } else {
                text += loremIpsum(args);
            }
        }

        // Return text
        return text;

    },

    // Generate date
    generate_date : function generate_date(options, faker) {
        // Get todays datetime
        var today = new Date();
        var date = '';

        // Check if options are passed
        // Random - date between 1980 - Present
        if (options === 'past'){
            date = faker.date.between('1980-01-01', today);
        }
        // Future - return date in the future, based off current date
        else if (options === 'future'){
            date = faker.date.future(4);
        }
        // Default - Return todays date
        else {
            date = today;
        }

        // Vars
        day = date.getDate();
        month = date.getMonth() + 1;
        year = date.getFullYear();

        // Values
        string = year + '-' + month + "-" + day;
        timestamp = new Date(year + '-' + month + "-" + day).getTime();

        // Return data
        return { 'string' : string, 'timestamp' : timestamp };
    },

    // Generate placeholder image urls
    generate_image_urls : function generate_image_urls(size){
        var img_urls = '';

        // Small images
        if (size === 'small'){
            img_urls = {
                "landscape" : "https://jsonipsum.com/static/images/placeholder_480x320.jpg",
                "portrait" : "https://jsonipsum.com/static/images/placeholder_320x480.jpg",
                "square" : "https://jsonipsum.com/static/images/placeholder_480x480.jpg"
            };
        } else if (size === 'large'){
            img_urls = {
                "landscape" : "https://jsonipsum.com/static/images/placeholder_1280x720.jpg",
                "portrait" : "https://jsonipsum.com/static/images/placeholder_720x1280.jpg",
                "square" : "https://jsonipsum.com/static/images/placeholder_1280x1280.jpg"
            };
        } else {
            img_urls = {
                "landscape" : "https://jsonipsum.com/static/images/placeholder_960x640.jpg",
                "portrait" : "https://jsonipsum.com/static/images/placeholder_640x960.jpg",
                "square" : "https://jsonipsum.com/static/images/placeholder_960x960.jpg"
            };
        }

        // Return image data
        return img_urls;
    },

    // Generate random intiger
    generate_random_int : function generate_random_int(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

};
