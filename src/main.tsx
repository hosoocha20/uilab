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
import TextReveal from './components/TextReveal.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/components",
        element: <Components />,
        children : [
          {
            index: true,
            element: <Hero />
          },
          {
            path: "/components/text-reveal",
            element: <TextReveal />
          }
        ]
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
