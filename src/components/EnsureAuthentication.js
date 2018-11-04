import React from 'react';
import {Redirect} from 'react-router';

const EnsureAuthentication = ({children}) => {
    const isLoggedIn = !!document.cookie;
    console.log(document.cookie)
    if (isLoggedIn) {
        return children;
    }
    return <Redirect to="/login"/>;
};

export default EnsureAuthentication;