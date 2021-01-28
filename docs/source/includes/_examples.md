# Examples
Pariatur adipisicing eiusmod esse aliquip reprehenderit labore culpa officia elit voluptate sint irure amet. Et nisi qui do incididunt dolore enim sit. Dolore sit nostrud id enim aliquip sunt dolor irure est culpa aliqua tempor consequat velit labore quis do.

## `GET` Lorem Ipsum

```shell
GET "https://api.jsonipsum.com/get/sentence/?_length=short"
```
> JSON Response

```json
[
    "Velit duis ad dolor ullamco velit."
]
```
```shell
GET "https://api.jsonipsum.com/get/sentence/?_count=4"
```
> JSON Response

```json
[
    "Sint culpa et eu ad et laborum elit aliquip est ea sit ipsum tempor nisi incididunt.",
    "Occaecat ut magna ullamco eiusmod minim exercitation in.",
    "Amet duis ad.",
    "Enim excepteur aliquip commodo qui."
]
```

The easiest way to start with the API is just to make a GET request to one of the direct lorem ipsum endpoints: [word](#word), [sentence](#sentence), [paragraph](#paragraph).



## `GET` Object Template

```shell
GET "https://api.jsonipsum.com/get/data/?_template=user"
```
> JSON Response

```json
[
    {
        "id": 1,
        "name": {
            "fullname": "Oren Lindgren",
            "firstname": "Oren",
            "lastname": "Lindgren"
        },
        "email": "oren1995@jsonipsum.com",
        "username": "oren1995",
        "address": {
            "street": "32184 Kiana Mountain",
            "city": "Jacobsfurt",
            "postal": "24751",
            "province": "Hawaii",
            "country": "Bosnia and Herzegovina",
            "countrycode": "KM"
        }
    }
]
```

Using the [data](#data) endpoint along with the [_template](#template) parameter, you can request pre-formatted JSON objects. If you pass additional key parameters, you can override any of the default keys/values.



## `GET` Custom Object

```shell
GET 'https://api.jsonipsum.com/get/data?_json={"title":"__sentence","body":"__paragraph","date":"__date(past)"}'
```
> JSON Response

```json
[
    {
        "id": 1,
        "title": "Culpa adipisicing ea proident labore mollit.",
        "body": "Lorem adipisicing consectetur fugiat Lorem nisi. Esse aliqua duis proident eiusmod voluptate commodo irure esse enim occaecat. Dolore elit dolor consectetur mollit et dolore aliqua culpa quis dolor ea proident sint. Magna veniam aliqua consectetur consequat dolor pariatur eu magna proident ipsum reprehenderit dolor duis Lorem culpa ad. Magna exercitation in commodo sunt in ex voluptate laborum quis dolor sint est exercitation tempor et. Eiusmod proident ea sint fugiat exercitation amet adipisicing nulla fugiat nulla ea enim dolor elit veniam sit qui. Exercitation nisi eiusmod ad nostrud et veniam incididunt dolore dolor et culpa elit aliqua ipsum.",
        "date": {
            "string": "2020-10-11",
            "timestamp": 1602374400000
        }    }
]
```

Using the [data](#data) endpoint along with the [_json](#json) parameter, you can pass in any JSON object, as a string. The API will parse key/value pairs and return the object in the response.

This example is using the provided [constructors](#constructors) as a way to randomly generate values for the given keys.


## `POST` Custom Object

```shell
POST 'https://api.jsonipsum.com/post/data'

body = {
    "title": "__sentence",
    "body": "__paragraph",
    "date": "__date(past)"
}
```
> JSON Response

```json
{
    "success": true,
    "status": 200,
    "body": [
        {
            "id": 101,
            "title": "Lorem sunt aliqua cupidatat aliqua anim anim deserunt minim sunt nostrud eiusmod Lorem ut esse cupidatat.",
            "body": "Sit est id aute incididunt reprehenderit labore aliqua incididunt ullamco amet irure consequat qui quis proident dolore. Do quis voluptate elit nisi amet dolor irure dolor quis Lorem ex occaecat. Dolore enim commodo dolore. Ea aliquip aliqua labore nulla nisi mollit ipsum amet elit commodo id ex nisi nisi reprehenderit. Occaecat incididunt deserunt proident in mollit tempor esse consequat cillum exercitation officia laborum non laboris. Anim eu nulla nulla. Commodo elit esse labore sunt ea duis sint consectetur tempor aliqua velit commodo est laborum deserunt. Elit laborum non voluptate cupidatat commodo pariatur minim excepteur laboris qui ut. Ad ex velit commodo eiusmod anim culpa quis. Elit tempor ullamco consectetur minim dolore cillum aute cupidatat mollit labore qui anim id.",
            "date": {
                "string": "2020-2-21",
                "timestamp": 1582264800000
            }
        }
    ]
}
```

Using the [data](#data) endpoint with a POST request, you can pass in any JSON object as the request body. The API will parse key/value pairs and return the object in the response.

This example is using the provided [constructors](#constructors) as a way to randomly generate values for the given keys.
