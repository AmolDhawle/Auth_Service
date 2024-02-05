# Auth Service
Welcome to the Auth Service! This service provides APIs for user authentication and authorization within the airline booking management system.

## Endpoints
1. Sign Up: POST /signup - Register a new user.
2. Sign In: POST /signin - Authenticate and sign in a user.
3. Check Authentication: GET /isAuthenticated - Check if a user is authenticated.
4. Check Admin Status: GET /isAdmin - Check if a user is an admin.

# Getting Started
To get started with the Auth Service, follow these steps:

## Project setup

Clone the repository to your local machine.
Navigate to the Auth Service directory.
Install dependencies using `npm install`.
-Create a `.env` file in the root directory and add the following environment variable
    -`PORT: 3000`
-Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
    "development": {
        "username": <YOUR_DB_LOGIN_NAME>,
        "password": <YOUR_DB_PASSWORD>,
        "database": "Flights_Search_DB",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
}
```

-Once you've added  your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
and then execute  `npx sequelize db:migrate`.
Start the service using npm start.
Access the endpoints using a REST client or integrate them into your application.
    
    - A flight belongs to one airport but one airplane can be used in multiple flights
    - A city has many airports but one airport belongs to a city
    - One airport can have many flights but a flight belongs to one airport
