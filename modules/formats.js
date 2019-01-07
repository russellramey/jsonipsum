// Import modules
var lorem = require('./lorem');
var getFields = require('./fields');

// Custom modules
module.exports = {

    // Get Format Funciton
    get_format : function get_format(format, params, request) {

        var data = [];

        // Parse Params
        // ?length
        if (params.length){
            length = params.length;
        } else {
            length = '';
        }
        // ?count
        if (params.count){
            count = params.count;
        } else {
            count = 1;
        }
        // ?html
        if (params.html){
            html = params.html;
        } else {
            html = 'plain';
        }



        // Get FORMAT of 'sentence'
        if (format === 'sentence'){

            // Build dataitem
            dataitem = {
                "id" : 0,
                "text" : lorem.generate_lorem_ipusm("sentence", length, count, html),
            };

            data.push(dataitem);

        }
        // Get FORMAT of 'paragraph'
        else if (format === 'paragraph'){

            // Build dataitem
            dataitem = {
                "id" : 0,
                "text" : lorem.generate_lorem_ipusm("paragraph", length, count, html),
            };

            data.push(dataitem);

        }
        // Get FORMAT of 'group'
        else if (format === 'block'){

            // Get count, loop until max reached
            for (id = 0; id < count; id++){

                // Build data item
                dataitem = {
                    "id": id,
                };

                // Check for 'FIELD' params
                if (params.fields){

                    // Split 'FIELDS' param into individual strings
                    fields = params.fields.split(',');

                    //Add all data to master Dict
                    Object.assign(dataitem, getFields.render_text_field(fields, params, request));

                } else {
                    // Return default Text Group
                    dataitem = {
                        'id': 0,
                        'text' : lorem.generate_lorem_ipusm("paragraph", length, 1),
                        'title' : lorem.generate_lorem_ipusm("sentence", 'medium', 1),
                    };
                }

                // Push item to data array
                data.push(dataitem);
            }

        }
        // If invalid format
        else {
            data = { "error" : "problem returning data for /" + format };
        }

        // Return data
        return data;
    },

};
