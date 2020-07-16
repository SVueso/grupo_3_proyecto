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
router.get("/check",userController.check);
router.get("/logout",userController.logout);



router.post("/registerdata",upload.any(),[
  check('firstname')
  .not().isEmpty().withMessage('First Name can not be empty')
  .trim(),
  check('lastname')
  .not().isEmpty().withMessage('Last Name can not be empty')
  .trim(),
  check('email')
  .isEmail().withMessage("Please include a valid email address")
  .trim()
  .not().isEmpty().withMessage("The field cannot be empty"),
  check('password', "The password must be at least 6 characters").isLength({min: 6}),
  check('password2','Enter a valid confirmation password').isLength({min: 6}),
  check('telephone','Telephone can not be empty').not().isEmpty()
  .trim(),
  check('address','Address can not be empty')
  .not().isEmpty()
  .trim(),
  check('addressnumber')
  .not().isEmpty().withMessage('Number can not be empty')
  .trim(),
  check('zipcode')
  .not().isEmpty().withMessage('Enter a valid ZipCode')
  .trim(),
  check('state')
  .not().isEmpty().withMessage('Enter a valid State')
  .trim(),
  check('country')
  .not().isEmpty().withMessage('Enter a valid Country')
  .trim()
 ],userController.registerSave)
 
router.post("/processLogin",[
    check('email')
    .isEmail()
    .withMessage("Please include a valid email address")
    .trim()
    .not().isEmpty().withMessage("The field cannot be empty"),
    check('password', "The password must be at least 2 characters")
    .isLength({min: 2})
], userController.processLogin);

module.exports = router;
