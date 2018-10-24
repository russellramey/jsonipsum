// Import modules
var lorem = require('./lorem');
var faker = require('faker');

// Custom modules
module.exports = {

    // Render Text Fields funciton
    render_text_field : function render_text_field(fields, params, request) {

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

            // Save individual field to var
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
            // If data[key] doesn't already exist
            if (!data[field]){

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
                // CORDS
                if (['latlong', 'coordinates'].includes(field)){
                    data[field] = {
                        'latitude': faker.address.latitude(),
                        'longitude': faker.address.longitude()
                    }
                }
                // PHONE
                if (field === 'phone'){
                    data[field] = faker.phone.phoneNumber();
                }
                // JOB
                if (field === 'job'){
                    data[field] = faker.name.jobTitle();
                }
                // COMPANY
                if (field === 'company'){
                    data[field] = faker.company.companyName();
                }
                // PRICE
                if (field === 'price'){
                    data[field] = faker.finance.amount();
                }
                // COLOR
                if (field === 'color'){
                    data[field] = faker.commerce.color();
                }
                // IP
                if (field === 'ip'){
                    data[field] = faker.internet.ip();
                }
                // USER AGENT
                if (field === 'useragent'){
                    data[field] = faker.internet.userAgent();
                }
                // UID
                if (field === 'uuid'){
                    data[field] = faker.random.uuid();
                }
                // MAC ADDRESS
                if (field === 'mac'){
                    data[field] = faker.internet.mac();
                }
                // PASSWORD
                if (field === 'password'){
                    data[field] = faker.internet.password(14);
                }
                // HEADERS
                if (field === 'headers'){
                    data[field] = {
                        'Host': 'https://www.jsonipsum.com',
                        'Request URL': request.url,
                        'Request Method': 'GET',
                        'Status Code': 200,
                        'Remote Address': faker.internet.ip(),
                        'User-Agent': faker.internet.userAgent()
                    }
                }
                // TRANSACTION
                if (field === 'transaction'){
                    data[field] = {
                        'number': faker.finance.account(16),
                        'type': faker.finance.accountName(),
                        'amount': faker.finance.amount(200, 6000),
                        'transaction': faker.finance.transactionType(),
                        'confirmation': faker.internet.password(8)
                    }
                }
                // BANK CARD
                if(field === 'bankcard'){
                    data[field] = {
                        'number': faker.finance.account(16),
                        'expire': lorem.generate_date('future', faker),
                        'CCV': lorem.generate_random_int(200, 999)
                    }
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
                // IMAGE
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
                // AGE
                if (field === 'age'){
                    data[field] = lorem.generate_random_int(18, 50);
                }

            } // End if

        } // End for

        // Return final data
        return data;
    },

};
