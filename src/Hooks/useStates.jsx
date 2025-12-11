// import React from 'react';
// import useAxiosSecure from './useAxiosSecure';
// import { useQuery } from '@tanstack/react-query';

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

// const useStates = () => {
//   const axiosSecure = useAxiosSecure();

//   const { data: revenue = 0 } = useQuery({
//     queryKey: ['revenue'],
//     queryFn: async () => (await axiosSecure.get('/stats/revenue')).data.totalRevenue
//   });

//   const { data: ticketsSold = 0 } = useQuery({
//     queryKey: ['tickets-sold'],
//     queryFn: async () => (await axiosSecure.get('/stats/tickets-sold')).data.totalTicketsSold
//   });

//   const { data: ticketsAdded = 0 } = useQuery({
//     queryKey: ['tickets-added'],
//     queryFn: async () => (await axiosSecure.get('/stats/tickets-added')).data.totalTicketsAdded
//   });

//   return { revenue, ticketsSold, ticketsAdded };
// };

// export default useStates;


const useStates = () => {
  const axiosSecure = useAxiosSecure();

  const { data: revenue = 0 } = useQuery({
    queryKey: ['revenue'],
    queryFn: async () => Number((await axiosSecure.get('/stats/revenue')).data.totalRevenue)
  });

  const { data: ticketsSold = 0 } = useQuery({
    queryKey: ['tickets-sold'],
    queryFn: async () => Number((await axiosSecure.get('/stats/tickets-sold')).data.totalTicketsSold)
  });

  const { data: ticketsAdded = 0 } = useQuery({
    queryKey: ['tickets-added'],
    queryFn: async () => Number((await axiosSecure.get('/stats/tickets-added')).data.totalTicketsAdded)
  });

  return { revenue, ticketsSold, ticketsAdded };
};
export default useStates;