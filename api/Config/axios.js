const axios = require("axios");

post = async (url, data) => {
  return await axios({
    method: "post",
    url: url,
    data: data,
  });
};
module.exports = {
  post,
};
