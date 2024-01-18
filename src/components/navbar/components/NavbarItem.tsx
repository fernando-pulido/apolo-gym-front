import { FC } from 'react'
// import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

type Props = {
  url: string
  text: string
  className?: string
}

export const NavbarItem: FC<Props> = ({ text, url }) => (
  <Navbar bg='dark' data-bs-theme='dark'>
    <Container>
      <Nav className='me-auto'>
        <Nav.Link href={url}>{text}</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
)
