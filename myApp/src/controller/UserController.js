const fs = require('fs');
const path = require('path');
const { dirname } = require('path');
const bcrypt = require('bcryptjs')

// var userPath=path.join(__dirname,"../data/users.json")
// var userdb=JSON.parse(fs.readFileSync(userPath,"utf-8"))
// let productsdbFilePath = path.join(__dirname, '../data/products.json');
// let products = fs.readFileSync(productsdbFilePath, 'utf-8') || "[]";
// let productsdb = JSON.parse(products);

const DB = require('../database/models');

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

const {validationResult} = require('express-validator')
const usersFilePath = './src/data/users.json';

async function getAllUsers() {
    
    let users = await DB.User.findAll()
    return users;
}

async function getUserByEmail(userEmail) {
    
    let theUser = await DB.User.findOne({where:{
        email:userEmail
    }})
    return theUser;
}

async function getUserinSession(id){
    if(id){
       
        let theUser = await DB.User.findByPk(id)
        // users.find(user=> user.id==id);
        return theUser.first_name;
    }
    else{
        return undefined;
    }
}


const userController = {
// CREAR VARIABLE EN EL CONTROLLER PARA PODER PASARLE A LA VISTA Y COMPARAR LAS VISTAS PARA EJECUTAR LA CORRECTA
    login:(req,res)=>{     
        res.render('login',{csspath,compare:'/stylesheets/register-login-style.css'})
    },

    processLogin: async (req,res) => {
        let validation = validationResult(req)
        
        if(!validation.isEmpty())
        {   
            return res.render('login', {csspath,compare:'/stylesheets/register-login-style.css', errores: validation.errors});
        }
    
        let usuario =  await getUserByEmail(req.body.email);
            console.log(usuario,req.body.password);
            
        if (usuario != undefined) {
            if (bcrypt.compareSync(req.body.password, usuario.password)){

                req.session.userId = usuario.id;
                console.log("en session esta: "+ req.session.userId)

                if(req.body.rememberMe){
                    res.cookie('userCookie',usuario.id,{maxAge:9999999999})
                }
                let userName = await getUserinSession(req.session.userId); 
                res.redirect("/home")
                // let productos = await DB.Product.findAll();
                // res.render('home',{csspath,compare:"/stylesheets/style.css",productos,userName})
                
            } else {
                res.render('login',{csspath,compare:"/stylesheets/register-login-style.css",message:"The username or password is incorrect"})
            }
        } else {
            res.render('login',{csspath,compare:'/stylesheets/register-login-style.css',message:"The username does not exist"})
        }
    },
    register:(req,res)=>{
       
        res.render('register',{csspath,compare:'/stylesheets/register-login-style.css'})
    },
    registerSave: async (req,res)=>{
        
        let validation= validationResult(req)     

        if(!validation.isEmpty()){
           var errors=validation.errors
           console.log(errors)
           
           return res.render('register',{errors:errors,csspath,compare:'/stylesheets/register-login-style.css'})
        }else{
        
            let userAvatar = "";
            if(req.files!=undefined){
                req.files.forEach(file => {
                    userAvatar=(file.filename)
                });
            }else{
                userAvatar="nopicture.jpeg"
            }

            await DB.User.create({
                first_name:req.body.firstname,
                last_name:req.body.lastname,
                email: req.body.email,
                telephone:req.body.telephone,
                address:req.body.address,
                number:req.body.addressnumber,
                state:req.body.state,
                country:req.body.country ,
                zipcode:req.body.zipcode,
                password:bcrypt.hashSync(req.body.password,10),
                password2:bcrypt.hashSync(req.body.password2,10),
                image: userAvatar
            });

            let newUser = await DB.User.findOne({
                where:{
                    email: req.body.email
                }
            })
            req.session.userId = newUser.id;

            if(req.body.rememberMe){
                res.cookie('userCookie',newUser.id,{maxAge:9999999999})
            }
            
            res.redirect('/user/profile/'+newUser.id)}
    
},
    profile: async (req,res)=>{

        let idEnSession=req.session.userId;
        let user = await DB.User.findAll({raw: true, where: {id: idEnSession}}); 
        console.log("Esta es la info del user: ");
        console.log(user[0]);
        return res.render('users/profile',{csspath,compare:"/stylesheets/profile.css", user:user[0]})
        
        },
    logout:(req,res)=>{
        req.session.destroy();
        res.cookie('userCookie',null,{maxAge:1});
        res.redirect('/home');
        },
    check:(req,res)=>{
            console.log("La cookie vale: " + req.cookies.userCookie)
            if(req.session.userId == undefined) {
                
              res.send("No hay usuario en sesion")
              
            }
            else{
              res.send("El usuario en sesion es el: " + req.session.userId)
            }
            
          }
}

module.exports = userController 