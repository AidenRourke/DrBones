import React from 'react';
import {Redirect} from 'react-router';

const EnsureAuthentication = ({children}) => {
    const isLoggedIn = document.cookie !== "undefined";
    if (isLoggedIn) {
        return children;
    }
    return <Redirect to="/login"/>;
};

export default EnsureAuthentication;