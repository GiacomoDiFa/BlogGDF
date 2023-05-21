import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode';

//const token = localStorage.getItem('token');
let isAdmin = false;

//if (token) {
  //  const decodedToken = jwt_decode(token);
    //isAdmin = decodedToken.isAdmin === true;
//}

const PrivateRoutes = () => {
    return (
        /*token &&*/ isAdmin ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoutes