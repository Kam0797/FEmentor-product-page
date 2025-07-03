export default function CartCard({children}) {


  return(
    <div className="cart-card">
    <div className="cart-title">Cart</div>
      {children}
    </div>
  )
}
