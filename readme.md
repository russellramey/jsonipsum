LOREM IPSUM API

# Overview
REST Api, json format, that provides structured placeholder data for website / application development.

# Use cases
1) Developers can use the REST Api to pull in dummy content into their application, instead of hard coding everything. This will allow for them to see randomly generated amounts of text and images to check layouts and functionality as if the end user was inputing their own content.
2) Developer can see what their app looks like with "real world" style content and not have to worry about copy/paste of varible length, or style of content.
3) Use for wireframes or mockups
4) Download the generated JSON as a template to replace with actual content for produciton, this would allow you to develop before final content, then just update the JSON file and not have to edit any markup...
5) Use to expierment with api calls in new languages for learning or testing...
6) Use as a dynamic data playground

# Features
- REST API with GET request only
- Return JSON format
- Require key (annoyomous, just generate via website)
- API request endpoint will dynamically generate lorem ipsum in JSON format
- Create basic use case endpoint templates
  (blog, article, portfolio, press release, staff/team/bio, product, project, user, stats, download, report, whitepaper, case-study, etc...)
- Create customized endpoint template with requestable fields
  example: /api/?template=custom&fields=id,title,date,content (id, title, subtitle, date, taxonomy, content, link, summery/excerpt, image, video, etc...)
- Allow to specify how many items to return (/api/?template=blog&show=10)
- Varying content in grouped items
  Generate different lorem ipsum for each item in a group request to vary content/title/meta information and length
- Combine endpoints to return data in single JSON response
  example: /api/?template=blog,user,product&show=5,2,10
- Type of content to include (text, image, pdf, zip, doc, csv, xls, video)


# data
- word - done
- phrase - done
- paragraph - done


# Fields
- title
    [length]
        - short
        - long
- subtitle
    [length]
        - short
        - long
- excerpt
    [length]
        - short
        - long
- text
    [length]
        - short
        - medium
        - long
- content
- date
    [format]
        - timestamp
        - string
- image
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
- birthday
- percent
- rating
- url
- phone
- email
- address
    - street
    - city
    - postal
    - province
    - country
- file
-









# Endpoints
/text
    - /phrase
        - ?length
        - ?count
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
    - /template
        - ?type
        - ?count






# Params
- ?length
    - short
    - medium
    - long
- ?count
    - integer <= 25
- ?fields
    - {fields}
- ?html
    - true
- ?type
    - {template types TBD}



# Templates




# Examples
- Get single random paragraph
/api/v1/text/paragraph/

- Get 5 large paragraphs
/api/v1/text/paragraph/?size=large&count=5



# RESOURCES
Faker - https://github.com/marak/Faker.js/
Lorem - https://www.npmjs.com/package/lorem-ipsum
