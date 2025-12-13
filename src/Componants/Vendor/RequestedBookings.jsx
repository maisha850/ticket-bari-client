import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const RequestedBookings = () => {
      
    const instance = useAxiosSecure()
    const {data : payments = [], refetch}=useQuery({
        queryKey: ['payments'],
        queryFn: async()=>{
const res = await instance.get(`/payments`)
return res.data
        }

    })

    const handleAccept=async(id)=>{
      const bookingStatus = {bookingStatus:'accepted'}
      const res = await instance.patch(`/booking-accepted/${id}` ,bookingStatus)
      if (res.data.modifiedCount){
        refetch()
                Swal.fire({
                  icon: "success",
                  title: "Accepted!",
                  
                });

      }
      console.log(res.data)
    }
    const handleReject=async(id)=>{
      const bookingStatus = {bookingStatus:'rejected'}
      const res = await instance.patch(`/booking-rejected/${id}` ,bookingStatus)
      if (res.data.modifiedCount){
        refetch()
                Swal.fire({
                  icon: "success",
                  title: "Rejected!",
                  
                });

      }
      console.log(res.data)
    }
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
        <td>BDT{payment.price}</td>
        <td className='flex gap-2'>
           {
            payment.status === 'accepted' ? <p className='text-green-500'>Accepted</p> : <button onClick={()=>handleAccept(payment._id)} className='btn btn-sm btn-success'>Accept</button>
           } 

           {
            payment.status === 'rejected' ? <p className='text-red-500'>Rejected</p> : <button onClick={()=>handleReject(payment._id)} className='btn btn-sm btn-error'>Reject</button>
           }
        
        </td>
      </tr>)}
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default RequestedBookings;

// import React from 'react';
// import useAxiosSecure from '../../Hooks/useAxiosSecure';
// import { useQuery } from '@tanstack/react-query';
// import Swal from 'sweetalert2';

// const RequestedBookings = () => {
//   const instance = useAxiosSecure();

//   const { data: payments = [], refetch } = useQuery({
//     queryKey: ['payments'],
//     queryFn: async () => {
//       const res = await instance.get(`/payments`);
//       return res.data;
//     },
//   });

//   const handleAccept = async (id) => {
//     try {
//       const res = await instance.patch(`/booking-accepted/${id}`, { bookingStatus: 'accepted' });
//       if (res.data.modifiedCount) {
//         // Immediately update UI by refetching
//         refetch();
//         Swal.fire({
//           icon: 'success',
//           title: 'Accepted!',
//         });
//       }
//     } catch (err) {
//       console.error(err);
//       Swal.fire('Error', 'Something went wrong', 'error');
//     }
//   };

//   const handleReject = async (id) => {
//     try {
//       const res = await instance.patch(`/booking-rejected/${id}`, { bookingStatus: 'rejected' });
//       if (res.data.bookingUpdated || res.data.paymentUpdated) {
//         // Immediately update UI
//         refetch();
//         Swal.fire({
//           icon: 'success',
//           title: 'Rejected!',
//         });
//       }
//     } catch (err) {
//       console.error(err);
//       Swal.fire('Error', 'Something went wrong', 'error');
//     }
//   };

//   return (
//     <div>
//       <h2 className="text-3xl font-bold">Requested Bookings: {payments.length}</h2>

//       <div className="overflow-x-auto">
//         <table className="table table-zebra">
//           <thead>
//             <tr>
//               <th>SL NO</th>
//               <th>Ticket Title</th>
//               <th>Quantity</th>
//               <th>Total Price</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {payments.map((payment, index) => (
//               <tr key={payment._id}>
//                 <th>{index + 1}</th>
//                 <td>{payment.title}</td>
//                 <td>{payment.quantity}</td>
//                 <td>BDT{payment.amount}</td>
//                 <td className="flex gap-2">
//                   {payment.bookingStatus === 'accepted' ? (
//                     <p className="text-green-500 font-medium">Accepted</p>
//                   ) : (
//                     <button
//                       onClick={() => handleAccept(payment._id)}
//                       className="btn btn-sm btn-success"
//                     >
//                       Accept
//                     </button>
//                   )}

//                   {payment.bookingStatus === 'rejected' ? (
//                     <p className="text-red-500 font-medium">Rejected</p>
//                   ) : (
//                     <button
//                       onClick={() => handleReject(payment._id)}
//                       className="btn btn-sm btn-error"
//                     >
//                       Reject
//                     </button>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default RequestedBookings;


// import React, { useState, useEffect } from 'react';
// import useAxiosSecure from '../../Hooks/useAxiosSecure';
// import { useQuery } from '@tanstack/react-query';
// import Swal from 'sweetalert2';

// const RequestedBookings = () => {
//   const instance = useAxiosSecure();
//   const [localPayments, setLocalPayments] = useState([]);

//   const { data: payments = [], refetch } = useQuery({
//     queryKey: ['payments'],
//     queryFn: async () => {
//       const res = await instance.get(`/payments`);
//       return res.data;
//     },
//   });

  // Keep localPayments in sync with server data
//   useEffect(() => {
//     setLocalPayments(payments);
//   }, [payments]);

//   const handleAccept = async (id) => {
//     try {
//       const res = await instance.patch(`/booking-accepted/${id}`, { bookingStatus: 'accepted' });
//       if (res.data.modifiedCount) {
//         // Update local state immediately
//         setLocalPayments(prev =>
//           prev.map(p => (p._id === id ? { ...p, bookingStatus: 'accepted' } : p))
//         );
//         Swal.fire({
//           icon: 'success',
//           title: 'Accepted!',
//         });
//       }
//     } catch (err) {
//       console.error(err);
//       Swal.fire('Error', 'Something went wrong', 'error');
//     }
//   };

//   const handleReject = async (id) => {
//     try {
//       const res = await instance.patch(`/booking-rejected/${id}`, { bookingStatus: 'rejected' });
//       if (res.data.bookingUpdated || res.data.paymentUpdated) {
//         // Optimistically update local state
//         setLocalPayments(prev =>
//           prev.map(p => (p._id === id ? { ...p, bookingStatus: 'rejected' } : p))
//         );
//         Swal.fire({
//           icon: 'success',
//           title: 'Rejected!',
//         });
//       }
//     } catch (err) {
//       console.error(err);
//       Swal.fire('Error', 'Something went wrong', 'error');
//     }
//   };

//   return (
//     <div>
//       <h2 className="text-3xl font-bold">Requested Bookings: {localPayments.length}</h2>

//       <div className="overflow-x-auto">
//         <table className="table table-zebra">
//           <thead>
//             <tr>
//               <th>SL NO</th>
//               <th>Ticket Title</th>
//               <th>Quantity</th>
//               <th>Total Price</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {localPayments.map((payment, index) => (
//               <tr key={payment._id}>
//                 <th>{index + 1}</th>
//                 <td>{payment.title}</td>
//                 <td>{payment.quantity}</td>
//                 <td>BDT{payment.amount}</td>
//                 <td className="flex gap-2">
//                   {payment.bookingStatus === 'accepted' ? (
//                     <p className="text-green-500 font-medium">Accepted</p>
//                   ) : (
//                     <button
//                       onClick={() => handleAccept(payment._id)}
//                       className="btn btn-sm btn-success"
//                     >
//                       Accept
//                     </button>
//                   )}

//                   {payment.bookingStatus === 'rejected' ? (
//                     <p className="text-red-500 font-medium">Rejected</p>
//                   ) : (
//                     <button
//                       onClick={() => handleReject(payment._id)}
//                       className="btn btn-sm btn-error"
//                     >
//                       Reject
//                     </button>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default RequestedBookings;
