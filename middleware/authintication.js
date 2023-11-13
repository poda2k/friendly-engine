

exports.valid = (req,res,next)=>{
    
    if(!req.isAuthenticated()){
       return res.redirect('/login') ;
    }else{
        next();
    }
}

exports.validForLogin = (req , res , next)=>{

    if(!req.isAuthenticated()){
        next() ;
    }else{
        return res.redirect('/');
    }


}