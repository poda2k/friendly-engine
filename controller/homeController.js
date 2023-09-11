const user = require("../models/user");

exports.GEThome = (req, res, next)=>{
    res.render('home/home',{
        pageTitle : 'home'
    });
}

exports.getsignup = (req, res, next)=>{
    res.render('home/signup',{
        pageTitle : 'register' ,
        massage : ''
    });
}

exports.GETlogin = (req, res, next)=>{
    res.render('home/login',{
        massage : '' ,
        pageTitle : 'login'
    })
}

exports.POSTsignup = async(req , res )=>{
    const name = req.body.name ;
    const password = req.body.password ; 
    const email = req.body.email ;

    const userCheck = await user.findOne({
        where : {
            email : email
        }
    }) ;

     if(userCheck){
        res.render('home/signup',
        {
            massage : 'email already in use' ,
            pageTitle : 'signup'
        }
        )
     }else{
        
     }

}