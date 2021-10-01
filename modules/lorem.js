/************************************
*
* Dependencies
*
************************************/
var loremIpsum = require('lorem-ipsum');

/************************************
*
* Module export
*
************************************/
module.exports = {

    // Generate Lorem Ipsum
    generate_lorem_ipusm: function generate_lorem_ipusm(style, length, count) {
        // Vars
        var text = '';
        var options = '';

        // Valiate LENGTH param
        // Short
        if (length === 'short'){
            options = {
                s: [3,6], //3-6 words
                p: [3,6] //3-6 sentences
            };
        // Medium
        } else if (length === 'medium'){
            options = {
                s: [6,12], //6-12 words
                p: [5,8] //5-8 sentences
            };
        // Long
        } else if (length === 'long'){
            options = {
                s: [12,18], //12-18 words
                p: [7,12] //7-12 sentences
            };
        // Default (Random)
        } else {
            options = {
                s: [3,18], //4-24 words
                p: [3,12] //3-12 setences
            };
        }

        // Validate COUNT param
        if(!count || count > 100){
            count = 1;
        }

        // Construct text data
        text = loremIpsum({
            count: parseInt(count),
            units: style,
            format: 'plain',
            sentenceLowerBound: options.s[0],
            sentenceUpperBound: options.s[1],
            paragraphLowerBound: options.p[0],
            paragraphUpperBound: options.p[1],
        });

        // Return text
        return text;

    },

    // Generate date
    generate_date: function generate_date(options, faker) {
        // Get todays datetime
        var today = new Date();
        var date = '';

        // Check if options are passed
        // Random - date between 1980 - Present
        if (options === 'past'){
            date = faker.date.between((today.getFullYear() - 3), today);
        }
        // Future - return date in the future, based off current date
        else if (options === 'future'){
            date = faker.date.future(3);
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
    generate_image_urls: function generate_image_urls(size){
        var img_urls = '';

        // Small images
        if (size === 'small'){
            img_urls = {
                "landscape" : "https://via.placeholder.com/480x320",
                "portrait" : "https://via.placeholder.com/320x480",
                "square" : "https://via.placeholder.com/480x480"
            };
        } else if (size === 'large'){
            img_urls = {
                "landscape" : "https://via.placeholder.com/1280x720",
                "portrait" : "https://via.placeholder.com/720x1280",
                "square" : "https://via.placeholder.com/1280x1280"
            };
        } else {
            img_urls = {
                "landscape" : "https://via.placeholder.com/960x640",
                "portrait" : "https://via.placeholder.com/640x960",
                "square" : "https://via.placeholder.com/960x960"
            };
        }

        // Return image data
        return img_urls;
    },

    // Generate random intiger
    generate_random_int: function generate_random_int(min, max){
        if(min && max){
            min = Math.ceil(min);
            max = Math.floor(max);
        } else {
            min = 0;
            max = 100;
        }
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

};
