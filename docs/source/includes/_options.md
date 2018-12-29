# Options

List of available options for specific Parameters.

## Fields

```shell
GET "https://api.jsonipsum.com/text/group/?fields=fieldname"
```

> Address

```json
"address": {
    "street": "537 Dexter Lights",
    "city": "McDermottburgh",
    "postal": "45410-6384",
    "province": "Florida",
    "country": "Norway",
    "country-code": "TT"
}
```

> Age

```json
"age": 47
```

> Author

```json
"author": "Autumn Runolfsson"
```

> Avatar

```json
"avatar": {
    "landscape": "https://jsonipsum.com/static/images/image_960x640.jpg",
    "portrait": "https://jsonipsum.com/static/images/image_640x960.jpg",
    "square": "https://jsonipsum.com/static/images/image_960x960.jpg"
}
```

List of available Field parameters you can pass to the Group endpoint. This allows you to return custom text/data groups. Some fields accept options themselves by passing the option in brackets right after the Field parameter. Example below.

### HTTP Request

`GET https://api.jsonipsum.com/text/group/?fields=fieldname[option]`

<aside class="notice">
You can combine multiple Fields by separating them with a comma.
</aside>


Field | Options | Description
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
excerpt | short<br>medium<br>long | Returns lorem ipsum paragraph block.
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

### HTTP Request

`GET https://api.jsonipsum.com/text/group/?region=regioncode`


Region | Description
--------- | ------- | -----------
en | Default, sets region to USA - English.
