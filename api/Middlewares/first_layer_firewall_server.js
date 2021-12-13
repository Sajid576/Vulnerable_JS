const { firewall_server_base_url } = require("../lib/env");
const { post } = require("../Config/axios");

exports.callFirewallServer = (req, res, next) => {
  post(firewall_server_base_url + "/malicious_payloads", {
    payload_type: "sql",
    data: req.body,
  })
    .then((response) => {
      let checkNextLayer = response.data.body.result;
      if (checkNextLayer == true) {
        console.log("Proceed to 2nd layer");
        next();
      } else {
        res.json({
          message: "You are not authorized to access this",
        });
      }
    })
    .catch(function (err) {
      console.log(err);
    });
};
