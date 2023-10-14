export function Footer() {
  return (
    <div className="bg-HomeBg grid grid-cols-1 md:grid-cols-3 p-4 md:p-10">
      <div className="md:col-span-1 pt-10 md:pt-0">
        <h2 className="text-lg text-HomeFontPrimary leading-none font-semibold ">BurguerLovers</h2>
        <h3 className="text-sm">Saboreie a Magia em Cada Mordida!</h3>
      </div>

      <div className="md:col-span-3 mt-20">
        <p className="flex justify-center gap-1 text-fontLight text-[13px]">&copy; Projeto desenvolvido por:<a
          className="text-HomeFontPrimary hover:text-white duration-500 cursor-pointer" href="https://portfolio-ronaldo-fidelis.netlify.app/"
          target="_blank" rel="noreferrer">Ronaldo Fidelis</a></p>
      </div>
    </div>
  )
}
