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
                        'body',
                        'author',
                        'date[past]',
                        'likes'
                    ];
                    break;

                // Comment
                case 'comment':
                    fields = [
                        'body[medium]',
                        'username',
                        'comments',
                        'date[past]'
                    ];
                    break;

                // Blog
                case 'blog':
                    fields = [
                        'title',
                        'excerpt',
                        'thumbnail',
                        'author',
                        'date[past]',
                        'taxonomy',
                        'comments'
                    ];
                    break;

                // Todo
                case 'todo':
                    fields = [
                        'title',
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
                        'date[past]',
                        'comments',
                        'likes'
                    ];
                    break;

            } // End Switch

        // Return correct FIELDS
        return fields;
    },

};
