var express = require("express");
var router = express.Router();
var controller = require("../controllers/story_controller");
/* GET users listing. */

router.get("/", controller.story_get);

router.post("/", controller.story_post);

module.exports = router;
