import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faUser } from '@fortawesome/free-solid-svg-icons';
import './nav-menu.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserInfo, signOutUser } from '../../redux/UserSlice/userSlice';
import { useDispatch } from 'react-redux';
function NavMenu() {
    const user = useSelector(getUserInfo);
    const dispatch = useDispatch();
    return (
        <div className='navbar-placement'>
            <Navbar expand='lg' className='nav-menu'>
                <Container>
                    <Link to='./'>
                        <Navbar.Brand className={user ? 'text-light' : 'text-dark'}>
                            <FontAwesomeIcon icon={faXmark} />
                            <span className='header-font brand-spacing'>
                                Centiuum
                            </span>
                        </Navbar.Brand>
                    </Link>

                    <Nav className='ml-auto '>
                        {user && (
                            <>
                                <FontAwesomeIcon
                                    icon={faUser}
                                    className=' m-2 my-auto text-light'
                                />
                                <span className='text-light'> {user.Name}</span>
                                <button
                                    className='btn btn-sm btn-outline-danger logout-btn'
                                    onClick={() => dispatch(signOutUser())}
                                >
                                    Log Out
                                </button>
                            </>
                        )}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavMenu;
