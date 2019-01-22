# Parameters

List of all available parameter options the API supports.






## Length

```shell
GET "https://api.jsonipsum.com/text/sentence/?length=short"
```

> JSON Response

```json
[
    {
        "id": 0,
        "text": "Velit duis ad dolor ullamco velit."
    }
]
```

Set the length of the text returned for the specific endpoint.

### Supported Endpoints

<a href="#sentence">sentence</a> | <a href="#paragraph">paragraph</a>

### HTTP Request

`GET https://api.jsonipsum.com/text/sentence/?length=value`

Value | Description
--------- | -----------
short | Returns shorter text.
medium | Returns medium text. This is the Default value.
long | Returns longest text.





## Count

```shell
GET "https://api.jsonipsum.com/text/paragraph/?count=3"
```

> JSON Response

```json
[
    {
        "id": 0,
        "text": "Minim incididunt enim amet ad aute reprehenderit aliquip exercitation est ex nulla consequat dolore adipisicing exercitation ex exercitation tempor esse. Consequat elit magna aliqua est adipisicing incididunt ut fugiat qui et eiusmod. Magna mollit reprehenderit eu et adipisicing aliquip sint nostrud enim fugiat irure dolor irure reprehenderit exercitation reprehenderit eu cillum sunt. Deserunt minim velit proident aute excepteur sit minim ea aliquip eu tempor. Cupidatat quis mollit anim sit exercitation consectetur quis tempor mollit aliquip adipisicing. Dolor occaecat incididunt ex cillum minim excepteur Lorem tempor dolore labore duis incididunt ut laboris ipsum nulla mollit dolor.Ullamco exercitation sint velit velit reprehenderit duis Lorem fugiat amet magna veniam enim aute proident. Officia incididunt sint labore qui consequat ullamco consectetur amet ad dolore Lorem aliqua qui ut eu in ea exercitation. Enim est sit veniam mollit tempor cupidatat pariatur esse esse ipsum incididunt aute sunt dolor proident mollit et aliquip amet. Voluptate ad officia veniam sit consequat ut velit ullamco esse sit irure enim nulla reprehenderit magna culpa. Irure Lorem amet incididunt cupidatat ullamco nisi incididunt adipisicing dolor duis nisi nostrud eiusmod quis. Id irure id quis minim enim officia dolore ex culpa laborum eu non. Laboris deserunt deserunt voluptate quis eiusmod exercitation cupidatat excepteur et Lorem Lorem occaecat officia veniam mollit. Nostrud ea voluptate Lorem sint qui occaecat reprehenderit voluptate eiusmod eiusmod pariatur.Velit voluptate consequat sint adipisicing occaecat non qui occaecat labore sit labore. Laboris amet duis aliqua enim aute et commodo minim ut cillum magna minim irure. Voluptate culpa id ad adipisicing exercitation nisi velit reprehenderit laboris aute tempor ullamco tempor. Incididunt amet do ex magna laborum proident occaecat pariatur irure enim nulla amet fugiat aliquip consequat occaecat do. Nostrud eiusmod non nisi consectetur dolore in do in aliqua incididunt duis reprehenderit eu. Id est velit veniam irure consequat pariatur fugiat reprehenderit consectetur exercitation enim elit commodo eu elit adipisicing sit irure minim."
    }
]
```

Tell the API how many items to return. For <em>Sentences</em> and <em>Paragraphs</em> the <em>Count</em> parameter will return the items to the same object index, effectively just returning longer text blocks. For the <em>Block</em> endpoint, the <em>Count</em> parameter will return additional indexes to the final object.

### Supported Endpoints

<a href="#sentence">sentence</a> | <a href="#paragraph">paragraph</a> | <a href="#block">block</a>

### HTTP Request

`GET https://api.jsonipsum.com/text/paragraph/?count=3`

Value | Description
--------- | -----------
1-100 | Returns the requested number of items.




## Fields

```shell
GET "https://api.jsonipsum.com/text/block/?fields=thumbnail,title,excerpt"
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
GET "https://api.jsonipsum.com/text/block/?fields=thumbnail,title,excerpt&count=3"
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
GET "https://api.jsonipsum.com/text/block/?fields=name,date[future],title[short]"
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


List of available Field parameters you can pass to the Block endpoint. This allows you to return custom text/data blocks. Some fields accept options themselves by passing the option in brackets right after the Field parameter. Example below.

### Supported Endpoints

<a href="#block">block</a>

### HTTP Request

`GET https://api.jsonipsum.com/text/block/?fields=value[option]`

<aside class="notice">
You can combine multiple Fields by separating them with a comma.
</aside>


Value | Options | Type | Description
--------- | ------- | -------- | -----------
address | street<br>city<br>postal<br>province<br>country<br>countrycode | object | Traditional style shipping/billing address. Change format of address by also passing the <em>Region</em> parameter.<br><em>Default: all</em>
age | none | integer | Returns random age as an integer<br><em>Range between 18 - 50</em>
author | none | string |  Full fictional name, first and last.
avatar | small<br>medium<br>large | object | Returns three different versions of a static image (landscape, portrait, square) in size option provide.<br><em>Default: medium</em>
bankcard | number<br>expire<br>ccv | object | Returns randomly generated (fake) debit/credit card information.<br><em>Default: all</em>
birthday | past<br>today<br>future | object | Returns date in string and timestamp format. Random date if <em>Past</em>, or <em>Future</em> options are passed.<br><em>Default: today</em>
body | short<br>medium<br>long | string | Returns lorem ipsum paragraph.<br><em>Default: medium</em>
company | none | string | Returns fake company name.
coordinates | none | object | Random latitude and longitude map coordinates as key/value pairs.
date | past<br>today<br>future | object | Returns date in string and timestamp format. Random date if <em>Past</em>, or <em>Future</em> options are passed.<br><em>Default: today</em>
email | none | string | Random email address with alphanumeric email handle.<br><em>Format: abc123@jsonipsum.com</em>
excerpt | short<br>medium<br>long | string | Returns lorem ipsum paragraph.<br><em>Default: medium</em>
file | none | string | Returns valid url to a sample downloadable pdf file.
headers | host<br>request<br>method<br>status<br>ip<br>useragent | object | Basic sample HTTP information typically found in request headers.<br><em>Default: all</em>
icon | none | string | Returns valid url to sample placeholder svg/icon file.
image | small<br>medium<br>large | object | Returns three different versions of a static image (landscape, portrait, square) in size option provide.<br><em>Default: medium</em>
job | none | string | Returns random job title/position.
latlong | none | object | Random latitude and longitude map coordinates as key/value pairs.
mac | none | string | Returns randomly generated device MAC address.
map | none | object | Random latitude and longitude map coordinates as key/value pairs.
name | none | string | Full fictional name, first and last.
password | none | string | Returns random 16 character password.
percent | none | integer | Returns random integer between 1-100.
phone | none | string | Returns randomly generated phone number. Change format of phone number by also passing the <em>Region</em> parameter.
price | none | string | Returns randomly generated price amount with two decimal places.
product | name<br>type<br>department<br>material<br>color<br>color<br>price | object | Returns sample common product information.<br><em>Default: all</em>
progress | none | integer | Returns random integer between 1-100.
rating | none | integer | Returns random integer between 1-5.
subtitle | short<br>medium<br>long | string | Returns lorem ipsum sentence.<br><em>Default: medium</em>
summery | short<br>medium<br>long | string | Returns lorem ipsum paragraph.<br><em>Default: medium</em>
taxonomy | category<br>tags | object | Returns lorem ipsum words.<br><em>Default: all</em>
text | short<br>medium<br>long | string | Returns lorem ipsum paragraph.<br><em>Default: medium</em>
thumbnail | small<br>medium<br>large | object | Returns three different versions of a static image (landscape, portrait, square) in size option provide.<br><em>Default: medium</em>
title | short<br>medium<br>long | string | Returns lorem ipsum sentence.<br><em>Default: medium</em>
transaction | account<br>name<br>amount<br>type<br>confirmation | object | Randomly generated financial transaction information.<br><em>Default: all</em>
url | none | string | Valid static jsonispum.com sample url.
username | none | string | Returns random username based off a firstname and year.<br><em>Format: abcd1234</em>
uuid | none | string | Randomly generate universally unique identifier (uuid).
video | none | object | Sample playable and embedable video from jsonipsum.com hosted on Vimeo.
website | none | string | Returns static www.jsonipsum.com domain as a string.



## Elements

```shell

GET "https://api.jsonipsum.com/text/html/?elements=h1,h2[short],p[5]"

```

> The above request returns JSON structured like this:

```json
[
    {
        "id": 0,
        "text": "<h1>Et esse cupidatat nisi elit cillum consequat ad eiusmod ullamco consectetur esse.</h1><h2>Aliqua esse ea consectetur.</h2><p>Esse reprehenderit duis amet irure ea laborum occaecat enim sint Lorem ad nulla aliquip elit aliquip veniam. Reprehenderit cillum ipsum tempor id tempor consequat voluptate anim eiusmod do ea aliquip tempor incididunt. Sunt minim velit exercitation in ea nostrud reprehenderit cupidatat in magna reprehenderit velit est sit laborum dolore tempor. Ad ea in consequat ipsum quis duis labore est irure laborum velit ea anim sint incididunt Lorem et velit. Nisi laboris sunt cupidatat ea esse nostrud nisi veniam exercitation anim laboris amet. Consectetur elit reprehenderit nisi voluptate officia Lorem qui culpa consectetur do fugiat sint elit qui veniam in.</p><p>Sint aute irure ipsum aliqua amet ea ut nisi ut qui aliquip ea nulla veniam enim ex cupidatat. Voluptate sunt nulla eu officia consequat sit irure ea labore nulla reprehenderit ex duis. Ullamco Lorem velit nostrud aute et mollit tempor commodo magna reprehenderit deserunt sit laborum. Dolore deserunt aliquip aute dolore nostrud adipisicing eiusmod ut amet cillum nostrud dolore ad minim nostrud exercitation Lorem ex. Velit culpa fugiat ipsum officia consequat aliquip non sit nisi cillum dolor et dolor culpa eiusmod. Do cillum laborum culpa minim exercitation deserunt aute eu consectetur cupidatat eiusmod consequat occaecat id. Nostrud labore est laboris voluptate ipsum aliquip ad esse ullamco mollit pariatur qui eu pariatur nisi do.</p><p>Enim incididunt cillum laboris et dolor veniam incididunt tempor cupidatat qui nulla sit eiusmod cupidatat veniam. Do excepteur officia fugiat duis esse excepteur officia consectetur nulla sunt aliqua consequat deserunt. Minim sit aute non in occaecat proident culpa non et labore dolor. Fugiat aute exercitation irure qui esse nulla officia deserunt in adipisicing deserunt. Elit dolor aliqua sit exercitation fugiat nostrud enim et pariatur ea mollit. Laboris excepteur quis eu officia ipsum non reprehenderit sit commodo est et aliquip sint commodo sint mollit dolore aliquip aliquip. Duis cillum pariatur eiusmod voluptate ullamco in dolor non consequat commodo duis laboris. Veniam nostrud eiusmod velit fugiat et sunt adipisicing reprehenderit duis aliquip proident Lorem deserunt dolore consectetur culpa laboris exercitation.</p><p>Labore enim elit ullamco incididunt laborum id Lorem consequat esse culpa incididunt velit deserunt minim id. Dolor aute laborum sit deserunt magna anim cillum culpa amet in ullamco non. Cupidatat do nisi aute magna labore ut magna nisi do dolore elit amet et labore aliqua. Do labore nisi fugiat consequat laborum magna ex est labore laboris mollit Lorem in cupidatat nisi nisi consequat. Consectetur Lorem id magna quis occaecat duis pariatur tempor incididunt incididunt exercitation laborum dolor sunt aute fugiat ea.</p><p>Esse Lorem eu aliqua mollit non dolor anim occaecat nisi sunt ad do nulla est enim nulla exercitation tempor. Eu veniam sint enim ad voluptate labore do ullamco ipsum laboris dolor exercitation. Ut ut cillum proident laboris officia Lorem eu sint adipisicing cillum esse veniam anim adipisicing mollit. Commodo incididunt anim in anim eiusmod elit in mollit sint sit id. Sunt deserunt irure ex eiusmod ad tempor sint aute laboris amet dolor. Commodo ad amet eiusmod tempor magna irure non adipisicing magna duis ad labore Lorem id est tempor commodo consectetur.</p>"
    }
]
```

List of available Field parameters you can pass to the Block endpoint. This allows you to return custom text/data blocks. Some fields accept options themselves by passing the option in brackets right after the Field parameter.

### Supported Endpoints

<a href="#html">html</a>

### HTTP Request

`GET https://api.jsonipsum.com/text/html/?elements=value[option]`


Value | Options | Description
--------- | ----------- | -----------
h1 | short<br>medium<br>long | Sentence in `h1` tag.<br><em>Default: medium</em>
h2 | short<br>medium<br>long | Sentence in `h2` tag.<br><em>Default: medium</em>
h3 | short<br>medium<br>long | Sentence in `h3` tag.<br><em>Default: medium</em>
h4 | short<br>medium<br>long | Sentence in `h4` tag.<br><em>Default: medium</em>
p | 1-100 | Text in `p` tag.<br><em>Default: 1</em><br><em>Length parameter controls length of text returned</em>
blockquote | short<br>medium<br>long | Sentence in `blockquote` tag.<br><em>Default: medium</em>
ul | short<br>medium<br>long | Random count (3-8) of `li` items in a `ul` tag.<br><em>Default: medium</em>
ol | short<br>medium<br>long | Random count (3-8) of `li` items in a `ol` tag.<br><em>Default: medium</em>





## Regions

```shell
GET "https://api.jsonipsum.com/text/block/"
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

List of available Field parameters you can pass to the Block endpoint. This allows you to return custom text/data blocks. Some fields accept options themselves by passing the option in brackets right after the Field parameter.

### Supported Endpoints

<a href="#block">block</a>

### HTTP Request

`GET https://api.jsonipsum.com/text/block/?region=value`


Value | Description
--------- | -----------
en | Sets region to English.<br><em>Default</em>
