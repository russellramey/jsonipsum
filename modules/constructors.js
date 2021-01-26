/*jshint esversion: 6*/

// Import modules
const faker = require('faker');
const lorem = require('./lorem');
const parser = require('./parser');
const templates = require('./templates');

// Custom modules
module.exports = {
    // Execute constructor function
    exec: function(value, request){
        // Parse supplied value
        let result = parser.parse(value);
        // Debug
        console.log(result);
        // If result function exits
        if(this[result.func]){
            // Return & exec function
            return this[result.func](result.args, request);
        }
        // Return default
        return {error: 'Not a valid constructor'};
    },

    // Word
    __word: function __word(args){
        return lorem.generate_lorem_ipusm("word", '', args[0]);
    },

    // Phrase
    __phrase: function __phrase(args){
        let phrase = lorem.generate_lorem_ipusm("sentence", 'short', 1);
        return phrase.replace(/\./g,'');
    },

    // Sentence
    __sentence: function __sentence(args){
        return lorem.generate_lorem_ipusm("sentence", args[0], 1);
    },

    // Paragraph
    __paragraph: function __paragraph(args){
        return lorem.generate_lorem_ipusm("paragraph", args[0], 1);
    },

    // String
    __alphanum: function(args){
        let string = '';
        let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for(let i=0; i < args[0]; i++){
            string += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return string;
    },

    // Number
    __number: function(args){
        return lorem.generate_random_int(args[0],args[1]);
    },

    // Boolean
    __boolean: function(args){
        return Math.random() < 0.6;
    },

    // Date
    __date: function(args){
        return lorem.generate_date(args[0], faker);
    },

    // Array
    __array: function(args){
        // Empty array placeholder
        let array = [];
        // For each item is argument[0]
        for(let i = 0; i < args[0]; i++){
            // If argument[1] is a constructor method
            if(args[1] && args[1].startsWith('__')){
                // Parse construtor value
                value = this.exec(args[1]);
            } else {
                // Default value
                value = args[1];
            }
            // Push value to array
            array.push(value);
        }
        // Return array
        return array;
    },

    // Object
    __object: function(args){
        // Build data item
        let obj = {};

        // console.log(args);
        Object.entries(args).forEach((arr) => {
            // Set key/value pair based on array value
            let pair = arr[1].replace(/['"]+/g, '').split(/\:(.*)/);
            //let pair = arr[1].split(/\:(.*)/);
            // If pair value is string and starts with __
            if(typeof pair[1] === 'string' && pair[1].startsWith('__')){
                // Try to parse as function
                pair[1] = this.exec(pair[1]);
            }
            // Set pair key and value for object
            obj[pair[0]] = pair[1];
        });

        // Return object
        return obj;
    },

    // Image
    __image: function(args){
        return lorem.generate_image_urls(args[0]);
    },

    // Video
    __video: function(args){
        return {
            id: 'xxxxxxxxxx',
            url: 'https://vimeo.com/video/xxxxxxxxxx',
            embed: 'https://play.vimeo.com/embed/xxxxxxxxxx',
            duration: this.exec('__number(30000,300000)')
        };
    },

    // File
    __file: function(args){
        // File object
        let file = {
            name: 'file_placeholder.pdf',
            link: 'https://jsonipsum.com/static/files/file_placeholder.pdf',
            mime_type: 'application/pdf',
            size: this.exec('__number(1000,5000)')
        };
        // Return response
        return parser.response(file, args);
    },

    // Coordinates
    __coordinates: function(args){
        // Return data
        return {
            'latitude': faker.address.latitude(),
            'longitude': faker.address.longitude()
        };
    },

    // Address
    __address: function(args){
        // Address object
        let address = {
            'street': faker.address.streetAddress(),
            'city': faker.address.city(),
            'postal': faker.address.zipCode(),
            'province': faker.address.state(),
            'country': faker.address.country(),
            'countrycode': faker.address.countryCode()
        };

        // Return response
        return parser.response(address, args);
    },

    // User
    __user: function(args){
        // Name object
        let name = {
            firstname: faker.name.firstName(),
            lastname: faker.name.lastName()
        };
        // Add full name
        name.fullname = name.firstname + ' ' + name.lastname;
        // Add username
        name.username = name.firstname.toLowerCase() + this.exec('__number(1980,2010)');

        // Create a new user
        let user = {
            name: {
                fullname: name.fullname,
                firstname: name.firstname,
                lastname: name.lastname
            },
            email: name.username + "@jsonipsum.com",
            username: name.username,
            address: this.exec('__address')
        };

        // Return response
        return parser.response(user, args);
    },

    // Template
    __template: function(args){
        // Set empty dataitem
        let template = {};
        // Get fields from template object
        let fields = templates.get_template_fields(args[0]);
        // If fields exist
        if(fields){
            // Parse fields
            Object.entries(fields).forEach((arr) => {
                template[arr[0]] = this.exec(arr[1]);
            });
        }
        // Return response
        return template;
    }
};
