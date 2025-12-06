import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user, loading}=useAuth()
    const location = useLocation()
    if(loading){
        return <div>
            
<span className="loading loading-infinity loading-xl"></span>
        </div>
    }
    if(user){
        return children
    }
   return <Navigate to={'/logIn'} state={location.pathname}></Navigate>
};

export default PrivateRoute;