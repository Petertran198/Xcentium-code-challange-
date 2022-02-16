import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import './footer.css';
function Footer() {
    return (
        <div>
            {' '}
            <footer class='page-footer font-small blue pt-4'>
                <div class='footer-copyright text-center py-3'>
                    <h5 class='text-uppercase'>
                        {' '}
                        <Link
                            to='./'
                            className='logo-footer text-decoration-none footer-font-styling'
                        >
                            <Navbar.Brand>
                                <FontAwesomeIcon icon={faXmark} />
                                <span className='header-font'>Centium</span>
                            </Navbar.Brand>
                        </Link>
                        <hr className='small-hr' />
                    </h5>
                    <p className='footer-last-words lead'>
                        Where Design meets Innovation
                    </p>
                    <Link
                        to='https://github.com/Petertran198'
                        className='text-decoration-none footer-font-styling'
                    >
                        Created by: Peter Tran | © 2022 Copyright
                    </Link>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
