# Options

List of all available parameter options the API supports.

## Fields

```shell
GET "https://api.jsonipsum.com/text/group/?fields=thumbnail,title,excerpt"
```

> The above request returns JSON structured like this:

```json
[
    {
        "id": 0,
        "thumbnail": {
            "landscape": "https://jsonipsum.com/static/images/image_960x640.jpg",
            "portrait": "https://jsonipsum.com/static/images/image_640x960.jpg",
            "square": "https://jsonipsum.com/static/images/image_960x960.jpg"
        },
        "title": "Exercitation mollit dolor sint anim reprehenderit sint veniam laborum eu aliquip nostrud tempor est.",
        "excerpt": "Ex amet cupidatat irure elit anim cillum commodo esse nulla mollit velit ea proident ut duis eiusmod veniam commodo. Ipsum aliquip esse eu laboris non minim eiusmod ut officia deserunt et. Cillum cillum eiusmod pariatur ad sunt mollit nulla qui in magna excepteur duis commodo ad adipisicing est esse id magna. Fugiat deserunt anim velit laborum mollit labore sunt deserunt occaecat sit aute tempor. Commodo irure cillum eiusmod eiusmod dolore cupidatat ullamco nostrud cillum elit magna minim."
    }
]
```

> Return multiple items in the JSON object by passing the Count parameter:

```shell
GET "https://api.jsonipsum.com/text/group/?fields=thumbnail,title,excerpt&count=3"
```

> JSON Response

```json
[
    {
        "id": 0,
        "thumbnail": {
            "landscape": "https://jsonipsum.com/static/images/image_960x640.jpg",
            "portrait": "https://jsonipsum.com/static/images/image_640x960.jpg",
            "square": "https://jsonipsum.com/static/images/image_960x960.jpg"
        },
        "title": "Esse minim fugiat pariatur sit deserunt non culpa ullamco nulla est qui.",
        "excerpt": "Velit sunt pariatur enim commodo laboris non dolor cupidatat proident aliquip laborum Lorem do ad laboris minim sunt sint nostrud. Elit aliquip ut et id incididunt sint reprehenderit ea magna laboris in anim adipisicing nisi minim consequat deserunt. Pariatur non anim minim fugiat elit eu proident nulla sint enim dolore qui mollit labore. Qui minim fugiat nisi irure adipisicing laboris qui anim voluptate tempor ullamco. Officia do anim pariatur sunt mollit eu duis aliqua nostrud quis non reprehenderit incididunt aliqua in."
    },
    {
        "id": 1,
        "thumbnail": {
            "landscape": "https://jsonipsum.com/static/images/image_960x640.jpg",
            "portrait": "https://jsonipsum.com/static/images/image_640x960.jpg",
            "square": "https://jsonipsum.com/static/images/image_960x960.jpg"
        },
        "title": "Exercitation in officia occaecat consectetur mollit nostrud dolore tempor aute velit in labore quis do.",
        "excerpt": "Sint qui amet fugiat ad consequat est labore velit tempor proident deserunt duis eu occaecat cillum commodo sunt nisi. Quis sunt occaecat quis reprehenderit reprehenderit eu minim consectetur cillum id ullamco. Cupidatat elit ipsum magna labore non nostrud laborum ad ea occaecat nisi do enim. Cupidatat Lorem et excepteur proident anim amet fugiat magna eu ad officia consequat duis laboris cillum sit labore excepteur. Non esse ut esse do est incididunt ad enim aliqua sint irure aute non quis incididunt."
    },
    {
        "id": 2,
        "thumbnail": {
            "landscape": "https://jsonipsum.com/static/images/image_960x640.jpg",
            "portrait": "https://jsonipsum.com/static/images/image_640x960.jpg",
            "square": "https://jsonipsum.com/static/images/image_960x960.jpg"
        },
        "title": "Consectetur consectetur magna nisi pariatur amet duis sunt aliquip culpa consequat minim ullamco ipsum est irure commodo voluptate cupidatat.",
        "excerpt": "Deserunt voluptate ex minim ipsum consequat enim quis occaecat occaecat quis mollit quis dolore ipsum. Incididunt nulla exercitation id cupidatat elit fugiat amet esse exercitation tempor quis cillum consequat quis. Elit velit proident aliquip magna deserunt fugiat amet eiusmod quis cillum adipisicing laborum labore esse eiusmod amet. Cupidatat nisi velit deserunt aliquip do ex irure nostrud cupidatat cillum cillum officia in id. Et dolore anim mollit exercitation commodo do sit consectetur aute ullamco nulla nulla dolore enim veniam sint. Amet eu consequat quis reprehenderit ipsum non sunt sit officia esse voluptate officia ad mollit velit aliqua proident magna elit."
    }
]
```

> Pass options to Field values that support them:

```shell
GET "https://api.jsonipsum.com/text/group/?fields=name,date[future],title[short]"
```

> JSON Response

```json
[
    {
        "id": 0,
        "name": "Rachelle Braun",
        "date": {
            "string": "2022-10-30",
            "timestamp": 1667088000000
        },
        "title": "Non culpa ex pariatur veniam ex."
    }
]
```


List of available Field parameters you can pass to the Group endpoint. This allows you to return custom text/data groups. Some fields accept options themselves by passing the option in brackets right after the Field parameter. Example below.

### Supported Endpoints

<a href="#group">group</a> | `https://api.jsonipsum.com/text/group/`

### HTTP Request

`GET https://api.jsonipsum.com/text/group/?fields=value[option]`

<aside class="notice">
You can combine multiple Fields by separating them with a comma.
</aside>


Value | Options | Description
--------- | ------- | -----------
address | none | Returns a complete randomly generated address.
age | none | Returns random age as an integer<br><em>Range between 18 - 50</em>
author | none | Returns random First and Last name.
avatar | small<br>medium<br>large | Returns three different versions of a static image.<br><em>Default: medium</em>
bankcard | none | Returns randomly generated (fake) debit/credit card information.
birthday | past<br>today<br>future | Returns random date in string and timestamp format.<br><em>Default: today</em>
body | short<br>medium<br>long | Returns lorem ipsum paragraph block.
company | none | Returns fake company name.
coordinates | none | Returns random latitude and longitude map coordinates.
date | past<br>today<br>future | Returns random date in string and timestamp format.<br><em>Default: today</em>
email | none | Returns random fake email address.
excerpt | short<br>medium<br>long | Returns lorem ipsum paragraph block.
file | none | Returns valid url to placeholder downloadable pdf file.
headers | none | Returns fake http request headers including IP, User-agent, Host, URI and Response Code.
icon | none | Returns valid url to placeholder svg/icon file.
image | small<br>medium<br>large | Returns three different versions of a static image.<br><em>Default: medium</em>
job | none | Returns random job title.
latlong | none | Returns random latitude and longitude map coordinates.
mac | none | Returns randomly generated (fake) device MAC address.
map | none | Returns random latitude and longitude map coordinates.
name | none | Returns random First and Last name.
password | none | Returns random 16 character password.
percent | none | Returns random integer between 1-100.
phone | none | Returns randomly generated phone number.
price | none | Returns randomly generated price amount with two decimal places.
product | none | Returns common product information like Name, Price, Type, Material, and Color.
progress | none | Returns random integer between 1-100.
rating | none | Returns random integer between 1-5.
subtitle | short<br>medium<br>long | Returns a lorem ipsum sentence block.
summery | short<br>medium<br>long | Returns lorem ipsum paragraph block.
taxonomy | none | Returns lorem ipsum words as fake category and tags.
text | short<br>medium<br>long | Returns lorem ipsum paragraph block.
thumbnail | small<br>medium<br>large | Returns three different versions of a static image.<br><em>Default: medium</em>
subtitle | short<br>medium<br>long | Returns a lorem ipsum sentence block.
transaction | none | Returns randomly generated (fake) financial transaction information.
url | none | Returns static Json:Ipsum URL.
username | none | Returns random fake username.
uuid | none | Returns random fake uuid information.
video | none | Returns placeholder video data including URL, Id, and Embed URL.
website | none | Returns static Json:Ipsum Website.


## Regions

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

List of available Field parameters you can pass to the Group endpoint. This allows you to return custom text/data groups. Some fields accept options themselves by passing the option in brackets right after the Field parameter. Example below.

### Supported Endpoints

<a href="#group">group</a> | `https://api.jsonipsum.com/text/group/`

### HTTP Request

`GET https://api.jsonipsum.com/text/group/?region=regioncode`


Region | Description
--------- | ------- | -----------
en | Default, sets region to USA - English.
