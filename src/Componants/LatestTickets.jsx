import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxios from '../Hooks/useAxios';
import TicketCard from './TicketCard';

const LatestTickets = () => {
    const instance = useAxios()
    const{data: tickets =[]}=useQuery({
        queryKey:['latest-tickets'],
        queryFn:async()=>{
const res = await instance.get('/latest-tickets')
return res.data
        }
    })
    return (
      <div>
        <h3 className='text-title mb-8'>Latest Tickets</h3>
          <div className='grid grid-cols-3 gap-8'>
            {
                tickets.map(ticket=><TicketCard key={ticket._id} ticket={ticket}></TicketCard>)
            }
        </div>
      </div>
    );
};

export default LatestTickets;