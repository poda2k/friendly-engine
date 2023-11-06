const user = require("../models/user");
const bcrypt = require('bcryptjs');
const passwordCheck = require('../models/password-congif');
const passport = require('passport');

exports.GEThome = (req, res, next)=>{
    res.render('home/home',{
        pageTitle : 'home' ,
        name : req.user.email,
        auth: req.isAuthenticated() 
    });
}

exports.getsignup = (req, res, next)=>{
    res.render('home/signup',{
        pageTitle : 'register' ,
        massage : '' ,
        passconfirm : true ,
        auth:  req.isAuthenticated() 
    });
}

exports.GETlogin = (req, res, next)=>{
    res.render('home/login',{
        massage : '' ,
        pageTitle : 'login' ,
        auth:  req.isAuthenticated() 
    })
}

exports.POSTsignup = async(req , res )=>{
    const name = req.body.username ;
    const password = req.body.password ;
    const email = req.body.email ;
    const confirmPASS = req.body.confirmPASS ;

    if(password === confirmPASS){
        const userCheck = await user.findOne({
            where : {
                email : email
            }
        }) ;
    
         if(userCheck){
            res.render('home/signup',
            {
                massage : 'email already in use' ,
                pageTitle : 'signup' ,
                passconfirm : true ,
                // name : req.session.name,
                auth: req.isAuthenticated() 
            }
            )
         }else{
            const passValidate = passwordCheck.genPassword(password) ;
            const createREC = await user.create({
                name : name ,
                password : password ,
                email : email ,
                salt : passValidate.salt,
                hash : passValidate.hash
            });
            if(createREC){
                //////////////////////////////
                // passport.authenticate('local',{failureRedirect:'/false',successRedirect:'/'})
                res.render('home/home',{
                    name: user.name ,
                    pageTitle : 'home' ,
                    auth: req.isAuthenticated() 
                });
            }else{
                console.log("error in signup function") ;
            }
    
         }
    }else {
        res.render('home/signup',
            {
                massage : 'please confirm password' ,
                pageTitle : 'signup',
                passconfirm : false  ,
                name : req.session.name ,
                auth:  req.isAuthenticated() 
            }
            )
    }
   

}

// exports.POSTlogin = async(req, res) => {

//     const username = req.body.username;
//     const password = req.body.password ; 

//     const userCheck = await user.findOne({
//         where : {
//             name : username
//         }
//     }) ;
//     if(userCheck){
//        const passcheck= await bcrypt.compare(password , userCheck.password) ;
           
//        if(passcheck){
//                 req.session.isloggedin = true ;
//                 req.session.name = userCheck.name ;
//                 res.render('home/home',{
//                     name: req.session.name ,
//                     pageTitle : 'home' ,
//                     auth:  req.user
//                 })
//             }else{
//                 res.render('home/login',{
//                     name: req.session.name ,
//                     pageTitle : 'home' ,
//                     auth:  req.user ,
//                     massage:'password isn`t correct'
//                 });
//             }
//     }else{
//         console.log("username error"); 
//     }
    
    


// }

exports.postlogout = (req, res) => {
    req.session.destroy((err) => {
        console.log(err);
        res.redirect('/');
    });
    // req.logout(result=>{
    //     res.render('home/login',{
    //         pageTitle : 'home' ,
    //         auth : req.isAuthenticated()
    //     })
    // });
    
}