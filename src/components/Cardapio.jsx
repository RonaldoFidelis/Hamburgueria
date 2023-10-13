
export function Cardapio({ produto }) {

  const addCart = (item) => {
    console.log(item.id)
  }

  return (
    <section>
      <div className="w-full min-h-screen flex flex-col items-center bg-CardapioBg py-5">
        <div className="flex items-center justify-center mt-10 mb-10">
          <h1 className="text-HomeFontPrimary font-medium text-2xl">Cardápio</h1>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-5'>
          {produto.map((item, id) => (
            <div id={item.id} key={id} className='flex flex-col items-center justify-center bg-[#FFFFFF] w-[200px] h-[250px] rounded-3xl gap-2 shadow-lg'>
              <div className='flex items-center justify-center overflow-hidden bg-black rounded-full p-2'>
                <img className='w-[110px]' src={item.img} alt="" />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h1 className='text-base font-medium text-HomeFontPrimary'>{item.nome}</h1>
                <h2 className='text-xs font-normal text-HomeFontPrimary mb-1'>{item.gramas}g</h2>
                <h3 className='text-sm font-semibold text-HomeFontSecondary'>$ {item.preco}</h3>
              </div>
              <button onClick={() => addCart(item)} className='text-white text-sm bg-HomeFontSecondary p-1 rounded-md'>Adicionar</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

