import './Concat.css'
import img8 from '../../assets/image/img8.jpg'
const Contact = () => {
  return (
    <div className='father'>
      <div className='card'>
        <img src={img8} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>Contactanos a nuestras redes sociales</h5>
        </div>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            Intagram <p>@apologym4</p>
          </li>
          <li className='list-group-item'>
            Facebook <p>apolo gym</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contact
