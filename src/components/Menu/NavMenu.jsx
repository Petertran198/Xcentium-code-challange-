import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faHouse } from '@fortawesome/free-solid-svg-icons';

import './nav-menu.css';
function NavMenu() {
    return (
        <div className='navbar-placement'>
            <Navbar expand='lg' className='nav-menu'>
                <Container>
                    <Navbar.Brand href='#home'>
                        <FontAwesomeIcon icon={faXmark} />
                        <span className='header-font brand-spacing'>Centium</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ml-auto '>
                            <Nav.Link href='#home'>
                                <FontAwesomeIcon icon={faHouse} border='secondary' />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavMenu;
