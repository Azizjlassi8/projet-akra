import axios from 'axios';
import {
  CREATE_BOOK_FAIL,
  CREATE_BOOK_REQUEST,
  CREATE_BOOK_SUCCESS,
  FETCH_BOOK_SUCCESS,
  DELETE_BOOK_FAIL,
  DELETE_BOOK_SUCCESS,
  DELETE_BOOK_REQUEST,
  BOOK_DETAIL_SUCCESS,
  BOOK_DETAIL_FAIL,
  BOOK_DETAIL_REQUEST,
  BOOK_UPDATE_SUCCESS,
  BOOK_UPDATE_REQUEST,
  BOOK_UPDATE_FAIL,
} from '../ActionTypes/book';
import { FAIL_BOOKS, GET_BOOKS, LOAD_BOOKS } from '../ActionTypes/actionbook';

//Create book

export const createBook = (newBook) => {
  return async dispatch => {
    try {
      dispatch({
        type: CREATE_BOOK_REQUEST,
        // loading: true,
      });
      
      const  data  = await axios.post("/api/book/", newBook);

      dispatch({
        type: CREATE_BOOK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_BOOK_FAIL,
        error: error.response && error.response.data.message,
      });
    }
  };
};

//Fetch all books

// export const fetchBooks = () => {
//   return async dispatch => {
//     try {
//       dispatch({
//         type: FETCH_BOOK_REQUEST,
//         // loading: true,
//       });
//       // const config = {
//       //   headers: {
//       //     'Content-Type': 'application/json',
//       //   },
//       // };
//       const { data } = await axios.get('/api/book/getallbook');

//       dispatch({
//         type: FETCH_BOOK_SUCCESS,
//         payload: data,
//       });
//     } catch (error) {
//       dispatch({
//         type: FETCH_BOOK_FAIL,
//         error: error.response && error.response.data.message,
//       });
//     }
//   };
// };

export const getBooks = () => async (dispatch) => {
  dispatch({ type: LOAD_BOOKS })
  try {
      let result = await axios.get('/api/book/getallbook');
      dispatch({type: GET_BOOKS , payload: result.data})
  } catch (error) {
      dispatch({type: FAIL_BOOKS, payload: error.respanse })
  }
}
//delete a book

// export const deleteBook = (id) => {
//   return async dispatch => {
//     try {
//       dispatch({
//         type: DELETE_BOOK_REQUEST,
//         // loading: true,
//       });

//       // const config = {
//       //   headers: {
//       //     'Content-Type': 'application/json',
//       //   },
//       // };
//       const { data } = await axios.delete(`/api/book/${id}`, );
//       dispatch({
//         type: DELETE_BOOK_SUCCESS,
//         payload: data,
//       });

//       dispatch({
//         type: FETCH_BOOK_SUCCESS,
//       });
//     } catch (error) {
//       dispatch({
//         type: DELETE_BOOK_FAIL,
//         loading: false,
//         error: error.response && error.response.data.message,
//       });
//     }
//   };
// };

// delete contact
export const deleteBook = (id) => async (dispatch) => {
  try {
      await axios.delete(`/api/book/${id}`)
      dispatch(getBooks())
  } catch (error) {
      dispatch({type: FAIL_BOOKS, payload: error.respanse })
  }
}


//Fetch a signle book
export const fetchBook = (id, bookData) => {
  return async dispatch => {
    try {
      dispatch({
        type: BOOK_DETAIL_REQUEST,
        loading: true,
      });
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.get(`/api/book/${id}`, bookData, config);

      dispatch({
        type: BOOK_DETAIL_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: BOOK_DETAIL_FAIL,
        error: error.response && error.response.data.message,
      });
    }
  };
};

//UPDATE BOOK

export const updateBook = (id, bookData) => {
  return async dispatch => {
    try {
      dispatch({
        type: BOOK_UPDATE_REQUEST,
        loading: true,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.put(`/api/book/${id}`, bookData, config);
      dispatch({
        type: BOOK_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: BOOK_UPDATE_FAIL,
        loading: false,
        error: error.response && error.response.data.message,
      });
    }
  };
};