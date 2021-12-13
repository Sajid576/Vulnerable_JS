const { firewall_server_base_url } = require("../lib/env");
const { post } = require("../Config/axios");

exports.callFirewallServer = (query, query_type) => {
  let url = query_type == "sql" ? "/sql_injection" : "/nosql_injection";

  return new Promise((resolve, reject) => {
    post(firewall_server_base_url + url, {
      query,
    })
      .then((response) => {
        let willExecuteQuery = response.data.body.result;
        if (willExecuteQuery == 0) {
          resolve(false);
          console.log("Malicious code not found");
        } else {
          resolve(true);
        }
      })
      .catch(function (err) {
        console.log(err);
        reject(err);
      });
  });
};
