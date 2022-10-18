const axios = require("axios");
const serverInstance = axios.create({baseURL: 'https://store-qa2.enphase.com/storefront/en-in'});

module.exports = serverInstance
