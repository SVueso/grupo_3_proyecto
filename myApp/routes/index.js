var express = require('express');
var router = express.Router();
var productController = require("../controller/ProductController");

/* GET home page. */
router.get("/",productController.index);
router.get("/home",productController.home);
router.get("/detalle",productController.detalle);
router.get("/product-edit",productController.productEdit);
router.get("/allProducts", productController.productos);


module.exports = router;
