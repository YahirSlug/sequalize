const express = require("express");
let app = express();
require("dotenv").config();
const booksView = require("./view/book.js")
const sequelize = require("./db/conection.js")

app.use(express.json())

async function serverStart(){
try{
    await sequelize.authenticate();
console.log("Conectandose a la DB")

    app.listen(3000, ()=>{
console.log(`Server Start in: http://${process.env.HOST}:${process.env.PORT}`)

})
}
catch(err){
console.log("Error de SQL :'c")

}



}
serverStart();
//Views
booksView(app)

