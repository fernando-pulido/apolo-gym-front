import {} from './Login.css'
import { Form } from './Input'

export const Card = () => {
  return (
    <div>
      <form className='form'>
        <p className='form-title'>Login</p>
        <div className='input-container'>
          <Form className='card-input' type='text' placeholder='nombre' />
          <span></span>
        </div>

        <div className='input-container'>
          <Form type='password' placeholder='password' />
        </div>

        <button type='submit' className='submit'>
          Sign in
        </button>

        <p className='signup-link'>
          No account?
          <a href=''>Sign up</a>
        </p>
      </form>
    </div>
  )
}
