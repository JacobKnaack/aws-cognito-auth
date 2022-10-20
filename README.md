# Client Side AWS Cognito Authentication

libraries for signin and signup on AWS Cognito.

## Setup

Create a new User Pool and Client Application via AWS Cognito.

## Signup

Uses an email and password to create a new user account for a given User Pool and Client on AWS Cognito.

### Email Verification

HTTP GET `https://<your-app-domain>/confirmUser`

* Request Query Parameters:
  * `client_id`: the Client ID string created on AWS Cognito.
  * `user_name`: The identification String for the User Pool created on AWS, can be an email or username.
  * `confirmation_code`: The confirmation received via and email or SMS.

### Signin

Convert an `Email`, `Username`, and `Password` of a registered user into a JWT for authentication.

#### Parameters

* Username {String}
* Email {String}
* Password {String}
