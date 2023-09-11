const sequelize = require('sequelize') ;
const DataBase = require('./connection.js');

const user = DataBase.define('user' , {
    name : {
        type : sequelize.STRING ,
        allowNull : false ,
    } ,
    email : {
        type : sequelize.STRING ,
        allowNull : false 
    },
    password : {
        type : sequelize.STRING ,
        allowNull : false
    }
}) ;


module.exprorts = { 
    user
 }