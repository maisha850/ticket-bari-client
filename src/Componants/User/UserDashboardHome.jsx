import { useQuery } from "@tanstack/react-query";
import {
  BarChart, Bar, PieChart, Pie,
  XAxis, YAxis, Tooltip, CartesianGrid,
  ResponsiveContainer, Cell, Legend
} from "recharts";
import {
  Ticket, CheckCircle, Clock,
  XCircle, DollarSign
} from "lucide-react";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";

export default function UserDashboardHome() {
  const axiosSecure = useAxios();
  const { user } = useAuth();

  /* ================= FETCH DATA ================= */

  const { data: bookings = [] } = useQuery({
    queryKey: ["myBookings", user?.email],
    enabled: !!user?.email,
    queryFn: async () =>
      (await axiosSecure.get(`/myBookedTickets/${user.email}`)).data
  });

  const { data: payments = [] } = useQuery({
    queryKey: ["paymentsHistory", user?.email],
    enabled: !!user?.email,
    queryFn: async () =>
      (await axiosSecure.get(`/paymentsHistory?email=${user.email}`)).data
  });

  /* ================= DERIVED STATS ================= */

  const confirmed = bookings.filter(b => b.status === "accepted").length;
  const pending = bookings.filter(b => b.status === "pending").length;
  const rejected = bookings.filter(b => b.status === "rejected").length;

  const totalTickets = payments.reduce(
    (sum, p) => sum + Number(p.quantity || 0), 0
  );

  const totalSpent = payments.reduce(
    (sum, p) => sum + Number(p.amount || 0), 0
  );

  /* ================= CHART DATA ================= */

  const barData = [
    { name: "Bookings", value: bookings.length },
    { name: "Completed", value: confirmed }
  ];

  const pieData = [
    { name: "Accepted", value: confirmed },
    { name: "Pending", value: pending },
    { name: "Rejected", value: rejected }
  ];

  const COLORS = ["#22c55e", "#facc15", "#ef4444"];

  /* ================= UI ================= */

  return (
    <div className="min-h-screen p-6
      bg-gray-100 dark:bg-gray-900
      text-gray-800 dark:text-gray-200
      space-y-6">

      {/* ===== STATS ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <Stat icon={<Ticket />} title="Bookings" value={bookings.length} />
        <Stat icon={<CheckCircle />} title="Confirmed" value={confirmed} />
        <Stat icon={<Clock />} title="Pending" value={pending} />
        <Stat icon={<DollarSign />} title="Spent (৳)" value={totalSpent} />
        <Stat icon={<Ticket />} title="Tickets" value={totalTickets} />
      </div>

      {/* ===== CHARTS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Booking Progress">
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

        <Card title="Booking Status">
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

    
    
      {/* ===== RECENT BOOKINGS ===== */}
<Card title="Recent Bookings">
  <div className="overflow-x-auto">
    <table className="w-full text-sm text-left border-collapse">
      <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
        <tr>
          <th className="px-4 py-3 font-medium">Route</th>
          <th className="px-4 py-3 font-medium">Date</th>
          <th className="px-4 py-3 font-medium">Status</th>
          <th className="px-4 py-3 font-medium text-center">Quantity</th>
        </tr>
      </thead>

      <tbody>
        {bookings.slice(0, 5).map((b) => (
          <tr
            key={b._id}
            className="border-b dark:border-gray-700
            hover:bg-gray-50 dark:hover:bg-gray-800 transition"
          >
            <td className="px-4 py-3 whitespace-nowrap">
              {b.from} → {b.to}
            </td>

            <td className="px-4 py-3 whitespace-nowrap">
              {new Date(b.departure).toLocaleDateString()}
            </td>

            <td className="px-4 py-3">
              <span
                className={`inline-flex items-center px-2.5 py-1 rounded-full
                text-xs font-semibold
                ${
                  b.status === "accepted"
                    ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                    : b.status === "pending"
                    ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                    : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                }`}
              >
                {b.status}
              </span>
            </td>

            <td className="px-4 py-3 text-center font-medium">
              {b.quantity}
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

/* ================= COMPONENTS ================= */

function Stat({ icon, title, value }) {
  return (
    <div className="flex items-center gap-4
      bg-white dark:bg-gray-800
      p-4 rounded-lg shadow">
      <div className="p-2 rounded bg-blue-100 dark:bg-blue-900
        text-blue-600 dark:text-blue-300">
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
