import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { ROUTES } from '../constants/url.constant'

const Home = lazy(() => import('../views/home'))
const Login = lazy(() => import('../views/login'))
const Contact = lazy(() => import('../views/contact'))
const About = lazy(() => import('../views/about'))

export function GenerateRoutes() {
  const routes = createBrowserRouter([
    { path: ROUTES.Home.url, element: <Home /> },
    { path: ROUTES.About.url, element: <About /> },
    { path: ROUTES.Contact.url, element: <Contact /> },
    { path: ROUTES.Login.url, element: <Login /> },
  ])

  return routes
}
