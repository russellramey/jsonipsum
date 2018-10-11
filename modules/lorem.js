// Import LoremIpsum module
var loremIpsum = require('lorem-ipsum') // lorem-ipsum

// Custom modules
module.exports = {
    text_format : function text_format(params) {
        args = {
            count: params['count'],                      // Number of words, sentences, or paragraphs to generate.
            units: 'paragraph',            // Generate words, sentences, or paragraphs.
            sentenceLowerBound: 22,         // Minimum words per sentence.
            sentenceUpperBound: 30,        // Maximum words per sentence.
            paragraphLowerBound: 2,        // Minimum sentences per paragraph.
            paragraphUpperBound: 12,        // Maximum sentences per paragraph.
            format: 'html',               // Plain text or html
        }
        data = {
            "text" : loremIpsum(args),
            "params" : params
        };
        return data;
    }
}
