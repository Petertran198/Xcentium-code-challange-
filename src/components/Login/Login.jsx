import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { signInUser } from '../../redux/UserSlice/userSlice';
import './login.css';
import Papa from 'papaparse';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const userNameRef = useRef();
    const passwordRef = useRef();
    const dispatch = useDispatch();
    const history = useHistory();

    const getCsvData = async () => {
        try {
            const response = await fetch('/data/logindata.csv');
            const reader = response.body.getReader();
            const result = await reader.read(); // raw array
            const decoder = new TextDecoder('utf-8');
            const csv = decoder.decode(result.value); // the csv text
            const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
            const rows = results.data; // array of userInfo
            return rows;
        } catch (error) {
            console.error(error.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const csvResults = await getCsvData();
            dispatch(
                signInUser({
                    accounts: csvResults,
                    username: userNameRef.current.value,
                    password: passwordRef.current.value,
                })
            );
            history.push('./');
        } catch (error) {
            console.error(error);
            toast.error('Account was not found.', {
                position: 'top-center',
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <div className='background'>
            <ToastContainer
                position='top-center'
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            <div className='container d-flex justify-content-center align-items-center vh-100'>
                <Form
                    className='form-size border rounded p-3 p-relative'
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <h1 className='header-font'>Login</h1>
                    <Form.Group className='m-1 my-2 form-input'>
                        <Form.Control
                            type='username'
                            placeholder='Enter Username'
                            ref={userNameRef}
                            required
                        />
                    </Form.Group>
                    <Form.Group className='m-1 my-2 form-input'>
                        <Form.Control
                            type='password'
                            ref={passwordRef}
                            required
                            placeholder='Password'
                        />
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
