var express = require("express");
var router = express.Router();
var controller = require("../controllers/login_controller");
/* GET users listing. */

router.get("/", controller.login_get);

router.post("/", controller.login_post);
module.exports = router;
