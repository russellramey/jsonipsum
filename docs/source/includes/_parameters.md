# Parameters

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

<a href="#sentence">sentence</a> | <a href="#paragraph">paragraph</a> | <a href="#html">html</a>

### HTTP Request

`GET https://api.jsonipsum.com/text/sentence/?length=value`

Value | Description
--------- | -----------
short | Returns shorter length text <br><em>4-8 word sentences, 3-6 sentences in a paragraph</em>.
medium | Returns medium length text. <br><em>8-16 word sentences, 5-8 sentences in a paragraph</em>
long | Returns longer length text. <br><em>16-24 word sentences, 7-12 sentences in a paragraph</em>





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

```shell
GET "https://api.jsonipsum.com/text/block/?count=3"
```

> JSON response

```json
[
    {
        "id": 0,
        "text": "Enim amet adipisicing irure et aliquip labore occaecat laborum commodo consectetur adipisicing sint. Amet laboris aliqua commodo labore irure dolore mollit fugiat et. Eiusmod ut ullamco proident laboris eu veniam Lorem culpa ad reprehenderit laborum. Cillum id aute ipsum reprehenderit proident consequat culpa nisi tempor consectetur adipisicing elit minim. Sint ad amet velit tempor ullamco consectetur non veniam quis reprehenderit elit veniam voluptate ad sunt. Aliquip incididunt enim amet deserunt dolore irure velit in in do nulla sint culpa officia.",
        "title": "Dolor non est dolore voluptate irure et eu deserunt magna aliqua."
    },
    {
        "id": 1,
        "text": "Laborum ex nostrud veniam exercitation laboris ipsum non dolore. Cupidatat tempor eiusmod sunt ut eiusmod et laboris commodo veniam pariatur qui irure ut nostrud duis. Magna irure laborum dolore non proident exercitation et ipsum commodo labore qui occaecat quis labore laborum. Pariatur enim est culpa qui velit sit id Lorem reprehenderit ullamco veniam ullamco laboris nisi. Sunt minim nulla incididunt commodo culpa aute id veniam occaecat tempor nisi nostrud mollit minim. Excepteur nulla anim amet esse reprehenderit est aute. Non aliqua adipisicing nulla nisi esse exercitation consequat do nostrud proident qui quis nisi consectetur cillum.",
        "title": "Excepteur eiusmod sunt dolor laboris quis adipisicing eu."
    },
    {
        "id": 2,
        "text": "Labore culpa mollit minim cillum incididunt esse anim eiusmod cupidatat dolor dolore. Lorem elit sunt laborum deserunt id ullamco eiusmod culpa deserunt dolore officia ut est id qui. Et irure mollit sunt sint id consequat id. Nulla consequat proident aliqua consequat do amet fugiat id veniam exercitation aute pariatur. Ipsum sit enim eiusmod ex Lorem labore ea Lorem eu sit Lorem sint. Sint Lorem est culpa pariatur ipsum magna eiusmod aute.",
        "title": "Pariatur deserunt officia do sint do enim ea ut et incididunt laborum culpa quis."
    }
]
```

Determine the number of items to return for a given endpoint.

### Supported Endpoints

<a href="#sentence">sentence</a> | <a href="#paragraph">paragraph</a> | <a href="#block">block</a> | <a href="#html">html</a>

### HTTP Request

`GET https://api.jsonipsum.com/text/paragraph/?count=3`

Value | Description
--------- | -----------
1-100 | Returns the requested number of items.

<aside class="notice">
For <em>Sentence</em> and <em>Paragraph</em> endpoints the <em>Count</em> parameter will add to the same object index, effectively just returning longer and longer text strings. For the <em>Block</em> and <em>HTML</em> endpoints, it will return additional indexes to the final object.
</aside>




## Fields

```shell
GET "https://api.jsonipsum.com/text/block/?fields=thumbnail,title,excerpt"
```

> JSON response

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

```shell
GET "https://api.jsonipsum.com/text/block/?fields=thumbnail[small],title[short],excerpt[long]"
```

> JSON response

```json
[
    {
        "id": 0,
        "thumbnail": {
            "landscape": "https://jsonipsum.com/static/images/placeholder_480x320.jpg",
            "portrait": "https://jsonipsum.com/static/images/placeholder_320x480.jpg",
            "square": "https://jsonipsum.com/static/images/placeholder_480x480.jpg"
        },
        "title": "Labore ad enim aliqua irure velit aliqua.",
        "excerpt": "Fugiat elit et sunt cillum culpa nisi nostrud laboris eiusmod ex proident ullamco enim do nulla. Amet laborum aliqua est cillum ad incididunt do nulla consectetur Lorem veniam consectetur incididunt voluptate pariatur. Sint nulla esse ipsum anim quis adipisicing occaecat deserunt labore aliquip deserunt fugiat est do eiusmod labore reprehenderit reprehenderit aute occaecat aliquip anim ex. Et ut occaecat voluptate sint Lorem reprehenderit incididunt ad id ut duis et irure consequat in anim mollit voluptate sint voluptate. Do consectetur mollit quis enim nostrud commodo culpa commodo pariatur nostrud in nisi officia nostrud non minim aliqua cillum ea. Occaecat in occaecat fugiat irure est cupidatat sit do ut aliqua dolor reprehenderit sunt aliquip ullamco excepteur ad occaecat eiusmod tempor Lorem fugiat. Et tempor dolor ut non quis sint esse dolore ad officia officia elit ad dolore laborum velit labore consequat laborum eu non."
    }
]
```


Available values for the <em>Field</em> parameter. Create custom data structures by passing different <em>Field</em> values and value options.

### Supported Endpoints

<a href="#block">block</a>

### HTTP Request

`GET https://api.jsonipsum.com/text/block/?fields=value[option]`


Value | Options | Type | Description
--------- | ------- | -------- | -----------
address | street<br>city<br>postal<br>province<br>country<br>countrycode | object | Traditional style shipping/billing address. Change format of address by also passing the <em>Region</em> parameter.<br><em>Default: all</em>
age | none | integer | Returns random number as an integer<br><em>Range between 18 - 50</em>
author | none | string |  Full fictional name, first and last.
avatar | small<br>medium<br>large | object | Returns three different versions of a static image (landscape, portrait, square) in size option provide.<br><em>Default: medium</em>
bankcard | number<br>expire<br>ccv | object | Returns randomly generated (fake) debit/credit card information.<br><em>Default: all</em>
birthday | past<br>today<br>future | object | Returns date in string and timestamp format. Random date if <em>Past</em>, or <em>Future</em> options are passed.<br><em>Default: today</em>
body | short<br>medium<br>long | string | Returns lorem ipsum paragraph.<br><em>Default: medium</em>
bullets | short<br>medium<br>long | array | Returns lorem ipsum sentences as an array.<br><em>Default: medium</em>
company | none | string | Returns fake company name.
coordinates | none | object | Random latitude and longitude map coordinates as key/value pairs.
date | past<br>today<br>future | object | Returns date in string and timestamp format. Random date if <em>Past</em>, or <em>Future</em> options are passed.<br><em>Default: today</em>
description | short<br>medium<br>long | string | Returns lorem ipsum paragraph.<br><em>Default: medium</em>
email | none | string | Random email address with alphanumeric email handle.<br><em>Format: abc123@jsonipsum.com</em>
excerpt | short<br>medium<br>long | string | Returns lorem ipsum paragraph.<br><em>Default: medium</em>
features | short<br>medium<br>long | array | Returns lorem ipsum sentences as an array.<br><em>Default: medium</em>
file | none | string | Returns valid url to a sample downloadable pdf file.
headers | host<br>request<br>method<br>status<br>ip<br>useragent | object | Basic sample HTTP information typically found in request headers.<br><em>Default: all</em>
headshot | small<br>medium<br>large | object | Returns three different versions of a static image (landscape, portrait, square) in size option provide.<br><em>Default: medium</em>
icon | none | string | Returns valid url to sample placeholder svg/icon file.
image | small<br>medium<br>large | object | Returns three different versions of a static image (landscape, portrait, square) in size option provide.<br><em>Default: medium</em>
job | none | string | Returns random job title/position.
latlong | none | object | Random latitude and longitude map coordinates as key/value pairs.
list | short<br>medium<br>long | array | Returns lorem ipsum sentences as an array.<br><em>Default: medium</em>
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

<aside class="notice">
You can combine multiple <em>Field</em> values by separating them with a comma.
</aside>
<aside class="notice">
Pass options by appending the available option, within square brackets, to the <em>Field</em> value.
</aside>


## Tags

```shell

GET "https://api.jsonipsum.com/text/html/?tags=h1,h2[short],p[5]"

```

> JSON response

```json
[
    {
        "id": 0,
        "text": "<h1>Et esse cupidatat nisi elit cillum consequat ad eiusmod ullamco consectetur esse.</h1><h2>Aliqua esse ea consectetur.</h2><p>Esse reprehenderit duis amet irure ea laborum occaecat enim sint Lorem ad nulla aliquip elit aliquip veniam. Reprehenderit cillum ipsum tempor id tempor consequat voluptate anim eiusmod do ea aliquip tempor incididunt. Sunt minim velit exercitation in ea nostrud reprehenderit cupidatat in magna reprehenderit velit est sit laborum dolore tempor. Ad ea in consequat ipsum quis duis labore est irure laborum velit ea anim sint incididunt Lorem et velit. Nisi laboris sunt cupidatat ea esse nostrud nisi veniam exercitation anim laboris amet. Consectetur elit reprehenderit nisi voluptate officia Lorem qui culpa consectetur do fugiat sint elit qui veniam in.</p><p>Sint aute irure ipsum aliqua amet ea ut nisi ut qui aliquip ea nulla veniam enim ex cupidatat. Voluptate sunt nulla eu officia consequat sit irure ea labore nulla reprehenderit ex duis. Ullamco Lorem velit nostrud aute et mollit tempor commodo magna reprehenderit deserunt sit laborum. Dolore deserunt aliquip aute dolore nostrud adipisicing eiusmod ut amet cillum nostrud dolore ad minim nostrud exercitation Lorem ex. Velit culpa fugiat ipsum officia consequat aliquip non sit nisi cillum dolor et dolor culpa eiusmod. Do cillum laborum culpa minim exercitation deserunt aute eu consectetur cupidatat eiusmod consequat occaecat id. Nostrud labore est laboris voluptate ipsum aliquip ad esse ullamco mollit pariatur qui eu pariatur nisi do.</p><p>Enim incididunt cillum laboris et dolor veniam incididunt tempor cupidatat qui nulla sit eiusmod cupidatat veniam. Do excepteur officia fugiat duis esse excepteur officia consectetur nulla sunt aliqua consequat deserunt. Minim sit aute non in occaecat proident culpa non et labore dolor. Fugiat aute exercitation irure qui esse nulla officia deserunt in adipisicing deserunt. Elit dolor aliqua sit exercitation fugiat nostrud enim et pariatur ea mollit. Laboris excepteur quis eu officia ipsum non reprehenderit sit commodo est et aliquip sint commodo sint mollit dolore aliquip aliquip. Duis cillum pariatur eiusmod voluptate ullamco in dolor non consequat commodo duis laboris. Veniam nostrud eiusmod velit fugiat et sunt adipisicing reprehenderit duis aliquip proident Lorem deserunt dolore consectetur culpa laboris exercitation.</p><p>Labore enim elit ullamco incididunt laborum id Lorem consequat esse culpa incididunt velit deserunt minim id. Dolor aute laborum sit deserunt magna anim cillum culpa amet in ullamco non. Cupidatat do nisi aute magna labore ut magna nisi do dolore elit amet et labore aliqua. Do labore nisi fugiat consequat laborum magna ex est labore laboris mollit Lorem in cupidatat nisi nisi consequat. Consectetur Lorem id magna quis occaecat duis pariatur tempor incididunt incididunt exercitation laborum dolor sunt aute fugiat ea.</p><p>Esse Lorem eu aliqua mollit non dolor anim occaecat nisi sunt ad do nulla est enim nulla exercitation tempor. Eu veniam sint enim ad voluptate labore do ullamco ipsum laboris dolor exercitation. Ut ut cillum proident laboris officia Lorem eu sint adipisicing cillum esse veniam anim adipisicing mollit. Commodo incididunt anim in anim eiusmod elit in mollit sint sit id. Sunt deserunt irure ex eiusmod ad tempor sint aute laboris amet dolor. Commodo ad amet eiusmod tempor magna irure non adipisicing magna duis ad labore Lorem id est tempor commodo consectetur.</p>"
    }
]
```

Available values for the <em>Tags</em> parameter. Create random markup combinations by passing these values to the <em>Tags</em> parameter.

### Supported Endpoints

<a href="#html">html</a>

### HTTP Request

`GET https://api.jsonipsum.com/text/html/?tags=value[option]`

Value | Options | Description
--------- | ----------- | -----------
blockquote | short<br>medium<br>long | Sentence in `blockquote` tag.<br><em>Default: medium</em>
h1 | short<br>medium<br>long | Sentence in `h1` tag.<br><em>Default: medium</em>
h2 | short<br>medium<br>long | Sentence in `h2` tag.<br><em>Default: medium</em>
h3 | short<br>medium<br>long | Sentence in `h3` tag.<br><em>Default: medium</em>
h4 | short<br>medium<br>long | Sentence in `h4` tag.<br><em>Default: medium</em>
ol | short<br>medium<br>long | Random count (3-8) of `li` items in a `ol` tag.<br><em>Default: medium</em>
p | 1-100 | Text in `p` tag.<br><em>Default: 1</em>
span | short<br>medium<br>long | Sentence in `span` tag.<br><em>Default: medium</em>
ul | short<br>medium<br>long | Random count (3-8) of `li` items in a `ul` tag.<br><em>Default: medium</em>

<aside class="notice">
You can combine multiple <em>Tag</em> values by separating them with a comma.
</aside>



## Regions

```shell

GET "https://api.jsonipsum.com/text/block/?fields=name,phone,address&region=de"

```

> JSON response

```json
[
    {
        "id": 0,
        "name": "Imke Holzner",
        "phone": "(0553) 326731785",
        "address": {
            "street": "027 Hingsen Causeway",
            "city": "Neu Cindyburg",
            "postal": "94774",
            "province": "Baden-Württemberg",
            "country": "Grönland",
            "countrycode": "KN"
        }
    }
]
```

Available values for the <em>Region</em> parameter. Passing a region will return localized data in the native language.

### Supported Endpoints

<a href="#block">block</a>

### HTTP Request

`GET https://api.jsonipsum.com/text/block/?region=value`


Value | Description
--------- | -----------
de | Sets region to German.
en | Sets region to English - US.<br><em>Default</em>
en_AU | Sets region to English - Australia.
en_CA | Sets region to English - Canada.
en_GB | Sets region to English - Great Briton.
es | Sets region to Spanish.
es_MX | Sets region to Spanish - Mexico.
fr | Sets region to French.
fr_CA | Sets region to French - Canada.
it | Sets region to Italian.
ja | Sets region to Japanese.
ko | Sets region to Korean.
pl | Sets region to Polish.
pt_BR | Sets region to Portuguese - Brazil.
pt_PT | Sets region to Portuguese - Portugal.
ru | Sets region to Russian.
tr | Sets region to Turkish.
