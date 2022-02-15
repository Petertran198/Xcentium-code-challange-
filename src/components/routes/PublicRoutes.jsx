import React from 'react';
import { Route, Redirect } from 'react-router-dom';
function PublicRoutes({
    component: Component,
    restricted,
    currentUser = false,
    ...rest
}) {
    return (
        // restricted is allowing us to see which public route to restrict for the currentUser to see.
        // Exmple Login is a RESTRICTED route. Therefore if there is a currentUser this will redirect since restricted === true
        <Route
            {...rest}
            render={(props) =>
                currentUser && restricted ? (
                    <Redirect to='./' />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
}

export default PublicRoutes;
