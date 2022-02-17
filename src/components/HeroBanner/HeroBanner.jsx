import React from 'react';
import './hero-banner.css';
function HeroBanner() {
    return (
        <div className='bg-image text-white'>
            <div className='overlay'>
                <div className='d-flex vh-100 justify-content-center align-items-center '>
                    <div className=' px-3 py-5 my-5 text-center border rounded'>
                        <h1 className=' header-font'>Award Winning Platform</h1>
                        <div className='col-lg-6 col-sm-10 mx-auto'>
                            <p className='mb-2'>
                                Leading With Innovation. Take your business to the
                                next step with our latest innovations and technology
                                releases.
                                <div className='lead bold'>
                                    Flex | Forward | Commerce Quickstart | NEXT | B2B
                                    Wholesale Retail | Vault
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroBanner;
