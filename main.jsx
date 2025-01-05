import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Hero from './Components/Hero.jsx'
import Features from './Components/Features.jsx'
import Blog from './Components/Blog.jsx'
import About from './Components/About.jsx'
import Team from './Components/Team.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"",
        element:<Hero />

      },
      {
        path:"feature",
        element: <Features />
      },
      {
        path:"blog",
        element:<Blog />
      },
      {
        path:"about",
        element:<About />
      },
      {
        path:"team",
        element:<Team />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
