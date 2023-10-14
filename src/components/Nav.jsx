import { Link } from "react-router-dom";

export function Nav(){
  return(
    <nav className="fixed z-50 w-full flex items-center justify-between px-4 md:px-10 py-3 bg-HomeBg text-HomeFontPrimary">
      <Link to="/" className="flex items-center gap-2" >
        <h1 className='text-lg md:text-xl font-medium'>
        BurguerLovers</h1>
      </Link>
      <Link to="/carrinho">
      <i className="text-lg md:text-xl fa-solid fa-cart-shopping"></i>
      </Link>
    </nav>
  )
}
