type Routes = {
  text: string
  url: string
}

type BasicRoutes = 'About' | 'Contact' | 'Login' | 'Home'

export const ROUTES: Record<BasicRoutes, Routes> = {
  About: {
    text: 'Planes disponibles',
    url: '/about',
  },
  Contact: {
    text: 'Redes Sociales',
    url: '/contact',
  },
  Login: {
    text: 'Inicio Sesión',
    url: '/login',
  },
  Home: {
    text: 'ApoloGym',
    url: '/',
  },
}
