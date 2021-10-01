/************************************
*
* Module export
*
************************************/
module.exports = {

    // Render Template Fields
    get_template_fields: function get_template_fields(format) {

            // Empty fields value
            let fields = null;

            // Switch case by FORMAT passed
            switch(format){

                // Post
                case 'post':
                    fields = {
                        title: '__sentence',
                        body: '__paragraph',
                        username: '__user(username)',
                        date: '__date(past)',
                        likes: '__number(1,100)'
                    };
                    break;

                // Comment
                case 'comment':
                    fields = {
                        body: '__paragraph',
                        username: '__user(username)',
                        replies: '__number(1,50)',
                        likes: '__number(1,100)',
                        date: '__date(past)'
                    };
                    break;

                // Blog
                case 'blog':
                    fields = {
                        title: '__phrase',
                        excerpt: '__paragraph',
                        thumbnail: '__image',
                        author: '__user',
                        date: '__date(past)',
                        comments: '__number(1,50)'
                    };
                    break;

                // Todo
                case 'todo':
                    fields = {
                        title: '__sentence',
                        date: '__date(past)',
                        complete: '__boolean'
                    };
                    break;

                // Team
                case 'team':
                    fields = {
                        contact: '__user',
                        job: '__phrase(short)',
                        company: '__word(2)',
                        headshot: '__image'
                    };
                    break;

                // Photo
                case 'photo':
                    fields = {
                        image: '__image',
                        title: '__phrase(short)',
                        caption: '__sentence(medium)',
                        username: '__user(username)',
                        date: '__date(past)',
                        comments: '__number',
                        likes: '__number'
                    };
                    break;

                // User
                case 'user':
                    fields = {
                        _user: '__user'
                    };
                    break;

            } // End Switch

        // Return correct FIELDS
        return fields;
    },

};
