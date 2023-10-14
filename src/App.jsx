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
import hotdog from '/img/hotdog.png'
import milk from '/img/milkshake.png'
import bolo from '/img/bolo.png'
import duplex from '/img/duplex.png'
// Audio
const confirm = new Audio('/audio/confirm.mp3');
import './App.css'

const cardapio = [
  {
    nome: 'Tradicional',
    preco: 25.90,
    img: burger,
    gramas: '150g',
    id: 1
  }, {
    nome: 'X-Egg',
    preco: 30.00,
    img: xegg,
    gramas: '180g',
    id: 2
  }, {
    nome: 'X-Bacon',
    preco: 32.50,
    img: xbacon,
    gramas: '185g',
    id: 3
  }, {
    nome: 'Duple-X',
    preco: 35.90,
    img: duplex,
    gramas: '285g',
    id: 12
  }, {
    nome: 'Express',
    preco: 35.90,
    img: express,
    gramas: '220g',
    id: 4
  }, {
    nome: 'Pizza',
    preco: 45.90,
    img: pizza,
    gramas: '500g',
    id: 5
  }, {
    nome: 'Aneis de cebola',
    preco: 15.90,
    img: cebola,
    gramas: '100g',
    id: 6
  }, {
    nome: 'Nuggets',
    preco: 10.99,
    img: nuggets,
    gramas: '100g',
    id: 7
  }, {
    nome: 'Batatinha',
    preco: 7.90,
    img: batata,
    gramas: '100g',
    id: 8
  },{
    nome: 'Dogão',
    preco: 16.50,
    img: hotdog,
    gramas: '145g',
    id: 9
  },{
    nome: 'Milkshake',
    preco: 12.50,
    img: milk,
    gramas: '250Ml',
    id: 10
  },{
    nome: 'Bolo',
    preco: 15.80,
    img: bolo,
    gramas: '320g',
    id: 11
  },
]

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (produto) => {

    const isItemInCart = cart.some((item) => item.id === produto.id);

    if (isItemInCart) {
      return
    } else {
      const add = [...cart, {
        nome: produto.nome,
        preco: produto.preco,
        img: produto.img,
        gramas: produto.gramas,
        id: produto.id
      }];
      confirm.play();
      setCart(add);
    }
  }
  return (
    <div className='w-full min-h-full'>
      <BrowserRouter>
        <header className='Nav'>
          <Nav cart={cart} />
        </header>
        <main className=''>
          <Routes>
            <Route path="/" element={<Home Produtos={cardapio} addToCart={addToCart} />} />
            <Route path="/carrinho" element={<Carrinho cart={cart} setCart={setCart}/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
