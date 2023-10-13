import burger from '/img/burguer.png'
import pizza from '/img/pizza.png'
import express from '/img/express.png'
import cebola from '/img/aneisdecebola.png'
import xegg from '/img/burguer-logo.png'

export function Cardapio({cardapio}){
  return(
    <section>
      <div className="w-full min-h-screen flex flex-col items-center bg-CardapioBg py-5">
        <div className="flex items-center justify-center mt-10 mb-10">
          <h1 className="text-HomeFontPrimary font-medium text-2xl">Cardápio</h1>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-5'>
          <div className='flex flex-col items-center justify-center bg-[#FFFFFF] w-[200px] h-[250px] rounded-3xl gap-2 shadow-lg'>
            <div className='flex items-center justify-center overflow-hidden bg-black rounded-full p-2'>
              <img className='w-[110px]' src={burger} alt="" />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='text-base font-medium text-HomeFontPrimary'>Tradicional</h1>
              <h2 className='text-xs font-normal text-HomeFontPrimary mb-1'>150g</h2>
              <h3 className='text-sm font-semibold text-HomeFontSecondary'>$ 25.99</h3>
            </div>
            <button className='text-white text-sm bg-HomeFontSecondary p-1 rounded-md'>Adicionar</button>
          </div>

          <div className='flex flex-col items-center justify-center bg-[#FFFFFF] w-[200px] h-[250px] rounded-3xl gap-2 shadow-lg'>
            <div className='flex items-center justify-center overflow-hidden bg-black rounded-full p-2'>
              <img className='w-[110px]' src={pizza} alt="" />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='text-base font-medium text-HomeFontPrimary'>Pizza</h1>
              <h2 className='text-xs font-normal text-HomeFontPrimary mb-1'>500g</h2>
              <h3 className='text-sm font-semibold text-HomeFontSecondary'>$ 45.90</h3>
            </div>
            <button className='text-white text-sm bg-HomeFontSecondary p-1 rounded-md'>Adicionar</button>
          </div>

          <div className='flex flex-col items-center justify-center bg-[#FFFFFF] w-[200px] h-[250px] rounded-3xl gap-2 shadow-lg'>
            <div className='flex items-center justify-center overflow-hidden bg-black rounded-full p-2'>
              <img className='w-[110px]' src={express} alt="" />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='text-base font-medium text-HomeFontPrimary'>Express</h1>
              <h2 className='text-xs font-normal text-HomeFontPrimary mb-1'>250g</h2>
              <h3 className='text-sm font-semibold text-HomeFontSecondary'>$ 35.90</h3>
            </div>
            <button className='text-white text-sm bg-HomeFontSecondary p-1 rounded-md'>Adicionar</button>
          </div>

          <div className='flex flex-col items-center justify-center bg-[#FFFFFF] w-[200px] h-[250px] rounded-3xl gap-2 shadow-lg'>
            <div className='flex items-center justify-center overflow-hidden bg-black rounded-full p-2'>
              <img className='w-[110px]' src={xegg} alt="" />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='text-base font-medium text-HomeFontPrimary'>X-egg</h1>
              <h2 className='text-xs font-normal text-HomeFontPrimary mb-1'>250g</h2>
              <h3 className='text-sm font-semibold text-HomeFontSecondary'>$ 35.90</h3>
            </div>
            <button className='text-white text-sm bg-HomeFontSecondary p-1 rounded-md'>Adicionar</button>
          </div>

          <div className='flex flex-col items-center justify-center bg-[#FFFFFF] w-[200px] h-[250px] rounded-3xl gap-2 shadow-lg'>
            <div className='flex items-center justify-center overflow-hidden bg-black rounded-full p-2'>
              <img className='w-[110px]' src={cebola} alt="" />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='text-base font-medium text-HomeFontPrimary'>Aneis de cebola</h1>
              <h2 className='text-xs font-normal text-HomeFontPrimary mb-1'>250g</h2>
              <h3 className='text-sm font-semibold text-HomeFontSecondary'>$ 35.90</h3>
            </div>
            <button className='text-white text-sm bg-HomeFontSecondary p-1 rounded-md'>Adicionar</button>
          </div>
        </div>
      </div>
    </section>
  )
}

