var express = require('express');
var router = express.Router();
var userController = require("../controller/userController");

/* GET users listing. */
router.get("/login",userController.login);
router.get("/register",userController.register);
router.get("/profile/:id",userController.profile)



module.exports = router;

