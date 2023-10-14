export function Footer() {
  return (
    <div className="bg-HomeBg flex flex-col items-center justify-center gap-5">
      <div className="py-5">
        <p className="flex justify-center gap-1 text-fontLight text-[14px]">&copy; Projeto desenvolvido por:<a
          className="text-HomeFontPrimary hover:text-white duration-500 cursor-pointer" href="https://portfolio-ronaldo-fidelis.netlify.app/"
          target="_blank" rel="noreferrer">Ronaldo Fidelis</a></p>
      </div>
    </div>
  )
}
