import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './Componants/Layouts/MainLayout.jsx'
import Home from './Componants/Pages/Home.jsx'
import SignUp from './Componants/Auth/SignUp.jsx'
import SignIn from './Componants/Auth/SignIn.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'
import Dashboard from './Componants/Layouts/Dashboard.jsx'
import PrivateRoute from './Componants/Routes/PrivateRoute.jsx'
import DashboardHome from './Componants/Dashboard/DashboardHome.jsx'
import AddTicket from './Componants/Vendor/AddTicket.jsx'
import Profile from './Componants/Common/Profile.jsx'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import MyAddedTicket from './Componants/Vendor/MyAddedTicket.jsx'
import UpdateTicket from './Componants/Vendor/UpdateTicket.jsx'
import AllTickets from './Admin/AllTickets.jsx'
import TicketDetails from './Componants/TicketDetails.jsx'
import MyBookedTicket from './Componants/User/MyBookedTicket.jsx'
import PaymentSuccess from './Componants/Pages/PaymentSuccess.jsx'
import TransactionHistory from './Componants/User/TransactionHistory.jsx'
import RequestedBookings from './Componants/Vendor/RequestedBookings.jsx'
import UserMgt from './Componants/Admin/UserMgt.jsx'
import ManageTicket from './Componants/Admin/ManageTicket.jsx'
import AdvertiseTickets from './Componants/Admin/AdvertiseTickets.jsx'
import ErrorPage from './Componants/ErrorPage.jsx'
import Revenue from './Componants/Vendor/Revenue.jsx'
import VendorRoute from './Componants/Routes/VendorRoute.jsx'
import AdminRoute from './Componants/Routes/AdminRoute.jsx'
import About from './Componants/About.jsx'
import SearchResults from './Componants/Home/SearchResults.jsx'


const queryClient = new QueryClient()
const router = createBrowserRouter([
{
  path:'/',
  Component: MainLayout,
  errorElement:<ErrorPage></ErrorPage>,
  children: [
    {
      index: true,
      Component: Home
    },
    {
      path:'/register',
      Component: SignUp
    },
    {
      path:'/logIn',
      Component:SignIn
    },
        {
      path:'/all-tickets',
      element: <PrivateRoute><AllTickets></AllTickets></PrivateRoute>
    },
    {
      path:'/ticket-details/:id',
      Component: TicketDetails
    },
    {
      path: '/about',
      Component: About
    },
    {
      path: '/search',
      Component: SearchResults
    }

  ]

},
{
  path:'/dashboard',
  element: <PrivateRoute>
    <Dashboard></Dashboard>
  </PrivateRoute>,
  children: [
    {
      index: true,
      Component:DashboardHome
    },
    {
      path:'add-tickets',
     element: <VendorRoute>
      <AddTicket></AddTicket>
     </VendorRoute>
    },
    {
      path:'profile',
      Component: Profile
    },
    {
      path:'my-added-tickets',
      element:<VendorRoute>
         <MyAddedTicket></MyAddedTicket>
      </VendorRoute>
    },
    {
      path: 'update-ticket/:id',
      element: <UpdateTicket></UpdateTicket>
    },
    {
      path:'my-booked-tickets',
      element: <MyBookedTicket></MyBookedTicket>
    },
    {
      path:'payment-success',
      Component: PaymentSuccess
    },
    {
      path:'transaction-history',
      Component: TransactionHistory
    },
    {
      path: 'requested-bookings',
      element:<VendorRoute>
        <RequestedBookings></RequestedBookings>
      </VendorRoute>
    },
    {
      path: 'user-management',
      element: <AdminRoute>
        <UserMgt></UserMgt>
      </AdminRoute>
    },
    {
      path: 'manage-tickets',
      element: <AdminRoute>
        <ManageTicket></ManageTicket>
      </AdminRoute>
    },
    {
      path: 'advertise-tickets',
      element: <AdminRoute>
        <AdvertiseTickets></AdvertiseTickets>
      </AdminRoute>
    },
    {
      path: 'revenue',
      element: <VendorRoute>
        <Revenue></Revenue>
      </VendorRoute>
    }
    
  ]


}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
 <QueryClientProvider client={queryClient}>
   <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer></ToastContainer>
  </AuthProvider>
 </QueryClientProvider>
  </StrictMode>,
)
