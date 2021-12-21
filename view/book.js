const bookController = require("../controller/book")

module.exports = (app)=>{
app.get('/book', async (req,res)=> {
let result = await bookController.listBooks()
res.json(result);

})

app.post('/book',async (req,res)=>{
let book = req.body
console.log(book)
let result = await bookController.addBook(book)
res.json(result)
})

}


//Tengo Frio (⌣̩̩́_⌣̩̩̀)
