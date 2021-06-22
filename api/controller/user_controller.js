const User = require('../model/User');
const csv_model = require('../model/csv_model');
const utilities = require('../utility/utilities');
const ObjectId = require('mongodb').ObjectID;

exports.signup = (req, res) => {
    let { username, password, category } = req.body

    let id = new ObjectId();

    let user = new User({
        _id: new ObjectId(id),
        username, password, category
    })
 
    user.save()
        .then(response => {
              res.json(response) ;
              
        })
        .catch(e => {
            console.log(e)
            res.json({
                message: 'Error occured!'
            })
        })

}
    


exports.login = (req, res) => {
  
  const query="User.find({ 'username':"+JSON.stringify( req.body.username )+", 'password':"+ JSON.stringify(req.body.password)+" })";

  User.find({ 'username': req.body.username, 'password': req.body.password })
    .then((response) => {
       
        csv_model.query=query;
        csv_model.response=JSON.stringify(response);
        utilities.csvStore(csv_model);
        res.json(response);

    })
    .catch((e) => {
      console.log(e);
      res.json({
        message: "Error Occurred",
      });
    });
};

exports.getUserByUserName = (req, res) => {
  console.log("sfsfs", req.body.username);
 
  const query= "User.find({ username:"+ req.body.username+" });";
  User.find({ username: req.body.username })
    .then((response) => {
      
      csv_model.query=query;
      csv_model.response=JSON.stringify(response);;
      utilities.csvStore(csv_model);
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
    csv_model.query=query;
    csv_model.response=JSON.stringify(response);;
    utilities.csvStore(csv_model);
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


