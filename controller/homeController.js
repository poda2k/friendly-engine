const user = require("../models/user");
const bcrypt = require('bcryptjs');


exports.GEThome = (req, res, next)=>{
    res.render('home/home',{
        pageTitle : 'home' ,
        name : req.session.name,
        auth:  req.session.isloggedin
    });
}

exports.getsignup = (req, res, next)=>{
    res.render('home/signup',{
        pageTitle : 'register' ,
        massage : '' ,
        passconfirm : true ,
        name : req.session.name,
        auth:  req.session.isloggedin
    });
}

exports.GETlogin = (req, res, next)=>{
    res.render('home/login',{
        massage : '' ,
        pageTitle : 'login' ,
        name : req.session.name,
        auth:  req.session.isloggedin
    })
}

exports.POSTsignup = async(req , res )=>{
    const name = req.body.username ;
    const password = req.body.pass ; 
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
                name : req.session.name,
                auth:  req.session.isloggedin
            }
            )
         }else{
            bcrypt.hash(password,12) ;
            const createREC = await user.create({
                name : name ,
                password : password ,
                email : email
            });
            req.session.isloggedin = true ;
            req.session.name = createREC.name ;
            if(createREC){
                res.render('home/home',{
                    name: req.session.name ,
                    pageTitle : 'home' ,
                    auth:  req.session.isloggedin
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
                auth:  req.session.isloggedin
            }
            )
    }
   

}

exports.postlogout = (req, res) => {
    req.session.destroy((err) => {
        console.log(err);
        res.redirect('/');
    });
}