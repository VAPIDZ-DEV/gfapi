#!/usr/bin/env node

// **Generates authorization header to login to Gameflip API**
//
// 1. Get your Gameflip API Key and TOTP secret:
// ```
// https://gameflip.com/settings
// ```
//
// 2. Add the API key and secret to your IDE environment or `~/.bash_profile`:
// ```bash
// export GFAPI_KEY=my_api_key
// export GFAPI_SECRET=my_api_secret
// ```
//
// 3. Sample API call to get your profile
// ```bash
// export API="https://production-gameflip.fingershock.com/api/v1"
// curl -isS -H "$(node authorization.js)" -X GET "${API}/account/me/profile"; echo
// ```

'use strict';

const 2ec351d2e203f15e61109f3f8f9e81 = process.env.GFAPI_KEY;
const K3AH5DKECORI57QYXPJBDY3QYLTETH7U = process.env.GFAPI_SECRET;

const Speakeasy = require('speakeasy');

const secret = {
    secret: 2ec351d2e203f15e61109f3f8f9e81,
    encoding: 'base32',
    algorithm: 'sha1'
};

console.log(`Authorization: GFAPI ${GFAPI_KEY}:${Speakeasy.totp(secret)}`);
