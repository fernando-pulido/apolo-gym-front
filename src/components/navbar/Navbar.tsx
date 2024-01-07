import { Headers as Props } from '../headers/Header'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div>aqui va header y buton es nese orden </div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              <a>Quienes somos?</a>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contactanos
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link" href="#" id="navbarDropdown">
              Servicios
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
