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
            region = 'en_US';
        }

        // Set FAKER region
        faker.locale = region;

        // Create persona (user)
        // We do this outside the main loop so the names data is consistant,
        // however we don't create the data unless it is needed
        if(fields.includes('name') || fields.includes('username') || fields.includes('email')){
            firstname = faker.name.firstName();
            lastname = faker.name.lastName();
            username = firstname.toLowerCase() + lorem.generate_random_int(1980, 2010);
        }

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


            // Process individual 'FIELDS'
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
            // ADDRESS
            if (field === 'address'){
                data[field] = {
                    'street' : faker.address.streetAddress(),
                    'city' : faker.address.city(),
                    'postal' : faker.address.zipCode(),
                    'province' : faker.address.state(),
                    'country' : faker.address.countryCode()
                };
            }
            // PHONE
            if (field === 'phone'){
                data[field] = faker.phone.phoneNumber();
            }
            // JOB
            if (field === 'job'){
                data[field] = faker.phone.jobTitle();
            }
            // COMPANY
            if (field === 'company'){
                data[field] = faker.phone.company.companyName();
            }

            // TITLE, SUBTITLE
            if (['title', 'subtitle'].includes(field)){
                data[field] = lorem.generate_lorem_ipusm('sentence', options, 1);
            }
            // TEXT, EXCERPT
            if (['text', 'excerpt'].includes(field)){
                data[field] = lorem.generate_lorem_ipusm('paragraph', options, 1);
            }
            // WEBSITE
            if (field === 'website'){
                data[field] = 'https://www.jsonipsum.com';
            }
            // URL
            if (field === 'url'){
                data[field] = 'https://www.jsonipsum.com/api/v1/text/paragraph/';
            }
            // FILE
            if (field === 'file'){
                data[field] = 'https://jsonipsum.com/static/files/file_placeholder.pdf';
            }
            // IAMGE
            if (field === 'image'){
                data[field] = lorem.generate_image_urls(options);
            }

            // DATE
            if (['date', 'birthday'].includes(field)){
                data[field] = lorem.generate_date(options, faker);
            }
            // PERCENT, PROGRESS
            if (['percent', 'progress'].includes(field)){
                data[field] = lorem.generate_random_int(1, 100);
            }
            // RATING
            if (field === 'rating'){
                data[field] = lorem.generate_random_int(1, 5);
            }

        }

        // Return final data
        return data;
    },

};
