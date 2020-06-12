const fs = require('fs');
const path = require('path');
let productsdbFilePath = path.join(__dirname, '../data/products.json');
let products = fs.readFileSync(productsdbFilePath, 'utf-8') || "[]";
let productsdb = JSON.parse(products);

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

const adminController = {
    productEdit: async(req,res)=>{
        res.render('product-edit-form',{csspath,compare:"/stylesheet/product-edit-form-style"})
    },
    productInfo: async (req,res) => {
        //Hago un array con todos los nombres de las imagenes cargadas
        let productImages = [];
        req.files.forEach(file => {
            productImages.push(file.filename)
        });

        //Nuevo producto a agregar a la db
        let newProduct={
            id: productsdb.length > 0 ? productsdb[productsdb.length-1].id+1 : 1,
            name:req.body.productName,
            description: req.body.productDescription,
            collection: req.body.collection,
            images: productImages,
            price: req.body.price,
            discount: req.body.discount,
            cost: req.body.cost,
            sku: req.body.sku,
            stock: req.body.stock
        };

        // Agrego el producto a la db
        let newDB=[...productsdb,newProduct];
        fs.writeFileSync(productsdbFilePath,JSON.stringify(newDB,null,2));
        res.send(newDB);
    }
};
module.exports = adminController