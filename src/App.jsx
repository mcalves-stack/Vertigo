import { Image } from './components/CompImage/Image'
import { Form } from './components/Form/Form'
import { Header } from './components/Logo/Header'

export function App() {

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Form />  
        <Image />
      </main>
    </>
  )
}

