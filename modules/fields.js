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
        if(fields.includes('name') || fields.includes('username') || fields.includes('email') || fields.includes('author')){
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

                // Switch case by field passed
                switch(field){
                    // Personal
                    case 'name':
                    case 'author':
                        data[field] = firstname + ' ' + lastname;
                        break;

                    case 'email':
                        data[field] = username + '@jsonipsum.com';
                        break;

                    case 'username':
                        data[field] = username;
                        break;

                    case 'password':
                        data[field] = faker.internet.password(14);
                        break;

                    case 'phone':
                        data[field] = faker.phone.phoneNumberFormat(0);
                        break;

                    case 'job':
                        data[field] = faker.name.jobTitle();
                        break;

                    case 'company':
                        data[field] = faker.company.companyName();
                        break;

                    // Location / Geography
                    case 'address':
                    case 'location':
                        address = {
                            'street': faker.address.streetAddress(),
                            'city': faker.address.city(),
                            'postal': faker.address.zipCode(),
                            'province': faker.address.state(),
                            'country': faker.address.country(),
                            'countrycode': faker.address.countryCode()
                        };

                        // Get Keys of Address Obj
                        $keys = Object.keys(address);

                        // Parse options, if option is a key
                        if ($keys.includes(options)){
                            data[options] = address[options];
                        } else {
                            data[field] = address;
                        }
                        break;

                    case 'latlong':
                    case 'coordinates':
                    case 'map':
                        data[field] = {
                            'latitude': faker.address.latitude(),
                            'longitude': faker.address.longitude()
                        };
                        break;

                    // Internet
                    case 'website':
                        data[field] = 'https://www.jsonipsum.com';
                        break;

                    case 'url':
                        data[field] = 'https://www.jsonipsum.com/api/v1/text/paragraph/';
                        break;

                    case 'uuid':
                        data[field] = faker.random.uuid();
                        break;

                    case 'mac':
                        data[field] = faker.internet.mac();
                        break;

                    case 'headers':
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
                        break;

                    // Banking / Finance
                    case 'transaction':
                        transaction = {
                            'account': faker.finance.account(16),
                            'name': faker.finance.accountName(),
                            'amount': faker.finance.amount(99, 9999, 2, ""),
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
                        break;

                    case 'bankcard':
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
                        break;

                    // Commerce
                    case 'price':
                        data[field] = faker.finance.amount();
                        break;

                    case 'product':
                        data[field] = {
                            'name': faker.commerce.productName(),
                            'type': faker.commerce.product(),
                            'department': faker.commerce.department(),
                            'material': faker.commerce.productMaterial(),
                            'color': faker.commerce.color(),
                            'price': faker.finance.amount(10,500,2,"")
                        };
                        break;

                    // Text / Copy
                    case 'title':
                    case 'subtitle':
                        data[field] = lorem.generate_lorem_ipusm('sentence', options, 1);
                        break;

                    case 'text':
                    case 'excerpt':
                    case 'body':
                    case 'summary':
                    case 'description':
                        data[field] = lorem.generate_lorem_ipusm('paragraph', options, 1);
                        break;

                    case 'bullets':
                    case 'list':
                    case 'features':
                        // Set empty array
                        data[field] = []
                        // Create 5 items in array
                        for(var i = 0; i < 4; i++){
                            data[field].push(lorem.generate_lorem_ipusm('sentence', options, 1));
                        }
                        break;

                    // Assets
                    case 'file':
                        data[field] = 'https://jsonipsum.com/static/files/file_placeholder.pdf';
                        break;

                    case 'image':
                    case 'avatar':
                    case 'thumbnail':
                    case 'headshot':
                        data[field] = lorem.generate_image_urls(options);
                        break;

                    case 'icon':
                        data[field] = 'https://jsonipsum.com/static/image/placeholder_icon.svg';
                        break;

                    case 'video':
                        data[field] = {
                            'id': 'xxxxxxxxxx',
                            'url': 'https://vimeo.com/video/xxxxxxxxxx',
                            'embed': 'https://play.vimeo.com/embed/xxxxxxxxxx'
                        };
                        break;

                    // Dates
                    case 'date':
                    case 'birthday':
                        data[field] = lorem.generate_date(options, faker);
                        break;

                    // Integers
                    case 'percent':
                    case 'progress':
                        data[field] = lorem.generate_random_int(1, 101);
                        break;

                    case 'rating':
                        data[field] = lorem.generate_random_int(1, 6);
                        break;

                    case 'age':
                        data[field] = lorem.generate_random_int(18, 50);
                        break;

                    case 'number':
                    case 'integer':
                        // Check for options (size)
                        if (options === 'small') {
                            range = [1, 99];
                        } else if (options === 'medium') {
                            range = [99, 499];
                        } else if (options === 'large'){
                            range = [499, 999];
                        } else {
                            range = [1, 999];
                        }

                        // Generat number
                        data[field] = lorem.generate_random_int(range[0], range[1]);
                        break;

                    // Meta
                    case 'taxonomy':
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
                        break;

                } // End Switch

            } // End if

        } // End for

        // Return final data
        return data;
    },

};
