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

const queryClient = new QueryClient()
const router = createBrowserRouter([
{
  path:'/',
  Component: MainLayout,
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
      element: <AllTickets></AllTickets>
    },
    {
      path:'/ticket-details/:id',
      Component: TicketDetails
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
      Component: AddTicket
    },
    {
      path:'profile',
      Component: Profile
    },
    {
      path:'my-added-tickets',
      element: <MyAddedTicket></MyAddedTicket>
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
      element:<RequestedBookings></RequestedBookings>
    },
    {
      path: 'user-management',
      element: <UserMgt></UserMgt>
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
