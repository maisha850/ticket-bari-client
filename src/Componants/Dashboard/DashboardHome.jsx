import React from 'react';

import useRoles from '../../Hooks/useRoles';
import AdminDashboardHome from '../Admin/AdminDashboardHome';
import VendorDashboardHome from '../Vendor/VendorDashboardHome';
import UserDashboardHome from '../User/UserDashboardHome';


const DashboardHome = () => {
    const{role}=useRoles()
    return (
        <div >
           
     {role === 'admin' && <AdminDashboardHome></AdminDashboardHome>}
     {role === 'vendor' && <VendorDashboardHome></VendorDashboardHome>}
     {role === 'user' && <UserDashboardHome></UserDashboardHome>}
        </div>
    );
};

export default DashboardHome;