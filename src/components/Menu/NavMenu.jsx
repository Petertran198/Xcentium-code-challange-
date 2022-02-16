import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faHouse } from '@fortawesome/free-solid-svg-icons';

import './nav-menu.css';
import { Link } from 'react-router-dom';
function NavMenu() {
    return (
        <div className='navbar-placement'>
            <Navbar expand='lg' className='nav-menu'>
                <Container>
                    <Link to='./'>
                        <Navbar.Brand className='text-white'>
                            <FontAwesomeIcon icon={faXmark} />
                            <span className='header-font brand-spacing'>
                                Centium
                            </span>
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ml-auto '>
                            <Link to='./'>
                                <Nav.Link href='#home' className='text-white'>
                                    <FontAwesomeIcon
                                        icon={faHouse}
                                        border='secondary'
                                    />
                                </Nav.Link>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavMenu;
