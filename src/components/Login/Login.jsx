import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { signInUser } from '../../redux/UserSlice/userSlice';
import './login.css';
// import Papa from 'papaparse';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useCsvData from '../../hooks/useCsvData';
function Login() {
    const userNameRef = useRef();
    const passwordRef = useRef();
    const dispatch = useDispatch();
    const history = useHistory();
    const [isBtnDisabled, setIsBtnDisabled] = useState(false);
    const csvResults = useCsvData('/data/logindata.csv');

    const handleSubmit = (e) => {
        e.preventDefault();
        //To prevent mass clicking and slow down the application
        setIsBtnDisabled(true);
        try {
            dispatch(
                signInUser({
                    accounts: csvResults,
                    username: userNameRef.current.value,
                    password: passwordRef.current.value,
                })
            );
            history.push('./');
        } catch (error) {
            toast.error('Account was not found.', {
                position: 'top-center',
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setIsBtnDisabled(false);
        }
    };

    return (
        <div className='background'>
            <ToastContainer
                position='top-center'
                autoClose={1500}
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
                        disabled={isBtnDisabled}
                    >
                        Log In
                    </button>
                </Form>
            </div>
        </div>
    );
}

export default Login;
