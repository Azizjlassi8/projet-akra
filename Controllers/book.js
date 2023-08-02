const Book = require("../Models/Book");


exports.addBook = async (req, res) => {
    try {
        const {title ,category ,author } = req.body;
        const newBook = new Book ({title,author,category});
        // console.log(newBook)
        await newBook.save()
        res.status(200).send({msg: 'Book add successfully ...', newBook})
    } catch (error) {
        res.status(400).send({msg:'Can not add book !!!', error})
    }
}


exports.getBooks = async (req, res) => {
    try {
        const listBooks = await Book.find();
        res.status(200).send({msg:'This is the list of all books ..', listBooks})
    } catch (error) {
        res.status(400).send({msg: 'Can not get all the books !!!', error})
    }
}

exports.getOneBook = async (req, res) => {
    try {
        const bookToGet = await Book.findOne({ _id: req.params.id});
        res.status(200).send({msg: 'I get the book ...', bookToGet})
    } catch (error) {
        res.status(400).send({msg: 'Can not get this book !!!', error})
    }
}

exports.deleteBook = async (req, res) => {
    try {
        const {_id} = req.params;
        await Book.findByIdAndDelete({_id});
        res.status(200).send({msg: 'Book deleted ...'})
    } catch (error) {
        res.status(400).send({msg: 'Con not delete this book!!!', error})
    }
}

exports.editBook = async (req, res) => {
    try {
        const {_id} = req.params;
        const result = await Book.updateOne({_id}, {$set : { ...req.body}});
        res.status(200).send({msg: 'Book updated ...'})
    } catch (error) {
        res.status(400).send({msg: 'Can not update this book !!!', error})
    }
}