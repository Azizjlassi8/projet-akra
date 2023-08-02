const express = require("express");
const { addBook, getBooks, getOneBook, deleteBook, editBook } = require("../Controllers/book");
const isAuth = require("../Middleware/isAuth");


// express Router
const router = express.Router();
/// Routes
const {
    
}=require("../Controllers/book")

router.get('/test', (req, res) => {
    res.send('Hello World')
})


router.post('/', addBook)

router.get('/getallbook', getBooks)

router.get('/:id', getOneBook)

router.delete('/:_id', deleteBook)

router.put('/:_id', editBook)


// export
module.exports = router;