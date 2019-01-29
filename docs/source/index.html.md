---
title: API Reference

language_tabs: # must be one of https://git.io/vQNgJ
  - Responses

toc_footers:

includes:
  - endpoints
  - parameters
  - examples

search: true
---

# Overview

Welcome to JSON:IPSUM, a REST API that returns randomly generated text (lorem ipsum) in JSON format, as well as fake application or website data like names, emails, usernames and passwords to be used for design, development, wireframing or placeholder purposes.

### Features

- REST API with GET request only
- Return JSON format
- API request endpoint will dynamically generate lorem ipsum or fake data and return in JSON format
- Create basic use case endpoint templates for quick reference, and widely used web elements
- Create customized endpoint template with requestable fields parameter
- Pass options to field parameter to vary data length and type
- Allow to specify how many items to return (/api/?template=blog&count=10)
- Type of content to include (text, image, pdf, zip, doc, csv, xls, video)

### Use Cases

Welcome to JSON:IPSUM, a REST API that returns randomly generated text (lorem ipsum) in JSON format, as well as fake application or website data like names, emails, usernames and passwords to be used for design, development, wireframing or placeholder purposes.

- App Developers can use the REST Api to pull in dummy content into their application, instead of hard coding everything. This will allow for them to see randomly generated amounts of text and data to check layouts and functionality as if the end user was inputing their own content.
- Web Developers can see what their elements look like with "real world" style content and not have to worry about copy/paste of varible length, or style of content.
- Use for wireframes or mockups
- Download the generated JSON as a template to replace with actual content for production, this would allow you to develop before final content, then just update the JSON file and not have to edit any markup...
- Use as a dynamic data playground, maybe to expierement with api calls and json responses in new languages for learning or testing...

# Authentication

There is <b>no authentication required</b> to use this API, simply make GET requests in your language of choice to the endpoints listed in this documentation then parse the response data.
