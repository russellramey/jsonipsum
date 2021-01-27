# Parameters

## Length

```shell
GET "https://api.jsonipsum.com/get/sentence/?_length=short"
```
> JSON Response

```json
[
    "Velit duis ad dolor ullamco velit."
]
```

Set the length of the text returned for the specific endpoint.

### Supported Endpoints

[sentence](#sentence) | [paragraph](#paragraph)

### HTTP Request

`GET https://api.jsonipsum.com/text/sentence/?_length=value`

Value | Description
--------- | -----------
short | Returns shorter length text <br>_3-6 word sentences, 3-6 sentences in a paragraph_
medium | Returns medium length text. <br>_6-12 word sentences, 5-8 sentences in a paragraph_
long | Returns longer length text. <br>_12-18 word sentences, 7-12 sentences in a paragraph_
rand | Returns random length text. <br>_Default. 3-18 word sentences, 3-12 sentences in a paragraph_




## Count

```shell
GET "https://api.jsonipsum.com/get/paragraph/?_count=3"
```
> JSON Response

```json
[
    "Sint sit ipsum do officia magna in. In aliqua do quis ut eu excepteur consequat proident ipsum cillum dolore. Voluptate sint aliqua officia anim voluptate elit laborum qui mollit non in cupidatat sit nulla.",
    "Duis velit aliqua anim nostrud laboris cupidatat eu enim. Incididunt et duis pariatur aute velit elit Lorem commodo dolore sint dolore et consectetur. Occaecat labore sit tempor do aliqua proident. Aliqua ipsum amet magna aliqua labore eu officia mollit anim laborum mollit aute id culpa laborum aliqua ad. Laborum magna laboris laborum voluptate ipsum enim duis pariatur. Cupidatat aliquip adipisicing culpa sunt mollit irure consectetur cillum aliquip sit do eiusmod consectetur non elit velit in. Nostrud aliquip aute velit sint laboris sit. Magna veniam cillum in nostrud in enim mollit eu dolore excepteur pariatur do laboris. Occaecat nulla pariatur eu eu est est non pariatur adipisicing proident irure. Exercitation anim nulla. Quis proident cupidatat et nostrud sint eu consequat ipsum id excepteur aliqua magna anim ad tempor officia. Culpa do ut consectetur velit aliquip in ut ad et eu commodo in do cupidatat.",
    "Mollit officia nostrud mollit occaecat consectetur pariatur. Pariatur proident non irure ex minim. Sint voluptate eu elit tempor Lorem et excepteur aliqua reprehenderit nisi duis Lorem. Nostrud sunt voluptate ea eiusmod. Laborum ad ut ea ea eu tempor culpa duis eu adipisicing ex elit aliquip Lorem enim sint adipisicing. Dolor sint deserunt elit aute excepteur officia ipsum. Consequat eiusmod est reprehenderit eiusmod ex dolore. Ipsum duis irure ipsum enim qui veniam dolor officia culpa cillum eiusmod. In reprehenderit eu consequat consequat culpa sit est esse. Qui ullamco Lorem irure ex consequat proident laborum. Adipisicing ex irure proident deserunt veniam."
]
```

Determine the number of items to return for a given endpoint.

### Supported Endpoints

[word](#word) | [sentence](#sentence) | [paragraph](#paragraph) | [data](#data)

### HTTP Request

`GET https://api.jsonipsum.com/text/paragraph/?_count=3`

Value | Description
--------- | -----------
1-100 | Returns the requested number of items.

<aside class="notice">
The <em>Count</em> parameter will add additional indexes to the returned json object.
</aside>
