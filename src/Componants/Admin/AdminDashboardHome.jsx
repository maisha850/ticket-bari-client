import { useQuery } from "@tanstack/react-query";
import {
  BarChart, Bar, PieChart, Pie,
  XAxis, YAxis, Tooltip, CartesianGrid,
  ResponsiveContainer, Cell, Legend
} from "recharts";
import useAxios from "../../Hooks/useAxios";

export default function AdminDashboardHome() {
  const axiosSecure = useAxios();

  /* =================== QUERIES =================== */

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => (await axiosSecure.get("/totalUsers")).data
  });

  const { data: tickets = [] } = useQuery({
    queryKey: ["tickets"],
    queryFn: async () => (await axiosSecure.get("/tickets")).data
  });

  const { data: approvedTickets = [] } = useQuery({
    queryKey: ["approvedTickets"],
    queryFn: async () => (await axiosSecure.get("/allTickets")).data
  });

  const { data: advertised } = useQuery({
    queryKey: ["advertisedCount"],
    queryFn: async () => (await axiosSecure.get("/advertisedCount")).data
  });

  const { data: revenue } = useQuery({
    queryKey: ["revenue"],
    queryFn: async () => (await axiosSecure.get("/stats/revenue")).data
  });

  const { data: sold } = useQuery({
    queryKey: ["ticketsSold"],
    queryFn: async () => (await axiosSecure.get("/stats/tickets-sold")).data
  });

  const { data: added } = useQuery({
    queryKey: ["ticketsAdded"],
    queryFn: async () => (await axiosSecure.get("/stats/tickets-added")).data
  });

  /* =================== DERIVED DATA =================== */

  const pendingTickets = tickets.filter(
    t => t.verificationStatus === "pending"
  ).length;

  const chartBarData = [
    { name: "Tickets Added", value: added?.totalTicketsAdded || 0 },
    { name: "Tickets Sold", value: sold?.totalTicketsSold || 0 }
  ];

  const pieData = [
    { name: "Approved", value: approvedTickets.length },
    { name: "Pending", value: pendingTickets }
  ];

  const COLORS = ["#2563eb", "#f97316"];

  /* =================== UI =================== */

  return (
    <div className="space-y-6">
      {/* ===== STAT CARDS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <Stat title="Users" value={users.length} />
        <Stat title="Tickets" value={tickets.length} />
        <Stat title="Approved" value={approvedTickets.length} />
        <Stat title="Advertised" value={advertised?.count || 0} />
        <Stat title="Revenue (৳)" value={revenue?.totalRevenue || 0} />
        <Stat title="Sold" value={sold?.totalTicketsSold || 0} />
      </div>

      {/* ===== CHARTS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* BAR */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Ticket Performance</h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={chartBarData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* PIE */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Ticket Status</h3>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={90}
                label
              >
                {pieData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ===== LATEST TICKETS ===== */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-semibold mb-3">Latest Tickets</h3>
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr className="-ml-8">
              <th className="p-2 ">Title</th>
              <th>From</th>
              <th>To</th>
              <th>Status</th>
              <th>Advertise</th>
            </tr>
          </thead>
          <tbody>
            {tickets.slice(0, 5).map(ticket => (
              <tr key={ticket._id} className="border-b">
                <td className="p-2">{ticket.title}</td>
                <td>{ticket.from}</td>
                <td>{ticket.to}</td>
                <td>
                  <span className={`px-2 py-1 rounded text-xs ${
                    ticket.verificationStatus === "approved"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}>
                    {ticket.verificationStatus}
                  </span>
                </td>
                <td>{ticket.advertise ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ===== STAT CARD COMPONENT ===== */

function Stat({ title, value }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
