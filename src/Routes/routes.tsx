import { ROUTES } from '../constants/url.constant'
import { createBrowserRouter } from 'react-router-dom'

import Home from '../views/home'
import Login from '../views/login'
import Contac from '../views/contact'
import About from '../views/about/About'

export function GenerateRoutes() {
  const routes = createBrowserRouter([
    { path: ROUTES.Home.url, element: <Home /> },
    { path: ROUTES.About.url, element: <About /> },
    { path: ROUTES.Contact.url, element: <Contac /> },
    { path: ROUTES.Login.url, element: <Login /> },
  ])

  return routes
}
