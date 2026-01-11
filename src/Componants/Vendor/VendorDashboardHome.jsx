import { useQuery } from "@tanstack/react-query";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  Ticket,
  DollarSign,
  ShoppingCart,
  CheckCircle,
  XCircle,
} from "lucide-react";


import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const COLORS = ["#22c55e", "#ef4444"];

export default function VendorDashboardHome() {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const email = user?.email;

  /* ================= FETCH DATA ================= */

  // Total Added Tickets
  const { data: tickets = [], isLoading: loadingTickets } = useQuery({
    queryKey: ["vendor-added-tickets", email],
    enabled: !!email,
    queryFn: async () =>
      (await axiosSecure.get(`/myAddedTickets/${email}`)).data,
  });

  // Total Revenue
  const { data: revenueData = {}, isLoading: loadingRevenue } = useQuery({
    queryKey: ["vendor-revenue"],
    queryFn: async () =>
      (await axiosSecure.get("/stats/revenue")).data,
  });

  // Total Tickets Sold
  const { data: soldData = {}, isLoading: loadingSold } = useQuery({
    queryKey: ["vendor-tickets-sold"],
    queryFn: async () =>
      (await axiosSecure.get("/stats/tickets-sold")).data,
  });

  // Accepted & Rejected Tickets
  const { data: statusData = {}, isLoading: loadingStatus } = useQuery({
    queryKey: ["vendor-ticket-status", email],
    enabled: !!email,
    queryFn: async () =>
      (await axiosSecure.get(`/vendor/ticket-status-count/${email}`)).data,
  });

  /* ================= LOADING ================= */

  if (
    loadingTickets ||
    loadingRevenue ||
    loadingSold ||
    loadingStatus
  ) {
    return (
      <div className="flex items-center justify-center h-64">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  /* ================= DERIVED VALUES ================= */
const totalAddedTickets = tickets.reduce(
  (sum, ticket) => sum + Number(ticket.quantity || 0),
  0
);
const lastFiveTickets = tickets.slice(0, 5);

  const totalRevenue = parseInt( revenueData.totalRevenue/100) || 0;
  const totalTicketsSold = soldData.totalTicketsSold || 0;
  const totalAccepted = statusData.acceptedTickets || 0;
  const totalRejected = statusData.rejectedTickets || 0;
  const totalPending = statusData.pendingTickets|| 0;
  // const totalRequested = statusData. totalRequestedBookings || 0;

  /* ================= CHART DATA ================= */

  const barData = [
    { name: "Tickets Added", value: totalAddedTickets },
    { name: "Tickets Sold", value: totalTicketsSold },
  ];

  const pieData = [
    { name: "Accepted", value: totalAccepted },
    { name: "Rejected", value: totalRejected },
    { name: "Pending", value: totalPending },
  ];

  /* ================= UI ================= */

  return (
    <div
      className="min-h-screen p-6 space-y-6
      bg-gray-100 dark:bg-gray-900
      text-gray-800 dark:text-gray-200"
    >
      {/* ===== STAT CARDS ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        <StatCard
          icon={<Ticket />}
          title="Added Tickets"
          value={totalAddedTickets}
        />

        <StatCard
          icon={<ShoppingCart />}
          title="Tickets Sold"
          value={totalTicketsSold}
        />

        <StatCard
          icon={<DollarSign />}
          title="Revenue (৳)"
          value={totalRevenue.toLocaleString()}
        />
{/* <StatCard
          icon={<CheckCircle />}
          title="Requested Bookings"
          value={totalRequested}
        /> */}
        <StatCard
          icon={<CheckCircle />}
          title="Pending Tickets"
          value={totalPending}
        />
        <StatCard
          icon={<CheckCircle />}
          title="Accepted Tickets"
          value={totalAccepted}
        />

        <StatCard
          icon={<XCircle />}
          title="Rejected Tickets"
          value={totalRejected}
        />
      </div>

      {/* ===== CHARTS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* BAR CHART */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4 text-center">
            Sales Overview
          </h3>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="value"
                fill="#6366f1"
                radius={[6, 6, 0, 0]}
                animationDuration={1200}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* PIE CHART */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4 text-center">
            Ticket Status Distribution
          </h3>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={100}
                label
              >
                {pieData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* ===== LAST 5 ADDED TICKETS ===== */}
<div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
  <h3 className="text-lg font-semibold mb-4">
    Last 5 Added Tickets
  </h3>

  {lastFiveTickets.length === 0 ? (
    <p className="text-gray-500 dark:text-gray-400 text-center">
      No tickets added yet
    </p>
  ) : (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
          <tr>
            <th className="px-4 py-3">Route</th>
            <th className="px-4 py-3">Transport</th>
            <th className="px-4 py-3">Quantity</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Added</th>
          </tr>
        </thead>

        <tbody>
          {lastFiveTickets.map((ticket) => (
            <tr
              key={ticket._id}
              className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
            >
              <td className="px-4 py-3 font-medium">
                {ticket.from} → {ticket.to}
              </td>

              <td className="px-4 py-3 capitalize">
                {ticket.transportType}
              </td>

              <td className="px-4 py-3">
                {ticket.quantity}
              </td>

              <td className="px-4 py-3">
                ৳ {ticket.price}
              </td>

              <td className="px-4 py-3">
                <StatusBadge status={ticket.verificationStatus} />
              </td>

              <td className="px-4 py-3 text-xs text-gray-500">
                {new Date(ticket.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</div>

    </div>
  );
}

/* ================= COMPONENT ================= */

function StatCard({ icon, title, value }) {
  return (
    <div
      className="flex items-center gap-4
      bg-white dark:bg-gray-800
      p-5 rounded-xl shadow"
    >
      <div
        className="p-3 rounded-lg
        bg-indigo-100 dark:bg-indigo-900
        text-indigo-600 dark:text-indigo-300"
      >
        {icon}
      </div>

      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {title}
        </p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}
function StatusBadge({ status }) {
  const base =
    "px-3 py-1 rounded-full text-xs font-semibold";

  if (status === "approved") {
    return (
      <span className={`${base} bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300`}>
        Approved
      </span>
    );
  }

  if (status === "rejected") {
    return (
      <span className={`${base} bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300`}>
        Rejected
      </span>
    );
  }

  return (
    <span className={`${base} bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300`}>
      Pending
    </span>
  );
}

