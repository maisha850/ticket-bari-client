// import { useState } from 'react'
// import { Link, NavLink } from 'react-router'

// // Icons
// import { GrLogout } from 'react-icons/gr'

// import { AiOutlineBars } from 'react-icons/ai'
// import { CgProfile } from "react-icons/cg";

// import Logo from '../Shared/Logo'
// import useAuth from '../../Hooks/useAuth'
// import VendorMenu from '../Vendor/VendorMenu'
// import UserMenu from '../User/UserMenu'
// import AdminMenu from '../Admin/AdminMenu'
// import useRoles from '../../Hooks/useRoles'


// // User Menu


// const Sidebar = () => {
//   const { logOut } = useAuth()
//   const{role}=useRoles()
//   const [isActive, setActive] = useState(false)

//   // Sidebar Responsive Handler
//   const handleToggle = () => {
//     setActive(!isActive)
//   }

//   return (
//     <>
//       {/* Small Screen Navbar, only visible till md breakpoint */}
//       <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
//         <div>
//           <div className='block cursor-pointer p-4 font-bold'>
//            <Logo></Logo>
//           </div>
//         </div>

//         <button
//           onClick={handleToggle}
//           className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
//         >
//           <AiOutlineBars className='h-5 w-5' />
//         </button>
//       </div>

//       {/* Sidebar */}
//       <div
//         className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden shadow-2xl w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
//           isActive && '-translate-x-full'
//         }  md:translate-x-0  transition duration-200 ease-in-out`}
//       >
//         <div className='flex flex-col h-full'>
//           {/* Top Content */}
//           <div>
//             {/* Logo */}
//             <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-blue-950 mx-auto'>
        
//              <Logo></Logo>
              
//             </div>
//           </div>

//           {/* Middle Content */}
//           <div className='flex flex-col justify-between flex-1 mt-6'>
//             {/*  Menu Items */}
//             <nav>
                   
//               {role === 'vendor' && <VendorMenu></VendorMenu> }
//               {role === 'admin' &&     <AdminMenu></AdminMenu> }
//               {role === 'user' &&     <UserMenu></UserMenu> }
            
        
        
            
//             </nav>
//           </div>

//           {/* Bottom Content */}
//           <div>
//             <hr />
//               <NavLink className='text-xl my-5 font-bold text-gray-500 hover:text-gray-400 flex items-center gap-2 justify-start' to={'/dashboard/profile'}>  <CgProfile size={20}></CgProfile>Profile</NavLink>

//             {/* <MenuItem
//               icon={FcSettings}
//               label='Profile'
//               address='/dashboard/profile'
//             /> */}
//             <button
//               onClick={logOut}
//               className='flex cursor-pointer w-full items-center  py-2 mt-5 text-gray-500 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
//             >
//               <GrLogout className='w-5 h-5' />

//               <span className='mx-4 font-medium'>Logout</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Sidebar

import { useState } from "react";
import { NavLink } from "react-router";
import { AiOutlineBars } from "react-icons/ai";
import { GrLogout } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";

import Logo from "../Shared/Logo";
import useAuth from "../../Hooks/useAuth";
import VendorMenu from "../Vendor/VendorMenu";
import UserMenu from "../User/UserMenu";
import AdminMenu from "../Admin/AdminMenu";
import useRoles from "../../Hooks/useRoles";

const Sidebar = () => {
  const { logOut } = useAuth();
  const { role } = useRoles();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Top Navbar */}
      <div className="md:hidden flex items-center justify-between bg-white  shadow px-4 py-3">
        <Logo />
        <button onClick={() => setIsOpen(true)}>
          <AiOutlineBars className="text-2xl" />
        </button>
      </div>

      {/* Overlay (mobile only) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static z-50 top-0 left-0 min-h-screen w-64  bg-white shadow-xl
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <div className="flex flex-col h-full">

          {/* Logo */}
          <div className="hidden md:flex items-center justify-center p-4 bg-blue-950">
            <Logo />
          </div>

          {/* Menu */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {role === "vendor" && <VendorMenu />}
            {role === "admin" && <AdminMenu />}
            {role === "user" && <UserMenu />}
          </nav>

          {/* Bottom */}
          <div className="p-4 border-t">
            <NavLink
              to="/dashboard/profile"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              <CgProfile size={20} />
              Profile
            </NavLink>

            <button
              onClick={logOut}
              className="flex items-center gap-3 p-2 mt-4 w-full rounded-lg text-gray-600 hover:bg-gray-100"
            >
              <GrLogout size={18} />
              Logout
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
