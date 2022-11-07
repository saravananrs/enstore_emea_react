const axios = require("axios");
const serverInstance =  require("../config/axiosConfig")
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
const Razorpay = require("razorpay"),
  getCategories = async (req, res) => {
    console.log("hellow");
    var config = {
      method: "get",
      url: `https://store-qa2.enphase.com/storefront/en-in/rest/V1/categories`,
      headers: {
        Authorization: "Bearer 12zns9crv9oi2qfsq5v98j9org6tfk6b",
      },
    };
    axios(config)
      .then(function (response) {
        let selected_categories = response.data.children_data.filter((data) =>
          [
            "Mikro-Wechselrichter",
            "Speicher",
            "Energiemanagement",
            "Kabel und Stecker",
            "Zubehör",
          ].includes(data.name)
        );
        return res.send(JSON.stringify(selected_categories));
      })
      .catch(function (error) {
        return res.send(error);
      });
  };
getAllData = async (req, res) => {
  var date = new Date();
  console.log(date.toISOString(), " Get all data")
  var productsToReturn = [];

  await serverInstance
    .get(`/rest/V1/categories`, {
      headers: {
        Authorization: "Bearer 12zns9crv9oi2qfsq5v98j9org6tfk6b",
      },
    })
    .then((response) => {
      let selected_categories = response.data.children_data.filter((data) =>
        [
          "Complete Solar Solution",
          "Solar Microkits",
          "Communication",
          "Cables and Connectors",
          "Accessories",
        ].includes(data.name)
      );

      let requests = selected_categories.map((id) => 
       
       new Promise((resolve,reject)=>{
        serverInstance.get(`/rest/V1/products?searchCriteria[filter_groups][0][filters][0][field]=category_id&searchCriteria[filter_groups][0][filters][0][value]=${id.id}&searchCriteria[filter_groups][0][filters][0][condition_type]=eq`, {
          headers: {
            Authorization: "Bearer 12zns9crv9oi2qfsq5v98j9org6tfk6b",
          },
        }).then((res)=>{
          resolve(res.data)
        })
        .catch((err)=>{
          reject(err)
        })
       })
        // let url = `https://store-qa2.enphase.com/storefront/en-in/rest/V1/products?searchCriteria[filter_groups][0][filters][0][field]=category_id&searchCriteria[filter_groups][0][filters][0][value]=${id.id}&searchCriteria[filter_groups][0][filters][0][condition_type]=eq`
        // return new Promise((resolve, reject) => {
        //   request(
        //     {
        //       uri: url,
        //       method: "GET",
        //       headers: {
        //         Authorization: "Bearer 12zns9crv9oi2qfsq5v98j9org6tfk6b",
        //       },
        //     },
        //     (err, res, body) => {
        //       console.log(res.data,'resres');
        //       console.log(body,'resbbb');
        //       if (err) {
        //         reject(err);
        //       }
        //       resolve(body);
        //     }
        //   );
        // });
      );
      Promise.all(requests)
        .then((body) => {
          body.forEach((res) => {
            if (res) var allProducts = res;
            productsToReturn.push(allProducts);
          });
          res.send({ selected_categories, productsToReturn });
          fs.writeFile(
            "../datas.json",
            JSON.stringify({ selected_categories, productsToReturn }),
            (err) => {
              if (err) console.log("Error writing file:", err);
            }
          );
        })
        .catch((err) => console.log(err));
    });
};
setInterval(()=>{
  var data = axios.get(`http://localhost:8000/api/allData`);
}, 600000)
getAllDataFromLocal = async (req, res) => {
  fs.readFile("../datas.json", function read(err, data) {
    if (err) {
      throw err;
    }
    const content = data;
    processFile(content);
  });

  function processFile(content) {
    const allLoc = content
    const allLocData = JSON.parse(allLoc);
    res.status(201).send(allLocData);
  }
};

getProducts = async (req, res) => {
  await serverInstance
    .get(
      `/rest/V1/products?searchCriteria[filter_groups][0][filters][0][field]=category_id&searchCriteria[filter_groups][0][filters][0][value]=${req.query.id}&searchCriteria[filter_groups][0][filters][0][condition_type]=eq`,
      {
        headers: {
          Authorization: "Bearer 12zns9crv9oi2qfsq5v98j9org6tfk6b",
        },
      }
    )
    .then((response) => {
      console.log("response", response.data);
      return res.send(JSON.stringify(response.data.items));
    })
    .catch((error) => {
      console.log(error);
      console.log(req);
    });
};
getProductByURLKey = async (req, res) => {
  await serverInstance
    .get(
      `/rest/V1/products?searchCriteria[filter_groups][0][filters][0][field]=url_key&searchCriteria[filter_groups][0][filters][0][value]=${req.query.id}&searchCriteria[filter_groups][0][filters][0][condition_type]=eq`,
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
getDiscountInformation = async (req, res) => {
  console.log(req.body.data,"body");
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
enlightenOAuthLogin = async function (req, res) {
  console.log("enlighten login method start");
  console.log("enlighten login method start");
  console.log(req.body, "body");
  var bytes = CryptoJS.AES.decrypt(req.body.enlightenpassword, "enlighten");
  console.log("bytes", bytes);
  console.log(`user name ${req.body.enlightenusername}`);
  console.log(`user name ${req.body.enlightenusername}`);
  var plaintext = bytes.toString(CryptoJS.enc.Utf8);
  console.log(`user password ${plaintext}`);
  console.log(`user password ${plaintext}` + "\r\n");
  var oauth = await authenticationOAuth();
  const postRequestData = {
    url: "https://api-qa2.enphaseenergy.com/oauth/access_token",
    method: "POST",
    data: {
      x_auth_username: "ayyapu@gmail.com",
      x_auth_mode: "client_auth",
      x_auth_password: "26Nov$2018",
    },
  };

  const getRequestDate = {
    url: "https://api-qa2.enphaseenergy.com/api/v2/users/self?expand=sites_info,installer_sites_data&per=50",
    method: "GET",
  };

  console.log("post data");
  console.log(postRequestData);
  console.log("get data");
  console.log(getRequestDate);
  request(
    {
      url: postRequestData.url,
      method: postRequestData.method,
      form: oauth.authorize(postRequestData),
    },
    function (error, response, body) {
      if (error) {
        console.log("error in oauth/access_token api");
        console.log(error);
      }
      try {
        var splitOauth = body.split("&");
        var oauth_token = splitOauth[0].split("oauth_token=");
        var oauth_token_secret = splitOauth[1].split("oauth_token_secret=");
        const token = {
          key: oauth_token[1],
          secret: oauth_token_secret[1],
        };
        console.log(`Oauth access_token api ${token}`);
        request(
          {
            url: getRequestDate.url,
            method: getRequestDate.method,
            form: oauth.authorize(getRequestDate, token),
          },
          async function (error, response, body) {
            if (error) {
              console.log("error in user info api");
              console.log(`${error}`);
              console.log(`${error}`);
            }
            if (response["statusMessage"] == "OK") {
              console.log(`body ${body}` + "\r\n");
              var jsonParse = JSON.parse(body);
              jsonParse.token1 = oauth_token[1];
              jsonParse.token2 = oauth_token_secret[1];
              console.log(`user info api is success`);
              let jwtToken = await generateJwtToken(
                oauth,
                token,
                jsonParse,
                req.body.enlightenusername,
                plaintext
              );
              if (jwtToken.success) {
                console.log(`setting redirect token ${jwtToken.token}`);
                jsonParse.redirect_token = jwtToken.token;
              }
              res.send(jsonParse);
            } else {
              console.log(`user info api is success`);
              console.log(`user info api is success`);
              res.send({
                reason: response["statusCode"],
                message: [response["statusMessage"]],
              });
            }
          }
        );
      } catch (error) {
        console.log(body);
        res.send(body);
      }
    }
  );
};
async function generateJwtToken(oauth, token, userDetails, userName, password) {
  return new Promise(async (resolve, reject) => {
    let body = { username: userName, password: password };
    const getRequestData = {
      url: "https://api-qa2.enphaseenergy.com/api/v2/systems/sm_bearer_token",
      method: "POST",
      data: body,
    };
    var options = {
      url: getRequestData.url,
      method: getRequestData.method,
      form: oauth.authorize(getRequestData, token),
    };
    request(options, function (error, response, body) {
      if (error) {
        let resp = { success: false, token: "" };
        return reject(resp);
      }
      if (body) {
        var jsonParse = JSON.parse(body);
        let obj = {
          data: {
            email_id: userName,
            user_id: userDetails.user_id,
            client_app: "encare",
            first_name: userDetails.first_name,
            last_name: userDetails.last_name,
            bearer_token: jsonParse.token,
          },
        };
        let secret = "eNsToReEnPh@Se";
        let algorithm = "HS256";
        let jwtResp = jwt.encode(obj, secret, algorithm);
        let resp = { success: true, token: jwtResp };
        return resolve(resp);
      } else {
        let resp = { success: false, token: "" };
        return reject(resp);
      }
    });
  });
}
async function authenticationOAuth() {
  console.log("authentication Oauth method start");
  var oauth;
  try {
    oauth = OAuth({
      consumer: {
        key: "oDR6ZXA8scXyVE7E5hPdMRcdftqtGq8FXLbYgchr",
        secret: "yKH5LQbklmR0GfDU2wWwVL6oteJ4KnPCe3i25ph4",
      },
      signature_method: "HMAC-SHA1",
      hash_function(base_string, key) {
        return crypto
          .createHmac("sha1", key)
          .update(base_string)
          .digest("base64");
      },
    });
    console.log("successfully created oauth");
  } catch (error) {
    console.log(error.message);
  }
  return oauth;
}
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
module.exports = {
  getCategories,
  getAllDataFromLocal,
  getProducts,
  enlightenOAuthLogin,
  getProductByURLKey,
  getQuoteId,
  getCartDetailByQuoteId,
  getShippingEstimation,
  getShippingInformation,
  createOrder,
  getAllData,
  getAlRegionData,
  getDiscountInformation,
  getSavedShippingAddress,
  razorPayCreateOrderId,
};
