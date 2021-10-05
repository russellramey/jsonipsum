# JSON:IPSUM
Official documentation: [https://docs.jsonipsum.com](https://docs.jsonipsum.com)

## Overview
REST api that returns JSON objects with randomly generated text (lorem ipsum), as well as placeholder data like names, emails, usernames to be used for development, testing, or placeholder purposes.

## Features
- Language, library, and framework agnostic api.
- GET/POST request support, returns JSON response.
- Supports multiple endpoints and parameters.
- Specific constructor values are used to generate text/data.
- Quick response times.
- Easy to use, no authentication needed.
- Randomly populate JSON object data with text, booleans, arrays, objects, dates, etc...
- Generate lorem ipsum and placeholder data with minimal effort.
- Several basic JSON template objects available.

## Use Cases
- Quickly populate wireframes or working mockups with text or data.
- Experiment with JSON data structures and REST API responses.
- Test or debug front-end CRUD functionality without the need to setup a backend.
- Simulate "real word" content from users, a CMS, or production backend.
- Seed a database with placeholder data for development and testing.
- Create simple proof of concept interactions or requests.
- Randomly generate data objects quickly for automated testing.
- Simply generate lorem ipsum text programmatically.

## Endpoints
Read more about available endpoints in the docs: [https://docs.jsonipsum.com](https://docs.jsonipsum.com).
- https://api.jsonipsum.com/get/word
- https://api.jsonipsum.com/get/sentence
- https://api.jsonipsum.com/get/paragraph
- https://api.jsonipsum.com/get/data
- https://api.jsonipsum.com/post/data


## Constructors
Constructors are custom string values, prefixed with '__'. The API will detect any constructor values and parse the constructor, returning the requested randomly generated text/data. Each constructor will support specific arguments that can be passed along along using parentheses: "__constructor(args)". Read more about constructors in the docs: [https://docs.jsonipsum.com](https://docs.jsonipsum.com).
- __word
- __phrase
- __sentence
- __paragraph
- __alphanum
- __number
- __boolean
- __date
- __array
- __object
- __image
- __video
- __file
- __coordinates
- __address
- __user
- __template

## Params
Parameters are specific keys that can be passed to the API, these parameters only accept specific values as well. Read more about parameters in the docs: [https://docs.jsonipsum.com](https://docs.jsonipsum.com).
- _json
- _template
    - user
    - post
    - blog
    - comment
    - todo
    - photo
- _count
- _length


## Resources
- Faker - https://github.com/marak/Faker.js/
- Lorem - https://www.npmjs.com/package/lorem-ipsum
