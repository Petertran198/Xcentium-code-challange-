import React, { useState } from 'react';

import Login from './components/Login/Login';
import './app.css';
import { Switch } from 'react-router-dom';
import PublicRoutes from './routes/PublicRoutes';
import PrivateRoutes from './routes/PrivateRoutes';
import NavMenu from './components/Menu/NavMenu';
import HomePage from './components/HomePage/HomePage';
import { useSelector } from 'react-redux';
import { getUserInfo } from './redux/UserSlice/userSlice';

function App() {
    const user = useSelector(getUserInfo);

    return (
        <>
            <NavMenu />
            <Switch>
                <PublicRoutes
                    restricted={true}
                    exact
                    component={Login}
                    currentUser={user}
                    path='/login'
                />

                <PrivateRoutes component={HomePage} currentUser={user} path='/' />
            </Switch>
        </>
    );
}

export default App;
