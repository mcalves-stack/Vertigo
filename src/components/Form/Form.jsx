import { Input } from '../Inputs/Input'
import './Form.css'


export function Form() {

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
          <Input />
          <button className='btn-button' type="submit">Entrar</button>
          
          <span className='text-span'>Ainda não tem uma conta? <label className='span-label'>Inscreva-se</label></span>
        </div>
      </form>
    </div>
  )
}

