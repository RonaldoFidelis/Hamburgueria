import { Link } from "react-router-dom";
import xegg from '/img/xegg.png'

export function Nav({cart}){

  return(
    <nav className="fixed z-50 w-full flex items-center justify-between px-4 md:px-10 py-3 bg-HomeBg text-HomeFontPrimary">
      <Link to="/" className="flex items-center gap-2" >
        <h1 className='text-lg md:text-xl font-medium'>
        BurguerLovers</h1>
      </Link>
      <Link to="/carrinho">
        {cart != '' ? (
        <span className="absolute flex items-center justify-center right-[5px] top-2 md:right-7 md:top-1 bg-green-500 p-2 rounded-full text-xs text-white"></span>):('')}
        <i className="text-lg md:text-xl fa-solid fa-cart-shopping"></i>
      </Link>
    </nav>
  )
}
