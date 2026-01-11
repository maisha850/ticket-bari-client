import React from 'react';

import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AdvertiseTickets = () => {
      const instance = useAxiosSecure()
   
    const {data:tickets=[],refetch}=useQuery({
queryKey:['allTickets'],
queryFn: async()=>{
const res = await instance.get(`/allTickets`)
return res.data
}

    })
      // Get count of advertised tickets
  const { data: advertisedCount = 0, refetch: refetchCount } = useQuery({
    queryKey: ['advertisedCount'],
    queryFn: async () => {
      const res = await instance.get('/advertisedCount');
      return res.data.count;
    }
  });
//   advertise
    const handleAdverTise=async(ticket)=>{
        const newStatus = !ticket.advertise;
        // const advertise = {advertise: true}
        const res = await instance.patch(`/advertiseTickets/${ticket._id}`, {advertise:newStatus})
         if (!res.data.allowed) {
      Swal.fire({
        icon: "error",
        title: "Limit Reached",
        text: "Admin cannot advertise more than 8 tickets."
      });
      return;
    }
        if(res.data.modifiedCount){
            
             Swal.fire({
          icon: "success",
          title: "Advertised!",
          
        });
        }
        refetch()
        refetchCount()
    }
    return (
       <div>
            <h3 className='text-3xl font-bold mb-4'>Advertise Tickets :{tickets.length}</h3>
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

      <button
                    disabled={!ticket.advertise && advertisedCount >= 8}
                    onClick={() => handleAdverTise(ticket)}
                    className={`btn btn-xs 
                      ${ticket.advertise ? "btn-success" : "btn-info"}
                      ${(!ticket.advertise && advertisedCount >= 8) && "btn-disabled"}
                    `}
                  >
                    {ticket.advertise
                      ? "Unadvertise"
                      : advertisedCount >= 8
                      ? "Limit Reached"
                      : "Advertise"}
                  </button>
                                
                               </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
           
        </div>
    );
};

export default AdvertiseTickets;