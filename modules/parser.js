/*jshint esversion: 6*/

// Custom modules
module.exports = {
    // Parse constructor function
    parse: function(value){
        // Check for (options) passed
        let options = value.match(/\(([^(].+)\)/);

        // If [options] are found, process
        if (options) {
            // Remove [options] from field string
            value = value.replace(/\(([^(].+)\)/, "");
            // Get the [options]
            if(value === '__object'){
                args = options[1].split(/\,(?![^(]*\)|\_)/g);
            } else {
                args = options[1].split(/\,(.*)/);
            }
            // Rebuild arguemnts
            args = this.formatArgs(args);

        // Else, set [options] to null
        } else {
            args = '';
        }

        // Debug
        //console.log(args);
        //console.log(value + ": " + args);

        // Return evaluated function, if it exists
        return { func: value, args: args };
    },

    // Response
    response: function(data, args){
        // If no arguments
        if(!args){
            // Return
            return data;
        }
        // Return with arguments
        return data[args];
    },

    // Argsuments
    formatArgs: function (arr){
        // Empty array
        let args = [];
        // Skip tracker
        let skip = false;
        // For each item in passed array
        arr.forEach(function(value, index){
            // If value is not skipped
            if(!skip){
                // If value meets criteria
                if(value.includes('(') && !value.includes(')') && index <= arr.length-1){
                    // Reset value
                    value = value + ',' + arr[index+1];
                    // Push to array
                    args.push(value);
                    // Toggle skip for next index
                    skip = true;
                } else {
                    // Push to array
                    args.push(value);
                    // Toogle skip
                    skip = false;
                }
            } else {
                // Toggle skip
                skip = false;
            }
        });

        // Return formatted array
        return args;
    }
};
