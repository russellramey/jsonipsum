// Import modules
var lorem = require('./lorem');
var faker = require('faker');

// Custom modules
module.exports = {

    // Render Text Fields funciton
    render_text_field : function render_text_field(fields, params) {

        // Data object
        var data = {};

        // Check params for region
        if (params.region){
            region = params.region;
        } else {
            region = 'en';
        }

        // Set FAKER region
        faker.local = region;

        // Persona
        firstname = faker.name.firstName();
        lastname = faker.name.lastName();
        username = firstname.toLowerCase() + this.get_random_int(1970, 2000);


        // Loop thru all fields
        for (var f in fields) {

            var field = fields[f];

            // Check for 'FIELD'[options]
            field_options = field.match(/\[([^)]+)\]/);

            // If [options] are found, process
            if (field_options) {

                // Remove [options] from field string
                field = field.replace(/\[([^)]+)\]/, "");
                // Get the [options]
                options = field_options[1];

            // Else, set [options] to null
            } else {
                options = '';
            }








            // NAME
            if (field === 'name'){
                data[field] = firstname + ' ' + lastname;
            }
            // EMAIL
            if (field === 'email'){
                data[field] = username + '@jsonipsum.com';
            }
            // USERNAME
            if (field === 'username'){
                data[field] = username;
            }

            // TITLE, SUBTITLE
            if (['title', 'subtitle'].includes(field)){
                data[field] = lorem.generate_lorem_ipusm('sentence', options, 1);
            }
            // TEXT, EXCERPT
            if (['text', 'excerpt'].includes(field)){
                data[field] = lorem.generate_lorem_ipusm('paragraph', options, 1);
            }


        }

        return data;
    },

    // Randon Int Generator
    get_random_int : function get_random_int(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    },

};
