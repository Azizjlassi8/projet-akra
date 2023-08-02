// importation
import {combineReducers} from 'redux'
import userReducer from './user';
import listUser from './listUser'
import createdBookReducer from './createdBookReducer'
import bookReducer from './book';

// create rootReducer
const rootReducer = combineReducers({userReducer, listUser,createdBookReducer,bookReducer })
// export
export default rootReducer;