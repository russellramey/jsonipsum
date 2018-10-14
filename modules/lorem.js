// Import LoremIpsum module
var loremIpsum = require('lorem-ipsum');

// Custom modules
module.exports = {

    // Generate Lorem Ipsum
    generate_lorem_ipusm : function generate_lorem_ipusm(style, length, count) {
        // Vars
        var text_length;
        var text = '';
        var html = 'plain';

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

};
