import React from 'react';
import { Form } from 'react-bootstrap';
import './login.css';

function Login() {
    return (
        <div className='background'>
            <div class='container d-flex justify-content-center align-items-center vh-100'>
                <Form className='form-size border rounded p-3 p-relative'>
                    <h1 className='header-font'>Login</h1>
                    <Form.Group className='m-1 my-2 form-input'>
                        <Form.Control type='email' placeholder='Enter email' />
                    </Form.Group>

                    <Form.Group className='m-1 my-2 form-input'>
                        <Form.Control type='password' placeholder='Password' />
                    </Form.Group>

                    <button
                        type='submit'
                        className='btn text-light submit-btn btn-block my-5 border'
                    >
                        Log In
                    </button>
                </Form>
            </div>
        </div>
    );
}

export default Login;
