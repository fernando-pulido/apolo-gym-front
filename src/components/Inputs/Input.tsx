import './Input.css'

type Props = {
  type: 'text' | 'number' | 'password'
  placeholder: string
  name: string
  messageError: string
  error: boolean
  value: string
}

export const Input = ({
  type,
  name,
  placeholder,
  error,
  messageError,
}: Props) => {
  return (
    <div className='mdl-grid'>
      <div className='mdl-cell mdl-cell--12-col'>
        <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
          <input
            className='mdl-textfield__input'
            type={type}
            id={name}
            name={name}
          />
          <label className='mdl-textfield__label placeholder' htmlFor={name}>
            {placeholder}
          </label>
          {error && (
            <span
              className='mdl-textfield__error'
              style={{ visibility: error ? 'visible' : 'hidden' }}
            >
              {messageError}!
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
