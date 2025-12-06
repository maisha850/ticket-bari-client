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
    }
  ]


}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer></ToastContainer>
  </AuthProvider>
  </StrictMode>,
)
