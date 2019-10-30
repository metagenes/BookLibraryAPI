# REST API Book Library Manager

This is a simple book library manager application providing a REST
API using GET, POST, PUT and DELETE.

The entire application is contained within the `app.js` file.

## Table Structure
| field         | data type  |
| ------------- | -----------|
| id            | INT        |
| title         | VARCHAR    |
| author        | VARCHAR    |
| status        | VARCHAR    |
| genre         | VARCHAR    |

## Install

    npm install mysql dotenv body-parser morgan express

## Run the app

    npm run start

# REST API

The REST API to the example app is described below.

## Get list of Things

### Request

`GET /book/`

http://localhost:8000/book/

### Response

    HTTP/1.1 200 OK
    Status: 200 OK

    []

## Insert a New Book Data

### Request

`POST /book/`

http://localhost:8000/book

### Response

    HTTP/1.1 201 Created
    Status: 201 Created


    {"id":1,"title":"Foo","author":"new","status":"new","genre":"new"}

## Update a Book state

### Request

`PUT /book?id=`

PUT http://localhost:8000/book?id=
### Response

    HTTP/1.1 200 OK
    Status: 200 OK

    {"id":1,"title":"Foo","author":"new","status":"new","genre":"new"}


## Delete a Book data

### Request

`DELETE /book?id=`

DELETE http://localhost:8000/book?id=

### Response

    HTTP/1.1 204 No Content
    Status: 204 No Content

## Get a specific status

### Request

`GET /bookcollection?status=`

http://localhost:8000/bookcollection?status=Available

### Response

    HTTP/1.1 200 OK
    Status: 200 OK

    {"id":1,"title":"Foo","author":"new","status":"new","genre":"new"}

## Get a specific Genre

### Request

`GET /bookgenre?genre`

http://localhost:8000/bookgenre?genre=fantasy

### Response

    HTTP/1.1 200 OK
    Status: 200 OK

    {"id":1,"title":"Foo","author":"new","status":"new","genre":"new"}


