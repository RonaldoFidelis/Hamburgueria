import burger from '/img/burger-logo.png'

export function Logo() {
  return(
    <section className="bg-HomeBg py-20">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2">
        <img className='w-[320px]' src={burger} alt="foto-de-hambuguer"/>
        <div className="flex flex-wrap md:h-[300px] flex-col leading-relaxed">
          <h2 className='
            text-lg font-medium text-HomeFontPrimary'>Bem-vindo</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-HomeFontPrimary">BurguerLovers</h1>
          <h3 className="text-lg mt-2 font-medium" >Saboreie a Magia em Cada Mordida!</h3>
          <a className="text-white font-medium mt-5 p-2 rounded-md bg-HomeFontSecondary border-2 border-[#f68133] hover:border-white duration-500 w-[130px]" href="#cardapio">
            Ver cardápio
          </a>
        </div>
      </div>
    </section>
  )
}
