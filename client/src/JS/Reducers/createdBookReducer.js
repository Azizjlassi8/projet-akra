import { CREATE_BOOK_FAIL, CREATE_BOOK_REQUEST, CREATE_BOOK_SUCCESS } from "../ActionTypes/book";

const initialeState = {
    loading: false,
    book: null,
    error: {}
}
const createdBookReducer = (state = initialeState, action) => {
    switch (action.type) {
    case CREATE_BOOK_REQUEST:
        return {...state,
        loading: true,
        };
    case CREATE_BOOK_SUCCESS:
        return {...state,
        book: action.payload.book,
        loading: false,
        };
    case CREATE_BOOK_FAIL:
        return {...state,
        loading: false,
        error: action.payload,
        };
    default:
        return state;
    }
};

export default createdBookReducer;
