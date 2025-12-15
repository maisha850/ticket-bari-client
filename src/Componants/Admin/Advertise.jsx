import React from 'react';
import useAxios from '../../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import AdvertiseCard from './AdvertiseCard';


const Advertise = () => {
          const instance = useAxios()
   
    const {data:tickets=[]}=useQuery({
queryKey:['advertiseTickets'],
queryFn: async()=>{
const res = await instance.get(`/advertiseTickets`)
return res.data
}
    })
//    
    return (
   <div>
    <h3 className='text-title  '>Featured Tickets</h3>
    <h3 className='pt-5 pb-10 text-lg text-center text-gray-600'>Choose your route, pick your seat, and travel stress-free with fast booking, trusted operators, and real-time updates</h3>
         <div className='grid md:grid-cols-2 lg:grid-cols-3 p-4 md:p-0 gap-8 '>
        
            
            {
                tickets.map(ticket=><AdvertiseCard key={ticket._id} ticket={ticket} ></AdvertiseCard>)
            }
        </div>
   </div>
    );
};

export default Advertise;