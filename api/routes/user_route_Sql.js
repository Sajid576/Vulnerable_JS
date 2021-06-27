const express = require('express');
const router  = express.Router();
const user_controller=require('../controller/user_controller_Sql');


router.post('/signup', user_controller.signup);
router.post("/login", user_controller.login);
router.post("/getUserByLength", user_controller.getUserByLength);
router.delete("/deleteUser", user_controller.deleteUser);
router.get('/allUser',user_controller.getAllUsers);



module.exports=router;
