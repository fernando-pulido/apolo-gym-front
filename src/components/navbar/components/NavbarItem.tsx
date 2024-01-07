import { FC } from 'react'
// import { Link } from 'react-router-dom'

type Props = {
  url: string
  text: string
  className?: string
}

export const NavbarItem: FC<Props> = ({ text, url, className }) => (
  <li className={`nav-item ${className ?? ''}`}>
    <a className='nav-link' href={url}>
      {text}
    </a>
  </li>
)
