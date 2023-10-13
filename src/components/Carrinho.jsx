export function Carrinho({cart}){
  console.log(cart)
  return(
    <div>
      {cart.map((item, id) =>(
        <h1 key={id} >{item.nome}</h1>
      ))}
    </div>
  )
}
