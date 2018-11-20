# personalBooksNode

Step I:
Intialize the node

> npm init --yes

Step II:
create index.js using cmd

> type nul>index.js

Step III:
Test your app using writing the console message

Step IV:
To create the Node server that should listen to port : 7007

for this you need to have EXPRESS

> npm i express

step V:
Start writing REST APIs...

step VI:
set environemnt the below environment vairiables to local machine,

> set NODE_ENV=development (You can set environemnt like Production/Development -- Make sure the "Config" must consists of respective .json file with respective configuration)
> set PORT=5050 (This is optional you may modify - if not set it use the default)
> set DB_CON=m<Mongo DB connection string> (Please get the connection string from MongoDB environment)
> set personalBooks_jwtPrivateKey=pruTest12E4FG ((This is private key use to create Java Script Token - feel free to change as per your need))

Note : Incase of heroku deployment plese prefix with "heroku config:" for example,

> set heroku config:NODE_ENV=development

step VII:
set the configuration settings

> npm i config

step VIII:
install the MongoDB

> npm i mongoose

step IX:
Coonected to DB and create the seperate startup for db connection - Single responsibility principle

step X:
Implement the custom middleware function for async and error

step XI:
Created the Model and Router for Books

step XII: testing of the API get and post using Postman tool
My suggestion is to use Postman tool to test,
i. GET http://localhost:5050/api/books (fetch all books from Mongo DB)
ii. POST http://localhost:5050/api/books (add the book to Mongo DB)
iii.POST http://localhost:5050/api/users (register the new user)
iV. POST http://localhost:5050/api/auth (login the user using - username and password : this shoul return the JSON Web Token)

Please pass the for POST request ii, iii and iV respectively,
ii.
{
"name":"<Book Title>",
"description": "<Book Description>",
"fulldetails":"<Book details upto 2000 charecters>"
}

iii.
{
"name":"username5",
"email":"username@email.com",
"password":"<password>"
}

iV:

    "email":"username@email.com",
    "password":"<password>"

}

Note : for all post respect, if they are marked as auth then you need to set in Header section
key: x-auth-token
value: <JWT token>

Reachout to me in case of any query: amjadk12@gmail.com
