var express = require("express");
var router = express.Router();
var controller = require("../controllers/index_controller");

/* GET home page. */
router.get("/", controller.index_get);

module.exports = router;
