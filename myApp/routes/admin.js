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

router.get("/",adminController.adminIndex);
router.get("/product-create",adminController.productCreate);
router.post("/product-store",upload.any(),adminController.productStore);
router.get("/product-edit",adminController.productEdit);
router.get("/product-edit-id",adminController.productEditId);
router.post("/editProduct",upload.any(),adminController.editProduct)
router.post("/delete/:id",adminController.delete)

module.exports = router;