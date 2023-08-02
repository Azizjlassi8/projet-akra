import React, { useEffect } from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Errors from './Pages/Errors';
import {useDispatch } from 'react-redux';
import { current } from './JS/Actions/user';
import Navigate from './Components/Navigate';
import Users from './Pages/Users';
import Footer from './Components/Footer';
import Add from './Components/Add/Add';
import ListBook from './Components/ListBook';
import Edit from './Components/Edit';




function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")){
      dispatch(current());
    }
  }, [dispatch]);
  
  return (
    <div className="App">
    <Navigate /> 
      <h1>Book Keeping</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login/>} />
        <Route path='/profile' element={<Profile />} />
        <Route path='Users' element={<Users />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/add' element={<Add/>} />
        <Route path='/*' element={<Errors />} />
        <Route path='/book' element={<ListBook/>} />

        

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
