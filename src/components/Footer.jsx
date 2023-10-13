export function Footer() {
  return (
    <div className="bg-HomeBg grid grid-cols-1 md:grid-cols-3 p-4 md:p-10">
      <div className="md:col-span-1 pt-10 md:pt-0">
        <h2 className="text-lg text-HomeFontPrimary leading-none font-semibold ">Ronaldo Fidelis</h2>
        <h3 className="text-sm">Programador Front & Back-end</h3>
      </div>
      <div className="md:col-span-2 pt-10 md:pt-2">
        <ul className="flex md:justify-end">
          <li
            className="flex items-center justify-center text-xl bg-HomeFontSecondary border-2 border-[#f68133] hover:border-white duration-500 w-9 h-9 rounded-lg mx-2">
            <a href="https://github.com/RonaldoFidelis" target="_blank" rel="noreferrer"><i
              className="text-white fa-brands fa-github"></i></a>
          </li>
          <li
            className="flex items-center justify-center text-xl bg-HomeFontSecondary border-2 border-[#f68133] hover:border-white duration-500 w-9 h-9 rounded-lg mx-2">
            <a href="https://www.linkedin.com/in/ronaldo-fidelis-9922941a9/" target="_blank" rel="noreferrer"><i
              className="text-white fa-brands fa-linkedin-in"></i></a>
          </li>
        </ul>
      </div>
      <div className="md:col-span-3 mt-20">
        <p className="flex justify-center gap-1 text-fontLight text-[15px]">&copy; Projeto desenvolvido por:<a
          className="text-HomeFontPrimary hover:text-white duration-500 cursor-pointer" href="https://portfolio-ronaldo-fidelis.netlify.app/"
          target="_blank" rel="noreferrer">Ronaldo Fidelis</a></p>
      </div>
    </div>
  )
}
