import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const RequestedBookings = () => {
      
    const instance = useAxiosSecure()
    const {data : payments = []}=useQuery({
        queryKey: ['payments'],
        queryFn: async()=>{
const res = await instance.get(`/payments`)
return res.data
        }

    })
    return (
       <div>
           <h2 className='text-3xl font-bold'>Requested Bookings: {payments.length} </h2>

           <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>SL NO</th>
        <th>Ticket Title</th>
        <th>Quantity</th>
        <th>Total Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {payments.map((payment , index)=><tr key={payment._id}>
        <th>{index+1}</th>
        <td>{payment.title}</td>
        <td>{payment.quantity}</td>
        <td>BDT{payment.amount}</td>
        <td className='flex gap-2'>
            <button className='btn btn-sm btn-success'>Accept</button>
            <button className='btn btn-sm btn-warning'>Rejected</button>
        </td>
      </tr>)}
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default RequestedBookings;