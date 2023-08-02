import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch,  } from 'react-redux';
// import { Link } from 'react-router-dom';
import {useNavigate } from 'react-router-dom';
import { deleteBook } from '../JS/Actions/bookaction';

const CardBook = ({book}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const book = useSelector(state => state.bookReducer.book)

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt ="book"/>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.author}</Card.Text>
                <Card.Text>{book.category}</Card.Text> 
                    <Button variant="primary" onClick={() => navigate(`/edit/${book._id}`)}>Edit</Button>
                    
            
                

                <Button variant="primary" onClick={() => dispatch(deleteBook(book._id))}>Delete</Button>
                </Card.Body>
            </Card>
        </div>
    )
}


export default CardBook