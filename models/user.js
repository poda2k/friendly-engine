const sequelize = require('sequelize') ;
const DataBase = require('./connection.js');
const bcrypt  = require('sequelize-bcrypt');

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
    },
    hash :{
        type : sequelize.STRING ,
        allowNull : false
    },
    salt:{
        type : sequelize.STRING ,
        allowNull : false
    }
}) 

bcrypt(user ,{
    field : 'password' ,
    rounds : 12 ,
    compare : 'authenticated'
});

module.exports =  user ;
 