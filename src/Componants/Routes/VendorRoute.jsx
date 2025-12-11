import React from 'react';
import useRoles from '../../Hooks/useRoles';
import useAuth from '../../Hooks/useAuth';

const VendorRoute = ({children}) => {
  const {role , isLoading}=useRoles()
    const {loading}= useAuth()
     if(loading || isLoading){
        return <div>
            
<span className="loading loading-infinity loading-xl"></span>
        </div>
    }
   if(role !== 'vendor'){
    return <p className='text-3xl text-red-500'>Access is forbidden</p>
   }
return children
};


export default VendorRoute;