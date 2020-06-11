const fs = require('fs');
const path = require('path');

// let dbpath = path.join(__dirname, `../ASIGNARRUTA`);
// let db = fs.readFileSync(filePath, 'utf-8');
var csspath=["/stylesheet/index",
                 "/stylesheet/style",
                 "/stylesheet/detalle.css",
                 "/stylesheet/header",
                 "/stylesheet/footer",
                 "/stylesheet/product-edit-form-style",
                 '/stylesheet/register-login-style',
                 "/stylesheet/cart-style.css",
                 ];
                //  solucionar el tema del footer para poder tenerlo en la vista siempre, 
                // o ver si se fusiona a todas las vistas necesarias,

var compare

const productController = {
    index:(req,res)=>{    
        res.render('index',{csspath,compare:"/stylesheet/index",title: 'Sprint 2 del Grupo 3', saludo:'Buenas!'})
    },
    home: async (req,res)=>{
        res.render('home',{csspath,compare:"/stylesheet/style"})
    },
    detalle:(req,res)=>{
        res.render('detalle',{csspath,compare:"detalle"})
    },
    productEdit: async(req,res)=>{
        res.render('product-edit-form',{csspath,compare:"/stylesheet/product-edit-form-style"})
    },
    productInfo: async (req,res) => {
        console.log(req.body);
        console.log(req.files);
        let productImages = [];
        req.files.forEach(file => {
            productImages.push(file.filename)
        });
        console.log(productImages);          
        // res.send(req.body);
    },
    productos: async (req,res) => {
        res.render('allProducts')
    }
};
module.exports = productController