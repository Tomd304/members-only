var express = require("express");
var router = express.Router();
var controller = require("../controllers/signup_controller");
/* GET users listing. */

router.get("/", controller.signup_get);

router.post("/", controller.signup_post);
module.exports = router;
