// Import modules
var lorem = require('./lorem');
var getFields = require('./fields');
var getTemplate = require('./templates');

// Custom modules
module.exports = {

    // Get Format Funciton
    get_format: function get_format(format, params, request) {

        var data = [];

        // Parse Global Params
        // ?length
        if (params.length){
            length = params.length;
        } else {
            length = '';
        }
        // ?count
        if (params.count && params.count <= 100){
            count = params.count;
        } else {
            count = 1;
        }

        // Get FORMAT and check case
        switch(format){

            // Word or Sentence or Paragraph
            case 'word':
            case 'sentence':
            case 'paragraph':
                // Get count, loop until max reached
                for (id = 1; id <= count; id++){
                    // Build dataitem
                    dataitem = lorem.generate_lorem_ipusm(format, length, 1);
                    // Push item to data array
                    data.push(dataitem);
                }
                break;

            // Prebuilt Templates
            case 'user':
            case 'team':
            case 'post':
            case 'blog':
            case 'comment':
            case 'todo':
            case 'photo':

                // Get count, loop until max reached
                for (id = 1; id <= count; id++){

                    // Build data item
                    dataitem = {
                        "id": id,
                    };

                    // Return template fields
                    fields = getTemplate.get_template_fields(format);

                    //Add all data to master Dict
                    Object.assign(dataitem, getFields.render_text_field(fields, params, request));

                    // Push item to data array
                    data.push(dataitem);
                }
                break;

            // Custom (?fields parameter to build custom object)
            case 'custom':
                // Get count, loop until max reached
                for (id = 1; id <= count; id++){

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
                            'id': id,
                            'title' : lorem.generate_lorem_ipusm("sentence", 'medium', 1),
                            'body' : lorem.generate_lorem_ipusm("paragraph", 'rand', 1)
                        };
                    }

                    // Push item to data array
                    data.push(dataitem);
                }
                break;

            // Default case
            default:
                data = data = {
                    "status" : 404,
                    "error" : "/" + format + " is not a valid endpoint"
                };
                break;

    }

    // Return all data
    return data;

    }
};
