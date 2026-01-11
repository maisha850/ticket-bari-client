

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../Hooks/useAxios';
import TicketCard from '../Componants/TicketCard';
import Loading from '../Componants/Shared/Loading';

const AllTickets = () => {
    const instance = useAxios();

    // Search, Filter, Sort States
    const [searchFrom, setSearchFrom] = useState(""); 
    const [searchTo, setSearchTo] = useState(""); 
    const [transportType, setTransportType] = useState(""); 
    const [sortType, setSortType] = useState(""); 

    // Pagination States
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8; 

    // Fetch Tickets
    const { data: tickets = [] } = useQuery({
        queryKey: ['allTickets'],
        queryFn: async () => {
            const res = await instance.get(`/allTickets`);
            return res.data;
        }
    });


    const filteredTickets = tickets
        .filter(t => t.from.toLowerCase().includes(searchFrom.toLowerCase()))
        .filter(t => t.to.toLowerCase().includes(searchTo.toLowerCase()))
        .filter(t => transportType ? t.transportType === transportType : true);

    // SORTING
    if (sortType === "low") {
        filteredTickets.sort((a, b) => a.price - b.price);
    } else if (sortType === "high") {
        filteredTickets.sort((a, b) => b.price - a.price);
    }

    // PAGINATION CALCULATION
    const totalPages = Math.ceil(filteredTickets.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedTickets = filteredTickets.slice(startIndex, startIndex + itemsPerPage);

    // Change Page
    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="max-w-7xl mx-auto p-4">

            {/* Search + Filter + Sort */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">

                <input
                    type="text"
                    placeholder="Search From (Location)"
                    value={searchFrom}
                    onChange={(e) => {
                        setSearchFrom(e.target.value);
                        setCurrentPage(1);
                    }}
                    className="input input-bordered w-full rounded-full"
                />

                <input
                    type="text"
                    placeholder="Search To (Location)"
                    value={searchTo}
                    onChange={(e) => {
                        setSearchTo(e.target.value);
                        setCurrentPage(1);
                    }}
                    className="input input-bordered w-full rounded-full"
                />

                <select
                    className="select select-bordered w-full rounded-full"
                    value={transportType}
                    onChange={(e) => {
                        setTransportType(e.target.value);
                        setCurrentPage(1);
                    }}
                >
                    <option value="">All Transport Types</option>
                    <option value="Bus">Bus</option>
                    <option value="Train">Train</option>
                    <option value="Flight">Flight</option>
                </select>

                <select
                    className="select select-bordered w-full rounded-full"
                    value={sortType}
                    onChange={(e) => {
                        setSortType(e.target.value);
                        setCurrentPage(1);
                    }}
                >
                    <option value="">Sort by Price</option>
                    <option value="low">Low to High</option>
                    <option value="high">High to Low</option>
                </select>

            </div>

            {/* Tickets */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {paginatedTickets.length > 0 ? (
                    paginatedTickets.map(ticket => (
                        <TicketCard key={ticket._id} ticket={ticket} />
                    ))
                ) : (
                   <Loading></Loading>
                )}
            </div>

            {/* PAGINATION BUTTONS */}
            {totalPages > 1 && (
                <div className="flex justify-center mt-10 gap-2">

                    {/* Prev */}
                    <button
                        onClick={() => goToPage(currentPage - 1)}
                        className="btn"
                        disabled={currentPage === 1}
                    >
                        Prev
                    </button>

                    {/* Page Numbers */}
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToPage(index + 1)}
                            className={`btn ${currentPage === index + 1 ? "btn-primary" : ""}`}
                        >
                            {index + 1}
                        </button>
                    ))}

                    {/* Next */}
                    <button
                        onClick={() => goToPage(currentPage + 1)}
                        className="btn"
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>

                </div>
            )}

        </div>
    );
};

export default AllTickets;

