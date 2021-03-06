var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');
var productController = require("../controller/ProductController");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/products')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })

/* GET home page. */
router.get("/",productController.index);
router.get("/home",productController.home);
router.get("/detalle/:id",productController.detalle);
router.get("/allProducts", productController.productos);
router.get("/collections/:id",productController.collections)


module.exports = router;
