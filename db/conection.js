const Sequelize = require('sequelize')
 const sequelize = new Sequelize('books','root',null,{
     host: 'localhost',
     dialect: 'mysql'
   
 })

 module.exports = sequelize;