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
        <div>
            <h3 className='text-4xl font-bold'>My Added Tickets: {myAddedTickets.length}</h3>
            <div className='grid grid-cols-3 gap-15'>
                {
                myAddedTickets.map(ticket=><VendorCard key={ticket._id} ticket={ticket}></VendorCard>)
            }
            </div>
            
        </div>
    );
};

export default MyAddedTicket;