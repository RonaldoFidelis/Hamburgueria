import './App.css'
import { Cardapio } from './components/Cardapio'
import { Footer } from './components/Footer'
import { Home } from './components/Home'
import { Nav } from './components/Nav'
// IMGs cardapio
import burger from '/img/burguer.png'
import pizza from '/img/pizza.png'
import express from '/img/express.png'
import cebola from '/img/aneisdecebola.png'
import xegg from '/img/xegg.png'
import xbacon from '/img/xbacon.png'

const cardapio = [
  {
    nome: 'Tradicional',
    preco: 25.90,
    img: burger,
    gramas: 150,
    id:1
  }, {
    nome: 'X-Egg',
    preco: 30.00,
    img: xegg,
    gramas: 180,
    id:2
  },{
    nome: 'X-Bacon',
    preco: 32.50,
    img: xbacon,
    gramas: 185,
    id:2
  }, {
    nome: 'Express',
    preco: 35.90,
    img: express,
    gramas: 220,
    id:3
  }, {
    nome: 'Pizza',
    preco: 45.90,
    img: pizza,
    gramas: 500,
    id:4
  }, {
    nome: 'Aneis de cebola',
    preco: 15.90,
    img: cebola,
    gramas: 100,
    id:5
  },

]

function App() {

  return (
    <div className='w-full min-h-full'>
      <header className='Nav'>
        <Nav />
      </header>
      <main className='Home'>
        <Home />
        <Cardapio produto={cardapio} />
      </main>
      <footer className='Foot'>
        <Footer />
      </footer>
    </div>
  )
}

export default App
