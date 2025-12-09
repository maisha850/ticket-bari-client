import React from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const TransactionHistory = () => {
       const {user}= useAuth()
    const instance = useAxiosSecure()
    const {data : payments = []}=useQuery({
        queryKey: ['payments' , user.email],
        queryFn: async()=>{
const res = await instance.get(`/payments?email=${user.email}`)
return res.data
        }

    })
    return (
        <div>
           <h2 className='text-3xl font-bold'>Payment History: {payments.length} </h2>

           <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>SL NO</th>
        <th>Ticket Title</th>
        <th>Transaction ID</th>
        <th>Amount</th>
        <th>Payment Date</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {payments.map((payment , index)=><tr key={payment._id}>
        <th>{index+1}</th>
        <td>{payment.title}</td>
        <td>{payment.transactionId}</td>
        <td>BDT{payment.amount}</td>
        <td>{payment.paidAt}</td>
      </tr>)}
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default TransactionHistory;