// Import modules
var lorem = require('./lorem');
var getFields = require('./fields');
var getTemplate = require('./templates');
var getHtml = require('./html');

// Custom modules
module.exports = {

    // Get Format Funciton
    get_format : function get_format(format, params, request) {

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
                for (id = 0; id < count; id++){
                    // Build dataitem
                    dataitem = {
                        "id" : id,
                        "text" : lorem.generate_lorem_ipusm(format, length, 1),
                    };

                    // Push item to data array
                    data.push(dataitem);
                }
                break;

            // Prebuilt Templates
            case 'post':
            case 'user':
            case 'blog':

                // Get count, loop until max reached
                for (id = 0; id < count; id++){

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
                            'id': id,
                            'title' : lorem.generate_lorem_ipusm("sentence", 'medium', 1),
                            'text' : lorem.generate_lorem_ipusm("paragraph", 'rand', 1)
                        };
                    }

                    // Push item to data array
                    data.push(dataitem);
                }
                break;

            // HTML (?tags parameter to create custom markup)
            case 'html':
                // Get count, loop until max reached
                for (id = 0; id < count; id++){

                    // Build data item
                    dataitem = {
                        "id": id,
                    };

                    // Check for 'TAGS' params
                    if (params.tags){

                        // Split 'TAGS' param into individual strings
                        var tags = params.tags.split(',');

                        //Add all data to master Dict
                        Object.assign(dataitem, getHtml.render_html_element(tags, params, request));

                    } else {
                        // Return default HTML Text
                        dataitem = {
                            'id': id,
                            'text' : '<p>' + lorem.generate_lorem_ipusm('paragraph', 'rand', 1) + '</p>'
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
