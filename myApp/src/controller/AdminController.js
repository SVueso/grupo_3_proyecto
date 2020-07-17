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
        // res.send(req.body)
        
        let idToEdit=req.params.id
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
                   let newProduct = await DB.Product.update({
                        
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
                    await newProduct.removeCategories(req.body.categories,{through:{title}})
                    await newProduct.addCategories(req.body.categories,{through:{title:req.body.categories}})
                }
                catch(error){
                    console.log("el error es: "+ error);
                    
                }
            }
            let products= await DB.Product.findAll()
            // console.log(products)
            res.render('home',{csspath,compare:"/stylesheets/style.css",productos:products})
        
    },
    productEdit: async (req,res) => {
        let productsql = await DB.Product.findAll()
        res.render('product-edit-choose',{productsdb:productsql,csspath,compare:"/stylesheets/admin.css"});
    },
    productEditId: async (req,res) => {
        let id = req.query.id
        let productToEdit = await DB.Product.findByPk(id,{include:{all:true}})
        let categories = await DB.Category.findAll();
        // return res.send(categories);
        // products.find(product => product.id==req.query.id);
        res.render('product-edit-form',{id,productToEdit,categories,csspath,compare:"/stylesheets/product-edit-form-style.css"});
    },
    delete:async(req,res)=>{
        let deleteid=req.params.id
        DB.Product.destroy({where:{
            id:deleteid
        }})
        res.redirect('/admin')
    },
    test: async (req,res)=>{
        let test = await DB.Product.findAll({include:{all:true}})
        res.send(test);
    }
};
module.exports = adminController