import { useState } from 'react';

export function Carrinho({ cart, setCart }) {
  // Inicialize o estado do carrinho a partir da prop cart
  const [carrinho, setCarrinho] = useState([...cart]);

  const deleteWich = (produto) => {
    // Filtrar os itens do carrinho, removendo o item com o mesmo ID
    const novoCarrinho = carrinho.filter((item) => item.id !== produto.id);
    setCarrinho(novoCarrinho); // Atualizar o estado do carrinho
  };

  // Função para aumentar a quantidade de um item no carrinho
  const increaseQuantity = (produto) => {
    const novoCarrinho = carrinho.map((item) => {
      if (item.id === produto.id) {
        return { ...item, quantidade: (item.quantidade || 1) + 1 };
      }
      return item;
    });
    setCarrinho(novoCarrinho);
  };

  // Função para diminuir a quantidade de um item no carrinho
  const decreaseQuantity = (produto) => {
    const novoCarrinho = carrinho.map((item) => {
      if (item.id === produto.id) {
        return { ...item, quantidade: Math.max((item.quantidade || 1) - 1, 0) };
      }
      return item;
    });
    setCarrinho(novoCarrinho);
  };

  const total = () => {

  }

  // Calcular o subtotal com base nas quantidades e preços dos itens no carrinho
  const subtotal = carrinho.reduce((total, item) => {
    return total + (item.preco * (item.quantidade || 1));
  }, 0);

  console.log(carrinho)
  return (
    <div className="bg-[#F8F8F8] w-full min-h-screen py-20">
      <div className="flex flex-col items-center justify-center">
        <div>
          <h1 className="text-HomeFontPrimary text-3xl">Seu Carrinho</h1>
        </div>
        <div className="flex flex-wrap w-full md:px-5 mt-14 gap-2 px-2">
          <section className="flex-1">
            <table className='w-full'>
              <thead className=''>
                <tr className='border-b-2'>
                  <th className="text-base font-normal text-left p-2">Pedido</th>
                  <th className="text-base font-normal text-left p-2">Preço Un.</th>
                  <th className="text-base font-normal text-left p-2">Qtd.</th>
                  <th className="text-base font-normal text-left p-2">Total</th>
                  <th className="text-base font-normal text-left p-2">-</th>
                </tr>
              </thead>
              <tbody>
                {carrinho.map((item, id) => (
                  <tr className='border-b-2' key={id}>
                    <td className='flex items-center mt-3 mb-4 max-w-[300px]'>
                      <img className='w-[80px] h-[80px] bg-black rounded-lg' src={item.img} alt="foto-pedido" />
                      <div className='flex flex-col px-2 overflow-hidden'>
                        <h1 className='text-base'>{item.nome}</h1>
                        <p className='text-sm'>{item.gramas}g</p>
                      </div>
                    </td>
                    <td className=''>R$ {item.preco.toFixed(2)}</td>
                    <td className=''>
                      <div className='flex gap-2 bg-[#E4E4E7] w-fit px-2 rounded-full'>
                        <button onClick={() => decreaseQuantity(item)}>
                          <i className="fa-solid fa-minus"></i>
                        </button>
                        <span>{item.quantidade || 1}</span>
                        <button onClick={() => increaseQuantity(item)}>
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </td>
                    <td className='p-2'>{item.quantidade > 1 ? ((item.quantidade * item.preco).toFixed(2)):(item.preco.toFixed(2))}</td>
                    <td className='p-2'>
                      <button className='' onClick={() => deleteWich(item)}>
                        <i className="fa-solid fa-x"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
          <aside className="flex items-center flex-col gap-5 w-full md:max-w-[250px]">
            <div className='w-full bg-[#FFFFFF] shadow-xl'>
              <div className='w-full bg-zinc-200 px-2 py-3'>
                <h1 className='text-base font-medium'>Resumo</h1>
              </div>
              <div className='flex flex-col gap-2 px-2 py-5'>
                <span className='flex items-center justify-between'>
                  <p className='text-sm font-medium'>Subtotal</p>
                  <p className='text-sm'>R$ {subtotal.toFixed(2)}</p>
                </span>
                <span className='flex items-center justify-between'>
                  <p className='text-sm font-medium'>Frete</p>
                  <p className='text-sm'>Gratís</p>
                </span>
                <span className='flex items-center justify-between'>
                  <p className='text-sm font-medium'>Cupom</p>
                  <p className='text-sm'>Sem cupom</p>
                </span>
              </div>
              <div className='w-full items-center justify-center flex justify-between bg-zinc-200 px-2 py-3'>
                <h1 className='text-base font-medium'>Total</h1>
                <p className='text-sm'>R$ {subtotal.toFixed(2)}</p>
              </div>
            </div>
            <div className='w-full bg-HomeBg p-3 shadow-xl'>
              <button className='w-full flex items-center justify-center text-HomeFontPrimary font-medium'>CHECKOUT</button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
