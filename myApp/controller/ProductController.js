const fs = require('fs');
const path = require('path');
let productsdbFilePath = path.join(__dirname, '../data/products.json');
let products = fs.readFileSync(productsdbFilePath, 'utf-8') || "[]";
let collectionsFilePath = path.join(__dirname, '../data/categories.json');
let collections = JSON.parse(fs.readFileSync(collectionsFilePath, 'utf-8'));
let productsdb = JSON.parse(products);

// let dbpath = path.join(__dirname, `../ASIGNARRUTA`);
// let db = fs.readFileSync(filePath, 'utf-8');
var csspath=["/stylesheets/index",
                 "/stylesheets/style",
                 "/stylesheets/detalle.css",
                 "/stylesheets/header",
                 "/stylesheets/footer",
                 "/stylesheets/product-edit-form-style",
                 '/stylesheets/register-login-style',
                 "/stylesheets/cart-style.css",
                 ];
                //  solucionar el tema del footer para poder tenerlo en la vista siempre, 
                // o ver si se fusiona a todas las vistas necesarias,

var compare

const productController = {
    index:(req,res)=>{    
        res.render('index',{csspath,compare:"/stylesheets/index",title: 'Sprint 2 del Grupo 3', saludo:'Buenas!'})
    },
    home: async (req,res)=>{
        res.render('home',{csspath,compare:"/stylesheets/style"})
    },
    detalle:  (req,res)=>{
        var id=req.params.id;
        var productDetail=productsdb.find(product=>product.id==id)
       
        res.render('detalle',{csspath,compare:"/stylesheets/detalle.css",productDetail})
    },
    productos: async (req,res) => {
        res.render('allProducts', {productos:productsdb})
    }
};
module.exports = productController