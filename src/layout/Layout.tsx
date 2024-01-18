import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'

import { Loader } from '../components/loader'
import { Navbar } from '../components/navbar'

import { GenerateRoutes } from '../Routes/routes'

import './Layout.css'

const Content = () => {
  return (
    <div className='layout'>
      <header>
        <Navbar />
      </header>
      <main className='container-fluid'>
        <Suspense fallback={<Loader />}>
          <RouterProvider router={GenerateRoutes()} />
        </Suspense>

        <section></section>
      </main>

      <footer style={{ backgroundColor: '#a9a9a9' }}>el footer</footer>
    </div>
  )
}
export default Content
