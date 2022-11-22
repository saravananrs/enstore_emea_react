const request = require("request");
const OAuth = require("oauth-1.0a");
const crypto = require("crypto");
var CryptoJS = require("crypto-js");
const serverInstance = require("../config/axiosConfig")
const jwt = require("jwt-simple");

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
            x_auth_username: req.body.enlightenusername,
            x_auth_mode: "client_auth",
            x_auth_password: req.body.enlightenpassword,
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
grtTokenfromLogin = async (req, res) => {
    await serverInstance
      .post(
        `/rest/V1/integration/customer/token`,
        req.body
      )
      .then((response) => {
       
        return res.send(JSON.stringify(response.data));
      })
      .catch((error) => {
         console.log(error, "token");
      });
  };

module.exports = {
    enlightenOAuthLogin,
    grtTokenfromLogin,
};
