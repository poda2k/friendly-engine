const sequelize  = require('sequelize') ;


const connection = new sequelize('analysis_project','root','',{dialect:'mysql',host:'localhost'});

module.exports = connection;