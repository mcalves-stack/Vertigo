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
          </div>
          
          <button className='btn-button' type="submit">Entrar</button>
          
          <span className='text-span'>Ainda não tem uma conta?  <label className='span-label'>Inscreva-se</label></span>
        </div>
      </form>
    </div>
  )
}

