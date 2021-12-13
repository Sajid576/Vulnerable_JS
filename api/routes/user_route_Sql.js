const express = require("express");
const router = express.Router();
const user_controller = require("../controller/user_controller_Sql");
const {
  callFirewallServer,
} = require("../Middlewares/first_layer_firewall_server");

router.post("/signup", callFirewallServer, user_controller.signup);
router.post("/login", callFirewallServer, user_controller.login);
router.post(
  "/getUserByLength",
  callFirewallServer,
  user_controller.getUserByLength
);
router.delete("/deleteUser", callFirewallServer, user_controller.deleteUser);
router.get("/allUser", callFirewallServer, user_controller.getAllUsers);

module.exports = router;
