# Examples

## Short Sentence

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

Get a single short sentence. Use the <a href="#sentence">sentence</a> endpoint, and pass the <a href="#length">length</a> parameter with a value of <em><u>short</u></em>.

### HTTP Request
`GET https://api.jsonipsum.com/text/sentence/?length=short`




## Long Sentence

```shell
GET "https://api.jsonipsum.com/text/sentence/?length=long"
```

> JSON Response

```json
[
    {
        "id": 0,
        "text": "Lorem sit ipsum adipisicing incididunt nostrud minim duis irure do adipisicing nulla officia reprehenderit incididunt eu eiusmod ipsum sint anim eu."
    }
]
```

Get a single long sentence. Use the <a href="#sentence">sentence</a> endpoint, and pass the <a href="#length">length</a> parameter with a value of <em><u>long</u></em>.

### HTTP Request
`GET https://api.jsonipsum.com/text/sentence/?length=long`





## Multiple Sentences

```shell
GET "https://api.jsonipsum.com/text/sentence/?count=3"
```

> JSON Response

```json
[
    {
        "id": 0,
        "text": "Quis ullamco ex cupidatat aliqua nulla cupidatat est. Voluptate ex amet do commodo qui elit aliquip dolor incididunt amet nostrud consequat commodo do. Eiusmod velit cillum exercitation culpa sint aute reprehenderit ipsum Lorem in tempor aliquip occaecat."
    }
]
```

You can request multiple sentences to create your own paragraphs or bodies of text. Use the <a href="#sentence">sentence</a> endpoint, and pass the <a href="#count">count</a> parameter with a value of <em><u>3</u></em>, or your desired number of sentences.

### HTTP Request
`GET https://api.jsonipsum.com/text/sentence/?count=3`



## Short Paragraph

```shell
GET "https://api.jsonipsum.com/text/paragraph/?length=short"
```

> JSON Response

```json
[
    {
        "id": 0,
        "text": "Eu ipsum ullamco excepteur. Mollit duis irure amet et ut exercitation magna. Esse commodo veniam amet."
    }
]
```

Get a single short paragraph. Use the <a href="#paragraph">paragraph</a> endpoint, and pass the <a href="#length">length</a> parameter with a value of <em><u>short</u></em>.

### HTTP Request
`GET https://api.jsonipsum.com/text/paragraph/?length=short`




## Long Paragraph

```shell
GET "https://api.jsonipsum.com/text/paragraph/?length=long"
```

> JSON Response

```json
[
    {
        "id": 0,
        "text": "Nisi ut proident duis culpa amet aute aliquip minim deserunt quis quis Lorem consequat esse commodo laboris laboris labore irure cillum deserunt. Elit incididunt consectetur ut exercitation excepteur voluptate elit aute laboris ex proident exercitation excepteur aute quis ipsum ullamco aliquip. Consequat cillum proident do sit ea qui ipsum ex velit quis pariatur tempor irure sint minim. Aliquip in ex elit magna consequat reprehenderit laborum nostrud ut sint mollit anim dolore exercitation ullamco pariatur qui incididunt elit aute elit aute officia. Laboris duis duis eu commodo anim eiusmod reprehenderit magna Lorem esse est cillum ipsum consectetur eu eiusmod tempor ipsum duis. Do enim fugiat exercitation laborum aute ut laborum consectetur aute quis eiusmod est consequat sint consectetur. Nisi cupidatat voluptate non voluptate do incididunt tempor dolore quis in eiusmod labore eiusmod quis consectetur eu incididunt consectetur laborum sint. Lorem laboris laboris quis in sit nulla nostrud ad cillum elit fugiat exercitation dolore magna non aute fugiat ut aute. Enim excepteur laboris excepteur cillum duis sit ullamco mollit ut pariatur nulla dolore sunt pariatur pariatur."
    }
]
```

Get a single long paragraph. Use the <a href="#paragraph">paragraph</a> endpoint, and pass the <a href="#length">length</a> parameter with a value of <em><u>long</u></em>.

### HTTP Request
`GET https://api.jsonipsum.com/text/paragraph/?length=long`




## Multiple Paragraphs
```shell
GET "https://api.jsonipsum.com/text/paragraph/?count=3"
```

> JSON Response

```json
[
    {
        "id": 0,
        "text": "Veniam ex tempor dolor officia ea anim velit aliqua sint esse reprehenderit enim nostrud adipisicing dolor. Sunt dolore labore laborum do duis nostrud anim sit cupidatat amet reprehenderit tempor. Dolore minim quis consequat ad eiusmod quis non consequat ut sunt sint Lorem commodo anim. Velit fugiat enim sint voluptate ad dolor duis excepteur enim adipisicing ut non. In cupidatat non do veniam culpa incididunt voluptate reprehenderit incididunt excepteur commodo cupidatat elit consectetur eu. Consectetur proident enim duis qui nisi mollit officia cillum aliquip incididunt in. Nostrud do voluptate in ut exercitation nostrud culpa nisi culpa incididunt anim proident magna consectetur. Nisi amet commodo laborum do sunt ea exercitation non fugiat dolore mollit. Excepteur aliqua amet fugiat aute esse mollit occaecat esse ut. Eiusmod aliqua reprehenderit aliquip nisi ipsum deserunt amet ea ea. Voluptate amet fugiat sit do laborum incididunt laboris laborum aute ipsum duis in eiusmod ea. Est sint in dolor velit aute duis aute ut excepteur consequat qui esse magna. Dolor ea nostrud laboris excepteur incididunt commodo ea cillum ex non tempor anim irure mollit labore. Laborum cupidatat commodo irure minim dolor fugiat sint do pariatur. Consectetur elit consequat nisi irure anim officia nulla est duis deserunt ipsum laborum dolore fugiat nostrud. Proident eiusmod culpa aute duis reprehenderit ad qui eu magna proident fugiat excepteur. Enim mollit proident exercitation irure quis nulla pariatur eiusmod ea occaecat et. Ullamco ullamco exercitation mollit ad enim labore ex sint amet aliquip officia nostrud laboris exercitation nostrud. Laboris adipisicing veniam dolore irure labore magna exercitation Lorem exercitation excepteur. Occaecat Lorem anim officia enim eu non proident velit excepteur sit consectetur ad et in. Pariatur do cillum proident ea elit ipsum aliqua."
    }
]
```

You can request multiple paragraphs at a time to create longer bodies of text. Use the <a href="#paragraph">paragraph</a> endpoint, and pass the <a href="#count">count</a> parameter with a value of <em><u>5</u></em>, or your desired number of paragraphs.

### HTTP Request
`GET https://api.jsonipsum.com/text/paragraph/?count=3`


## HTML Paragraph

```shell
GET "https://api.jsonipsum.com/text/html/?tags=p"
```

> JSON Response

```json
[
    {
        "id": 0,
        "text": "<p>Dolor irure cupidatat esse Lorem eiusmod dolor aute. Id sunt Lorem ad occaecat do ipsum proident. Ad nulla labore aliqua officia et minim non aliquip. Ea exercitation cupidatat ex eu est occaecat eu Lorem nulla. Voluptate laboris Lorem tempor et officia non nisi occaecat id cupidatat qui tempor. Enim officia aliquip veniam commodo ea aute cupidatat nisi. Lorem amet amet ut anim veniam est incididunt ex ullamco Lorem voluptate est deserunt irure id.</p>"
    }
]
```

Single paragraph, wrapped in HTML `p` tags. Use the <a href="#html">html</a> endpoint, and pass the <a href="#tags">tags</a> parameter with a value of <em><u>p</u></em>.

### HTTP Request
`GET https://api.jsonipsum.com/text/html/?tags=p`




## Multiple HTML Paragraphs

```shell
GET "https://api.jsonipsum.com/text/html/?tags=p[3]"
```

> JSON Response

```json
[
    {    
        "id": 0,
        "text": "<p>Do laborum esse consequat culpa consectetur dolor occaecat magna ipsum duis nulla excepteur. Irure labore eu nisi ad cupidatat anim est consectetur ut aliqua. Consectetur cillum esse amet deserunt do dolore enim dolore minim ex enim minim laborum. Eiusmod id id elit veniam amet occaecat velit. Dolor reprehenderit laborum elit culpa laborum aute commodo proident officia velit.</p> <p>Sit et laborum cupidatat ullamco excepteur ex ex. Irure aliquip dolor tempor consectetur anim exercitation velit nisi nostrud magna fugiat deserunt. Tempor anim quis officia ea sit laboris anim pariatur eu anim enim esse adipisicing. Consectetur ex amet irure magna minim exercitation reprehenderit sint officia. Esse ipsum duis nostrud aliquip cillum reprehenderit amet occaecat deserunt nostrud tempor ipsum tempor. Incididunt consectetur amet ullamco qui duis anim esse. Aliquip aliquip pariatur sunt non ex esse ullamco irure. Elit amet aliqua eiusmod ullamco velit proident anim ex et veniam culpa.</p> <p>Amet duis ullamco esse pariatur commodo eu esse do anim in laboris adipisicing nostrud. Amet ea tempor aliqua laboris excepteur dolor adipisicing quis non pariatur duis labore. Excepteur eiusmod ullamco quis Lorem esse elit pariatur fugiat occaecat do. Laborum magna aliquip irure non id do consectetur reprehenderit. Anim qui adipisicing adipisicing nostrud nostrud nostrud veniam fugiat minim. Ad aliqua est in sint dolore pariatur nisi labore proident esse nulla. Eu amet incididunt cupidatat minim ut nostrud occaecat aute sit.</p>"
    }
]
```

Request multiple paragraphs, each one wrapped in HTML `p` tags and returned as a single object. Use the <a href="#html">html</a> endpoint, and pass the <a href="#tags">tags</a> parameter with a value of <em><u>p</u></em> and value options of <em><u>3</u></em>, or the number of `p` tags desired.

### HTTP Request
`GET https://api.jsonipsum.com/text/html/?tags=p[3]`



## HTML Markup

```shell
GET "https://api.jsonipsum.com/text/html/?tags=h1,h2,p[2],ul,p[2],blockquote,p[2]"
```

> JSON Response

```json
[
    {    
        "id": 0,
        "text": "<h1>Amet elit commodo deserunt excepteur laborum velit eiusmod velit eu nostrud.</h1><h2>Deserunt consequat dolore cupidatat esse sint amet voluptate est tempor amet do aliqua elit occaecat.</h2><p>Amet ad aute pariatur exercitation adipisicing sint nostrud ex eiusmod deserunt mollit. Deserunt deserunt dolor do id commodo velit labore et proident sunt laboris. Laboris aute irure culpa esse qui duis tempor incididunt aute cillum minim et reprehenderit cupidatat nisi. Ea mollit pariatur mollit esse irure ad aute eiusmod dolore occaecat sunt elit aliquip. Elit anim cupidatat dolor anim in mollit anim laborum minim exercitation excepteur deserunt pariatur. Et et aliqua culpa labore sunt do voluptate anim ipsum excepteur mollit. Voluptate anim nostrud nisi qui ipsum reprehenderit laborum nisi id veniam enim consectetur laborum dolore. Esse esse consectetur velit cupidatat in reprehenderit amet est.</p> <p>Qui sit eiusmod veniam duis anim ex in deserunt. Minim voluptate ea cillum culpa et et culpa commodo. Adipisicing proident sit sunt labore laborum amet enim irure dolor amet pariatur ad tempor. Aliquip ullamco commodo Lorem dolor et cillum dolor cillum anim. Irure velit incididunt sunt fugiat ea labore anim irure proident. Exercitation ad ullamco magna labore ea anim magna est ea incididunt irure dolore dolor excepteur. Magna id nisi commodo commodo cillum excepteur cupidatat aliqua quis laboris tempor ullamco. Adipisicing voluptate ex consectetur occaecat Lorem consectetur nisi anim cupidatat cillum dolore aliqua.</p><ul><li>Amet incididunt ullamco amet laborum sint dolore ea consequat tempor esse nulla minim nulla adipisicing pariatur.</li><li>Sint qui enim dolor non voluptate deserunt aliquip consectetur nisi fugiat nisi.</li><li>Enim et cupidatat laboris labore proident mollit quis sunt commodo id elit.</li></ul><p>Mollit commodo et velit do ipsum minim qui sunt nisi do ullamco. Magna aliqua ex et et est exercitation ex consequat. Nostrud laboris dolor deserunt proident dolore enim ad culpa non. Eu consequat non ullamco amet tempor exercitation adipisicing dolore fugiat nulla veniam id. Adipisicing eiusmod do veniam culpa culpa cillum minim dolore nisi esse ullamco non. Nulla dolor dolor cupidatat sint officia et minim do occaecat sit dolore. Labore id id officia incididunt aute ea minim fugiat velit minim anim non. Anim reprehenderit nisi culpa Lorem Lorem adipisicing ipsum reprehenderit.</p> <p>Ad sit proident nisi eiusmod Lorem occaecat laborum nulla proident exercitation exercitation velit. Dolor deserunt velit adipisicing ullamco duis nulla et cupidatat deserunt. Aliqua quis et enim sunt amet eu nisi occaecat Lorem ad dolor ea officia sit. Aliqua eu sint eiusmod enim sint proident magna laborum. Nisi ipsum incididunt officia proident dolore duis labore exercitation irure. Id nisi ex ipsum sunt non do magna ut nisi excepteur ad. Irure eiusmod eiusmod et occaecat culpa voluptate ad Lorem fugiat enim aliqua anim nisi laboris ipsum. Consectetur non tempor ipsum consequat labore ad anim minim voluptate.</p><blockquote>In pariatur do cupidatat incididunt sint excepteur amet dolor est culpa cupidatat in.</blockquote><p>Incididunt consectetur ullamco sunt exercitation qui ut sit velit do cupidatat sint Lorem dolor. Do tempor ullamco nulla quis duis minim in dolore minim do fugiat deserunt cillum sunt aliquip. Tempor est magna in sint sint labore aliquip pariatur nulla tempor. Excepteur aliqua elit nulla Lorem enim elit sit proident commodo nulla do. Id excepteur eiusmod nisi in quis qui consequat duis excepteur commodo nisi aliqua duis pariatur et. Irure laborum amet deserunt pariatur voluptate ipsum labore tempor exercitation consectetur veniam culpa.</p> <p>Dolor enim qui ex sit laborum in nisi ut ea fugiat anim veniam sunt dolor aute. Cupidatat aliquip velit aliquip aute proident laboris nulla nulla commodo. Cupidatat sit elit quis est adipisicing exercitation tempor excepteur excepteur commodo consequat occaecat consectetur. Consequat labore eiusmod esse velit anim irure enim qui sit ut sit pariatur exercitation magna do. Eu aliquip id quis elit enim esse deserunt aliqua.</p>"
    }
]
```

Generate formatted HTML markup. You can create your desired markup as a single object, but passing in desired tags. Use the <a href="#html">html</a> endpoint, and pass the <a href="#tags">tags</a> parameter with the desired supported values and options.

### HTTP Request
`GET https://api.jsonipsum.com/text/html/?tags=h1,h2,p[2],ul,p[2],blockquote,p[2]`



## Text Block

```shell
GET "https://api.jsonipsum.com/text/block/?fields=title,excerpt"
```

> JSON Response

```json
[
    {    
        "id": 0,
        "title": "Consequat et et aute deserunt Lorem aliquip ad adipisicing nulla consequat est nisi.",
        "excerpt": "Ad pariatur tempor ullamco nisi magna eiusmod irure est excepteur est minim dolore. Veniam non ex laboris incididunt qui fugiat enim occaecat reprehenderit anim sit. Reprehenderit ea id officia et in elit dolore dolor esse anim. Eu id ipsum et do commodo excepteur velit sit elit sint amet irure. In pariatur officia laboris ipsum dolore ut culpa mollit dolor tempor. Eiusmod veniam esse est quis magna nostrud velit ullamco elit amet labore do magna pariatur duis. Esse esse sint mollit aute elit esse pariatur voluptate id sit officia. Lorem proident fugiat enim quis ut nostrud culpa enim voluptate."
    }
]
```

Request a single block of text with a Title and Excerpt. Use the <a href="#block">block</a> endpoint, and pass the <a href="#fields">fields</a> parameter with the desired supported values and options.

### HTTP Request
`GET https://api.jsonipsum.com/text/block/?fields=title,excerpt`




## Text Block with Image

```shell
GET "https://api.jsonipsum.com/text/block/?fields=image,title,excerpt"
```

> JSON Response

```json
[
    {    
        "id": 0,
        "image": {
            "landscape": "https://jsonipsum.com/static/images/placeholder_960x640.jpg",
            "portrait": "https://jsonipsum.com/static/images/placeholder_640x960.jpg",
            "square": "https://jsonipsum.com/static/images/placeholder_960x960.jpg"
        },
        "title": "Cillum commodo reprehenderit mollit adipisicing incididunt ex nostrud consectetur excepteur veniam sint culpa ex sunt Lorem.",
        "excerpt": "In dolore dolore tempor elit non dolore reprehenderit reprehenderit labore duis ad. Reprehenderit nisi consequat aliqua amet culpa velit consectetur dolor nulla labore officia in minim est. Veniam ea qui Lorem excepteur incididunt reprehenderit culpa ea ullamco amet tempor nisi in. Fugiat ut nulla eiusmod magna amet Lorem anim ut. Aliquip culpa laboris velit exercitation aliquip Lorem dolore id minim."
    }
]
```

Request a single block of text with an Image, Title and Excerpt. Use the <a href="#block">block</a> endpoint, and pass the <a href="#fields">fields</a> parameter with the desired supported values and options.

### HTTP Request
`GET https://api.jsonipsum.com/text/block/?fields=image,title,excerpt`


## Text Block with Video

```shell
GET "https://api.jsonipsum.com/text/block/?fields=title,video,excerpt"
```

> JSON Response

```json
[
    {        
        "id": 0,
        "title": "Aliquip quis consequat sint consequat ea ipsum est aute pariatur.",
        "video": {
            "id": "xxxxxxxxxx",
            "url": "https://vimeo.com/video/xxxxxxxxxx",
            "embed": "https://play.vimeo.com/embed/xxxxxxxxxx"
        },
        "excerpt": "Esse eiusmod mollit aute et ad sit enim est velit quis duis non. Pariatur nulla eu quis incididunt elit eu eiusmod Lorem incididunt est incididunt nostrud. Aliqua incididunt commodo elit pariatur minim exercitation voluptate minim est ipsum ullamco culpa incididunt. Ut dolore tempor magna irure officia elit ut culpa qui. Proident do aliquip sit ex laborum magna sunt duis exercitation commodo. Officia ex consectetur reprehenderit duis ipsum nulla tempor amet pariatur in ullamco ipsum ipsum veniam magna."
    }
]
```

Request a single block of text with a Title, Video and Excerpt. Use the <a href="#block">block</a> endpoint, and pass the <a href="#fields">fields</a> parameter with the desired supported values and options.

### HTTP Request
`GET https://api.jsonipsum.com/text/block/?fields=title,video,excerpt`






## Text Block List

```shell
GET "https://api.jsonipsum.com/text/block/?fields=title,excerpt&count=3"
```

> JSON Response

```json
[
    {
        "id": 0,
        "title": "Lorem dolor ut ea sit est in anim nisi et consequat.",
        "excerpt": "Laboris dolore deserunt ipsum adipisicing non excepteur qui occaecat est. Tempor consequat ex incididunt veniam eiusmod amet cupidatat esse laborum irure aliquip. Consequat id mollit velit consectetur duis eiusmod eiusmod mollit. Ullamco eu mollit consectetur anim excepteur mollit cillum qui dolore elit proident nisi pariatur ullamco. Nostrud aliqua adipisicing nostrud labore dolore irure anim quis."
    },
    {
        "id": 1,
        "title": "Cillum enim dolor voluptate aliqua ea exercitation dolor velit ipsum sint et labore do id cupidatat.",
        "excerpt": "Mollit velit magna anim reprehenderit magna officia veniam cupidatat magna mollit labore velit irure tempor deserunt. Voluptate tempor magna sit do sunt est cupidatat. Ullamco quis nulla aliquip enim amet sunt consequat ad adipisicing sunt excepteur anim culpa. Excepteur eu reprehenderit exercitation in ut proident deserunt nisi nulla dolor veniam. Aliqua consequat anim ipsum voluptate minim aliqua aliquip. Occaecat mollit id deserunt aute ex consequat laboris cupidatat aute proident ut. Eiusmod exercitation ex incididunt nisi veniam quis elit voluptate laboris enim mollit laborum excepteur dolore."
    },
    {
        "id": 2,
        "title": "Exercitation consectetur minim nostrud est magna exercitation Lorem quis incididunt.",
        "excerpt": "Proident minim ex ad sint fugiat cillum esse. Laborum reprehenderit Lorem eiusmod qui sunt labore aliqua dolore do exercitation irure sint culpa. Elit aliqua qui laboris dolore laborum tempor nulla consectetur id elit cupidatat consequat ad mollit veniam. Ex duis eu dolore exercitation elit et do nisi sint sint sit et ipsum magna qui. Velit dolor sunt qui veniam veniam ipsum qui adipisicing laboris sit nostrud ad ex. Duis labore minim enim aliqua id magna officia. Incididunt incididunt dolor aliqua velit sint irure do proident commodo exercitation fugiat deserunt exercitation fugiat. Elit fugiat adipisicing ut laborum laboris aliquip eiusmod in ut officia."
    }
]
```

You can request multiple text blocks in the same object. Use the <a href="#block">block</a> endpoint, and pass the <a href="#count">count</a> parameter with the desired number of items.

### HTTP Request
`GET https://api.jsonipsum.com/text/block/?fields=title,excerpt&count=3`





## Features List

```shell
GET "https://api.jsonipsum.com/text/block/?fields=icon,title,description&count=3"
```

> JSON Response

```json
[
    {
        "id": 0,
        "icon": "https://jsonipsum.com/static/image/placeholder_icon.svg",
        "title": "Est irure elit eiusmod magna voluptate laborum deserunt consectetur officia.",
        "description": "Dolore duis velit voluptate laborum laboris esse cupidatat culpa consequat id do id fugiat do. Dolore nulla qui qui amet do duis mollit amet ex quis. Esse laboris aliquip deserunt excepteur id reprehenderit mollit qui ex non minim sit dolor consequat reprehenderit. Elit ipsum Lorem dolore pariatur consectetur consectetur pariatur aliquip non consequat. Amet cupidatat culpa cupidatat occaecat non nisi nulla. Commodo cillum dolore commodo velit irure aute minim ullamco ea labore ut eiusmod."
    },
    {
        "id": 1,
        "icon": "https://jsonipsum.com/static/image/placeholder_icon.svg",
        "title": "Consequat reprehenderit in occaecat ex amet non reprehenderit dolore duis elit duis fugiat.",
        "description": "Laboris sint veniam ex ea nostrud quis ex nulla consequat eu id. Ipsum ut esse irure deserunt tempor tempor velit. Voluptate eiusmod nostrud velit aliqua ut tempor id. In nulla eu consectetur enim Lorem labore do ea do est laboris ut labore veniam Lorem. Anim sunt eiusmod cillum aute eu minim nulla quis. Ex ex ea commodo adipisicing exercitation minim deserunt. Deserunt pariatur incididunt incididunt est Lorem labore labore elit exercitation in."
    },
    {
        "id": 2,
        "icon": "https://jsonipsum.com/static/image/placeholder_icon.svg",
        "title": "Exercitation quis quis magna ad quis pariatur sit laboris aliquip minim do ea consectetur irure.",
        "description": "Est elit non id do commodo elit sint Lorem eu in amet. Laborum proident qui cupidatat sit reprehenderit ut laborum incididunt laborum veniam magna. Aute nisi eiusmod incididunt incididunt ex anim nisi reprehenderit nisi. Do ex qui non officia velit aliqua proident Lorem in nulla quis Lorem id occaecat. Incididunt adipisicing cupidatat nisi irure pariatur pariatur excepteur."
    }
]
```

Create placeholder content for an app or website Features list with an Icon, Title, and Description. Use the <a href="#block">block</a> endpoint, and pass the <a href="#count">count</a> parameter with the desired number of items.

### HTTP Request
`GET https://api.jsonipsum.com/text/block/?fields=icon,title,description&count=3`





## Blog/Article List

```shell
GET "https://api.jsonipsum.com/text/block/?fields=date[past],title,author,thumbnail,excerpt&count=3"
```

> JSON Response

```json
[
    {
        "id": 0,
        "date": {
            "string": "1993-4-19",
            "timestamp": 735195600000
        },
        "title": "Adipisicing officia tempor deserunt nulla id adipisicing consequat sint sit ipsum mollit qui.",
        "author": "Estella Bosco",
        "thumbnail": {
            "landscape": "https://jsonipsum.com/static/images/placeholder_960x640.jpg",
            "portrait": "https://jsonipsum.com/static/images/placeholder_640x960.jpg",
            "square": "https://jsonipsum.com/static/images/placeholder_960x960.jpg"
        },
        "excerpt": "Duis aliqua amet commodo ullamco laborum incididunt eu labore dolore id pariatur sit laborum ea. Cillum ut commodo officia culpa duis aliquip qui Lorem cillum consectetur. Incididunt cillum ea et id adipisicing mollit dolore quis. Ullamco voluptate enim minim incididunt nisi id incididunt veniam enim amet magna officia voluptate id. Aliqua et tempor et mollit do pariatur nostrud dolore do fugiat."
    },
    {
        "id": 1,
        "date": {
            "string": "1988-12-2",
            "timestamp": 597045600000
        },
        "title": "Pariatur do anim consequat aute ad reprehenderit fugiat non sit dolore sit.",
        "author": "Blake Abshire",
        "thumbnail": {
            "landscape": "https://jsonipsum.com/static/images/placeholder_960x640.jpg",
            "portrait": "https://jsonipsum.com/static/images/placeholder_640x960.jpg",
            "square": "https://jsonipsum.com/static/images/placeholder_960x960.jpg"
        },
        "excerpt": "Commodo mollit ullamco fugiat eiusmod nisi ea dolor. Deserunt dolore labore cupidatat voluptate nulla excepteur sit pariatur officia irure commodo eu. Lorem deserunt veniam esse voluptate ipsum exercitation magna dolor ut cillum culpa ea commodo laborum exercitation. Laborum nulla cillum occaecat elit veniam magna consectetur. Laboris tempor ea qui cillum eiusmod pariatur enim velit fugiat cillum est."
    },
    {
        "id": 2,
        "date": {
            "string": "1983-11-11",
            "timestamp": 437356800000
    },
        "title": "Cillum anim laboris sunt in aute velit quis eu sunt deserunt consectetur excepteur.",
        "author": "Norberto Oberbrunner",
        "thumbnail": {
            "landscape": "https://jsonipsum.com/static/images/placeholder_960x640.jpg",
            "portrait": "https://jsonipsum.com/static/images/placeholder_640x960.jpg",
            "square": "https://jsonipsum.com/static/images/placeholder_960x960.jpg"
        },
        "excerpt": "Voluptate mollit aute laborum irure sunt cillum labore commodo proident anim eiusmod magna. Reprehenderit fugiat quis voluptate sunt consectetur occaecat in culpa elit laborum reprehenderit incididunt. Eu mollit ea ipsum est magna laboris amet. Non in consectetur est elit voluptate nisi do non do aliqua nulla amet. Fugiat nisi anim quis elit id quis sint voluptate tempor."
    }
]
```

Simple example to retrieve a list of blog articles with a Date, Title, Author, Thumbnail, Excerpt, and Taxonomy. Use the <a href="#block">block</a> endpoint, and pass both the <a href="#count">count</a> parameter and the <a href="#fields">fields</a> parameter with the desired supported values and options.

### HTTP Request
`GET https://api.jsonipsum.com/text/block/?fields=date[past],title,author,thumbnail,excerpt&count=3`


## Profile/Team List

```shell
GET "https://api.jsonipsum.com/text/block/?fields=headshot,name,job,email&count=3"
```

> JSON Response

```json
[
    {
        "id": 0,
        "headshot": {
            "landscape": "https://jsonipsum.com/static/images/placeholder_960x640.jpg",
            "portrait": "https://jsonipsum.com/static/images/placeholder_640x960.jpg",
            "square": "https://jsonipsum.com/static/images/placeholder_960x960.jpg"
        },
        "name": "Virgie Brakus",
        "job": "Human Identity Orchestrator",
        "email": "virgie1994@jsonipsum.com"
    },
    {
        "id": 1,
        "headshot": {
            "landscape": "https://jsonipsum.com/static/images/placeholder_960x640.jpg",
            "portrait": "https://jsonipsum.com/static/images/placeholder_640x960.jpg",
            "square": "https://jsonipsum.com/static/images/placeholder_960x960.jpg"
        },
        "name": "Mustafa Morissette",
        "job": "Dynamic Implementation Orchestrator",
        "email": "mustafa1981@jsonipsum.com"
    },
    {
        "id": 2,
        "headshot": {
            "landscape": "https://jsonipsum.com/static/images/placeholder_960x640.jpg",
            "portrait": "https://jsonipsum.com/static/images/placeholder_640x960.jpg",
            "square": "https://jsonipsum.com/static/images/placeholder_960x960.jpg"
        },
        "name": "Madyson Barrows",
        "job": "Dynamic Accountability Designer",
        "email": "madyson1984@jsonipsum.com"
    }
]
```

Example to retrieve a list of team/staff members with a Headshot, Name, Job Title, and Email. Use the <a href="#block">block</a> endpoint, and pass both the <a href="#count">count</a> parameter and the <a href="#fields">fields</a> parameter with the desired supported values and options.

### HTTP Request
`GET https://api.jsonipsum.com/text/block/?fields=headshot,name,job,email&count=3`







## User List

```shell
GET "https://api.jsonipsum.com/text/block/?fields=username,password,name,email&count=6"
```

> JSON Response

```json
[
    {
        "id": 0,
        "username": "johanna1991",
        "password": "XmsKvQggryxhd_",
        "name": "Johanna Hand",
        "email": "johanna1991@jsonipsum.com"
    },
    {
        "id": 1,
        "username": "sid1988",
        "password": "H0DbvDDY7sgM9e",
        "name": "Sid Bashirian",
        "email": "sid1988@jsonipsum.com"
    },
    {
        "id": 2,
        "username": "tracy1985",
        "password": "4mC5zokEqx1guy",
        "name": "Tracy Heller",
        "email": "tracy1985@jsonipsum.com"
    },
    {
        "id": 3,
        "username": "loren1987",
        "password": "i3qmQ2a9BAfRnh",
        "name": "Loren Gutmann",
        "email": "loren1987@jsonipsum.com"
    },
    {
        "id": 4,
        "username": "kellie1983",
        "password": "Ga_o69X68F85fN",
        "name": "Kellie Reynolds",
        "email": "kellie1983@jsonipsum.com"
    },
    {
        "id": 5,
        "username": "kiera1984",
        "password": "_milhOgsZK4HYa",
        "name": "Kiera Klocko",
        "email": "kiera1984@jsonipsum.com"
    }
]
```

Example to retrieve a list of sample User data with a Username, Password, Name and Email. Use the <a href="#block">block</a> endpoint, and pass both the <a href="#count">count</a> parameter and the <a href="#fields">fields</a> parameter with the desired supported values and options.

### HTTP Request
`GET https://api.jsonipsum.com/text/block/?fields=username,password,name,email&count=6`




## Customer List

```shell
GET "https://api.jsonipsum.com/text/block/?fields=name,email,bankcard,address&count=6"
```

> JSON Response

```json
[
    {
        "id": 0,
        "name": "Eden Kihn",
        "email": "eden1987@jsonipsum.com",
        "bankcard": {
            "number": "9717056307553998",
            "expire": {
                "string": "2019-8-13",
                "timestamp": 1565672400000
            },
            "ccv": 707
        },
        "address": {
            "street": "98127 Bradtke Dam",
            "city": "New Waino",
            "postal": "45109-3214",
            "province": "Alabama",
            "country": "Bulgaria",
            "countrycode": "TC"
        }
    },
    {
        "id": 1,
        "name": "Emmy Goodwin",
        "email": "emmy2009@jsonipsum.com",
        "bankcard": {
            "number": "9849633969354719",
            "expire": {
                "string": "2019-12-11",
                "timestamp": 1576022400000
            },
            "ccv": 394
        },
        "address": {
            "street": "85049 Bud Flats",
            "city": "Hazleland",
            "postal": "95230",
            "province": "Michigan",
            "country": "Ecuador",
            "countrycode": "AG"
        }
    },
    {
        "id": 2,
        "name": "Denis Adams",
        "email": "denis1995@jsonipsum.com",
        "bankcard": {
            "number": "8392929060988442",
            "expire": {
                "string": "2019-12-7",
                "timestamp": 1575698400000
            },
            "ccv": 754
        },
        "address": {
            "street": "1170 Scarlett Forest",
            "city": "West Rocky",
            "postal": "53535-3729",
            "province": "Illinois",
            "country": "Marshall Islands",
            "countrycode": "IE"
        }
    },
    {
        "id": 3,
        "name": "Elvera Kuvalis",
        "email": "elvera2006@jsonipsum.com",
        "bankcard": {
            "number": "0473722687532415",
            "expire": {
                "string": "2021-6-22",
                "timestamp": 1624338000000
            },
            "ccv": 306
        },
        "address": {
            "street": "179 Treutel Shoals",
            "city": "Port Everetttown",
            "postal": "27842-2175",
            "province": "Virginia",
            "country": "Japan",
            "countrycode": "NF"
        }
    },
        {
        "id": 4,
        "name": "Jed Haley",
        "email": "jed1986@jsonipsum.com",
        "bankcard": {
            "number": "8426355217223965",
            "expire": {
                "string": "2020-5-10",
                "timestamp": 1589086800000
            },
            "ccv": 897
        },
        "address": {
            "street": "31057 Hickle Knoll",
            "city": "Lake Kelvin",
            "postal": "17798-8459",
            "province": "Delaware",
            "country": "Kazakhstan",
            "countrycode": "AD"
        }
    },
    {
        "id": 5,
        "name": "Grover Wintheiser",
        "email": "grover1990@jsonipsum.com",
        "bankcard": {
            "number": "2610353892071022",
            "expire": {
                "string": "2022-5-6",
                "timestamp": 1651813200000
            },
            "ccv": 590
        },
        "address": {
            "street": "0042 Adolf Meadow",
            "city": "Murazikville",
            "postal": "69934-1930",
            "province": "Rhode Island",
            "country": "Russian Federation",
            "countrycode": "TW"
        }
    }
]
```

Example to retrieve a list of sample Customer data with a Name, Email, Bankcard, and Billing Address. Use the <a href="#block">block</a> endpoint, and pass both the <a href="#count">count</a> parameter and the <a href="#fields">fields</a> parameter with the desired supported values and options.

### HTTP Request
`GET https://api.jsonipsum.com/text/block/?fields=name,email,bankcard,address&count=6`



## Product List

```shell
GET "https://api.jsonipsum.com/text/block/?fields=product,summary,image,bullets,rating&count=3"
```

> JSON Response

```json
[
    {
        "id": 0,
        "product": {
            "name": "Unbranded Rubber Ball",
            "type": "Chair",
            "department": "Outdoors",
            "material": "Cotton",
            "color": "orchid",
            "price": "101.94"
        },
        "summary": "Duis sint ea minim id commodo nulla incididunt eu ex aute magna commodo aliquip cillum. Culpa nisi cillum labore aute nulla eu laboris. Labore fugiat ut esse culpa magna tempor sunt incididunt Lorem qui. Duis sint anim dolore ex incididunt eu sint. Irure eu labore exercitation non ullamco excepteur non non aute. Ea qui anim aute aliquip nostrud anim ipsum deserunt eu quis incididunt minim.",
        "image": {
            "landscape": "https://jsonipsum.com/static/images/placeholder_960x640.jpg",
            "portrait": "https://jsonipsum.com/static/images/placeholder_640x960.jpg",
            "square": "https://jsonipsum.com/static/images/placeholder_960x960.jpg"
        },
        "bullets": [
            "Labore consequat enim non duis commodo in ut incididunt veniam deserunt cillum.",
            "Aliqua anim nostrud non est adipisicing consectetur duis adipisicing veniam.",
            "Magna duis consectetur ut duis sit aute deserunt.",
            "Lorem velit culpa elit cupidatat do Lorem occaecat."
        ],
        "rating": 2
    },
    {
        "id": 1,
        "product": {
            "name": "Licensed Metal Cheese",
            "type": "Pizza",
            "department": "Outdoors",
            "material": "Soft",
            "color": "black",
            "price": "454.78"
        },
        "summary": "Reprehenderit nostrud proident irure commodo irure eiusmod eiusmod mollit elit irure laborum. Velit laborum ipsum elit qui exercitation cupidatat aute quis incididunt voluptate consectetur irure nulla amet. Enim ullamco excepteur voluptate nisi esse est eu anim adipisicing. Adipisicing anim eiusmod officia aute dolor enim officia mollit amet quis fugiat culpa irure. Commodo Lorem sint aliqua amet in consectetur do amet commodo ullamco esse aliqua quis ut proident.",
        "image": {
            "landscape": "https://jsonipsum.com/static/images/placeholder_960x640.jpg",
            "portrait": "https://jsonipsum.com/static/images/placeholder_640x960.jpg",
            "square": "https://jsonipsum.com/static/images/placeholder_960x960.jpg"
        },
        "bullets": [
            "Lorem et nostrud cupidatat voluptate cillum nostrud in quis adipisicing amet mollit Lorem sunt qui.",
            "Esse sint ea consequat duis ea eu minim proident duis sit ipsum magna ipsum sunt sint.",
            "Ex occaecat amet in ullamco cillum cillum sint ex est consectetur tempor qui proident laboris velit.",
            "Do amet Lorem officia cupidatat fugiat proident magna occaecat culpa sunt esse aliquip do nisi reprehenderit."
        ],
        "rating": 4
    },
    {
        "id": 2,
        "product": {
            "name": "Handmade Frozen Pizza",
            "type": "Shoes",
            "department": "Jewelery",
            "material": "Rubber",
            "color": "mint green",
            "price": "66.10"
        },
        "summary": "Amet est nisi ut magna nulla anim cillum culpa aliqua nostrud Lorem magna consequat sint. Sit reprehenderit fugiat aute excepteur labore pariatur do nostrud. Anim aliqua non proident labore mollit ullamco do. Voluptate ullamco irure cupidatat dolor deserunt amet ullamco velit anim ut mollit sint irure laborum occaecat. Consectetur esse irure est dolore veniam adipisicing incididunt. Dolore duis fugiat nisi nisi et dolore aliquip reprehenderit sint exercitation esse.",
        "image": {
            "landscape": "https://jsonipsum.com/static/images/placeholder_960x640.jpg",
            "portrait": "https://jsonipsum.com/static/images/placeholder_640x960.jpg",
            "square": "https://jsonipsum.com/static/images/placeholder_960x960.jpg"
        },
        "bullets": [
            "Qui officia non voluptate quis ut magna ea aliqua reprehenderit ipsum laborum commodo nostrud.",
            "Laboris ad veniam ad in dolor ut dolore aliquip minim nostrud excepteur officia qui.",
            "Est occaecat anim fugiat qui voluptate cillum et ullamco est commodo magna.",
            "Nisi nisi incididunt nostrud officia exercitation amet magna cillum in."
        ],
        "rating": 1
    }
]
```

Example to retrieve a list of sample Product data with a Product, Summary, Image, Features, and Rating. Use the <a href="#block">block</a> endpoint, and pass both the <a href="#count">count</a> parameter and the <a href="#fields">fields</a> parameter with the desired supported values and options.

### HTTP Request
`GET https://api.jsonipsum.com/text/block/?fields=product,summary,image,bullets,rating&count=3`




## Financial Transactions

```shell
GET "https://api.jsonipsum.com/text/block/?fields=transaction,name,email,company&count=4"
```

> JSON Response

```json
[
    {
        "id": 0,
        "transaction": {
            "account": "7518704253130994",
            "name": "Home Loan Account",
            "amount": "8410.97",
            "type": "invoice",
            "confirmation": "K23o57Hc"
        },
        "name": "Orville Gulgowski",
        "email": "orville1981@jsonipsum.com",
        "company": "Corwin - Zemlak"
    },
    {
        "id": 1,
        "transaction": {
            "account": "2185643063443161",
            "name": "Investment Account",
            "amount": "2862.87",
            "type": "withdrawal",
            "confirmation": "A28gDdIX"
        },
        "name": "Brad Smitham",
        "email": "brad2004@jsonipsum.com",
        "company": "Heller, Beier and Crona"
    },
    {
        "id": 2,
        "transaction": {
        "account": "8831275442787859",
            "name": "Savings Account",
            "amount": "4798.06",
            "type": "withdrawal",
            "confirmation": "DR4zu8yJ"
        },
        "name": "Kacey Miller",
        "email": "kacey1985@jsonipsum.com",
        "company": "Hermiston - Johns"
    },
    {
        "id": 3,
        "transaction": {
            "account": "2828247903019933",
            "name": "Savings Account",
            "amount": "5807.67",
            "type": "invoice",
            "confirmation": "2hNvhQjf"
        },
        "name": "Alfonzo Weimann",
        "email": "alfonzo1991@jsonipsum.com",
        "company": "Deckow - Jaskolski"
    }
]
```

Example to retrieve a list of sample Financial Transaction data with a Transaction, Name, Email, and Company. Use the <a href="#block">block</a> endpoint, and pass both the <a href="#count">count</a> parameter and the <a href="#fields">fields</a> parameter with the desired supported values and options.

### HTTP Request
`GET https://api.jsonipsum.com/text/block/?fields=transaction,name,email,company&count=4`




## Location Markers

```shell
GET "https://api.jsonipsum.com/text/block/?fields=coordinates,address[city],address[country]&count=6"
```

> JSON Response

```json
[
    {
        "id": 0,
        "coordinates": {
            "latitude": "66.4377",
            "longitude": "-30.7154"
        },
        "city": "Laurettaburgh",
        "country": "Sierra Leone"
    },
    {
        "id": 1,
        "coordinates": {
            "latitude": "-64.9590",
            "longitude": "91.3858"
        },
        "city": "Schillerborough",
        "country": "Spain"
    },
    {
        "id": 2,
        "coordinates": {
            "latitude": "52.8188",
            "longitude": "-114.5157"
        },
        "city": "Port Jadenside",
        "country": "Zambia"
    },
    {
        "id": 3,
        "coordinates": {
            "latitude": "28.9935",
            "longitude": "-14.8029"
        },
        "city": "North Citlalliberg",
        "country": "Greenland"
    },
    {
        "id": 4,
        "coordinates": {
            "latitude": "6.8559",
            "longitude": "10.3666"
        },
        "city": "East Sterlingborough",
        "country": "Togo"
    },
    {
        "id": 5,
        "coordinates": {
            "latitude": "-68.1911",
            "longitude": "-178.5179"
        },
        "city": "Berthafort",
        "country": "South Africa"
    }
]
```

Example to retrieve a list of sample Map data with a Coordinates, City, and Country. Use the <a href="#block">block</a> endpoint, and pass both the <a href="#count">count</a> parameter and the <a href="#fields">fields</a> parameter with the desired supported values and options.

### HTTP Request
`GET https://api.jsonipsum.com/text/block/?fields=coordinates,address[city],address[country]&count=6`
