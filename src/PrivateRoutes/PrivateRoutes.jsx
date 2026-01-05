import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvaider/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user}=useContext(AuthContext)
    const location=useLocation()
    console.log(location);
    
    if(user){
        return children
    }
    else{
       return <Navigate state={location.pathname} to='/login'></Navigate>
    }
};

export default PrivateRoutes;