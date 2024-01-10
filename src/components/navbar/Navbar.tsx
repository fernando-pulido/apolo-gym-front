import { NavbarItem } from './components/NavbarItem'

import { ROUTES as R } from '../../constants/url.constant'

import './Navbar.css'

export const Navbar = () => (
  <nav
    className='nav-content d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'
    style={{ backgroundColor: '#f51' }}
  >
    <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
      <NavbarItem text={R.Home.text} url={R.Home.url} />
      <NavbarItem text={R.About.text} url={R.About.url} />
      <NavbarItem text={R.Contact.text} url={R.Contact.url} />
      <NavbarItem text={R.Login.text} url={R.Login.url} />
    </ul>
  </nav>
)

export default Navbar
