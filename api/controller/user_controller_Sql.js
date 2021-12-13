const User = require('../model/user');

const utilities = require('../utility/utilities');
const pool = require('../Config/postgresql_connection')
const {
  callFirewallServer,
} = require("../Middlewares/second_layer_firewall_server");

exports.signup = (req, res) => {
  const id = Math.floor(Math.random() * 1000);
  console.log("inserting data into Postgresql");
  const query = `INSERT INTO Users (uid,username,password) VALUES ("${id}","${req.body.username}","${req.body.password}")`;

  console.log(query);
  callFirewallServer(query, "sql").then((isMalicious) => {
    if (!isMalicious) {
      pool.query(query, function (err, result, fields) {
        if (err) {
          console.log("error running query", err);
          res.json(err.message);
        } else {
          res.status(200).json(result["rows"]);
        }
      });
    } else {
      res.json({
        message: "You are not authorized to access this",
      });
    }
  });
};

exports.login = (req, res) => {
  const query =
    "select * from Users where username='" +
    req.body.username +
    "' and password='" +
    req.body.password +
    "'";

  // const username = "" or ""="";
  // const query = "select * from Users where username='" + username + "' and password='" + username + "'"
  console.log(query);
  pool.query(query, function (err, result, fields) {
    if (err) {
      console.log("error running query", err);
      res.json(err.message);
    } else {
      utilities.storeSQLCSV({
        query: query,
        response: result["rows"],
      });
      res.status(200).json(result["rows"]);
    }
  });
};

exports.getUserByLength = (req, res) => {
 
  const query= "User.find({ username:"+ req.body.username+" });";
  User.find({where: function(){
            return this.age == 23
              
  } })
    .then((response) => {
      
      utilities.storeSQLCSV({
        query: query,
        response: result["rows"]
    });
      res.json(response);
    })
    .catch((e) => {
      console.log(e);
      res.json({
        message: "Error Occurred",
      });
    });
};

exports.deleteUser = (req, res) => {
  // console.log("hlw")
let { id } = req.body.id;
const query="User.findOneAndDelete({_id:"+ id+"})";

User.findOneAndDelete({_id: id,})
  .then((response) => {
    utilities.storeSQLCSV({
      query: query,
      response: result["rows"]
  });
    res.json(response);
  })
  .catch((e) => {
    console.log(e);
    res.json({
      message: "Error Occurred",
    });
  });
};

exports.getAllUsers = (req, res) => {
    User.find()
        .then(response => {
            res.json(response)
            // addExcelData(res)
        })
        .catch(e => {
            console.log(e)
            res.json({
                message: 'Error Occurred'
            })
        })
}


