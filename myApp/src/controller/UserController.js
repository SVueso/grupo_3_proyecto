const fs = require('fs');
const path = require('path');
const { dirname } = require('path');
var userPath=path.join(__dirname,"../data/users.json")
var userdb=JSON.parse(fs.readFileSync(userPath,"utf-8"))
var csspath=["/stylesheets/index.css",
"/stylesheets/style.css",
"/stylesheets/detalle.css",
"/stylesheets/header.css",
"/stylesheets/footer.css",
"/stylesheets/product-edit-form-style.css",
'/stylesheets/register-login-style.css',
"/stylesheets/cart-style.css",
"/stylesheets/profile.css",
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
    profile:(req,res)=>{
        var id=req.params.id
        var userData=userdb.find(user=>user.id==id)
    res.render('users/profile',{csspath,compare:"/stylesheets/profile.css",user:userData,title:"Welcome "+userData.First_Name})
    },

}







module.exports = userController 