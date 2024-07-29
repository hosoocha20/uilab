import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  ScrollRestoration,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import Home from './pages/Home.tsx';
import Components from './pages/Components.tsx';
import Hero from './pages/Hero.tsx';
import Layout from './components/Layout.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
