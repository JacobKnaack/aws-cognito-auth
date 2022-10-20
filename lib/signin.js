'use strict';

const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

function signin(username, email, password) {
  if (!username || !email || !password) {
    throw new Error('Input Validation Error: invalid cognito credentials');
  }
  const poolData = {
    UserPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
    ClientId: process.env.AWS_COGNITO_CLIENT_ID,
  }
  let credentials = {
    Email: email,
    Password: password
  } 
  const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(credentials);
  const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
  const userData = {
    Username: username,
    Pool: userPool
  }
  const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData)
  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function(result) {
      let accessToken = result.getAccessToken().getJwtToken();
      console.log('SUCCESS! ' + accessToken);
    },
    onFailure: function(err) {
      console.error('authentication error: ', err);
    }
  })
}

module.exports = signin;