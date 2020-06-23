var express = require('express');
var router = express.Router();

// const multer = require('multer');
// const path = require('path');

var userController = require("../controller/userController");

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'public/images/products')
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
//     }
//   })



/* GET users listing. */
router.get("/login",userController.login);
router.get("/register",userController.register);
router.get("/profile/:id",userController.profile)

router.post("/registerdata",userController.registerSave)


module.exports = router;

