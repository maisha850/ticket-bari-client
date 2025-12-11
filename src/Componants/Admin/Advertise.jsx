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
        
            
            {
                tickets.map(ticket=><AdvertiseCard key={ticket._id} ticket={ticket} ></AdvertiseCard>)
            }
        </div>
    );
};

export default Advertise;