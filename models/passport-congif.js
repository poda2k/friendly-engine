const passport = require('passport') ;
const user = require('./user') ;
const passwordValidation = require('./password-congif') ;
const LocalStrategy = require('passport-local').Strategy ;

const VerifyCallBack = (username ,password,callBack)=>{

    user.findOne({
        where:{name : username}
}).then(result=>{

        if(!result){ return callBack(null , false) }

        const validPassword = passwordValidation.validPass(password,result.hash,result.salt) ;

        if(!validPassword){return callBack(null,false)}
        else {return callBack(null,result) ;}
    }).catch(err=>{
         callBack(err);
    });

}

const strategy = new LocalStrategy(VerifyCallBack);

passport.use(strategy);

passport.serializeUser((user,callBack)=>{
    callBack(null,user.id) ;
})

passport.deserializeUser((userID ,callBack)=>{
    user.findOne({where:{
        id:userID
    }}).then(user=>{
        console.log('user')
        console.log(user);
        callBack(null,user);
    }).catch(err=>{
        callBack(err) ;
    })
})


