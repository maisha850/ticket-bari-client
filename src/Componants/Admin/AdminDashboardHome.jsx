// import { useQuery } from "@tanstack/react-query";
// import {
//   BarChart, Bar, PieChart, Pie,
//   XAxis, YAxis, Tooltip, CartesianGrid,
//   ResponsiveContainer, Cell, Legend
// } from "recharts";
// import useAxios from "../../Hooks/useAxios";

// export default function AdminDashboardHome() {
//   const axiosSecure = useAxios();

//   /* =================== QUERIES =================== */

//   const { data: users = [] } = useQuery({
//     queryKey: ["users"],
//     queryFn: async () => (await axiosSecure.get("/totalUsers")).data
//   });

//   const { data: tickets = [] } = useQuery({
//     queryKey: ["tickets"],
//     queryFn: async () => (await axiosSecure.get("/tickets")).data
//   });

//   const { data: approvedTickets = [] } = useQuery({
//     queryKey: ["approvedTickets"],
//     queryFn: async () => (await axiosSecure.get("/allTickets")).data
//   });

//   const { data: advertised } = useQuery({
//     queryKey: ["advertisedCount"],
//     queryFn: async () => (await axiosSecure.get("/advertisedCount")).data
//   });

//   const { data: revenue } = useQuery({
//     queryKey: ["revenue"],
//     queryFn: async () => (await axiosSecure.get("/stats/revenue")).data
//   });

//   const { data: sold } = useQuery({
//     queryKey: ["ticketsSold"],
//     queryFn: async () => (await axiosSecure.get("/stats/tickets-sold")).data
//   });

//   const { data: added } = useQuery({
//     queryKey: ["ticketsAdded"],
//     queryFn: async () => (await axiosSecure.get("/stats/tickets-added")).data
//   });

//   /* =================== DERIVED DATA =================== */

//   const pendingTickets = tickets.filter(
//     t => t.verificationStatus === "pending"
//   ).length;

//   const chartBarData = [
//     { name: "Tickets Added", value: added?.totalTicketsAdded || 0 },
//     { name: "Tickets Sold", value: sold?.totalTicketsSold || 0 }
//   ];

//   const pieData = [
//     { name: "Approved", value: approvedTickets.length },
//     { name: "Pending", value: pendingTickets }
//   ];

//   const COLORS = ["#2563eb", "#f97316"];

//   /* =================== UI =================== */

//   return (
//     <div className="space-y-6">
//       {/* ===== STAT CARDS ===== */}
//       <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
//         <Stat title="Users" value={users.length} />
//         <Stat title="Tickets" value={tickets.length} />
//         <Stat title="Approved" value={approvedTickets.length} />
//         <Stat title="Advertised" value={advertised?.count || 0} />
//         <Stat title="Revenue (৳)" value={revenue?.totalRevenue || 0} />
//         <Stat title="Sold" value={sold?.totalTicketsSold || 0} />
//       </div>

//       {/* ===== CHARTS ===== */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* BAR */}
//         <div className="bg-white p-4 rounded shadow">
//           <h3 className="font-semibold mb-2">Ticket Performance</h3>
//           <ResponsiveContainer width="100%" height={260}>
//             <BarChart data={chartBarData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="value" fill="#2563eb" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//         {/* PIE */}
//         <div className="bg-white p-4 rounded shadow">
//           <h3 className="font-semibold mb-2">Ticket Status</h3>
//           <ResponsiveContainer width="100%" height={260}>
//             <PieChart>
//               <Pie
//                 data={pieData}
//                 dataKey="value"
//                 nameKey="name"
//                 outerRadius={90}
//                 label
//               >
//                 {pieData.map((_, i) => (
//                   <Cell key={i} fill={COLORS[i % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Legend />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* ===== LATEST TICKETS ===== */}
//       <div className="bg-white p-4 rounded shadow">
//         <h3 className="font-semibold mb-3">Latest Tickets</h3>
//         <table className="w-full text-sm">
//           <thead className="bg-gray-100">
//             <tr className="-ml-8">
//               <th className="p-2 ">Title</th>
//               <th>From</th>
//               <th>To</th>
//               <th>Status</th>
//               <th>Advertise</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tickets.slice(0, 5).map(ticket => (
//               <tr key={ticket._id} className="border-b">
//                 <td className="p-2">{ticket.title}</td>
//                 <td>{ticket.from}</td>
//                 <td>{ticket.to}</td>
//                 <td>
//                   <span className={`px-2 py-1 rounded text-xs ${
//                     ticket.verificationStatus === "approved"
//                       ? "bg-green-100 text-green-600"
//                       : "bg-yellow-100 text-yellow-600"
//                   }`}>
//                     {ticket.verificationStatus}
//                   </span>
//                 </td>
//                 <td>{ticket.advertise ? "Yes" : "No"}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// /* ===== STAT CARD COMPONENT ===== */

// function Stat({ title, value }) {
//   return (
//     <div className="bg-white p-4 rounded shadow">
//       <p className="text-sm text-gray-500">{title}</p>
//       <p className="text-2xl font-bold">{value}</p>
//     </div>
//   );
// }
import { useQuery } from "@tanstack/react-query";
import {
  BarChart, Bar, PieChart, Pie,
  XAxis, YAxis, Tooltip, CartesianGrid,
  ResponsiveContainer, Cell, Legend
} from "recharts";
import {
  Users, Ticket, BadgeCheck, Megaphone,
  DollarSign, ShoppingCart
} from "lucide-react";
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

  const barData = [
    { name: "Added", value: added?.totalTicketsAdded || 0 },
    { name: "Sold", value: sold?.totalTicketsSold || 0 }
  ];

  const pieData = [
    { name: "Approved", value: approvedTickets.length },
    { name: "Pending", value: pendingTickets }
  ];

  const COLORS = ["#22c55e", "#f97316"];

  /* =================== UI =================== */

  return (
    <div className="space-y-6
      bg-gray-100 dark:bg-gray-900
      text-gray-800 dark:text-gray-200
      min-h-screen p-4">

      {/* ===== STAT CARDS ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        <Stat title="Users" value={users.length} icon={<Users />} />
        <Stat title="Tickets" value={tickets.length} icon={<Ticket />} />
        <Stat title="Approved" value={approvedTickets.length} icon={<BadgeCheck />} />
        <Stat title="Advertised" value={advertised?.count || 0} icon={<Megaphone />} />
        <Stat title="Revenue (৳)" value={revenue?.totalRevenue || 0} icon={<DollarSign />} />
        <Stat title="Sold" value={sold?.totalTicketsSold || 0} icon={<ShoppingCart />} />
      </div>

      {/* ===== CHARTS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* BAR */}
        <Card title="Ticket Performance">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="name" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* PIE */}
        <Card title="Ticket Status">
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={90}
                label
              >
                {pieData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* ===== LATEST TICKETS ===== */}
      <Card title="Latest Tickets">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
              <tr>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">From</th>
                <th className="px-4 py-3">To</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Advertise</th>
              </tr>
            </thead>
            <tbody>
              {tickets.slice(0, 5).map(ticket => (
                <tr
                  key={ticket._id}
                  className="border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  <td className="px-4 py-3 font-medium">{ticket.title}</td>
                  <td className="px-4 py-3">{ticket.from}</td>
                  <td className="px-4 py-3">{ticket.to}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded text-xs font-semibold
                      ${
                        ticket.verificationStatus === "approved"
                          ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                          : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                      }`}>
                      {ticket.verificationStatus}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {ticket.advertise ? "Yes" : "No"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

/* ===== REUSABLE COMPONENTS ===== */

function Stat({ title, value, icon }) {
  return (
    <div className="flex items-center gap-4
      bg-white dark:bg-gray-800
      p-4 rounded-lg shadow">
      <div className="p-2 rounded bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <h3 className="font-semibold mb-3">{title}</h3>
      {children}
    </div>
  );
}
