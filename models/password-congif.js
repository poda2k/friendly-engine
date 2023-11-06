const passport = require('passport');
const user = require('./user') ;
const crypto = require('crypto') ;

function genPassword(password){

    var salt = crypto.randomBytes(32).toString('hex') ;
    var hash = crypto.pbkdf2Sync(password , salt ,10000,64,'sha512').toString('hex') ;

    return {
        salt ,
        hash
    }

}

function validPass(password,hash,salt){
    var hashVerify = crypto.pbkdf2Sync(password,salt,10000,64,'sha512').toString('hex') ;
    return hash===hashVerify ;
}

module.exports = {
    genPassword,
    validPass
}