const fs = require('fs');
const path = require('path');
let productsdbFilePath = path.join(__dirname, '../data/products.json');
let products = fs.readFileSync(productsdbFilePath, 'utf-8') || "[]";
let productsdb = JSON.parse(products);
const usersFilePath = './src/data/users.json';

const DB = require('../database/models');

async function getAllUsers() {
        let users= await DB.User.findAll()
    // let usersFileContent = fs.readFileSync(usersFilePath, 'utf-8');
    // let users = usersFileContent != '' ? JSON.parse(usersFileContent) : [];
    return users[0];
}

async function getUserinSession(idsession){
    if(idsession){
        // let users = getAllUsers();
        // let theUser = users.find(user=> user.id==id);
            let theUser = await DB.User.findOne({where:{
                id:idsession
            }})

        return theUser.first_name;
    }
    else{
        return undefined;
    }
}
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

var compare

const productController = {
    index:(req,res)=>{    
        res.render('index',{csspath,compare:"/stylesheets/index.css",title: 'Sprint 2 del Grupo 3', saludo:'Buenas!'})
    },
    home: async (req,res)=>{

        const categories = await DB.Category.findByPk(req.session.userId);
        const prods = await DB.Product.findAll();
        console.log(prods);

        let userName = await getUserinSession(req.session.userId); 
        // res.send(prods)
        res.render('home',{csspath,compare:"/stylesheets/style.css",productos:prods, categories,userName})
    },
    detalle: async (req,res)=>{
        
        // DB.Product.findByPk(req.params.id)
        // .then(data => {console.log(data);
        // res.render('detalle',{csspath,compare:"/stylesheets/detalle.css", products:data});
        // })

        const products = await DB.Product.findByPk(req.params.id);

        // var id=req.params.id;
        // var productDetail=productsdb.find(product=>product.id==id)
        let userName = await getUserinSession(req.session.userId); 

        res.render('detalle',{csspath,compare:"/stylesheets/detalle.css", products,userName});
    },
    productos: async (req,res) => {
        let userName = await getUserinSession(req.session.userId);
        let productos= await DB.Product.findAll()
        res.render('allProducts',{csspath,compare:"/stylesheets/style.css",productos,userName})
    },
    collections: async (req,res) => {
        let id = req.params.id;
        let userName = await getUserinSession(req.session.userId);
        let productos= await DB.Product.findAll({include: {all:true}});
        let productosFiltrados= productos.filter((producto)=>{
            return producto.categories.some(productCategory =>  productCategory.id==id)            
        });
        let category = await DB.Category.findByPk(req.params.id)
        res.render('collections',{csspath,compare:"/stylesheets/style.css",productos:productosFiltrados, category, userName})
    },
};
module.exports = productController