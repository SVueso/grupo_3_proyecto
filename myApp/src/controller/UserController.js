const fs = require('fs');
const path = require('path');
const { dirname } = require('path');
var userPath=path.join(dirname__,"../data/users.json")
var userdb=JSON.parse(fs.readFileSync(userPath,"utf-8"))
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




const userController = {
// CREAR VARIABLE EN EL CONTROLLER PARA PODER PASARLE A LA VISTA Y COMPARAR LAS VISTAS PARA EJECUTAR LA CORRECTA
    login:(req,res)=>{
       
        res.render('login',{csspath,compare:'/stylesheets/register-login-style.css'})
    },
    register:(req,res)=>{
                
        res.render('register',{csspath,compare:'/stylesheets/register-login-style.css'})
    },
    

}







module.exports = userController 