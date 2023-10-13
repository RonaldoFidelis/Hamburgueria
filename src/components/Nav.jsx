import burger from '/img/burguer.png'

export function Nav(){
  return(
    <nav className="fixed z-50 w-full flex items-center justify-between px-10 py-2 bg-HomeBg">
      <a className="flex items-center gap-3" href="#">
        <h1 className='text-xl font-medium'>Burger</h1>
        <img className='w-[50px]' src={burger} alt="logo" />
      </a>
      <a href="#">
      <i className="text-xl fa-solid fa-cart-shopping"></i>
      </a>
    </nav>
  )
}
