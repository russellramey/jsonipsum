/*jshint esversion: 6*/

// Import modules
const lorem = require('./lorem');
const getTemplate = require('./templates');
const constructors = require('./constructors');

// Custom modules
module.exports = {

    // Get Format Funciton
    get_format: function get_format(format, params, request) {
        // Empty data array
        let data = [];

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
            case 'user':

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
                        // For each parameter in params object
                        Object.entries(fields).forEach((arr) => {
                            var request = request;
                            if(arr[0] === '_user'){
                                dataitem = Object.assign(dataitem, this.process_params(arr, request));
                            } else {
                                dataitem[arr[0]] = this.process_params(arr, request);
                            }
                        });
                    }

                    // Push item to data array
                    data.push(dataitem);
                }
                break;

            // Custom data
            case 'data':
                // Get count, loop until max reached
                for (id = 1; id <= count; id++){

                    // Build data item
                    if(request.method === "POST"){
                        dataitem = {
                            "id": id + 100,
                        };
                    } else {
                        dataitem = {
                            "id": id,
                        };
                    }

                    // If params object exists
                    if(params){
                        // If json parameter is set
                        if(params._json){
                            try{
                                // Replace params object with json
                                params = Object.assign(JSON.parse(params._json), params);
                            } catch (e){
                                // If invalid json
                                params = {
                                    error: 'JSON parameter must contain valid JSON data',
                                };
                            }
                        }
                        // If json parameter is set
                        if(params._template){
                            try{
                                // Replace params object with json
                                params = Object.assign(getTemplate.get_template_fields(params._template), params);
                            } catch (e){
                                // If invalid json
                                params = {
                                    error: 'Not a valid template value',
                                };
                            }
                        }
                        // For each parameter in params object
                        Object.entries(params).forEach((arr) => {
                            // Request
                            var request = request;
                            // If value is object
                            if(typeof arr[1] === 'object'){
                                dataitem[arr[0]] = this.iterate_object(arr[1], request);
                            } else {
                                dataitem[arr[0]] = this.process_params(arr, request);
                            }
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
            arr[1] = arr[1];
        }
        // Return new value
        return arr[1];
    },

    // Iterate object recursivly
    iterate_object: function(obj, request) {
        // New object placeholder
        let object = {};

        // For each object key
        Object.keys(obj).forEach(key => {
            // Basic array
            arr = [key, obj[key]];

            // Set new object key to proccess params
            object[key] = this.process_params(arr, request);

            // If object key value is anohter object, repeat
            if (typeof obj[key] === 'object') {

                // Set new object key to iterate
                object[key] = this.iterate_object(obj[key]);
            }
        });

        // Return new object
        return object;
    }
};
