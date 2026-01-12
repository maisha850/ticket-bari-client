import React from 'react';
import {useQuery} from '@tanstack/react-query'
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';
import VendorCard from './VendorCard';
const MyAddedTicket = () => {
    const instance = useAxiosSecure()
    const {user}=useAuth()
    const {data:myAddedTickets=[]}=useQuery({
queryKey:['myAddedTickets' , user.email],
queryFn: async()=>{
const res = await instance.get(`/myAddedTickets/${user.email}`)
return res.data
}
    })
    return (
        <div className=''>
  <h3 className='text-3xl font-bold mb-4'>Total <span className='text-green-500'>({myAddedTickets.length}) </span>Tickets Added</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 p-4 md:p-0 gap-15'>
                {
                myAddedTickets.map(ticket=><VendorCard key={ticket._id} ticket={ticket}></VendorCard>)
            }
            </div>
            
        </div>
    );
};

export default MyAddedTicket;