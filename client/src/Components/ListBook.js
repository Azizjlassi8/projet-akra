import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  getBooks } from '../JS/Actions/bookaction'
import CardBook from './CardBook'

const ListBook = () => {
    const dispatch = useDispatch()
    const listBooks = useSelector(state => state.bookReducer.listBooks)
    const load = useSelector(state => state.bookReducer.load)
    useEffect(() => {
        dispatch(getBooks())
    }, [dispatch])
    
    return (
        <div style={{ display: "flex", justifyContent: "space-around", margin: "2%",flexWrap: "wrap",
            padding: "2%"}}>
            {load ? <h2>Loading ...</h2> : listBooks.map((el) => <CardBook book={el} key={el._id} />)}
        </div>
    )
}

export default ListBook