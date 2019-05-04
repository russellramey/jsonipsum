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
                case 'h2':
                case 'h3':
                case 'h4':
                    // Append string to html
                    html += '<' + tag + '>' + lorem.generate_lorem_ipusm('sentence', options, 1) + '</' + tag + '>';
                    break;

                case 'p':
                    // Append string to html
                    html += '<p>' + lorem.generate_lorem_ipusm('paragraph', options, 1) + '</p>';
                    break;

                case 'blockquote':
                    // Append string to html
                    html += '<blockquote>' + lorem.generate_lorem_ipusm('paragraph', options, 1) + '</blockquote>';
                    break;

                case 'ul':
                case 'ol':
                    // Append string to html
                    html += '<' + tag + '>' + this.generate_list_items(options) + '</' + tag + '>';
                    break;
            }

        } // end For

        // Set data.text object to the html value
        data.text = html;

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
