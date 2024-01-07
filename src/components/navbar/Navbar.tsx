import { NavbarItem } from './components/NavbarItem'

import { ROUTES as R } from '../../constants/url.constant'

export const Navbar = () => (
  <nav className='navbar navbar-expand-lg navbar-light bg-light'>
    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
      <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
        <NavbarItem text={R.Home.text} url={R.Home.url} />
        <NavbarItem text={R.About.text} url={R.About.url} />
        <NavbarItem text={R.Contact.text} url={R.Contact.url} />
        <NavbarItem text={R.Login.text} url={R.Login.url} />
      </ul>
    </div>
  </nav>
)

export default Navbar
