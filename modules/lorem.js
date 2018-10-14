// Import LoremIpsum module
var loremIpsum = require('lorem-ipsum');

// Custom modules
module.exports = {

    // Generate Lorem Ipsum
    generate_lorem_ipusm : function generate_lorem_ipusm(style, length, count, html) {
        // Vars
        var text_length;
        var text = '';

        // Parse arguments
        if (length === 'short'){
            options = {
                s: [3,8],
                p: [5,8]
            };
        } else if (length === 'long'){
            options = {
                s: [18,30],
                p: [8,12]
            };
        } else {
            options = {
                s: [12,20],
                p: [5,8]
            };
        }
        // Check for html format
        if (html === 'true'){
            html = 'html';
        } else {
            html = 'plain';
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
            text += loremIpsum(args);
        }

        // Return text
        return text;

    },

    // Generate date
    generate_date : function generate_date(options, faker) {
        var date = '';

        // Check if options are passed
        if (options === 'rand'){
            date = faker.date.between('1980-01-01', '2010-12-31');
        } else {
            date = new Date();
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
                "landscape" : "https://jsonipsum.com/static/images/image_480x320.jpg",
                "portrait" : "https://jsonipsum.com/static/images/image_320x480.jpg",
                "square" : "https://jsonipsum.com/static/images/image_480x480.jpg"
            };
        } else if (size === 'large'){
            img_urls = {
                "landscape" : "https://jsonipsum.com/static/images/image_1280x720.jpg",
                "portrait" : "https://jsonipsum.com/static/images/image_720x1280.jpg",
                "square" : "https://jsonipsum.com/static/images/image_1280x1280.jpg"
            };
        } else {
            img_urls = {
                "landscape" : "https://jsonipsum.com/static/images/image_960x640.jpg",
                "portrait" : "https://jsonipsum.com/static/images/image_640x960.jpg",
                "square" : "https://jsonipsum.com/static/images/image_960x960.jpg"
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
