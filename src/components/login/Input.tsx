import { InputUsers as Props } from '../login/types'

export const Form = ({ type, placeholder }: Props) => (
  <form className='input-container'>
    <input type={type} placeholder={placeholder} />
  </form>
)
