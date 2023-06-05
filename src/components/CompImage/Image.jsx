import './Image.css'
import imgLateral from '../../assets/img-lateral.svg'

export function Image() {
  return (
    <div className='img-direito'>
        <img  src={imgLateral} alt="Img" />
    </div>
  )
}