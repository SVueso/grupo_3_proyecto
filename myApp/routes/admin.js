var express = require('express');
var router = express.Router();

const multer = require('multer');
const path = require('path');

var adminController = require("../controller/AdminController");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/products')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
  })
   
var upload = multer({ storage: storage });

router.get("/product-edit",adminController.productEdit);
router.post("/product-info",upload.any(),adminController.productInfo);

module.exports = router;