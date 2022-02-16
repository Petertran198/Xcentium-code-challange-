import React from 'react';
import './hero-banner.css';
function HeroBanner() {
    return (
        <div className='bg-image text-white'>
            <div className='overlay'>
                <div className='d-flex vh-100 justify-content-center align-items-center '>
                    <div class=' px-3 py-5 my-5 text-center border rounded'>
                        <h1 class='display-5 header-font'>Award Winning Platform</h1>
                        <div class='col-lg-6 mx-auto'>
                            <p class='lead mb-4'>
                                Leading With Innovation. Take your business to the
                                next step with our latest innovations and technology
                                releases.
                                <hr />
                                <strong className='lead bold'>
                                    Flex | Forward | Commerce Quickstart | NEXT | B2B
                                    Wholesale Retail | Vault
                                </strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroBanner;
