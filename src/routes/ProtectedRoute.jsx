import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute({ component: Component, ...rest }) {
    const { isAuthenticated } = useSelector((store) => store.login);

    return (
        <Route
            {...rest}
            render={(props) =>
                // if (isAuthenticated === false) {
                //     return <Redirect to="/gov/login" />;
                // }
                // return <Component {...props} />;
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
}

export default ProtectedRoute;
