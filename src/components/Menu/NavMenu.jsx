import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import './nav-menu.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserInfo } from '../../redux/UserSlice/userSlice';
function NavMenu() {
    const user = useSelector(getUserInfo);
    return (
        <div className='navbar-placement'>
            <Navbar expand='lg' className='nav-menu'>
                <Container>
                    <Link to='./'>
                        <Navbar.Brand className='text-white'>
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
                            </>
                        )}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavMenu;
