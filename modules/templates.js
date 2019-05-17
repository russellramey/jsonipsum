// Custom modules
module.exports = {

    // Render Template Fields
    get_template_fields : function get_template_fields(format) {

            // Switch case by FORMAT passed
            switch(format){

                // Post
                case 'post':
                    fields = [
                        'title',
                        'excerpt[rand]',
                        'author',
                        'date[past]'
                    ];
                    break;

                // User
                case 'blog':
                    fields = [
                        'title',
                        'excerpt[rand]',
                        'thumbnail',
                        'author',
                        'date[past]',
                        'taxonomy',
                        'comments',
                    ];
                    break;

                // User
                case 'user':
                    fields = [
                        'name',
                        'email',
                        'username',
                        'password'
                    ];
                    break;

            } // End Switch

        // Return correct FIELDS
        return fields;
    },

};
