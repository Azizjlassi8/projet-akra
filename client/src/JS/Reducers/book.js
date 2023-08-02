// importation

import { FAIL_BOOKS, GET_BOOK, GET_BOOKS, LOAD_BOOKS } from "../ActionTypes/actionbook";



// initialState
const initialState = {
    listBooks:[],
    errors: null,
    load: false,
    bookToGet:{}
}

// pure function
const bookReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case LOAD_BOOKS: return { ...state, load: true}
        case GET_BOOKS: return { ...state, load: false, listBooks: payload.listBooks}
        case GET_BOOK: return {...state, bookToGet: payload.bookToGet, load: false};
        case FAIL_BOOKS: return { ...state, load: false, errors:payload}
        default:
            return state;
    }
}

export default bookReducer;