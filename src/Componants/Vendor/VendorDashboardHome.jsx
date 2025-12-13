import React from "react";
import {
  FaBus,
  FaRoute,
  FaTicketAlt,
  FaMoneyBillWave,
} from "react-icons/fa";

const VendorDashboardHome = () => {
  return (
    <div className="min-h-screen rounded-xl shadow-2xl  p-6">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold ">
          Vendor Dashboard
        </h1>
        <p className="text-gray-500 mt-1">
          Manage your buses, routes & bookings
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard
          icon={<FaBus />}
          title="My Buses"
          value="10"
          color="text-blue-600"
        />
        <StatCard
          icon={<FaRoute />}
          title="Active Routes"
          value="6"
          color="text-purple-600"
        />
        <StatCard
          icon={<FaTicketAlt />}
          title="Tickets Sold"
          value="980"
          color="text-green-600"
        />
        <StatCard
          icon={<FaMoneyBillWave />}
          title="Revenue"
          value="৳ 2,75,000"
          color="text-yellow-500"
        />
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
                <th>Passenger</th>
                <th>Route</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>Rahim Uddin</td>
                <td>Dhaka → Chittagong</td>
                <td>Today</td>
                <td className="text-green-600 font-medium">
                  Confirmed
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>Karim Ahmed</td>
                <td>Dhaka → Sylhet</td>
                <td>Yesterday</td>
                <td className="text-yellow-500 font-medium">
                  Pending
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ActionButton
          label="➕ Add New Bus"
          color="bg-blue-600"
        />
        <ActionButton
          label="🛣️ Add New Route"
          color="bg-green-600"
        />
        <ActionButton
          label="📄 View All Bookings"
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

const ActionButton = ({ label, color }) => (
  <button
    className={`${color} text-white p-4 rounded-xl shadow hover:opacity-90 transition`}
  >
    {label}
  </button>
);

export default VendorDashboardHome;
