// import { useState } from "react";
// import { useNavigate } from "react-router";


// const SearchForm = () => {
//   const [transportType, setTransportType] = useState("bus");
//   const [from, setFrom] = useState("");
//   const [to, setTo] = useState("");

//   const navigate = useNavigate();

//   const handleSearch = (e) => {
//     e.preventDefault();

//     navigate(`/search?transportType=${transportType}&from=${from}&to=${to}`);
//   };

//   return (
//     <div className="absolute -bottom-10 w-full flex justify-center">
//       <form
//         onSubmit={handleSearch}
//         className="bg-white p-4 shadow-lg rounded-lg flex gap-3 items-center"
//       >
//         <select
//           value={transportType}
//           onChange={(e) => setTransportType(e.target.value)}
//           className="border p-2 rounded"
//         >
//           <option value="bus">Bus</option>
//           <option value="train">Train</option>
//           <option value="flight">Flight</option>
//         </select>

//         <input
//           type="text"
//           placeholder="From"
//           className="border p-2 rounded"
//           value={from}
//           onChange={(e) => setFrom(e.target.value)}
//         />

//         <input
//           type="text"
//           placeholder="To"
//           className="border p-2 rounded"
//           value={to}
//           onChange={(e) => setTo(e.target.value)}
//         />

//         <button className="bg-green-600 text-white px-5 py-2 rounded">
//           Search
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SearchForm;
import { useState } from "react";
import { useNavigate } from "react-router";
import { FaBus, FaTrain, FaPlane } from "react-icons/fa";

const TRANSPORT_TABS = [
  { key: "bus", label: "Bus", icon: <FaBus /> },
  { key: "train", label: "Train", icon: <FaTrain /> },
  { key: "flight", label: "Flight", icon: <FaPlane /> },
];

const SearchForm = () => {
  const [transportType, setTransportType] = useState("bus");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!from || !to) return;

    navigate(
      `/search?transportType=${transportType}&from=${from}&to=${to}`
    );
  };

  return (
    <div className="absolute -bottom-16 left-0 right-0 flex justify-center px-4 z-20">
      <form
        onSubmit={handleSearch}
        className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-xl shadow-xl p-5 space-y-4"
      >
        {/* ===== TRANSPORT TABS ===== */}
        <div className="flex gap-2 bg-gray-100 dark:bg-gray-600 p-1 rounded-lg">
          {TRANSPORT_TABS.map((tab) => {
            const active = transportType === tab.key;

            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setTransportType(tab.key)}
                className={`flex items-center gap-2 flex-1 justify-center py-2 rounded-md text-sm font-medium transition
                  ${
                    active
                      ? "bg-white dark:bg-gray-700 shadow text-green-600 dark:text-green-400"
                      : "text-gray-600 dark:text-gray-200 hover:bg-white/70"
                  }`}
              >
                <span className="text-lg">{tab.icon}</span>
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ===== INPUTS ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <input
            type="text"
            placeholder="From"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="border border-gray-500 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="text"
            placeholder="To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="border border-gray-500 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            type="submit"
            className="btn btn-primary"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;

