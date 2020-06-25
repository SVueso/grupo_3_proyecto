var express = require('express');
var router = express.Router();
const {check} = require('express-validator');
const authMiddleware = require('../middlewares/authMiddleware')

var userController = require("../controller/userController");


const multer = require('multer');
const path = require('path');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/users')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
  })

  var upload = multer({ storage: storage });

/* GET users listing. */
router.get("/login",userController.login);
router.get("/register",userController.register);
router.get("/profile/:id",authMiddleware,userController.profile);


router.post("/registerdata",upload.any(),userController.registerSave)
router.post("/processLogin",[
    check('email')
    .isEmail()
    .withMessage("Please include a valid email address")
    .trim()
    .not().isEmpty().withMessage("The field cannot be empty"),
    check('password', "The password must be at least 8 characters")
    .isLength({min: 8})
], userController.processLogin);

module.exports = router;
