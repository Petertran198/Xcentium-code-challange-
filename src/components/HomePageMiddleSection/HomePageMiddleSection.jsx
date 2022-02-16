import React from 'react';
import './HomePageMiddleSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1, fa6, fa5, fa0, fa2, faPlus } from '@fortawesome/free-solid-svg-icons';

function HomePageMiddleSection() {
    return (
        <div className=' background-color text-light'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-7 col-sm-12 d-flex align-items-center vh-100'>
                        <div>
                            <h1 className='header-font my-3 display-4'>
                                Why XCentiuum
                            </h1>
                            <p className='lead'>
                                We are a collective of truly dedicated people with
                                one belief in common: There is a better way to
                                deliver digital.
                            </p>
                            <hr />
                            <p>Our clients know it, too.</p>
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-12 '>
                        <div className='my-5 py-2'>
                            <span className='display-4 header-font'>
                                Professionals:
                            </span>
                            <hr />
                            <FontAwesomeIcon
                                icon={fa1}
                                className='stats-icon-numbers'
                            />
                            <FontAwesomeIcon
                                icon={fa6}
                                className='stats-icon-numbers'
                            />
                            <FontAwesomeIcon
                                icon={fa5}
                                className='stats-icon-numbers'
                            />
                            <FontAwesomeIcon
                                icon={faPlus}
                                className='stats-icon-numbers '
                            />
                        </div>
                        <hr />
                        <div className='my-5 py-2'>
                            <span className='display-4 header-font'>
                                Digital Innovation Delivered:
                            </span>
                            <hr />
                            <FontAwesomeIcon
                                icon={fa2}
                                className='stats-icon-numbers'
                            />
                            <FontAwesomeIcon
                                icon={fa5}
                                className='stats-icon-numbers'
                            />
                            <FontAwesomeIcon
                                icon={fa0}
                                className='stats-icon-numbers'
                            />
                            <FontAwesomeIcon
                                icon={faPlus}
                                className='stats-icon-numbers plus-icon'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePageMiddleSection;
