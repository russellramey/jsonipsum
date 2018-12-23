LOREM IPSUM API

# Overview
REST Api that returns in json format, randomly generated text (lorem ipsum), as well as faker data like names, emails, usernames to be used for development or placeholder purposes.

# Authentication
No authentication needed, simple Http GET Request is all that is required

# Use cases
1) App Developers can use the REST Api to pull in dummy content into their application, instead of hard coding everything. This will allow for them to see randomly generated amounts of text and data to check layouts and functionality as if the end user was inputing their own content.
2) Web Developers can see what their elements look like with "real world" style content and not have to worry about copy/paste of varible length, or style of content.
3) Use for wireframes or mockups
4) Download the generated JSON as a template to replace with actual content for production, this would allow you to develop before final content, then just update the JSON file and not have to edit any markup...
5) Use as a dynamic data playground, maybe to expierement with api calls and json responses in new languages for learning or testing...

# Features
- REST API with GET request only
- Return JSON format
- API request endpoint will dynamically generate lorem ipsum or fake data and return in JSON format
- Create basic use case endpoint templates for quick reference, and widely used web elements
- Create customized endpoint template with requestable fields parameter
- Pass options to field parameter to vary data length and type
- Allow to specify how many items to return (/api/?template=blog&count=10)
- Type of content to include (text, image, pdf, zip, doc, csv, xls, video)

# Endpoints
/text
    - /sentence
        - ?length
        - ?count
    - /paragraph
        - ?length
        - ?count
        - ?html
    - /group
        - ?fields
            - [options]
        - ?count
        - ?template

# Fields
- title / subtitle
    [length]
        - short
        - medium
        - long
- text / excerpt / body / summary
    [length]
        - short
        - medium
        - long
- date / birthday
    [format]
        - past
        - future
        - default (today)
- image / avatar / thumbnail
    [size]
        - small
            - landscape
            - portrait
            - square
        - medium
            - landscape
            - portrait
            - square
        - large
            - landscape
            - portrait
            - square
- name
- job
- company
- username
- website
- age
- rating
- url
- phone
- email
- latlang / coordinates
- address / location
    - street
    - city
    - postal
    - province
    - country
- file / download
- percent / progress
- taxonomy
    - category
    - tags


# Params
- ?length
    - short
    - medium
    - long
- ?count
    - integer <= 100
- ?fields
    - {fields list}
- ?html
    - true
- ?template
    - {template type}


# Templates
blog, article, portfolio, press release, staff/team/bio, product, project, user, stats, download, report, whitepaper, case-study, etc...



# Examples
- Get single random paragraph
/api/v1/text/paragraph/

- Get 5 large paragraphs
/api/v1/text/paragraph/?size=large&count=5



# RESOURCES
Faker - https://github.com/marak/Faker.js/
Lorem - https://www.npmjs.com/package/lorem-ipsum
