//import Error404 from './components/error404'

import { RouterProvider } from 'react-router-dom'
import { Suspense } from 'react'

import { GenerateRoutes } from './Routes/routes'
import { Loader } from './components/loader'

// import { Navbar } from './components/navbar'

const App = () => (
  <Suspense fallback={<Loader />}>
    <RouterProvider router={GenerateRoutes()} />
  </Suspense>
)

export default App
