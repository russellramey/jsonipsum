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

                // Comment
                case 'comment':
                    fields = [
                        'body[rand]',
                        'username',
                        'date[past]'
                    ];
                    break;

                // Blog
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

                // Todo
                case 'todo':
                    fields = [
                        'title',
                        'body[short]',
                        'date[future]'
                    ];
                    break;

                // User
                case 'user':
                    fields = [
                        'name',
                        'email',
                        'username',
                        'password',
                        'address'
                    ];
                    break;

                // Team
                case 'team':
                    fields = [
                        'name',
                        'email',
                        'job',
                        'headshot'
                    ];
                    break;

                // Photo
                case 'photo':
                    fields = [
                        'image',
                        'title[short]',
                        'username',
                        'date[past]'
                    ];
                    break;

            } // End Switch

        // Return correct FIELDS
        return fields;
    },

};
