import React from 'react';

import { useQuery } from '@tanstack/react-query';
import useAxios from '../Hooks/useAxios';
import TicketCard from '../Componants/TicketCard';

const AllTickets = () => {
    const instance = useAxios()
   
    const {data:tickets=[]}=useQuery({
queryKey:['tickets'],
queryFn: async()=>{
const res = await instance.get(`/tickets`)
return res.data
}
    })
    return (
        <div className='max-w-7xl mx-auto'>
           <div className='grid grid-cols-3 gap-8'>
             {
                tickets.map(ticket=><TicketCard key={ticket._id} ticket={ticket}></TicketCard>)
            }
           </div>
        </div>
    );
};

export default AllTickets;