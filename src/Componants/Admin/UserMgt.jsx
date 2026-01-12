


import React, { useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const UserMgt = () => {
    const instance = useAxiosSecure();
    const [searchText, setSearchText] = useState('');

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users', searchText],
        queryFn: async () => {
            const res = await instance.get(`/users?searchText=${searchText}`);
            return res.data;
        }
    });
      const { data: totalUser = [] } = useQuery({
        queryKey: ['user', searchText],
        queryFn: async () => {
            const res = await instance.get(`/totalUsers`);
            return res.data;
        }
    });

    // Make Admin
    const handleMakeAdmin = async (user) => {
        const roleInfo = { role: 'admin' };
        const res = await instance.patch(`/users/role/${user._id}`, roleInfo);
        if (res.data.modifiedCount) {
            refetch();
            Swal.fire({ text: `${user.displayName} is now an Admin`, icon: 'success' });
        }
    };

    // Make Vendor
    const handleMakeVendor = async (user) => {
        const roleInfo = { role: 'vendor' };
        const res = await instance.patch(`/users/role/${user._id}`, roleInfo);
        if (res.data.modifiedCount) {
            refetch();
            Swal.fire({ text: `${user.displayName} is now a Vendor`, icon: 'success' });
        }
    };

    // Mark as Fraud
    const handleMarkFraud = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: `${user.displayName} will lose vendor access and all tickets will be hidden.`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, mark fraud",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await instance.patch(`/users/markFraud/${user._id}`);
                if (res.data.success) {
                    refetch();
                    Swal.fire("Updated!", `${user.displayName} marked as fraud.`, "success");
                }
            }
        });
    };

    // Undo Fraud
    const handleUndoFraud = (user) => {
        Swal.fire({
            title: "Restore Access?",
            text: `Allow ${user.displayName} back as vendor?`,
            icon: "info",
            showCancelButton: true,
            confirmButtonText: "Undo Fraud",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await instance.patch(`/users/unmarkFraud/${user._id}`);
                if (res.data.success !== false) {
                    refetch();
                    Swal.fire("Restored!", `${user.displayName} can now work again.`, "success");
                }
            }
        });
    };

    return (
        <div>
              <h3 className='text-3xl font-bold mb-4'>Total <span className='text-green-500'>({totalUser.length}) </span>Users Found</h3>

            {/* Search */}
            <label className="input my-5 flex items-center gap-2">
                <svg className="h-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="search"
                    className="grow p-2 border border-gray-300 rounded"
                    placeholder="Search by name or email"
                />
            </label>

            {/* Users Table */}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role / Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className='mask mask-squircle h-12 w-12'>
                                        <img src={user.photoURL} alt="" />
                                    </div>
                                </td>
                                <td>{user.displayName}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.isFraud ? (
                                        <span className="px-2 py-1 bg-red-600 text-white rounded text-xs">Fraud</span>
                                    ) : (
                                        <span className="px-2 py-1 bg-green-600 text-white rounded text-xs">{user.role}</span>
                                    )}
                                </td>
                                <td className='md:flex space-y-4 gap-2'>
                                    <button onClick={() => handleMakeAdmin(user)} className='btn md:btn-xs btn-warning'>Make Admin</button>
                                    <button onClick={() => handleMakeVendor(user)} className='btn md:btn-xs btn-accent'>Make Vendor</button>

                                    {/* Fraud Actions */}
                                    {user.role === 'vendor' && !user.isFraud && (
                                        <button onClick={() => handleMarkFraud(user)} className="btn text-xs  md:btn-xs btn-error">
                                            Mark as Fraud
                                        </button>
                                    )}
                                    {user.isFraud && (
                                        <button onClick={() => handleUndoFraud(user)} className="btn md:btn-xs btn-success">
                                            Undo Fraud
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserMgt;
