import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserInfo } from '../redux/UserSlice/userSlice';

function PrivateRoute({ component: Component, currentUser = false, ...rest }) {
    // Private routes are only accessiable if u log in
    return (
        <Route
            {...rest}
            render={(props) => {
                return currentUser ? (
                    <Component {...props} />
                ) : (
                    <Redirect to='./login' />
                );
            }}
        />
    );
}

export default PrivateRoute;
