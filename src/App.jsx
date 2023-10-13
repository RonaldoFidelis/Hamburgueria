import './App.css'
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
      </main>
      <footer className='Foot'>

      </footer>
    </div>
  )
}

export default App
