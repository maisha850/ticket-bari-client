import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";


export default function SearchResult() {
  const [params] = useSearchParams();
  const from = params.get("from");
  const to = params.get("to");
  const transportType = params.get("transportType");

  const instance = useAxios();

  const {
    data: tickets = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["searchTickets", from, to, transportType],
    enabled: !!from && !!to && !!transportType,
    queryFn: async () => {
      const res = await instance.get("/searchTickets", {
        params: { from, to, transportType },
      });
      return res.data;
    },
  });

  // Loading state
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-lg font-semibold text-gray-600">Searching tickets...</p>
      </div>
    );

  // Error handling
  if (isError)
    return (
      <div className="text-center mt-10 text-red-600 font-semibold">
        Error fetching tickets.
      </div>
    );

  // No results found
  if (tickets.length === 0) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-xl font-bold text-gray-700">No Tickets Found</h2>
        <p className="text-gray-500">
          No available {transportType} tickets from {from} to {to}.
        </p>
      </div>
    );
  }

  // Ticket results
  return (
    <div className="max-w-5xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold mb-6">
        Available {transportType} Tickets
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {tickets.map((ticket) => (
          <div
            key={ticket._id}
            className="border rounded-xl p-5 shadow hover:shadow-lg transition bg-white"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">
                {ticket.from} → {ticket.to}
              </h3>
              <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full capitalize">
                {ticket.transportType}
              </span>
            </div>

            <p className="mt-2 text-gray-600">
              Price: <span className="font-bold text-green-600">৳ {ticket.price}</span>
            </p>

            {/* {ticket.departure && (
              <p className="text-gray-600">
                Departure: <span className="font-medium">{ticket.departure}</span>
              </p>
            )} */}

            {/* {ticket.arrivalTime && (
              <p className="text-gray-600">
                Arrival: <span className="font-medium">{ticket.arrivalTime}</span>
              </p>
            )} */}

            <button className="w-full mt-4 py-2 rounded-lg bg-gradient-to-br from-green-400 to-blue-800 text-white font-semibold hover:opacity-90">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
