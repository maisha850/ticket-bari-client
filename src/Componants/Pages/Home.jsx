import React from 'react';
import Banner from '../Banner';
import AdvertiseCard from '../Admin/AdvertiseCard';
import Advertise from '../Admin/Advertise';
import LatestTickets from '../LatestTickets';

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
         <div className='max-w-7xl mx-auto py-15'>
              <LatestTickets></LatestTickets>
           <AdvertiseCard></AdvertiseCard>
           <Advertise></Advertise>
         </div>
        </div>
    );
};

export default Home;