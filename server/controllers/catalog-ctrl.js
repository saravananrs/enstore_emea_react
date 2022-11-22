const axios = require("axios");
const serverInstance = require("../config/axiosConfig");
const fs = require("fs");
const request = require("request");
//const { config } = require("process");
const serverBaseUrl = require("../config/serverConfig");

//Get all catagory and catahory related product data from Enstore.
getAllData = async (req, res) => {
  var date = new Date();
  console.log(date.toISOString(), " Get all data");
  var productsToReturn = [];

  await serverInstance
    .get(`/rest/V1/categories`)
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

      let requests = selected_categories.map(
        (id) =>
          new Promise((resolve, reject) => {
            serverInstance
              .get(
                `/rest/V1/products?searchCriteria[filter_groups][0][filters][0][field]=category_id&searchCriteria[filter_groups][0][filters][0][value]=${id.id}&searchCriteria[filter_groups][0][filters][0][condition_type]=eq`
              )
              .then((res) => {
                resolve(res.data);
              })
              .catch((err) => {
                reject(err);
              });
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
            "../enstoreCatalogData.json",
            JSON.stringify({ selected_categories, productsToReturn }),
            (err) => {
              if (err) console.log("Error writing file:", err);
            }
          );
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => {
      console.log(err, "ert");
      res.send(err.data);
    });
};

//Every 10min fetch the catalog data from Enstore and save it in local.
setInterval(() => {
  var data = axios.get(`http://localhost:8000/api/catalog/allData`);
}, 600000);

//Get all data from local catalog data.
getAllDataFromLocal = async (req, res) => {
  fs.readFile("../enstoreCatalogData.json", function read(err, data) {
    if (err) {
      throw err;
    }
    const content = data;
    processFile(content);
  });

  function processFile(content) {
    const allLoc = content;
    const allLocData = JSON.parse(allLoc);
    res.status(201).send(allLocData);
  }
};

//Get all Category form Enstore.
getCategories = async (req, res) => {
  await serverInstance
    .get(`rest/V1/categories`)
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

//Get all prodcut based on category id.
getProducts = async (req, res) => {
  await serverInstance
    .get(
      `/rest/V1/products?searchCriteria[filter_groups][0][filters][0][field]=category_id&searchCriteria[filter_groups][0][filters][0][value]=${req.query.id}&searchCriteria[filter_groups][0][filters][0][condition_type]=eq`
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

//Get product details based on URL key.
getProductByURLKey = async (req, res) => {
  await serverInstance
    .get(
      `/rest/V1/products?searchCriteria[filter_groups][0][filters][0][field]=url_key&searchCriteria[filter_groups][0][filters][0][value]=${req.query.id}&searchCriteria[filter_groups][0][filters][0][condition_type]=eq`
    )
    .then((response) => {
      return res.send(JSON.stringify(response.data.items));
    })
    .catch((error) => {
      console.log(error);
      console.log(req);
    });
};

//update cart items
updateCartDetailByQuoteId = async (req, res) => {
  await serverInstance
    .post(`/rest/V1/guest-carts/${req.body.quote_id}/items/`, req.body)
    .then((response) => {
      return res.status(200).send(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error, "update");
    });
};

// remove cart items
removeCartDetailByQuoteId = async (req, res) => {
  await serverInstance
    .delete(
      `/rest/V1/guest-carts/${req.body.quote_id}/items/${req.body.item_id}`,
      {
        headers: {
          Authorization: "Bearer 12zns9crv9oi2qfsq5v98j9org6tfk6b",
        },
      }
    )
    .then((response) => {
      return res.status(200).send(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error, "remove");
    });
};
module.exports = {
  getAllData,
  getAllDataFromLocal,
  getCategories,
  getProducts,
  getProductByURLKey,
  updateCartDetailByQuoteId,
  removeCartDetailByQuoteId,
};
