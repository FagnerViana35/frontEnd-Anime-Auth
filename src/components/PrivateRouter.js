import React from 'react'

import { Route } from 'react-router-dom';

const PrivateRoute = (props) => {
    const isLogged = !!localStorage.getItem('token')
    // eslint-disable-next-line no-restricted-globals
    return isLogged ? <Route {...props} /> : location.assign('/login')
}

export default PrivateRoute