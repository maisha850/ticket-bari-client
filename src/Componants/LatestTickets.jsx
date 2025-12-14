import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxios from '../Hooks/useAxios';
import TicketCard from './TicketCard';
import LatestCard from './LatestCard';

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
        <h3 className='text-title mb-10 mt-15'>Latest Tickets</h3>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 p-4 md:p-0 gap-8'>
            {
                tickets.map((ticket,index)=><div  key={ticket.id}
          data-aos="fade-up"
          data-aos-delay={index * 200}>
                  <LatestCard ticket={ticket}></LatestCard>
                </div>)
            }
        </div>
      </div>
    );
};

export default LatestTickets;