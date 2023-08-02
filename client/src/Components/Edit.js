import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useMatch, useNavigate} from 'react-router-dom';
import { getBooks, updateBook } from '../JS/Actions/bookaction';

const Edit = () => {
    const dispatch = useDispatch();
    const [newBook, setNewBook] = useState({title:"", category:"", author:""});
    const bookToGet = useSelector(state => state.bookReducer.bookToGet)
    const match = useMatch("/edit/:id");
    const navigate = useNavigate();
    const handleChange = (e) => {
        setNewBook({...newBook, [e.target.name]: e.target.value});
    }
    useEffect(() => {
        dispatch(getBooks(match.params.id))
    })
    const handleEdit = () => {
        dispatch(updateBook(match.params.id, newBook));
        navigate(-1);
    }
    return (
        <div className='edit'>
            <h1>Edit book</h1>
            <Form.Label>title</Form.Label>
            <Form.Control type="text" placeholder={`${bookToGet.name}`} name="title" value={newBook.title} onChange={handleChange} />
            <Form.Label>author</Form.Label>
            <Form.Control type="email" placeholder={`${bookToGet.email}`} name="author" value={newBook.author} onChange={handleChange} />
            <Form.Label>category</Form.Label>
            <Form.Control type="text" placeholder={`${bookToGet.phone}`} name="category" value={newBook.category} onChange={handleChange} />
            <Link to='/'><Button className='btn-edit' variant="primary" type="submit" onClick={handleEdit}>Edit book</Button></Link>
        </div>
    )
}

export default Edit