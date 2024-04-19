import React from "react";
import { Route, Redirect } from 'react-router'

const ProtectedRoute = ({ component, ...rest }) => {
    // if your successful at retrieving the token
    if (localStorage.getItem('token')) {
        return (<Route component={component}{...rest} />)  // return the component in question

    }
    else {
        return <Redirect to='/Login' /> // failure to get token. redirect to login
    }

}

export default ProtectedRoute