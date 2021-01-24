/*jshint esversion: 6*/

// Import modules
const lorem = require('./lorem');
const getFields = require('./fields');
const getTemplate = require('./templates');
const constructors = require('./constructors');

// Custom modules
module.exports = {

    // Get Format Funciton
    get_format: function get_format(format, params, request) {

        var data = [];

        // Parse Global Params
        // ?length
        if (params._length){
            length = params._length;
        } else {
            length = '';
        }
        // ?count
        if (params._count && params._count <= 100){
            count = params._count;
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
                    let fields = getTemplate.get_template_fields(format);

                    // If fields exists
                    if(fields){
                        Object.entries(fields).forEach((arr) => {
                            var request = request;
                            this.process_params(arr, request);
                        });
                    }

                    // Push item to data array
                    data.push(dataitem);
                }
                break;

            // Prebuild User Template
            case 'user':
                // Get count, loop until max reached
                for (id = 1; id <= count; id++){

                    // Build data item
                    let user = constructors.exec("__user");
                    let dataitem = Object.assign({id:id}, user);

                    // Push item to data array
                    data.push(dataitem);
                }
                break;

            // Custom data
            case 'data':
                // Get count, loop until max reached
                for (id = 1; id <= count; id++){

                    // Build data item
                    dataitem = {
                        "id": id,
                    };

                    // If params object exists
                    if(params){
                        Object.entries(params).forEach((arr) => {
                            var request = request;
                            this.process_params(arr, request);
                        });
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

    },

    // Process parameters as array (key/value pairs)
    process_params: function(arr, request){
        // If arr[1] as value is string and starts with "__"
        if(typeof arr[1] === 'string' && arr[1].startsWith('__')){
            // attempt to execute as constructor
            arr[1] = constructors.exec(arr[1], request);
        }
        // If arr[0] as key starts with "_"
        if(!arr[0].startsWith('_')){
            // Pass requested value back to dataitem
            dataitem[arr[0]] = arr[1];
        }
    }
};
