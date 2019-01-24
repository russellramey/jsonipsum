// Import modules
var lorem = require('./lorem');

// Custom modules
module.exports = {

    // Render HTML Elements funciton
    render_html_element : function render_html_element(tags, params, request) {

        // Data obj
        var data = {};
        // Html var placeholder
        var html = '';

        // Loop thru all ELEMENTS
        for (var t in tags) {

            // Save individual ELEMENT to var
            var tag = tags[t];

            // Check for 'FIELD'[options]
            tag_options = tag.match(/\[([^)]+)\]/);

            // If [options] are found, process
            if (tag_options) {

                // Remove [options] from field string
                tag = tag.replace(/\[([^)]+)\]/, "");
                // Get the [options]
                options = tag_options[1];

            // Else, set [options] to null
            } else {
                options = '';
            }

            // Process ELEMENT parameters
            switch(tag){
                case 'h1':
                    // Append string to html
                    html += '<h1>' + lorem.generate_lorem_ipusm('sentence', options, 1) + '</h1>';
                    break;

                case 'h2':
                    // Append string to html
                    html += '<h2>' + lorem.generate_lorem_ipusm('sentence', options, 1) + '</h2>';
                    break;

                case 'h3':
                    // Append string to html
                    html += '<h3>' + lorem.generate_lorem_ipusm('sentence', options, 1) + '</h3>';
                    break;

                case 'h4':
                    // Append string to html
                    html += '<h4>' + lorem.generate_lorem_ipusm('sentence', options, 1) + '</h4>';
                    break;

                case 'p':
                    // Append string to html
                    html += lorem.generate_lorem_ipusm('paragraph', length, options, 'true');
                    break;

                case 'blockquote':
                    // Append string to html
                    html += '<blockquote>' + lorem.generate_lorem_ipusm('sentence', options, 1) + '</blockquote>';
                    break;

                case 'ul':
                    // Append string to html
                    html += '<ul>' + this.generate_list_items(options) + '</ul>';
                    break;

                case 'ol':
                    // Append string to html
                    html += '<ol>' + this.generate_list_items(options) + '</ol>';
                    break;
            }

        } // end For

        data['text'] = html;

        // Return final data
        return data;
    },

    // Generate List Items, used below
    generate_list_items: function generate_list_items(options){

        // Empty placeholder list
        var list = '';
        // Generate random # for count
        var count = Math.floor(Math.random() * 6) + 2;

        // Generate List elements, based on count
        for (var i = 0; i <= count; i++){
            list += '<li>' + lorem.generate_lorem_ipusm('sentence', options, 1) + '</li>';
        }

        // Return list items
        return list;
    }

};
