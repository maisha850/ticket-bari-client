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
            {
                tickets.map(ticket=><TicketCard key={ticket._id} ticket={ticket}></TicketCard>)
            }
        </div>
    );
};

export default LatestTickets;