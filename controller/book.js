const bookModel = require("../model/book")

module.exports.listBooks = async () =>{

let result = await bookModel.list()
return result


}

module.exports.addBook = async (book)=>{

await bookModel.add(book)
return "book Added"

}
