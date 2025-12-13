import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ManageTicket = () => {
    const instance = useAxiosSecure()
    const {data: tickets=[],refetch}=useQuery({
        queryKey:['tickets'],
        queryFn:async()=>{
const res = await instance('/tickets')
return res.data
        }
    })
//     const handleApprove=async(id)=>{
//  Swal.fire({
//             title: "Are you sure?",
//             text: `approve the ticket`,
//             icon: "success",
          
//         }).then(async (result) => {
//             if (result.isConfirmed) {
//                 const res = await instance.patch(`/tickets/approve/${id}`,{
//                     email : ""
//                 });
//                 if (res.data.insertedId) {
//                     refetch();
//                     Swal.fire("Ticket is approved");
//                 }
//             }
//         });
//     }

const handleApprove = async (id) => {
    console.log(id)
  Swal.fire({
    title: "Are you sure?",
    text: "Approve this ticket?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, approve",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const res = await instance.patch(`/tickets/approve/${id}`);
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire("Approved!", "Ticket verification status updated.", "success");
        } else {
          Swal.fire("Error", "Ticket was not updated.", "error");
        }
      } catch (err) {
        console.error(err);
        Swal.fire("Error", "Something went wrong.", "error");
      }
    }
  });
};

const handleReject = async (id) => {
    console.log(id)
  Swal.fire({
    title: "Are you sure?",
    text: "Reject this ticket?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, reject",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const res = await instance.patch(`/tickets/reject/${id}`);
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire("Rejected!", "Ticket verification status updated.", "success");
        } else {
          Swal.fire("Error", "Ticket was not updated.", "error");
        }
      } catch (err) {
        console.error(err);
        Swal.fire("Error", "Something went wrong.", "error");
      }
    }
  });
};

    return (
        <div>
            <h3 className='text-3xl font-bold mb-4'>Manage Tickets :{tickets.length}</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Transport Type</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tickets.map((ticket, index) => (
                            <tr key={ticket._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className='mask mask-squircle h-12 w-12'>
                                        <img src={ticket.image} alt="" />
                                    </div>
                                </td>
                                <td>{ticket.title}</td>
                                <td>{ticket.from}</td>
                                <td>{ticket.to}</td>
                                <td>{ticket.transportType}</td>
                                <td>{ticket.price}</td>
                                <td>{ticket.quantity}</td>
                              
                               <td className='flex gap-2 '>
                              {
                                ticket.verificationStatus === 'approved' ? <button className='btn btn-xs btn-success '>Approved</button> : <button onClick={()=>handleApprove(ticket._id)} className='btn btn-xs btn-accent'>Approve</button> 
                              }  
                              {
                                ticket.verificationStatus === 'rejected' ? <button className='btn btn-xs btn-error '>Rejected</button> : <button onClick={()=>handleReject(ticket._id)} className='btn btn-xs btn-info'>Reject</button> 
                              }  
                                
                               </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
           
        </div>
    );
};

export default ManageTicket;