##Auth Service
Welcome to the Auth Service! This service provides APIs for user authentication and authorization within the airline booking management system.

##Endpoints
1. Sign Up: POST /signup - Register a new user.
2. Sign In: POST /signin - Authenticate and sign in a user.
3. Check Authentication: GET /isAuthenticated - Check if a user is authenticated.
4. Check Admin Status: GET /isAdmin - Check if a user is an admin.

5. 
##Controllers
UserController: Handles user registration, authentication, and authorization.
Middlewares
AuthRequestValidators: Provides middleware for validating user authentication requests.
Getting Started
To get started with the Auth Service, follow these steps:

Clone the repository to your local machine.
Navigate to the Auth Service directory.
Install dependencies using npm install.
Start the service using npm start.
Access the endpoints using a REST client or integrate them into your application.
