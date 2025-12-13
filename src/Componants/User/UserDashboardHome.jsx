import React from "react";
import {
  FaTicketAlt,
  FaBus,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

const UserDashboardHome = () => {
  return (
    <div className="min-h-screen rounded-xl shadow-2xl p-6">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold ">
          My Dashboard
        </h1>
        <p className="text-gray-500 mt-1">
          Welcome back! Manage your trips and bookings
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

        <StatCard
          icon={<FaTicketAlt />}
          title="Total Bookings"
          value="12"
          color="text-blue-600"
        />

        <StatCard
          icon={<FaBus />}
          title="Upcoming Trips"
          value="3"
          color="text-green-600"
        />

        <StatCard
          icon={<FaClock />}
          title="Pending Payments"
          value="1"
          color="text-yellow-500"
        />

        <StatCard
          icon={<FaMapMarkerAlt />}
          title="Visited Routes"
          value="8"
          color="text-purple-600"
        />
      </div>

      {/* Upcoming Trips */}
      <div className=" rounded-xl shadow p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4">
          Upcoming Trips
        </h2>

        <div className="space-y-4">
          <TripCard
            route="Dhaka → Chittagong"
            date="15 Dec 2025"
            time="10:00 PM"
            status="Confirmed"
          />
          <TripCard
            route="Dhaka → Sylhet"
            date="20 Dec 2025"
            time="08:30 AM"
            status="Pending"
          />
        </div>
      </div>

      {/* Recent Bookings */}
      <div className=" rounded-xl shadow p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4">
          Recent Bookings
        </h2>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="">
                <th>#</th>
                <th>Route</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>Dhaka → Rajshahi</td>
                <td>10 Dec 2025</td>
                <td className="text-green-600 font-medium">
                  Completed
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Dhaka → Cox’s Bazar</td>
                <td>05 Dec 2025</td>
                <td className="text-blue-600 font-medium">
                  Completed
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ActionButton
          label="🎫 Book New Ticket"
          color="bg-blue-600"
        />
        <ActionButton
          label="📄 My Bookings"
          color="bg-green-600"
        />
        <ActionButton
          label="⚙️ Profile Settings"
          color="bg-purple-600"
        />
      </div>

    </div>
  );
};

/* Reusable Components */

const StatCard = ({ icon, title, value, color }) => (
  <div className=" rounded-xl shadow p-5 flex items-center gap-4">
    <div className={`text-4xl ${color}`}>{icon}</div>
    <div>
      <p className="text-gray-500">{title}</p>
      <h3 className="text-2xl font-bold">{value}</h3>
    </div>
  </div>
);

const TripCard = ({ route, date, time, status }) => (
  <div className="flex items-center justify-between p-4 border rounded-lg">
    <div>
      <h4 className="font-semibold">{route}</h4>
      <p className="text-sm text-gray-500">
        {date} • {time}
      </p>
    </div>
    <span
      className={`px-3 py-1 rounded-full text-sm ${
        status === "Confirmed"
          ? "bg-green-100 text-green-700"
          : "bg-yellow-100 text-yellow-700"
      }`}
    >
      {status}
    </span>
  </div>
);

const ActionButton = ({ label, color }) => (
  <button
    className={`${color} text-white p-4 rounded-xl shadow hover:opacity-90 transition`}
  >
    {label}
  </button>
);

export default UserDashboardHome;
