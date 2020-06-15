const fs = require('fs');
const path = require('path');
let productsdbFilePath = path.join(__dirname, '../data/products.json');
let collectionsFilePath = path.join(__dirname, '../data/categories.json');
let collections = JSON.parse(fs.readFileSync(collectionsFilePath, 'utf-8'));
let products = fs.readFileSync(productsdbFilePath, 'utf-8') || "[]";
let productsdb = JSON.parse(products);

var csspath=["/stylesheets/index.css",
"/stylesheets/style.css",
"/stylesheets/detalle.css",
"/stylesheets/header.css",
"/stylesheets/footer.css",
"/stylesheets/product-edit-form-style.css",
'/stylesheets/register-login-style.css',
"/stylesheets/cart-style.css",
"/stylesheets/admin.css"
];
                //  solucionar el tema del footer para poder tenerlo en la vista siempre, 
                // o ver si se fusiona a todas las vistas necesarias,

var compare

const adminController = {
    adminIndex: async(req,res)=>{
        res.render('admin', {csspath,compare:"/stylesheets/admin.css"});
    },
    productCreate: async(req,res)=>{
        res.render('product-create-form',{csspath,compare:"/stylesheets/product-edit-form-style.css",collections})
        res.redirect('/home')
    },
    productStore: async (req,res) => {
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
        console.log(newProduct);
        // Agrego el producto a la db
        let newDB=[...productsdb,newProduct];
        fs.writeFileSync(productsdbFilePath,JSON.stringify(newDB,null,2));
        // res.send(newDB);
        res.redirect("/allProducts")
    },
    editProduct: async (req,res) => {
        //Hago un array con todos los nombres de las imagenes cargadas
        let id=req.query.id
        let producto=productsdb.find(producto=>producto.id==id)
        
        console.log(req.files)
        for (let i = 0; i < req.files.length; i++) {
             var objpush = req.files[i].filename
             var productImages=[...producto.images,...objpush]
        }
        // req.files.forEach(file => {
        //     productImages.push(file.filename)
        // });
// ME TIRA ERROR CANNOT READ PROPERTY OF "IMAGES" OF UNDEFINED
        productsdb.forEach(product =>{ if(product.id == id) {
            id = id,
            name=req.body.productName,
            description= req.body.productDescription,
            collection= req.body.collection,
            images= productImages,
            price= req.body.price,
            discount= req.body.discount,
            cost= req.body.cost,
            sku= req.body.sku,
            stock= req.body.stock
        }});
            let actProduct=JSON.stringify(productsdb);
            fs.writeFileSync(productsdbFilePath,actProduct, null," ")
        //Nuevo producto a agregar a la db
        
        
        // Agrego el producto a la db
        // res.send(newDB);
        res.redirect('/home')
    },
    productEdit: async (req,res) => {
        res.render('product-edit-choose',{productsdb,csspath,compare:"/stylesheets/admin.css"});
    },
    productEditId:  (req,res) => {
        let id = req.query.id
        let productToEdit = productsdb.find(product => product.id==req.query.id);
        res.render('product-edit-form',{id,productToEdit,collections,csspath,compare:"/stylesheets/product-edit-form-style.css"});
    },
    delete:async(req,res)=>{
        let deleteid=req.params.id
        let newDataBase=productsdb.filter(product=>product.id!=deleteid)
        let newdataBaseJS=JSON.stringify(newDataBase, null, '')
        fs.writeFileSync(productsdbFilePath,newdataBaseJS);
        res.redirect('/admin/product-edit')
    }
};
module.exports = adminController