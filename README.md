# REST API Book Library Manager

This is a simple book library manager application providing a REST
API using GET, POST, PUT and DELETE.

The entire application is contained within the `app.js` file.

## Table Structure

Table name : bookcollection

| field         | data type  |
| ------------- | -----------|
| id            | INT        |
| title         | VARCHAR    |
| author        | VARCHAR    |
| status        | VARCHAR    |
| genre         | VARCHAR    |

## Install

    npm install mysql dotenv body-parser express

    npm install morgan --save-dev

## Run the app

    npm run start

# REST API

The REST API to the example app is described below.

## Get list of Book

### Request

`GET /book/get`

http://localhost:8000/book/get

### Response

    HTTP/1.1 200 OK
    Status: 200 OK

    []

## Insert a New Book Data

### Request

`POST /book/post`

http://localhost:8000/book/post

### Response

    
    "status": 200,
    "response": 
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 8,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "",
        "protocol41": true,
        "changedRows": 0



    {"id":1,"title":"Foo","author":"new","status":"new","genre":"new"}

## Update a Book state

### Request

`PUT /book/update?id=`

PUT http://localhost:8000/book/update?id=
### Response

     "status": 200,
    "response": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 0,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "(Rows matched: 1  Changed: 1  Warnings: 0",
        "protocol41": true,
        "changedRows": 1
    }

    {"id":1,"title":"Foo","author":"new","status":"new","genre":"new"}


## Delete a Book data

### Request

`DELETE /book/delete?id=`

DELETE http://localhost:8000/book/delete?id=

### Response

     "status": 200,
    "response": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 0,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "",
        "protocol41": true,
        "changedRows": 0

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

`GET /bookcollection/genre?genre`

http://localhost:8000/bookcollection/genre?genre=fantasy

### Response

    HTTP/1.1 200 OK
    Status: 200 OK

    {"id":1,"title":"Foo","author":"new","status":"new","genre":"new"}


