const fs = require('fs');
const path = require('path');
let productsdbFilePath = path.join(__dirname, '../data/products.json');
let products = fs.readFileSync(productsdbFilePath, 'utf-8') || "[]";
let productsdb = JSON.parse(products);
const usersFilePath = './src/data/users.json';

const Sequelize = require('sequelize');
const DB = require('../database/models');

function getAllUsers() {
    let usersFileContent = fs.readFileSync(usersFilePath, 'utf-8');
    let users = usersFileContent != '' ? JSON.parse(usersFileContent) : [];
    return users;
}

function getUserinSession(id){
    if(id){
        let users = getAllUsers();
        let theUser = users.find(user=> user.id==id);
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

        // let userName = getUserinSession(req.session.userId); 

        res.render('home',{csspath,compare:"/stylesheets/style.css",productos:productsdb, categories})
    },
    detalle: async (req,res)=>{

        const products = await DB.Product.findByPk(req.params.id);
        // var id=req.params.id;
        // var productDetail=productsdb.find(product=>product.id==id)
        // let userName = getUserinSession(req.session.userId); 

        res.render('detalle',{csspath,compare:"/stylesheets/detalle.css", products});

        // res.send(products)
        // console.log(products.image);

        // productDetail, userName,
    },
    productos: async (req,res) => {
        let userName = getUserinSession(req.session.userId);
        res.render('allProducts',{csspath,compare:"/stylesheets/style.css",productos:productsdb,userName})
    }
};
module.exports = productController