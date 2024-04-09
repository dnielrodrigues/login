import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Register from './routes/Register.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import Site from './routes/Site.jsx'

const router = createBrowserRouter([

  {
    path: '/Register',
    element: <Register/>,
    errorElement: <ErrorPage />,
  }, 
  {
    path: '/',
    element: <Site/>,
    errorElement: <ErrorPage />,
  }, 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
