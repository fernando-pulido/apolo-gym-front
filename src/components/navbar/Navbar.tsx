import { NavbarItem } from './components/NavbarItem'

import { ROUTES as R } from '../../constants/url.constant'

import './Navbar.css'

export const Navbar = () => (
  <nav
    className='nav-content d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'
    style={{ backgroundColor: '#232323' }}
  >
    <ul className='nav'>
      <NavbarItem text={R.Home.text} url={R.Home.url} />
      <NavbarItem text={R.About.text} url={R.About.url} />
      <NavbarItem text={R.Contact.text} url={R.Contact.url} />
      <NavbarItem text={R.Login.text} url={R.Login.url} />
    </ul>
  </nav>
)

export default Navbar
