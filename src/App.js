import Login from './components/Login/Login';
import './app.css';
import { Switch } from 'react-router-dom';
import PublicRoutes from './routes/PublicRoutes';
import PrivateRoutes from './routes/PrivateRoutes';
import NavMenu from './components/Menu/NavMenu';
import HomePage from './components/HomePage/HomePage';
function App() {
    return (
        <>
            <NavMenu />
            <Switch>
                <PublicRoutes
                    restricted={true}
                    exact
                    path='/login'
                    component={Login}
                />
                <PrivateRoutes component={HomePage} currentUser={true} />
            </Switch>
        </>
    );
}

export default App;
