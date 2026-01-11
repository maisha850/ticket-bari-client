


import React from "react";
import useStates from "../../Hooks/useStates";
import {
  BarChart,
  Bar,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const Revenue = () => {
  const { revenue, ticketsAdded, ticketsSold } = useStates();

  const loading =
    revenue === undefined ||
    ticketsSold === undefined ||
    ticketsAdded === undefined;

  const data = [
    { name: "Revenue", value: revenue },
    { name: "Tickets Sold", value: ticketsSold },
    { name: "Tickets Added", value: ticketsAdded },
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className=" shadow-md rounded-xl p-6">
      <h2 className="text-2xl font-semibold text-center mb-6 text-indigo-600">
         Statistical Overview
      </h2>

      {/* Chart */}
      <div className="md:w-200 w-100 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              contentStyle={{
                background: "#fff",
                borderRadius: "8px",
                border: "1px solid #ddd",
              }}
            />
            <Bar
              dataKey="value"
              fill="#6366f1"
              radius={[8, 8, 0, 0]}
              animationDuration={1200}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Summary Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 text-center">
        <div className="p-4 bg-indigo-50 rounded-lg shadow">
          <h3 className="text-lg font-medium text-indigo-700">Total Revenue</h3>
          <p className="text-2xl font-bold text-indigo-900">
            ৳ {revenue.toLocaleString()}
          </p>
        </div>

        <div className="p-4 bg-green-50 rounded-lg shadow">
          <h3 className="text-lg font-medium text-green-700">Tickets Sold</h3>
          <p className="text-2xl font-bold text-green-900">
            {ticketsSold}
          </p>
        </div>

        <div className="p-4 bg-blue-50 rounded-lg shadow">
          <h3 className="text-lg font-medium text-blue-700">Tickets Added</h3>
          <p className="text-2xl font-bold text-blue-900">
            {ticketsAdded}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
