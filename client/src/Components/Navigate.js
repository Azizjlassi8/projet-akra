import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../JS/Actions/user';
import './NavBar.css';



const Navigate = () => {
    const isAuth = useSelector(state => state.userReducer.isAuth)
    const dispatch = useDispatch()
return (
    <div>
        <header>
            <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand href="/">Book Keeping</Navbar.Brand>
                <Nav className="mx-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/users">Users</Nav.Link>
                <Nav.Link href="/Add">Add Book</Nav.Link>
                { isAuth ? <Nav.Link href="/profile">Profile</Nav.Link> : null}
                
                
                
                </Nav>
                { isAuth ? 
                    (<Link to='/'><button className='logout' onClick={() => dispatch(logout())}>Logout</button></Link>)
                    :
                    (
                    <div className='login'>
                    <Link to='/login'><button>Login</button></Link>
                    <Link to='/register'><button>Register</button></Link>

                    </div>
                )}
                </Container>
            </Navbar>
        </header>
    </div>
)
}

export default Navigate