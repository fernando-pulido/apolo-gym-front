//import Error404 from './components/error404'

import { RouterProvider } from 'react-router-dom'
import { GenerateRoutes } from './Routes/routes'

// import { Navbar } from './components/navbar'

const App = () => {
  const router = GenerateRoutes()
  return <RouterProvider router={router} />
}

export default App
