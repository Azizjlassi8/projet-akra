import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../JS/Actions/user';
import './login.css'

const Login = () => {
  const [user, setUser] = useState({})
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  };

  const handleUser = (e) => {
    e.preventDefault();
    dispatch(login(user));
    navigate('/profile');
  };
  return (
    <div>
          <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange}  />
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" name="password" onChange={handleChange}  />
        <Link to='/profile'><Button className='btn-register' variant="primary" type="submit" onClick={handleUser} >Login</Button></Link>
    </div>
  )
}

export default Login