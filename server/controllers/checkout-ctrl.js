const axios = require("axios");
const serverInstance = require("../config/axiosConfig")
const fs = require("fs");
// const t = require('../../')
const request = require("request");
const OAuth = require("oauth-1.0a");
const crypto = require("crypto");
var CryptoJS = require("crypto-js");
const SUCCESS_STATUS = "OK";
const jwt = require("jwt-simple");
const { config } = require("process");
const serverBaseUrl = require("../config/serverConfig");
const Razorpay = require("razorpay")

//Create cart id.
getQuoteId = async (req, res) => {
  await serverInstance
    .post(
      "/rest/V1/guest-carts/",
      {
        headers: {
          Authorization: "Bearer 12zns9crv9oi2qfsq5v98j9org6tfk6b",
        },
      }
    )
    .then((response) => {
      return res.send(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
      console.log(req);
    });
};

//Get cart details using quote id.
getCartDetailByQuoteId = async (req, res) => {
  await serverInstance
    .post(
      `/rest/V1/guest-carts/${req.body.data}/items`,
      req.body,
      {
        headers: {
          Authorization: "Bearer 12zns9crv9oi2qfsq5v98j9org6tfk6b",
        },
      }
    )
    .then((response) => {
      return res.send(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error, "xfg");
    });
};

//Get saved Region/State data.
getAlRegionData = async (req, res) => {
  fs.readFile("./region.json", function read(err, data) {
    if (err) {
      throw err;
    }
    const content = data;
    processFile(content);
  });

  function processFile(content) {
    const allRegData = JSON.parse(content);
    res.send(allRegData);
  }
};

//Get saved shipping address from Enstore.
getSavedShippingAddress = async (req, res) => {
  await serverInstance
    .get(
      `/rest/V1/customers/search?searchCriteria[filterGroups][0][filters][0][field]=email&searchCriteria[filterGroups][0][filters][0][value]=${req.body.email}&searchCriteria[filterGroups][0][filters][0][condition_type]=eq`,
      {
        headers: {
          Authorization: "Bearer 12zns9crv9oi2qfsq5v98j9org6tfk6b",
        },
      }
    )
    .then((response) => {
      return res.send(JSON.stringify(response.data.items));
    })
    .catch((error) => {
      console.log(error);
      console.log(req);
    });
};

//Get shipping method based on shipping address.
getShippingEstimation = async (req, res) => {
  await serverInstance
    .post(
      `/rest/V1/guest-carts/${req.body.data}/estimate-shipping-methods`,
      req.body,
      {
        headers: {
          Authorization: "Bearer 12zns9crv9oi2qfsq5v98j9org6tfk6b",
        },
      }
    )
    .then((response) => {
      return res.send(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
      console.log(req);
    });
};

//Get shipping information based on shipping method.
getShippingInformation = async (req, res) => {
  await serverInstance
    .post(
      `/rest/V1/guest-carts/${req.body.data}/shipping-information`,
      req.body,
      {
        headers: {
          Authorization: "Bearer 12zns9crv9oi2qfsq5v98j9org6tfk6b",
        },
      }
    )
    .then((response) => {
      return res.send(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
      console.log(req);
    });
};

//Get Discount information based on coupen code.
getDiscountInformation = async (req, res) => {
  console.log(req.body.data, "body");
  var config = {
    method: 'put',
    url: `https://store-qa2.enphase.com/storefront/en-in/rest/V1/carts/${req.body.data}/coupons/${req.body.coupon}`,
    headers: {
      'Authorization': 'Bearer 12zns9crv9oi2qfsq5v98j9org6tfk6b',
      'Content-Type': 'application/json',
    },
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res.send(response.data)
    })
    .catch(function (error) {
      // console.log(error.response.data,"data");
      res.send(error.response.data)
    });

};

//Create razorpay order id.
razorPayCreateOrderId = async function (req, res) {
  console.log("initating razor pay");
  var body = req.body;
  var instance = new Razorpay({
    key_id: "rzp_test_OwiTuxcL7pfjE3",
    key_secret: "6pfUJeDBFlj64Nr8SsY90hA3",
  });

  console.log("creating the order");

  instance.orders.create(body, function (err, order) {
    if (err) {
      console.log("error in creating the payment");
      console.log(err);
      return res.status(500).send({
        message: err.message,
      });
    }
    order.key_id = instance.key_id;
    res.send(order);
    return;
  });
};

//Create order in Enstore.
createOrder = async (req, res) => {
  await serverInstance
    .post(
      `/rest/V1/guest-carts/${req.body.data}/payment-information`,
      req.body,
      {
        headers: {
          Authorization: "Bearer 12zns9crv9oi2qfsq5v98j9org6tfk6b",
        },
      }
    )
    .then(async (response) => {
      await serverInstance
        .get(
          `/rest/V1/orders?searchCriteria[filter_groups][0][filters][0][field]=entity_id&searchCriteria[filter_groups][0][filters][0][value]=${response.data}&searchCriteria[filter_groups][0][filters][0][condition_type]=eq`,
          {
            headers: {
              Authorization: "Bearer 12zns9crv9oi2qfsq5v98j9org6tfk6b",
            },
          }
        )
        .then((orderResponse) => {
          return res.send(JSON.stringify(orderResponse.data.items[0]));
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
};

// getSandBoxCheckout = async (req, res) => {
//   await serverInstance
//   .post(
//     `https://api-sandbox.bolt.com/v2/checkout`,
//     {
//       headers: {
//         Authorization: "Bearer 12zns9crv9oi2qfsq5v98j9org6tfk6b",
//       },
//       params:{
//         publishable_key:'JMO9OVXaOifn.UT8x7JrS5pS2.1d7f8ec9a644998c1f49682601f40b024868d8e62c0f93d79b26a3ebbe2dc5f6'
//       }
//     }
//   )
//   .then((response) => {
//     return res.send(JSON.stringify(response.data));
//   })
//   .catch((error) => {
//     console.log(error,"err");
//     console.log(req);
//   });
// };

module.exports = {
  getQuoteId,
  getCartDetailByQuoteId,
  getAlRegionData,
  getSavedShippingAddress,
  getShippingEstimation,
  getShippingInformation,
  getDiscountInformation,
  razorPayCreateOrderId,
  createOrder
};
