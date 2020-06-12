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
        var id=req.params.id;
        //var producto =(nomrbreDB).find(product=> product.id==id)
        res.render('detalle',{csspath,compare:"detalle",//producto(arreglar la llave parentesis de abajo al descomentar esto)
                                                                    })
    },
    productos: async (req,res) => {
        res.render('allProducts')
    }
};
module.exports = productController