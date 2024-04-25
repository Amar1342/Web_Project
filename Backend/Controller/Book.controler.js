import Book from "../Models/book.model.js";

export const getBook = async (req, res)=>{
    try{
   const book = await Book.find()
   res.status(200).json(book)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err, 'Internal Error')
    }
}

