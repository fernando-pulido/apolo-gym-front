import './CardAbout.css'

import Img4 from '../../assets/image/img4.jpg'
import Img5 from '../../assets/image/img7.jpg'
import Img6 from '../../assets/image/img6.png'
import Img7 from '../../assets/image/img7.jpg'

const CardsAbout = () => {
  return (
    <div>
      <div className='row row-cols-1 row-cols-md-2 g-4'>
        <div className='col'>
          <div className='card'>
            <img src={Img4} className='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className='card-title'>Plan mensual</h5>
              <p className='card-text'>
                Este plan cubre un plazo de 30 dias consecutivos con un costo de
                60.000
              </p>
            </div>
          </div>
        </div>

        <div className='col'>
          <div className='card'>
            <img src={Img5} className='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className='card-title'>Plan amigos</h5>
              <p className='card-text'>
                Este plan es para dos o mas personas su valor es de 55.000
              </p>
            </div>
          </div>
        </div>

        <div className='col'>
          <div className='card'>
            <img src={Img6} className='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className='card-title'>Tiquetera de 15 dias</h5>
              <p className='card-text'>
                Este plan es una tiqueta que tiene disponible 15 dias para usar
                a lo largo de 30 dias
              </p>
            </div>
          </div>
        </div>

        <div className='col'>
          <div className='card'>
            <img src={Img7} className='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className='card-title'>Tiquetera de 10 dias</h5>
              <p className='card-text'>
                Este plan es una tiqueta que tiene disponible 10 dias para usar
                a lo largo de 30 dias
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='row row-cols-1 row-cols-md-2 g-4'>
        <div className='col'>
          <div className='card'>
            <img src={Img4} className='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className='card-title'>Plan mensual</h5>
              <p className='card-text'>
                Este plan cubre un plazo de 30 dias consecutivos con un costo de
                60.000
              </p>
            </div>
          </div>
        </div>

        <div className='col'>
          <div className='card'>
            <img src={Img5} className='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className='card-title'>Plan amigos</h5>
              <p className='card-text'>
                Este plan es para dos o mas personas su valor es de 55.000
              </p>
            </div>
          </div>
        </div>

        <div className='col'>
          <div className='card'>
            <img src={Img6} className='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className='card-title'>Tiquetera de 15 dias</h5>
              <p className='card-text'>
                Este plan es una tiqueta que tiene disponible 15 dias para usar
                a lo largo de 30 dias
              </p>
            </div>
          </div>
        </div>

        <div className='col'>
          <div className='card'>
            <img src={Img7} className='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className='card-title'>Tiquetera de 10 dias</h5>
              <p className='card-text'>
                Este plan es una tiqueta que tiene disponible 10 dias para usar
                a lo largo de 30 dias
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CardsAbout
