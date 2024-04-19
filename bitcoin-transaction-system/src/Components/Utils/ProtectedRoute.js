import React from "react";
import { Route, Redirect } from 'react-router'

const ProtectedRoute = ({ component, ...rest }) => {
    // if your successful at retrieving the token
    if (localStorage.getItem('token')) {
        return (<Route component={component}{...rest} />)

    }
    else {
        return <Redirect to='/Login' />
    }

}

export default ProtectedRoute