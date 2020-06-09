const fs = require('fs');
const path = require('path');
var csspath=["/stylesheet/index",
                 "/stylesheet/style",
                 "/stylesheet/detalle",
                 "/stylesheet/header",
                 "/stylesheet/footer",
                 "/stylesheet/product-edit-form-style",
                 '/stylesheet/register-login-style',
                 "/stylesheet/cart-style.css",

                 ];
     var compare


// let dbpath = path.join(__dirname, `../ASIGNARRUTA`);
// let db = fs.readFileSync(filePath, 'utf-8');

const userController = {
// CREAR VARIABLE EN EL CONTROLLER PARA PODER PASARLE A LA VISTA Y COMPARAR LAS VISTAS PARA EJECUTAR LA CORRECTA
    login:(req,res)=>{
       
        res.render('login',{csspath,compare:'/stylesheet/register-login-style'})
    },
    register:(req,res)=>{
                
        res.render('register',{csspath,compare:'/stylesheet/register-login-style'})
    },
    

}







module.exports = userController 