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
const {validationResult} = require('express-validator')
const usersFilePath = './src/data/users.json';




function getAllUsers() {
    let usersFileContent = fs.readFileSync(usersFilePath, 'utf-8');
    let users = usersFileContent != '' ? JSON.parse(usersFileContent) : [];
    return users;
}

function getUserByEmail(userEmail) {
    let allUsers= getAllUsers();
    let theUser = allUsers.find(oneUser => oneUser.email == userEmail);
    return theUser;
}


const userController = {
// CREAR VARIABLE EN EL CONTROLLER PARA PODER PASARLE A LA VISTA Y COMPARAR LAS VISTAS PARA EJECUTAR LA CORRECTA
    login:(req,res)=>{
       
        res.render('login',{csspath,compare:'/stylesheets/register-login-style.css'})
    },
    processLogin: (req,res) => {
        let validation = validationResult(req)
        let errores = validation.errors
        if (errores != '') {
            res.render('login', {errores})
        }
        let usuario = getUserByEmail(req.body.email);

        if (usuario != undefined) {
            if (bcrypt.compareSync(req.body.password, usuario.password)){

                req.session.userId = usuario.id;

                res.redirect(`users/profile/`+usuario.id)
            } else {
                res.send("The username or password is incorrect")
            }
        } else {
            res.send("The username does not exist")
        }
    },
    register:(req,res)=>{
       
        res.render('register',{csspath,compare:'/stylesheets/register-login-style.css'})
    },
    registerSave:async (req,res)=>{
        
            console.log(req.files);
            // chequeo que no sea undefined

            let userAvatar = [];
            if(req.files!=undefined){
                req.files.forEach(file => {
                    userAvatar.push(file.filename)
                });
            }else{
                userAvatar.push("no hay foto")
            }
            
            let newUser={
                id: userdb.length > 0 ? userdb[userdb.length-1].id+1 : 1,
                first_name:req.body.firstname,
                last_name:req.body.lastname,
                email: req.body.email,
                telephone:req.body.telephone,
                address:req.body.address,
                number:req.body.addressnumber,
                password: req.body.password,
                password2: req.body.password2,
                images: userAvatar
                }
                
                let newDB=[...userdb,newUser]
                fs.writeFileSync(userPath,JSON.stringify(newDB,null,2))
                // AGREGAR QUE UNA VEZ QUE SE CREA LA CUENTA ABRA UNA SESSION 
                // O PONGA COOKIES
                
            
               await res.redirect('/user/profile/'+newUser.id)
    
},
    profile:(req,res)=>{
        var id=req.params.id
        var userData=userdb.find(user=>user.id==id)
    res.render('users/profile',{csspath,compare:"/stylesheets/profile.css",user:userData,title:"Welcome "+userData.name})
    },



}


module.exports = userController 