import { useEffect, useState } from "react";

import { Link, useLocation } from "react-router";
import useAxios from "../../Hooks/useAxios";

const SearchResults = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  const { search } = useLocation();
  const query = new URLSearchParams(search);
const axios = useAxios()
  const from = query.get("from");
  const to = query.get("to");
  const transportType = query.get("transportType");

  useEffect(() => {
    if (!from || !to || !transportType) return;

    axios.get("/searchTickets", {
        params: { from, to, transportType },
      })
      .then((res) => {
        setTickets(res.data);
        setLoading(false);
      });
  }, [from, to, transportType, axios]);
  console.log(tickets);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">
        Search Results for {transportType.toUpperCase()}
      </h2>

      {tickets.length === 0 ? (
        <p>No tickets found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tickets.map((ticket) => (
            <div key={ticket._id} className="p-4 flex w-100  justify-between rounded shadow">
                <img className="w-50 h-40" src={ticket.image} alt="" />
        <div>
                  <h4 className="font-bold">{ticket.title}</h4>
              <p>{ticket.from} → {ticket.to}</p>
              <p>Price: {ticket.price} BDT</p>
                 <Link
             to={`/ticket-details/${ticket._id}`}
             className="block text-center mt-10 btn-primary"
           >
             See Details
           </Link>
        </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
