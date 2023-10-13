import { Logo } from './Logo'
import { Cardapio } from './Cardapio'
import { Footer } from './Footer'

export function Home({Produtos, addToCart}) {
  return (
    <div>
      <main>
        <Logo />
        <Cardapio produto={Produtos} addToCart={addToCart} />
      </main>
      <footer className='Foot'>
        <Footer />
      </footer>
    </div>
  )
}
