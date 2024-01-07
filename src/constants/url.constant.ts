type Routes = {
  text: string
  url: string
}

type BasicRoutes = 'About' | 'Contact' | 'Login' | 'Home'

export const ROUTES: Record<BasicRoutes, Routes> = {
  About: {
    text: 'Quienes somos?',
    url: '/about',
  },
  Contact: {
    text: 'Contactarnos',
    url: '/contact',
  },
  Login: {
    text: 'Iniciar Sesión',
    url: '/login',
  },
  Home: {
    text: 'Inicio',
    url: '/',
  },
}
