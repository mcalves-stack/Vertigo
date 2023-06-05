import './Header.css'
import Logo from '../../assets/logo.svg'

export function Header() {
  return (
    <div className='logoimg'>
      <img src={Logo} alt="Logo" />
    </div>
  )
}

