import React from 'react';
import Banner from '../Banner';
import AdvertiseCard from '../Admin/AdvertiseCard';
import Advertise from '../Admin/Advertise';
import LatestTickets from '../LatestTickets';

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <LatestTickets></LatestTickets>
           <AdvertiseCard></AdvertiseCard>
           <Advertise></Advertise>
        </div>
    );
};

export default Home;