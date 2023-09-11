const connection = require('./connection') ;
const sequelize = require('sequelize') ;


const history = connection.define('history',{
    operation_name : {
        type : sequelize.STRING ,
        allowNull : false ,
    } ,
    result : {
        type : sequelize.DOUBLE ,
        allowNull : true
    },
    
})