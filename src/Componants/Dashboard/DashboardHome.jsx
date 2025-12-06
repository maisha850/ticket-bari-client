import React from 'react';
import TicketCard from '../TicketCard';

const DashboardHome = () => {
    return (
        <div className='grid grid-cols-3 gap-8'>
           
            <TicketCard></TicketCard>
            <TicketCard></TicketCard>
            <TicketCard></TicketCard>
        </div>
    );
};

export default DashboardHome;