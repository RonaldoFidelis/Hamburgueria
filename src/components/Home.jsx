import burger from '/img/burguer-logo.png'

export function Home() {
  return (
    <section className="bg-HomeBg py-20">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <img className='w-[400px]' src={burger} alt="" />
        <div className="flex flex-wrap justify-center flex-col leading-relaxed">
          <h2 className='
            text-lg font-medium text-HomeFontSecondary'>Bem-vindo á</h2>
          <h1 className="text-4xl md:text-6xl font-semibold text-HomeFontPrimary">Burguer Express</h1>
          <h3 className="text-base mt-2 font-medium" >Saboreie a Magia em Cada Mordida!</h3>
        </div>
      </div>
    </section>
  )
}
