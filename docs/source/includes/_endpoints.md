# Endpoints

## Word

```shell
GET "https://api.jsonipsum.com/text/word/"
```

> JSON response

```json
[
    {
        "id": 0,
        "text": "consectetur"
    }
]
```

Generate a random single word.

### HTTP Request

`GET https://api.jsonipsum.com/text/word/`

Parameter | Value | Description
--------- | ------- | -----------
[count](#count) | 1-100 | Set the number of words to be returned. <br>_Default: 1_

<aside class="notice">
Include parameters as query strings on the initial GET request url
</aside>


## Sentence

```shell
GET "https://api.jsonipsum.com/text/sentence/"
```

> JSON response

```json
[
    {
        "id": 0,
        "text": "Aliqua elit cillum ullamco dolor culpa quis qui sint Lorem eu dolor dolore magna quis aliquip in est consequat officia."
    }
]
```

Generate a random sentence or sentences.

### HTTP Request

`GET https://api.jsonipsum.com/text/sentence/`

Parameter | Value | Description
--------- | ------- | -----------
[length](#length) | small<br>medium<br>large | Determine the length of the sentence returned.<br>_Default: medium_
[count](#count) | 1-100 | Set the number of sentences to be returned. <br>_Default: 1_

<aside class="notice">
Include parameters as query strings on the initial GET request url
</aside>


## Paragraph

```shell
GET "https://api.jsonipsum.com/text/paragraph/"
```

> JSON response

```json
[
    {
        "id": 0,
        "text": "Cillum sunt exercitation reprehenderit aliqua laborum sit cupidatat amet minim ipsum quis amet Lorem. Adipisicing qui cillum incididunt reprehenderit in aute id culpa ipsum esse minim. Enim sit nostrud eiusmod ipsum amet labore commodo nisi sint aliqua aliquip dolor esse mollit. Velit et proident pariatur labore consectetur non exercitation magna deserunt excepteur dolor. Lorem consectetur quis id consectetur in reprehenderit incididunt culpa incididunt pariatur duis in et ullamco nulla id deserunt anim sunt. Et adipisicing ad ad quis dolore anim est culpa est fugiat voluptate deserunt cillum occaecat Lorem nostrud."
    }
]
```

Generate a random paragraph. With this endpoint multiple sentences will be returned instead of just a single sentence like with the [Sentence](#sentence) endpoint.

### HTTP Request

`GET https://api.jsonipsum.com/text/paragraph/`

Parameter | Value | Description
--------- | ------- | -----------
[length](#length) | small<br>medium<br>large | Determine the length of the sentence as well as the number of sentences in the paragraph. <br>_Default: medium_
[count](#count) | 1-100 | Set the number of paragraphs to be returned. <br>_Default: 1_

<aside class="notice">
Include parameters as query strings on the initial GET request url
</aside>


## Post

```shell
GET "https://api.jsonipsum.com/text/post/"
```

> JSON response

```json
[
    {
        "id": 0,
        "title": "Dolor fugiat anim ad velit nulla ullamco veniam minim incididunt aliquip qui in.",
        "body": "Nulla ullamco eiusmod aliqua veniam sint eiusmod exercitation commodo sunt adipisicing do. Non sunt proident consectetur elit ullamco minim ipsum proident ad consequat sunt labore. Duis ad dolor qui aute ea culpa occaecat nostrud excepteur eu voluptate id veniam dolor excepteur magna nostrud. Veniam irure dolore officia. Et et ipsum minim mollit adipisicing nulla sit.",
        "author": "Barrett Fahey",
        "date": {
            "string": "2008-11-2",
            "timestamp": 1225602000000
        },
        "likes": 39
    }
]
```

Returns a generic post template with title, body, author, date, and likes.

### HTTP Request

`GET https://api.jsonipsum.com/text/post/`

Parameter | Value | Description
--------- | ------- | -----------
[count](#count) | 1-100 | Set the number of items to be returned.<br>_Default: 1_

<aside class="notice">
Include parameters as query strings on the GET request url
</aside>


## Blog

```shell
GET "https://api.jsonipsum.com/text/blog/"
```

> JSON response

```json
[
    {
        "id": 0,
        "title": "Adipisicing cillum eiusmod quis.",
        "excerpt": "Occaecat cupidatat tempor irure occaecat veniam nulla voluptate sit est anim mollit. Tempor nulla sunt officia aute irure ex elit ut sint consectetur ut qui voluptate minim officia. Proident ad dolor elit magna magna culpa enim. Eiusmod ullamco sunt dolore irure sint. Esse proident officia tempor incididunt aute pariatur esse adipisicing et adipisicing id cupidatat occaecat. Est culpa ex ipsum tempor dolor occaecat incididunt aliquip reprehenderit occaecat incididunt velit consectetur. Consectetur id veniam. Dolore et labore anim enim amet sunt voluptate ad. Ad enim veniam. Deserunt et voluptate exercitation nostrud. Sunt id aute excepteur nostrud sint officia deserunt aliquip voluptate cupidatat magna anim anim magna.",
        "thumbnail": {
            "landscape": "https://jsonipsum.com/static/images/placeholder_960x640.jpg",
            "portrait": "https://jsonipsum.com/static/images/placeholder_640x960.jpg",
            "square": "https://jsonipsum.com/static/images/placeholder_960x960.jpg"
        },
        "author": "Chad Little",
        "date": {
            "string": "1990-12-28",
            "timestamp": 662342400000
        },
        "taxonomy": {
            "category": "cupidatat",
            "tags": "Pariatur,voluptate,eu,nulla,officia"
        },
        "comments": 94
    }
]
```

Returns a sample blog/article with title, excerpt, thumbnail, author, date, taxonomy, and comments.

### HTTP Request

`GET https://api.jsonipsum.com/text/blog/`

Parameter | Value | Description
--------- | ------- | -----------
[count](#count) | 1-100 | Set the number of items to be returned.<br>_Default: 1_

<aside class="notice">
Include parameters as query strings on the GET request url
</aside>


## Comment

```shell
GET "https://api.jsonipsum.com/text/comment/"
```

> JSON response

```json
[
    {
        "id": 0,
        "body": "Dolore incididunt cillum amet exercitation voluptate. Veniam consequat deserunt pariatur reprehenderit magna ullamco laboris ea. Fugiat aute incididunt sint exercitation et fugiat excepteur qui et. Nisi ipsum cillum ad consequat dolor occaecat. Veniam velit elit commodo est consectetur nostrud. Excepteur est incididunt id quis et anim nulla ullamco ex reprehenderit lorem.",
        "username": "vida2007",
        "comments": 10,
        "date": {
            "string": "2011-2-20",
            "timestamp": 1298181600000
        }
    }
]
```

Returns a generic comment template with title, body, username, date, and reply count.

### HTTP Request

`GET https://api.jsonipsum.com/text/comment/`

Parameter | Value | Description
--------- | ------- | -----------
[count](#count) | 1-100 | Set the number of items to be returned.<br>_Default: 1_

<aside class="notice">
Include parameters as query strings on the GET request url
</aside>


## Todo

```shell
GET "https://api.jsonipsum.com/text/todo/"
```

> JSON response

```json
[
    {
        "id": 0,
        "title": "Non voluptate reprehenderit sint veniam sit pariatur laborum.",
        "date": {
            "string": "2021-9-30",
            "timestamp": 1632978000000
        }
    }
]
```

Returns a sample todo template with title, and date.

### HTTP Request

`GET https://api.jsonipsum.com/text/todo/`

Parameter | Value | Description
--------- | ------- | -----------
[count](#count) | 1-100 | Set the number of items to be returned.<br>_Default: 1_

<aside class="notice">
Include parameters as query strings on the GET request url
</aside>



## Photo

```shell
GET "https://api.jsonipsum.com/text/photo/"
```

> JSON response

```json
[
    {
        "id": 0,
        "image": {
            "landscape": "https://jsonipsum.com/static/images/placeholder_960x640.jpg",
            "portrait": "https://jsonipsum.com/static/images/placeholder_640x960.jpg",
            "square": "https://jsonipsum.com/static/images/placeholder_960x960.jpg"
        },
        "title": "Enim est nostrud ex.",
        "username": "hector2004",
        "date": {
            "string": "2013-8-2",
            "timestamp": 1375419600000
        },
        "comments": 64,
        "likes": 63
    }
]
```

Returns a generic photo post with title, image, username, date, comments, and likes.

### HTTP Request

`GET https://api.jsonipsum.com/text/photo/`

Parameter | Value | Description
--------- | ------- | -----------
[count](#count) | 1-100 | Set the number of items to be returned.<br>_Default: 1_

<aside class="notice">
Include parameters as query strings on the GET request url
</aside>



## User

```shell
GET "https://api.jsonipsum.com/text/user/"
```

> JSON response

```json
[
    {
        "id": 0,
        "name": "Marion Armstrong",
        "email": "marion2006@jsonipsum.com",
        "username": "marion2006",
        "password": "7GLRJi2253ogKU",
        "address": {
            "street": "6874 Louie Field",
            "city": "Walshburgh",
            "postal": "76676",
            "province": "Alabama",
            "country": "Faroe Islands",
            "countrycode": "JP"
        }
    }
]
```

Returns a generic user profile with name, email, username, password, and address.

### HTTP Request

`GET https://api.jsonipsum.com/text/user/`

Parameter | Value | Description
--------- | ------- | -----------
[count](#count) | 1-100 | Set the number of items to be returned.<br>_Default: 1_

<aside class="notice">
Include parameters as query strings on the GET request url
</aside>




## Team

```shell
GET "https://api.jsonipsum.com/text/team/"
```

> JSON response

```json
[
    {
        "id": 0,
        "name": "Jermey Tillman",
        "email": "jermey1985@jsonipsum.com",
        "job": "Senior Web Orchestrator",
        "headshot": {
            "landscape": "https://jsonipsum.com/static/images/placeholder_960x640.jpg",
            "portrait": "https://jsonipsum.com/static/images/placeholder_640x960.jpg",
            "square": "https://jsonipsum.com/static/images/placeholder_960x960.jpg"
        }
    }
]
```

Returns a team/staff template with name, email, jot title, and headshot.

### HTTP Request

`GET https://api.jsonipsum.com/text/team/`

Parameter | Value | Description
--------- | ------- | -----------
[count](#count) | 1-100 | Set the number of items to be returned.<br>_Default: 1_

<aside class="notice">
Include parameters as query strings on the GET request url
</aside>




## Custom   

```shell
GET "https://api.jsonipsum.com/text/custom/"
```

> JSON response

```json
[
    {
        "id": 0,
        "text": "Ad occaecat amet nisi esse quis eiusmod eu do ut minim ex tempor non. Cillum sit Lorem qui nostrud amet exercitation esse est excepteur aliqua est esse reprehenderit occaecat elit amet magna eu. Eiusmod nulla dolor cupidatat ex proident adipisicing labore deserunt occaecat ullamco Lorem excepteur dolor elit non ea anim occaecat ut. Quis cillum pariatur eu ex id et quis nisi eiusmod occaecat ex adipisicing veniam duis consequat sunt. Do laborum nulla duis commodo sunt laborum adipisicing occaecat est ipsum deserunt ut Lorem culpa labore et exercitation esse laborum.",
        "title": "Commodo irure consectetur minim veniam aliquip veniam adipisicing mollit et et minim aliquip est aliqua."
    }
]
```

This endpoint returns a block of text and/or data. Can create a JSON object of repeatable text blocks where various types of data/text can be requested.

### HTTP Request

`GET https://api.jsonipsum.com/text/custom/`

Parameter | Value | Description
--------- | ------- | -----------
[count](#count) | 1-100 | Set the number of items to be returned.<br>_Default: 1_
[region](#regions) | [see all](#regions) | Set the region to localize the returned results.<br>_Default: en_
[fields](#fields) | [see all](#fields) | If true, returned text will be wrapped in p tags.<br>_Default: text, title_

<aside class="notice">
Include parameters as query strings on the GET request url
</aside>
<aside class="notice">
Fields parameter accepts multiple values separated by comma.
</aside>


## Html

```shell
GET "https://api.jsonipsum.com/text/html/"
```

> JSON response

```json
[
    {
        "id": 0,
        "text": "<p>Nisi ea elit ullamco consectetur cupidatat deserunt ad id voluptate nulla cillum irure tempor minim in et nulla. Adipisicing mollit labore ea adipisicing culpa laboris proident reprehenderit sint aliqua voluptate nulla. Anim magna labore esse enim sit incididunt dolore mollit ex veniam proident commodo mollit laboris laborum velit. Occaecat eu consequat nisi velit labore laborum ad nulla ea id tempor. Ad aliquip occaecat elit consectetur sit exercitation nulla excepteur ullamco magna reprehenderit excepteur culpa ea aute.</p><p>Sit ea aute mollit aliquip ut Lorem nisi minim aliquip in eiusmod minim ea. Aute enim amet elit in cupidatat adipisicing et aute minim culpa aliquip quis enim ex. Occaecat consequat nulla non id labore do laboris id ut velit culpa adipisicing duis id non proident. Mollit esse est cupidatat dolor laborum laboris excepteur proident officia qui aliqua voluptate consectetur consectetur veniam adipisicing consequat. Culpa est tempor pariatur cillum reprehenderit eu non culpa ad laboris tempor esse mollit. Do veniam quis anim ex nisi culpa in magna nulla pariatur Lorem occaecat irure qui. Sunt incididunt amet aliquip nisi nulla ullamco id commodo nisi irure laborum. Culpa non cillum eu ut adipisicing nostrud tempor aliqua cupidatat nostrud fugiat esse in anim nostrud ut est pariatur.</p><p>Incididunt voluptate nisi do enim magna consectetur ad labore labore consequat deserunt. Occaecat sunt cupidatat enim ipsum exercitation et enim quis commodo aute aliquip elit et sint voluptate irure minim ex eiusmod. Esse eu do non mollit officia voluptate dolor id laboris exercitation aliqua excepteur. Et nulla est quis culpa sint Lorem Lorem aliqua ut cupidatat aliquip. Sint amet id sint eu sunt pariatur culpa voluptate ullamco fugiat nulla dolore reprehenderit. Lorem ex velit nulla ad amet amet officia sunt pariatur fugiat Lorem. Ea elit non adipisicing et aliquip adipisicing est in incididunt aliqua enim voluptate laboris consequat irure exercitation do ex. Tempor dolor aliquip sunt culpa velit labore cupidatat quis laboris cupidatat adipisicing nulla.</p>"
    }
]
```


Generate HTML markup with lorem ipsum text. By default, returns a block item with three paragraphs of lorem ipsum text, wrapped in `p` tags.

### HTTP Request

`GET https://api.jsonipsum.com/text/html/`

Parameter | Value | Description
--------- | ------- | -----------
[count](#count) | 1-100 | Set the number of items to be returned.<br>_Default: 1_
[tags](#tags) | [see all](#tags) | Requests different type of HTML tags from the endpoint.<br>_Default: p_

<aside class="notice">
Pass parameters as simple query strings on the GET request url
</aside>
