import React from "react";
import {
  FaUsers,
  FaUserTie,
  FaBus,
  FaMoneyBillWave,
  FaTicketAlt,
  FaExclamationTriangle,
} from "react-icons/fa";

const AdminDashboardHome = () => {
  return (
    <div className="min-h-screen  p-6">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold ">
          Admin Dashboard
        </h1>
        <p className=" mt-1">
          System overview & management
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard
          icon={<FaUsers />}
          title="Total Users"
          value="3,245"
          color="text-blue-600"
        />
        <StatCard
          icon={<FaUserTie />}
          title="Vendors"
          value="48"
          color="text-purple-600"
        />
        <StatCard
          icon={<FaTicketAlt />}
          title="Tickets Sold"
          value="12,850"
          color="text-green-600"
        />
        <StatCard
          icon={<FaMoneyBillWave />}
          title="Revenue"
          value="৳ 12,40,000"
          color="text-yellow-500"
        />
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">

        {/* System Alerts */}
        <div className=" rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <FaExclamationTriangle className="text-red-500" />
            System Alerts
          </h2>

          <ul className="space-y-3 text-sm">
            <li className="p-3 bg-red-50 text-black rounded">
              ⚠️ Vendor approval pending (5)
            </li>
            <li className="p-3 bg-yellow-50 text-black rounded">
              ⚠️ Payment verification needed
            </li>
            <li className="p-3 bg-blue-50 text-black rounded">
              ℹ️ New route requests
            </li>
          </ul>
        </div>

        {/* Recent Activities */}
        <div className=" rounded-xl shadow p-6 lg:col-span-2">
          <h2 className="text-lg font-semibold mb-4">
            Recent Activities
          </h2>

          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr className="">
                  <th>#</th>
                  <th>Action</th>
                  <th>User</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>
                  <td>Vendor Approved</td>
                  <td>Green Line</td>
                  <td>Today</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Bus Added</td>
                  <td>Hanif Enterprise</td>
                  <td>Yesterday</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>User Registered</td>
                  <td>Rahim</td>
                  <td>Yesterday</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Quick Admin Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <ActionButton label="👥 Manage Users" color="bg-blue-600" />
        <ActionButton label="🏢 Manage Vendors" color="bg-purple-600" />
        <ActionButton label="🚌 Manage Tickets" color="bg-green-600" />
        <ActionButton label="📊 Reports" color="bg-yellow-500" />
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

export default AdminDashboardHome;
