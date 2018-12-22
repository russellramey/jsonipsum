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

        // Set FAKER region, EN_US default
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
            // If data[key] doesn't already exist, set it
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
                // PASSWORD
                if (field === 'password'){
                    data[field] = faker.internet.password(14);
                }

                // ADDRESS
                if (field === 'address'){

                    address = {
                        'street': faker.address.streetAddress(),
                        'city': faker.address.city(),
                        'postal': faker.address.zipCode(),
                        'province': faker.address.state(),
                        'country': faker.address.country(),
                        'country-code': faker.address.countryCode()
                    };

                    // Get Keys of Address Obj
                    $keys = Object.keys(address);

                    // Parse options, if option is a key
                    if ($keys.includes(options)){
                        data[options] = address[options];
                    } else {
                        data[field] = address;
                    }

                }
                // CORDS
                if (['latlong', 'coordinates', 'map'].includes(field)){
                    data[field] = {
                        'latitude': faker.address.latitude(),
                        'longitude': faker.address.longitude()
                    };
                }

                // PHONE
                if (field === 'phone'){
                    data[field] = faker.phone.phoneNumberFormat(0);
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

                // UID
                if (field === 'uuid'){
                    data[field] = faker.random.uuid();
                }
                // MAC ADDRESS
                if (field === 'mac'){
                    data[field] = faker.internet.mac();
                }

                // HEADERS
                if (field === 'headers'){
                    headers = {
                        'host': 'https://www.jsonipsum.com',
                        'request': request.url,
                        'method': 'GET',
                        'status': 200,
                        'ip': faker.internet.ip(),
                        'useragent': faker.internet.userAgent()
                    };

                    // Get Keys of Headers Obj
                    $keys = Object.keys(headers);

                    // Parse options, if option is a key
                    if ($keys.includes(options)){
                        data[options] = headers[options];
                    } else {
                        data[field] = headers;
                    }

                }

                // TRANSACTION
                if (field === 'transaction'){
                    transaction = {
                        'account': faker.finance.account(16),
                        'name': faker.finance.accountName(),
                        'amount': faker.finance.amount(200, 6000),
                        'type': faker.finance.transactionType(),
                        'confirmation': faker.internet.password(8)
                    };

                    // Get Keys of Transaction Obj
                    $keys = Object.keys(transaction);

                    // Parse options, if option is a key
                    if ($keys.includes(options)){
                        data[options] = transaction[options];
                    } else {
                        data[field] = transaction;
                    }

                }

                // BANK CARD
                if(field === 'bankcard'){
                    bankcard = {
                        'number': faker.finance.account(16),
                        'expire': lorem.generate_date('future', faker),
                        'ccv': lorem.generate_random_int(200, 999)
                    };

                    // Get Keys of BankCard Obj
                    $keys = Object.keys(bankcard);

                    // Parse options, if option is a key
                    if ($keys.includes(options)){
                        data[options] = bankcard[options];
                    } else {
                        data[field] = bankcard;
                    }
                }

                // TITLE, SUBTITLE
                if (['title', 'subtitle'].includes(field)){
                    data[field] = lorem.generate_lorem_ipusm('sentence', options, 1);
                }
                // TEXT, EXCERPT
                if (['text', 'excerpt', 'body', 'summary'].includes(field)){
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
                if (['image', 'avatar', 'thumbnail'].includes(field)){
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
                    data[field] = lorem.generate_random_int(1, 6);
                }
                // AGE
                if (field === 'age'){
                    data[field] = lorem.generate_random_int(18, 50);
                }

                // TAXONOMY
                if (field === 'taxonomy'){

                    // Generate sentence, remove period, and seperate each word with comma
                    var tags = lorem.generate_lorem_ipusm('sentence', 'short', 1).replace(".", "");
                        tags = tags.replace(/[ ]+/g, ",");

                    // Build taxonomy obj
                    taxonomy = {
                        'category': lorem.generate_lorem_ipusm('word', 'long', 1),
                        'tags': tags
                    };

                    // Get Keys of Taxonomy Obj
                    $keys = Object.keys(taxonomy);

                    // Parse options, if option is a key
                    if ($keys.includes(options)){
                        data[options] = taxonomy[options];
                    } else {
                        data[field] = taxonomy;
                    }
                }

            } // End if

        } // End for

        // Return final data
        return data;
    },

};
