LOREM IPSUM API

# Overview
REST api that returns JSON objects with randomly generated text (lorem ipsum), as well as placeholder data like names, emails, usernames to be used for development, testing, or placeholder purposes.

# Authentication
No authentication needed, simple http GET/POST Request is all that is required.

# Use cases
1) Developers can use the REST Api to pull in dummy content into their application, instead of hard coding everything
2) Designers can see what their elements look like with "real world" simulated content of variable length, style, and structure
3) Work with or test CRUD functionality without the need to set up a backend
3) Mimic real production data structures with dynamic, random, and variable content
3) Use for wireframes, prototypes, or mockups
4) Save the generated JSON locally as a static template, replacing placeholder data with actual data at a later date
5) Use as a dynamic data playground, experiment with api calls and JSON responses in new languages for learning or testing...
6) Simply generate lorem ipsum text programmatically using the basic text endpoints

# Features
- Easily generate complex JSON objects quickly, and with minimal effort
- GET/POST support
- Accepts/Returns JSON
- Randomly populate JSON object data with text, boolean, arrays, objects, dates, or any combination thereof
- Specific constructor values used to generate text/data
- Key/Value pairs will be returned back in response body, unless the value contains a constructor
- Several basic JSON template examples available to get started!

# Endpoints
/get/:format
    - word
    - sentence
    - paragraph
    - data

/post/:format
    - data

# Constructors
Constructors are custom string values, prefixed with '__'. The API will detect any constructor values and parse the constructor, returning the requested randomly generated text/data. Each constructor will support specific arguments that can be passed along along using parentheses: "__constructor(args)" .
__word
__phrase
__sentence
__paragraph
__alphanum
__number
__boolean
__date
__array
__object
__image
__video
__file
__coordinates
__address
__user
__template

# Params
Parameters are specific keys that can be passed to the API, these parameters only accept specific values as well.
_json
_template
    - user
    - post
    - blog
    - comment
    - todo
    - photo
_count
_length


# RESOURCES
Faker - https://github.com/marak/Faker.js/
Lorem - https://www.npmjs.com/package/lorem-ipsum
