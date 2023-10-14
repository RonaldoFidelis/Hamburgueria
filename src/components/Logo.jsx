import burger from '/img/xbacon.png'

export function Logo() {
  return (
    <section className="bg-HomeBg w-full flex flex-col md:flex-row items-center justify-center py-20">
      <img className='w-[320px]' src={burger} alt="foto-de-hambuguer" />
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex flex-col items-center justify-center leading-relaxed">
          <h2 className='text-lg font-bold '>Bem-vindo</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold s">BurguerLovers</h1>
          <span className='bg-HomeFontPrimary w-[270px] md:w-[350px] h-[2px] mt-5'></span>
          <h3 className="text-base mt-2 font-medium text-HomeFontSecondary ">Saboreie a Magia em Cada Mordida!</h3>
          <a className="text-white font-medium mt-5 p-2 rounded-md bg-HomeFontSecondary border-2 border-HomeFontSecondary hover:border-white duration-500 w-[130px]" href="#cardapio">
            Ver cardápio
          </a>
        </div>
      </div>
    </section>
  )
}
