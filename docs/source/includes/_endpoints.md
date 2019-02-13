# Endpoints

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
<a href="#length">length</a> | small<br>medium<br>large | Determine the length of the sentence returned.<br><em>Default: medium</em>
<a href="#count">count</a> | 1-100 | Set the number of sentences to be returned. <br><em>Default: 1</em>

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

Generate a random paragraph. With this endpoint multiple sentences will be returned instead of just a single sentence like with the <a href="#sentence">Sentence</a> endpoint.

### HTTP Request

`GET https://api.jsonipsum.com/text/paragraph/`

Parameter | Value | Description
--------- | ------- | -----------
<a href="#length">length</a> | small<br>medium<br>large | Determine the length of the sentence as well as the number of sentences in the paragraph. <br><em>Default: medium</em>
<a href="#count">count</a> | 1-100 | Set the number of paragraphs to be returned. <br><em>Default: 1</em>

<aside class="notice">
Include parameters as query strings on the initial GET request url
</aside>

## Block

```shell
GET "https://api.jsonipsum.com/text/block/"
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

`GET https://api.jsonipsum.com/text/block/`

Parameter | Value | Description
--------- | ------- | -----------
<a href="#count">count</a> | 1-100 | Set the number of items to be returned.<br> <em>Default: 1</em>
<a href="#regions">region</a> | <a href="#fields">see all</a> | Set the region to localize the returned results.<br><em>Default: en</em>
<a href="#fields">fields</a> | <a href="#fields">see all</a> | If true, returned text will be wrapped in p tags.<br><em>Default: text, title</em>

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
<a href="#count">count</a> | 1-100 | Set the number of items to be returned.<br> <em>Default: 1</em>
<a href="#tags">tags</a> | <a href="#tags">see all</a> | Requests different type of HTML tags from the endpoint.<br><em>Default: p</em>
<a href="#length">length</a> | small<br>medium<br>large | Determine the length of the text returned. <br><em>Default: medium</em>

<aside class="notice">
Pass parameters as simple query strings on the GET request url
</aside>
<aside class="notice">
With this endpoint, the <em>Length</em> parameter only applies to the <em>Tag</em> value "p".
</aside>
