import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';
import BookedCard from './BookedCard';

const MyBookedTicket = () => {
    const instance = useAxiosSecure()
    const {user}=useAuth()
    const{data:tickets=[]}=useQuery({
queryKey:['myBookedTickets', user.email],
queryFn:async()=>{
const res = await instance.get(`/myBookedTickets/${user.email}`)
return res.data
}
    })
    return (
        <div>
                <h3 className='text-3xl font-bold mb-4'>Total <span className='text-green-500'>({tickets.length}) </span>Booked Tickets Found</h3>
              <div className='grid grid-cols-1'>
                {
                tickets.map(ticket=><BookedCard key={ticket._id} ticket={ticket}></BookedCard>)
            }
            </div>
        </div>
    );
};

export default MyBookedTicket;