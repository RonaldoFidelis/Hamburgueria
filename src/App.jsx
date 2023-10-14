import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import { Nav } from './components/Nav';
import { Home } from './components/Home';
import { Carrinho } from './components/Carrinho';
// IMGs cardapio
import burger from '/img/burguer.png'
import pizza from '/img/pizza.png'
import express from '/img/express.png'
import cebola from '/img/aneisdecebola.png'
import xegg from '/img/xegg.png'
import xbacon from '/img/xbacon.png'
import nuggets from '/img/nuggets.png'
import batata from '/img/batatinha.png'

import './App.css'

const cardapio = [
  {
    nome: 'Tradicional',
    preco: 25.90,
    img: burger,
    gramas: 150,
    id: 1
  }, {
    nome: 'X-Egg',
    preco: 30.00,
    img: xegg,
    gramas: 180,
    id: 2
  }, {
    nome: 'X-Bacon',
    preco: 32.50,
    img: xbacon,
    gramas: 185,
    id: 2
  }, {
    nome: 'Express',
    preco: 35.90,
    img: express,
    gramas: 220,
    id: 3
  }, {
    nome: 'Pizza',
    preco: 45.90,
    img: pizza,
    gramas: 500,
    id: 4
  }, {
    nome: 'Aneis de cebola',
    preco: 15.90,
    img: cebola,
    gramas: 100,
    id: 5
  }, {
    nome: 'Nuggets',
    preco: 10.99,
    img: nuggets,
    gramas: 100,
    id: 6
  }, {
    nome: 'Batatinha',
    preco: 7.90,
    img: batata,
    gramas: 100,
    id: 7
  },
]

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (produto) => {

    const isItemInCart = cart.some((item) => item.id === produto.id);

    if (isItemInCart) {
      console.log('existe');
    } else {
      console.log('não existe');
      const add = [...cart, {
        nome: produto.nome,
        preco: produto.preco,
        img: produto.img,
        gramas: produto.gramas,
        id: produto.id
      }];
      setCart(add);
    }
  }
  return (
    <div className='w-full min-h-full'>
      <BrowserRouter>
        <header className='Nav'>
          <Nav />
        </header>
        <main className=''>
          <Routes>
            <Route path="/" element={<Home Produtos={cardapio} addToCart={addToCart} />} />
            <Route path="/carrinho" element={<Carrinho cart={cart} setCart={setCart} />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
