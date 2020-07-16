const fs = require('fs');
const path = require('path');
let productsdbFilePath = path.join(__dirname, '../data/products.json');
let collectionsFilePath = path.join(__dirname, '../data/categories.json');
let collections = JSON.parse(fs.readFileSync(collectionsFilePath, 'utf-8'));
let products = fs.readFileSync(productsdbFilePath, 'utf-8') || "[]";
let productsdb = JSON.parse(products);

const DB = require('../database/models');
const Product= DB.Product

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
            
            // collection: req.body.collection,
            // cost: req.body.cost,
            // sku: req.body.sku,
        };
        // console.log(newProduct)
        console.log(req.body)
        
        try{
           await DB.Product.create({
            title:req.body.productName,
            price: req.body.price,
            discount: req.body.discount,
            image: req.files[0]==undefined?"":req.files[0].filename,
            imageb: req.files[1]==undefined?"":req.files[1].filename,
            imagec: req.files[2]==undefined?"":req.files[2].filename,
            imaged: req.files[3]==undefined?"":req.files[3].filename,
            description: req.body.productDescription,
            stock: req.body.stock,
            cost: req.body.cost,
            sku: req.body.sku
        
           })
            res.redirect('/')
        }
        catch (error){
            console.log('El error es:'+error)
        }

        // Agrego el producto a la db
        // let newDB=[...productsdb,newProduct];
        // fs.writeFileSync(productsdbFilePath,JSON.stringify(newDB,null,2));
        // res.redirect("/admin");
        // let updatedDB = JSON.parse(fs.readFileSync(productsdbFilePath, 'utf-8'));
        // res.render("allProducts",{csspath,compare:"/stylesheets/style.css",productos:updatedDB});
    },
    editProduct: async (req,res) => {
        //Hago un array con todos los nombres de las imagenes cargadas
        let idToEdit=req.params.id
        // let producto=productsdb.find(producto=>producto.id==id)
        // for (let i = 0; i < req.files.length; i++) {
        //      var objpush = req.files[i].filename
        //      var productImages=[...producto.images,...objpush]
        // }
        // req.files.forEach(file => {
        //     productImages.push(file.filename)
        // });
// ME TIRA ERROR CANNOT READ PROPERTY OF "IMAGES" OF UNDEFINED
        // productsdb.forEach(product =>{ if(product.id == id) {
        //     // id = id,
        //     product.name=req.body.productName;
        //     product.description= req.body.productDescription;
        //     product.collection= req.body.collection;
        //     product.images= productImages,
        //     product.price= req.body.price;
        //     product.discount= req.body.discount;
        //     product.cost= req.body.cost;
        //     product.sku= req.body.sku;
        //     product.stock= req.body.stock;
        // }});
            // let actProduct=JSON.stringify(productsdb);
            // fs.writeFileSync(productsdbFilePath,actProduct, null,2)
            // let products = JSON.parse(fs.readFileSync(productsdbFilePath, 'utf-8'));
            if(req.files[0]==undefined){
                try{
                    DB.Product.update({
                        
                    title:req.body.productName,
                    price: req.body.price,
                    discount: req.body.discount,
                    description: req.body.productDescription,
                    stock: req.body.stock,
                    cost: req.body.cost,
                    sku: req.body.sku   
                    },{
                        where:{
                            id:idToEdit
                        }
                    })
                } catch(error){
                console.log("el error es: "+ error);
                
            }
            } 
            else {
                try{
                    DB.Product.update({
                        
                    title:req.body.productName,
                    price: req.body.price,
                    discount: req.body.discount,
                    image: req.files[0]==undefined?"":req.files[0].filename,
                    imageb: req.files[1]==undefined?"":req.files[1].filename,
                    imagec: req.files[2]==undefined?"":req.files[2].filename,
                    imaged: req.files[3]==undefined?"":req.files[3].filename,
                    description: req.body.productDescription,
                    stock: req.body.stock,
                    cost: req.body.cost,
                    sku: req.body.sku   
                    },{
                        where:{
                            id:idToEdit
                        }
                    })
                }
                catch(error){
                    console.log("el error es: "+ error);
                    
                }
            }
        //     try{
        //     DB.Product.update({
                
        //     title:req.body.productName,
        //     price: req.body.price,
        //     discount: req.body.discount,
        //     image: req.files[0].filename,
        //     // Image no anda
        //     description: req.body.productDescription,
        //     stock: req.body.stock
        //     },{
        //         where:{
        //             id:idToEdit
        //         }
        //     })
        // }
            let products= await DB.Product.findAll()
            console.log(products)
            res.render('home',{csspath,compare:"/stylesheets/style.css",productos:products[0]})
        
    },
    productEdit: async (req,res) => {
        let productsql = await DB.Product.findAll()
        res.render('product-edit-choose',{productsdb:productsql,csspath,compare:"/stylesheets/admin.css"});
    },
    productEditId: async (req,res) => {
        let id = req.query.id
        let productToEdit = await DB.Product.findByPk(id)
        // products.find(product => product.id==req.query.id);
        res.render('product-edit-form',{id,productToEdit,collections,csspath,compare:"/stylesheets/product-edit-form-style.css"});
    },
    delete:async(req,res)=>{
        let deleteid=req.params.id
        DB.Product.destroy({where:{
            id:deleteid
        }})
        res.redirect('/admin')
    }
};
module.exports = adminController