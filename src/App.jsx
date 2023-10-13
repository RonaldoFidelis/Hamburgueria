import './App.css'
import { Cardapio } from './components/Cardapio'
import { Footer } from './components/Footer'
import { Home } from './components/Home'
import { Nav } from './components/Nav'

function App() {

  return (
    <div className='w-full min-h-full'>
      <header className='Nav'>
        <Nav/>
      </header>
      <main className='Home'>
        <Home/>
        <Cardapio/>
      </main>
      <footer className='Foot'>
        <Footer/>
      </footer>
    </div>
  )
}

export default App
