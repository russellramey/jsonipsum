---
title: API Reference

language_tabs: # must be one of https://git.io/vQNgJ
  - Responses

toc_footers:

includes:
  - options
  - examples

search: true
---

# Introduction

Welcome to JSON:IPSUM, a REST API that returns randomly generated text (lorem ipsum) in JSON format, as well as fake application or website data like names, emails, usernames and passwords to be used for design, development, wireframing or placeholder purposes.

# Authentication

There is <b>no authentication required</b> to use this API, simply make GET requests in your language of choice to the endpoints listed in this documentation then parse the JSON data.

# Endpoints

## Sentence

```shell
GET "https://api.jsonipsum.com/text/sentence/"
```

> The above request returns JSON structured like this:

```json
[
    {
        "id": 0,
        "text": "Aliqua elit cillum ullamco dolor culpa quis qui sint Lorem eu dolor dolore magna quis aliquip in est consequat officia."
    }
]
```

This endpoint will generate a random sentence.

### HTTP Request

`GET https://api.jsonipsum.com/text/sentence/`

### Query Parameters

Parameter | Options | Description
--------- | ------- | -----------
length | small<br>medium<br>large | Determine the length of the sentence returned, each option will pass different min/max values. <br><em>Default: medium</em>
count | 1-100 | Set the number of sentences to be returned. <br><em>Default: 1</em>

<aside class="notice">
Pass parameters as simple query strings on the GET request url
</aside>


## Paragraph

```shell
GET "https://api.jsonipsum.com/text/paragraph/"
```

> The above request returns JSON structured like this:

```json
[
    {
        "id": 0,
        "text": "Cillum sunt exercitation reprehenderit aliqua laborum sit cupidatat amet minim ipsum quis amet Lorem. Adipisicing qui cillum incididunt reprehenderit in aute id culpa ipsum esse minim. Enim sit nostrud eiusmod ipsum amet labore commodo nisi sint aliqua aliquip dolor esse mollit. Velit et proident pariatur labore consectetur non exercitation magna deserunt excepteur dolor. Lorem consectetur quis id consectetur in reprehenderit incididunt culpa incididunt pariatur duis in et ullamco nulla id deserunt anim sunt. Et adipisicing ad ad quis dolore anim est culpa est fugiat voluptate deserunt cillum occaecat Lorem nostrud."
    }
]
```

This endpoint returns a random paragraph. Multiple sentences will be returned instead of just a single sentence.

### HTTP Request

`GET https://api.jsonipsum.com/text/paragraph/`

### Query Parameters

Parameter | Options | Description
--------- | ------- | -----------
length | small<br>medium<br>large | Determine the length of the sentence returned, each option will pass different min/max values.<br><em>Default: medium</em>
count | 1-100 | Set the number of paragraphs to be returned. <br><em>Default: 1</em>
html | true<br>false | If true, returned text will be wrapped in p tags. <br><em>Default: false</em>

<aside class="notice">
Pass parameters as simple query strings on the GET request url
</aside>

## Group

```shell
GET "https://api.jsonipsum.com/text/group/"
```

> The above request returns JSON structured like this:

```json
[
    {
        "id": 0,
        "text": "Ad occaecat amet nisi esse quis eiusmod eu do ut minim ex tempor non. Cillum sit Lorem qui nostrud amet exercitation esse est excepteur aliqua est esse reprehenderit occaecat elit amet magna eu. Eiusmod nulla dolor cupidatat ex proident adipisicing labore deserunt occaecat ullamco Lorem excepteur dolor elit non ea anim occaecat ut. Quis cillum pariatur eu ex id et quis nisi eiusmod occaecat ex adipisicing veniam duis consequat sunt. Do laborum nulla duis commodo sunt laborum adipisicing occaecat est ipsum deserunt ut Lorem culpa labore et exercitation esse laborum.",
        "title": "Commodo irure consectetur minim veniam aliquip veniam adipisicing mollit et et minim aliquip est aliqua."
    }
]
```

This endpoint returns a group of text and/or data. Can create a JSON object of repeatable text groups where various types of data/text can be requested.

### HTTP Request

`GET https://api.jsonipsum.com/text/group/`

### Query Parameters

Parameter | Options | Description
--------- | ------- | -----------
count | 1-100 | Set the number of items to be returned.<br> <em>Default: 1</em>
region | <a href="#fields">see all</a> | Set the region to localize the returned results.<br><em>Default: en</em>
fields | <a href="#fields">see all</a> | If true, returned text will be wrapped in p tags.<br><em>Default: false</em>

<aside class="notice">
Pass parameters as simple query strings on the GET request url
</aside>
