import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { MyBrowser } from './Components/MainPage/Router/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Components/MainPage/AuthProivder/AuthProvider'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={MyBrowser} />
    </AuthProvider>
  </React.StrictMode>,
)
