import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { createBook } from '../../JS/Actions/bookaction';
import { Link } from 'react-router-dom';



const Add = () => {
const [newBook, setNewBook] = useState({});
    const dispatch = useDispatch()
    const handleChange = (e) => {
        setNewBook({ ...newBook, [e.target.name]: e.target.value});
    };
    
    const add = () => {
        dispatch(createBook(newBook));
        // console.log(newBook)
    }
return (
<div className='add'>
            <h1>Add Book</h1>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter Title" name="title" value={newBook.title} onChange={handleChange} />
            <Form.Label>Category</Form.Label>
            <Form.Control type="text" placeholder="Enter Category" name="category" value={newBook.category} onChange={handleChange} />
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" placeholder="Enter Author" name="author" value={newBook.author} onChange={handleChange} />
            <Link to='/book'><Button onClick={() => { add()}}>Add Book</Button></Link>
        </div>
    )
}

export default Add