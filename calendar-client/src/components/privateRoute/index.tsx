import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component, store, ...rest }: any) => {
    const { user } = store.getState();
    const routeComponent = (props: any) => {
        return (
            user.logged
                ? React.createElement(component, props)
                : <Redirect to={{ pathname: '/login' }} />
        );
    }
    return <Route {...rest} render={routeComponent} />;
};

export default PrivateRoute;
