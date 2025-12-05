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
