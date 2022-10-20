'use strict';

const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

function signup(email, password) {

  if (!email || !password) {
    throw new Error('Input Validation Error : email or password invalid');
  }
  const poolData = {
    UserPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
    ClientId: process.env.AWS_COGNITO_CLIENT_ID,
  }

  const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
  const dataEmail = {
    Name: 'email',
    Value: email
  }
  const attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);

  userPool.signUp(email, password, [attributeEmail], null, (err, data) => {
    if (err) {
      console.error(err);
    }
    let user = data.user;
    console.log('user signed up :', user);
  })
}

module.exports = signup;