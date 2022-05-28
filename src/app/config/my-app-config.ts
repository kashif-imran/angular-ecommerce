export default {

  oidc: {
    clientId: '0oa57nenlnYTXHJ7m5d7', // from Okta dashboard
    issuer: 'https://dev-65567071.okta.com/oauth2/default', //dev-65567071.okta.com, Okta domain from okta dashboard
    redirectUri: 'http://localhost:4200/login/callback',
    scopes: ['openid', 'profile', 'email'] //scopes provide access to info about a user.
    //openid: required for authentication requests
    //profile: user's first name, last name, phone etc
    // email: user's email address

  }
}
