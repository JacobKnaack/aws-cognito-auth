'use strict';

require('dotenv').config();
const signup = require('./lib/signup.js');
const signin = require('./lib/signin.js');

let command = process.argv[2];
let username = null;
let email = null;
let password = null;

switch(command) {
  case 'signup':
    console.log("SIGN UP USER: " + email);
    [email, password] = process.argv[3].split(':');
    signup(email, password);
    break;
  case 'signin':
    [username, email, password] = process.argv[3].split(':');
    console.log("SIGN IN USER: " + email);
    signin(username, email, password);
    break;
  default:
    throw new Error('Command Validation Error');
}
