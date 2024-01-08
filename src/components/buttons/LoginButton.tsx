import './LoginButton.css'

type Props = {
  text?: string
}

export const LoginButton = ({ text = 'Login' }: Props) => (
  <div className='mdl-grid'>
    <button
      className='mdl-cell mdl-cell--12-col mdl-button mdl-button--raised mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-color-text--white btn-login'
      type='submit'
    >
      {text}
    </button>
  </div>
)
