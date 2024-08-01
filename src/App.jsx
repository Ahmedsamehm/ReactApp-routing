import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home'
import Portfolio from './Components/Portfolio/Portfolio'
import About from './Components/About/About'
import ContactMe from './Components/ContactMe/ContactMe'
import Footer from './Components/Footer/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import NotFoundPage from './Components/NotFoundPage/NotFoundPage'





function App() {

  const router = createBrowserRouter([
    { 
      path: '', element: <Layout />, children: [
        { index:true , element: <Home /> },
        { path: `portfolio`, element: <Portfolio /> },
        { path: `about`, element: <About /> },
        { path: `contact`, element: <ContactMe /> },
        {path:`*`,element:<NotFoundPage/>}
      ]}
   ])





  return (
    <>

    <RouterProvider router={router}></RouterProvider>

    </>
   

      

      

  )
}

export default App
