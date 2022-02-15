import Login from './components/Login/Login';
import './app.css';
import { Switch } from 'react-router-dom';
import PublicRoutes from './components/routes/PublicRoutes';
function App() {
    return (
        <>
            <Switch>
                <PublicRoutes
                    restricted={true}
                    exact
                    path='/login'
                    component={Login}
                />
            </Switch>
        </>
    );
}

export default App;
