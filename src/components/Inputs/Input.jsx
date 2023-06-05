import './Input.css'
import EyesOff from '../../assets/eye-off.svg'

export function Input() {
  return (
    <div>
        <div className="inputs-grup">
          <div className='inputs'>
            <label className='labels-input'>E-mail</label>
            <input type="email" className='inputs-iguis' placeholder='Digite seu e-mail'/>
          </div>
          <div className='inputs'>
            <div className='esq-pass'>
            <span id='span-senha'>Esqueceu a senha?</span>
            </div>
            <label className='labels-input'>Senha</label>
            <input type="password" className='inputs-iguis' placeholder='Digite sua senha'/>
            <span className='input-icon'>
              <img src={EyesOff} alt="Hide Senha" />
            </span>
          </div>
        </div>
    </div>
  )
}

