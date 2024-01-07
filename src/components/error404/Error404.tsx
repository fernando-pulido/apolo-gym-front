// import { Link } from 'react-router-dom'

import { ROUTES } from '../../constants/url.constant'

import './Error404.css'

type Props = {
  text?: string
}

const Error404 = ({ text = 'Error 404' }: Props) => {
  return (
    <div className='error404'>
      <div className='error404__content'>
        <h1 className='error404__title'>{text}</h1>
        <a
          href={ROUTES.Home.url}
          title={ROUTES.Home.text}
          className='btn btn-primary'
        >
          {ROUTES.Login.text}
        </a>
      </div>
    </div>
  )
}

export default Error404
