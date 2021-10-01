/*jshint esversion: 6*/
/************************************
*
* Dependencies
*
************************************/
const lorem = require('./lorem');
const templates = require('./templates');
const constructors = require('./constructors');

/************************************
*
* Module export
*
************************************/
module.exports = {

    // Get Format Funciton
    get_format: function get_format(format, params, request) {
        // Empty data array
        let data = [];
        // Allowed parameters
        let protected_params = ['_count', '_json', '_template', '_length'];

        // Parse Global Params
        // _length param
        if (params._length){
            length = params._length;
        } else {
            length = '';
        }
        // _count param
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
                            params = this.has_json(params);
                        }

                        // If template parameter is set
                        if(params._template){
                            params = this.has_template(params);
                        }

                        // For each parameter in params object
                        Object.entries(params).forEach((arr) => {
                            if(!protected_params.includes(arr[0])){
                                // If value is object
                                if(typeof arr[1] === 'object'){
                                    dataitem[arr[0]] = this.iterate_object(arr[1], request);
                                } else {
                                    dataitem[arr[0]] = this.process_params(arr, request);
                                }
                            }
                        });
                    }

                    // Push item to data array
                    data.push(dataitem);

                }
                break;

            // Default case
            default:
                data = {
                    "error": true,
                    "status" : 404,
                    "message" : "/" + format + " is not a valid endpoint"
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
    },

    // Has _template param
    has_template: function(params){
        try{
            // Append template parameters to params object
            params = Object.assign(templates.get_template_fields(params._template), params);
            // If user key exists
            if(params._user){
                // Delete user key
                delete params._user;
                // Append user object data to existing params data
                params = Object.assign(constructors.exec('__user'), params);
            }
        } catch (e){
            // If invalid template
            params = {
                error: true,
                key: '_template',
                message: 'Not a valid template value'
            };
        }

        // Return data
        return params;
    },

    // Has _json param
    has_json: function(params){
        try{
            // Append json parameters to params object
            params = Object.assign(JSON.parse(params._json), params);
        } catch (e){
            // If invalid json
            params = {
                error: true,
                key: '_json',
                message: 'JSON parameter must contain valid JSON data'
            };
        }

        // Return data
        return params;
    }
};
