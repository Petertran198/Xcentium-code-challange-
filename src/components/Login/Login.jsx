import React, { useEffect, useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { signInUser, getUserInfo } from '../../redux/UserSlice/userSlice';
import './login.css';
import Papa from 'papaparse';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Login() {
    const userNameRef = useRef();
    const passwordRef = useRef();
    const dispatch = useDispatch();
    const user = useSelector(getUserInfo);
    const history = useHistory();
    useEffect(() => {
        if (user != null) {
            history.push('./');
        }
    }, [user]);

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
            console.log(csvResults, '----');
            dispatch(
                signInUser({
                    accounts: csvResults,
                    username: userNameRef.current.value,
                    password: passwordRef.current.value,
                })
            );
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div className='background'>
            <div class='container d-flex justify-content-center align-items-center vh-100'>
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
