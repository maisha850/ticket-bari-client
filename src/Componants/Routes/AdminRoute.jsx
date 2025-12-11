import React from 'react';
import useAuth from '../../Hooks/useAuth';
import useRoles from '../../Hooks/useRoles';



const AdminRoute = ({children}) => {
    const {role , isLoading}=useRoles()
    const {loading}= useAuth()
     if(loading || isLoading){
        return <div>
            
<span className="loading loading-infinity loading-xl"></span>
        </div>
    }
   if(role !== 'admin'){
    return <p className='text-3xl text-red-500'>Access is forbidden</p>
   }
return children
};

export default AdminRoute;