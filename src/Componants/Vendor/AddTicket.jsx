// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import useAuth from '../../Hooks/useAuth';

// import useAxiosSecure from '../../Hooks/useAxiosSecure';
// import { toast } from 'react-toastify';
// import { imageUpload } from '../../Utility';
// import { useNavigate } from 'react-router';

// const AddTicket = () => {
//     const{user}=useAuth()
//     const instance = useAxiosSecure()
//     const {register , handleSubmit, formState:{errors}}=useForm()
//     const [selectedPerks, setSelectedPerks] = useState([]);
//     const navigate = useNavigate()

//   const perksOptions = ["AC", "WiFi", "Food", "TV", "Charging Port", "Breakfast"];

//   const togglePerk = (perk) => {
//     setSelectedPerks((prev) =>
//       prev.includes(perk)
//         ? prev.filter((item) => item !== perk)
//         : [...prev, perk]
//     );
//   };
//   const handleTickets=async(data)=>{
//     const{title,from, to,transportType,price, quantity,departure}=data
//     const imageFile = data.image[0]
//     const image = await imageUpload(imageFile)
//     console.log(image)
//  const ticketInfo={
//   title, from, to , transportType ,price:Number(price), quantity:Number(quantity), image,
//   departure, selectedPerks ,
//    vendorName : user.displayName, vendorEmail: user.email
//  }

// const res = await instance.post('/tickets', ticketInfo)
// if(res.data.insertedId){
// toast.success('Tickets Added Successfully!')
// navigate('/dashboard/my-added-tickets')
// }

// console.log(res.data)
// return res.data
//   }
//     return (
//         <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-300 mt-10">
//       <h2 className="text-3xl font-bold text-center mb-6 text-yellow-500">
//         🎟 Add New Ticket
//       </h2>


//       <form onSubmit={handleSubmit(handleTickets)} className="grid gap-6">

//         {/* Ticket Title */}
//         <div>
//           <input
//             className="w-full p-3 border border-gray-300 rounded-md"
//             placeholder="Ticket Title"
//             {...register("title", { required: true })}
//           />
//           {errors.title && <p className="text-red-500 text-sm">Required*</p>}
//         </div>

//         {/* From - To */}
//         <div className="grid grid-cols-2 gap-4">
//           <input
//             className="p-3 border border-gray-300 rounded-md"
//             placeholder="From (Location)"
//             {...register("from", { required: true })}
//           />
//           <input
//             className="p-3 border border-gray-300 rounded-md"
//             placeholder="To (Location)"
//             {...register("to", { required: true })}
//           />
//         </div>

//         {/* Transport Type */}
//         <select
//           className="p-3 border border-gray-300 rounded-md"
//           {...register("transportType", { required: true })}
//         >
//           <option value="">Select Transport Type</option>
//           <option>Bus</option>
//           <option>Train</option>
//           <option>Plane</option>
          
//         </select>

//         {/* Price & Quantity */}
//         <div className="grid grid-cols-2 gap-4">
//           <input
//             type="number"
//             className="p-3 border border-gray-300  rounded-md"
//             placeholder="Price (per unit)"
//             {...register("price", { required: true })}
//           />
//           <input
//             type="number"
//             className="p-3 border border-gray-300  rounded-md"
//             placeholder="Ticket Quantity"
//             {...register("quantity", { required: true })}
//           />
//         </div>

//         {/* Date & Time */}
//         <div>
//           <label className="block font-semibold mb-1">
//             Departure Date & Time
//           </label>
//           <input
//             type="datetime-local"
//             className="w-full p-3 border border-gray-300 rounded-md"
//             {...register("departure", { required: true })}
//           />
//         </div>

//         {/* Perks */}
//         <div>
//           <label className="block font-semibold mb-1">Perks</label>
//           <div className="grid grid-cols-2 gap-2">
//             {perksOptions.map((perk) => (
//               <label key={perk} className="flex gap-2 items-center">
//                 <input
//                   type="checkbox"
//                   value={perk}
//                   onChange={() => togglePerk(perk)}
//                 />
//                 {perk} 
//                </label>
//             ))}
//           </div>
//         </div>

      
//         {/* Image */}
//             <div className=' p-4  w-full  m-auto rounded-lg grow'>
//               <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
//                 <div className='flex flex-col w-max mx-auto text-center'>
//                   <label>
//                     <input
//                       className='text-sm cursor-pointer w-36 hidden file-input'
//                       type='file'
//                       {...register('image')}
//                       name='image'
//                       id='image'
                    
                      
//                     />
//                     <div className='bg-yellow-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-yellow-400'>
//                       Upload Image
//                     </div>
//                   </label>
//                 </div>
//               </div>
//             </div>


//         {/* Vendor Info */}
//         <div className="grid grid-cols-2 gap-4">
//           <input
//             readOnly
//             className="p-3 border border-gray-300 bg-gray-100 rounded-md cursor-not-allowed"
//             value={user?.displayName || "Vendor"}
//           />
//           <input
//             readOnly
//             className="p-3 border border-gray-300 bg-gray-100 rounded-md cursor-not-allowed"
//             value={user?.email || ""}
//           />
//         </div>

//         {/* Submit Button */}
//         {/* <button
//           type="submit"
//           className="w-fullpx-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg shadow-md transition duration-200 "
//         >
//          Add Ticket
//         </button> */}
//      {
//       user?.isFraud ? <button>frtccgj</button> : <button
//           type="submit"
//           className="w-full px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg shadow-md transition duration-200 "
//         >
//          Add Ticket
//         </button> 
//      }  
//       {/* <button 
//   className=" btn-primary"
//   disabled={user?.isFraud}
// >
//   Add Ticket
// </button> */}

// {user?.isFraud && (
//   <p className="text-red-500 text-sm mt-2">
//     ⚠ You are restricted due to fraudulent activity.
//   </p>
// )}

//       </form>
//     </div>
//   );

// };

// export default AddTicket;



import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import { imageUpload } from '../../Utility';
import { useNavigate } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const AddTicket = () => {
  const {user} = useAuth()
  const email = user?.email
  const [userr, setUserr] = useState(null); // User from backend
  const instance = useAxiosSecure();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selectedPerks, setSelectedPerks] = useState([]);
  const navigate = useNavigate();

  console.log(userr)

  const perksOptions = ["AC", "WiFi", "Food", "TV", "Charging Port", "Breakfast"];

  const togglePerk = (perk) => {
    setSelectedPerks(prev =>
      prev.includes(perk)
        ? prev.filter(item => item !== perk)
        : [...prev, perk]
    );
  };

  // Fetch user from backend
  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Replace with the logged-in user's email (from token or localStorage)
        // const email = localStorage.getItem('userEmail'); 
        // if (!email) return;
        const res = await instance.get(`/users/${email}`);
        setUserr(res.data);
      } catch (err) {
        console.log('Failed to fetch userr', err);
      }
    };
    fetchUser();
  }, []);

  // const handleTickets = async (data) => {
  //   if (!user) {
  //     toast.error('User not loaded yet!');
  //     return;
  //   }

  //   const { title, from, to, transportType, price, quantity, departure } = data;
  //   const imageFile = data.image[0];
  //   const image = await imageUpload(imageFile);

  //   const ticketInfo = {
  //     title,
  //     from,
  //     to,
  //     transportType,
  //     price: Number(price),
  //     quantity: Number(quantity),
  //     image,
  //     departure,
  //     selectedPerks,
  //     vendorName: user.displayName,
  //     vendorEmail: user.email,
  //     isFraud: user.isFraud || false
  //   };

  //   try {
  //     const res = await instance.post('/tickets', ticketInfo);
  //     if (res.data.insertedId) {
  //       toast.success('Tickets Added Successfully!');
  //       navigate('/dashboard/my-added-tickets');
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     toast.error(err.response?.data?.message || 'Failed to add ticket');
  //   }
  // };


  const handleTickets = async (data) => {
  if (!userr) {
    toast.error('User not loaded yet!');
    return;
  }

  // ❌ Prevent adding ticket if user is fraud
  if (userr.isFraud) {
    toast.error('You are restricted from adding tickets due to fraudulent activity.');
    return;
  }

  const { title, from, to, transportType, price, quantity, departure } = data;
  const imageFile = data.image[0];
  const image = await imageUpload(imageFile);

  const ticketInfo = {
    title,
    from,
    to,
    transportType,
    price: Number(price),
    quantity: Number(quantity),
    image,
    departure,
    selectedPerks,
    vendorName: user.displayName,
    vendorEmail: user.email,
  };

  try {
    const res = await instance.post('/tickets', ticketInfo);
    if (res.data.insertedId) {
      toast.success('Tickets Added Successfully!');
      navigate('/dashboard/my-added-tickets');
    }
  } catch (err) {
    console.log(err);
    toast.error(err.response?.data?.message || 'Failed to add ticket');
  }
};

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-300 mt-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-yellow-500">
        🎟 Add New Ticket
      </h2>

      <form onSubmit={handleSubmit(handleTickets)} className="grid gap-6">

        {/* Ticket Title */}
        <div>
          <input
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Ticket Title"
            {...register("title", { required: true })}
          />
          {errors.title && <p className="text-red-500 text-sm">Required*</p>}
        </div>

        {/* From - To */}
        <div className="grid grid-cols-2 gap-4">
          <input
            className="p-3 border border-gray-300 rounded-md"
            placeholder="From (Location)"
            {...register("from", { required: true })}
          />
          <input
            className="p-3 border border-gray-300 rounded-md"
            placeholder="To (Location)"
            {...register("to", { required: true })}
          />
        </div>

        {/* Transport Type */}
        <select
          className="p-3 border border-gray-300 rounded-md"
          {...register("transportType", { required: true })}
        >
          <option value="">Select Transport Type</option>
          <option>Bus</option>
          <option>Train</option>
          <option>Plane</option>
        </select>

        {/* Price & Quantity */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            className="p-3 border border-gray-300 rounded-md"
            placeholder="Price (per unit)"
            {...register("price", { required: true })}
          />
          <input
            type="number"
            className="p-3 border border-gray-300 rounded-md"
            placeholder="Ticket Quantity"
            {...register("quantity", { required: true })}
          />
        </div>

        {/* Date & Time */}
        <div>
          <label className="block font-semibold mb-1">Departure Date & Time</label>
          <input
            type="datetime-local"
            className="w-full p-3 border border-gray-300 rounded-md"
            {...register("departure", { required: true })}
          />
        </div>

        {/* Perks */}
        <div>
          <label className="block font-semibold mb-1">Perks</label>
          <div className="grid grid-cols-2 gap-2">
            {perksOptions.map((perk) => (
              <label key={perk} className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  value={perk}
                  onChange={() => togglePerk(perk)}
                />
                {perk}
              </label>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className='p-4 w-full m-auto rounded-lg grow'>
          <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
            <div className='flex flex-col w-max mx-auto text-center'>
              <label>
                <input
                  className='text-sm cursor-pointer w-36 hidden file-input'
                  type='file'
                  {...register('image')}
                  name='image'
                  id='image'
                />
                <div className='bg-yellow-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-yellow-400'>
                  Upload Image
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Vendor Info */}
        <div className="grid grid-cols-2 gap-4">
          <input
            readOnly
            className="p-3 border border-gray-300 bg-gray-100 rounded-md cursor-not-allowed"
            value={user?.displayName || "Vendor"}
          />
          <input
            readOnly
            className="p-3 border border-gray-300 bg-gray-100 rounded-md cursor-not-allowed"
            value={user?.email || ""}
          />
        </div>

        {/* Submit Button */}
        {userr?.isFraud ? (
          <button disabled className="w-full px-6 py-2 bg-gray-400 text-black font-semibold rounded-lg shadow-md">
            Restricted
          </button>
        ) : (
          <button
            type="submit"
            className="w-full px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg shadow-md transition duration-200"
          >
            Add Ticket
          </button>
        )}

        {userr?.isFraud && (
          <p className="text-red-500 text-sm mt-2">
            ⚠ You are restricted due to fraudulent activity.
          </p>
        )}

      </form>
    </div>
  );
};

export default AddTicket;

