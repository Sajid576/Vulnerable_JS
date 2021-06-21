const User = require('../model/User');
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
  
  User.find({ 'username': req.body.username, 'password': req.body.password })
    .then((response) => {
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
  //   let writerX = req.body.writer;
  User.find({ username: req.body.username })
    .then((response) => {
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
User.findOneAndDelete({
  _id: id,
})
  .then((response) => {
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


