
import axios from "axios";
import { FAIL_USERS, GET_USER, GET_USERS, LOAD_USERS } from "../ActionTypes/listUsers";



// GET ALL CONTACTS
export const getUsers = () => async (dispatch) => {
    dispatch ({ type: LOAD_USERS });
    try {
        let result = await axios.get('/api/users/all')
        dispatch ({type: GET_USERS, payload : result.data });
    } catch (error) {
        dispatch({type: FAIL_USERS, payload : error.response});
    }
};




// add contact
export const addContact = (newContact) => async (dispatch) => {
    try {
        await axios.post("/api/users/add" , newContact)
        dispatch(getUsers())
    } catch (error) {
        dispatch({ type: FAIL_USERS, payload: error.response });
    }
};

// delete contact
export const deleteContact = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/users/${id}`)
        dispatch(getUsers());
    } catch (error) {
        dispatch({ type: FAIL_USERS, payload: error.response });
    }
};

// edit contact
export const editContact = (id, newContact) => async (dispatch) => {
    try {
        await axios.put(`/api/users/${id}`, newContact)
        dispatch(getUsers());
    } catch (error) {
        dispatch({ type: FAIL_USERS, payload: error.response });
    }
};

// get one contact
export const getContact = (id) => async (dipsatch) => {
    dipsatch({type: LOAD_USERS})
    try {
        let result = await axios.get(`/api/users/${id}`)
        dipsatch({type: GET_USER, payload: result.data})
    } catch (error) {
        dipsatch({ type: FAIL_USERS, payload: error.response });
    }
};