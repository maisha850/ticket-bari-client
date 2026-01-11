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
      <div className=''>
        <h3 className='text-title  mt-30'>Latest Tickets</h3>
        <h3 className='pt-5 pb-10 text-lg text-center text-gray-600'>Be the first to book our latest tickets and enjoy smooth journeys with reliable bus services.</h3>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 p-4 md:p-0 gap-8'>
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