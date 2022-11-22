const axios = require("axios");
const serverInstance = axios.create({baseURL: 'https://store-qa2.enphase.com/storefront/en-in'});

serverInstance.defaults.headers.common['Authorization'] = 'Bearer 12zns9crv9oi2qfsq5v98j9org6tfk6b';

module.exports = serverInstance
