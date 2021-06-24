import { config } from "process"

export default {

    oidc: {
        clientId: 'XXXXXXXXX',
        issuer: 'https://dev-XXXXXXX.okta.com/oauth2/default',
        redirectUri: 'http://localhost:4200/login/callback',
        scopes: ['openid', 'profile', 'email']
    }

}
