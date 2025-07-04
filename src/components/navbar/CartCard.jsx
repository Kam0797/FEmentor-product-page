import { useContext } from "react"
import trashCanIcon from "../../assets/images/icon-delete.svg"
import { Context } from "../../Context";

import "./CartCard.css"


export default function CartCard() {


  const {nInCart, setNInCart} = useContext(Context);

  function confirmRemoveCartItem() {
    if( window.confirm("Delete item from cart?")) setNInCart(0);
  }
  {/*WIP*/}
  return(
    <div className="cart-card">
    <div className="cart-title">Cart</div>
    <button className="delete-cart-item" onClick={confirmRemoveCartItem}><img src={trashCanIcon} alt="trash-can" /></button>
    </div>
  )
}
