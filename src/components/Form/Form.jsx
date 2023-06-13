import './Form.css'
import EyesOff from '../../assets/eye-off.svg'
import { useState } from 'react'


export function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handlePegarDados(event){
    setEmail(event.target.value)
  }

  function handlePegapass(event){
    setPassword(event.target.value)
  }

  function handleEnviar(){
    alert('E-mail: ' + email + '\nSenha: ' + password);
  }


  return (
    <div className='rihts-glb'>
      <div className='text-flot'>
        <h1>Acesse a plataforma</h1>
        <span className='text-login'>
          Faça login ou registre-se para começar a construir <br />
          seus projetos ainda hoje.</span>
      </div>
      <form className='forms-data'>
        <div>
          <div>
            <div className="inputs-grup">
              <div className='inputs'>
                <label className='labels-input'>E-mail</label>
                <input
                  type="email"
                  className='inputs-iguis'
                  value={email}
                  placeholder='Digite seu e-mail' 
                  onChange={handlePegarDados}
                  />
              </div>
              <div className='inputs'>
                <div className='esq-pass'>
                  <span id='span-senha'>Esqueceu a senha?</span>
                </div>
                <label className='labels-input'>Senha</label>
                <input
                  type="password"
                  className='inputs-iguis'
                  value={password}
                  placeholder='Digite sua senha'
                  onChange={handlePegapass}
                />
                <span className='input-icon'>
                  <img src={EyesOff} alt="Hide Senha" />
                </span>
              </div>
            </div>
          </div>
          <button 
          className='btn-button' 
          type="submit"
          onClick={handleEnviar}
          >
          Entrar
          </button>

          <span className='text-span'>Ainda não tem uma conta? <label className='span-label'>Inscreva-se</label></span>
        </div>
      </form>
    </div>
  )
}

