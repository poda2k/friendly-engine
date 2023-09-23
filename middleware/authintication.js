

exports.valid = (req,res,next)=>{
    
    if(!req.session.isloggedin){
       return res.redirect('/login') ;
    }else{
        next();
    }
}