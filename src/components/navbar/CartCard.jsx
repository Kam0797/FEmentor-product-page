import { useContext } from "react";
import trashCanIcon from "../../assets/images/icon-delete.svg";
import { Context } from "../../Context";
import {loadedThumbs, prodDesc } from "../product/Product.jsx"

import "./CartCard.css";

export default function CartCard() {
  const { nInCart, setNInCart } = useContext(Context);

  function confirmRemoveCartItem() {
    if (window.confirm("Delete item from cart?")) setNInCart(0);
  }
  {
    /*WIP*/
  }

  const cartItems = [
    {
      itemThumb: loadedThumbs[0].src,
      itemName: prodDesc.name,
      itemPrice: prodDesc.price,
      itemN: nInCart //for now
    }
  ]




  function CartItem({itemThumb, itemName, itemPrice, itemN, key}) {
    return(
      <div className="cart-item" key={key}>
        <img className="cart-item-thumb" src={itemThumb} alt={itemName}  />
        <div className="cart-item-detail-area">
          <div className="cart-item-name">{itemName}</div>
          <div className="cart-item-price-detail">
            ${itemPrice} x {itemN} <b className="tot-price">${itemPrice*itemN}</b>
          </div>
        </div>
        <button className="delete-cart-item" onClick={confirmRemoveCartItem}>
          <img className="trash-can-icon" src={trashCanIcon} alt="trash-can" />
        </button>
      </div>
    )
  }
  function checkOut() {
    if (window.confirm("Proceed to checkout?\nYou may be redirected to you bank's wormhole")) setNInCart(0);
  }
  if (nInCart > 0) {
  return (
    <div className="cart-card">
      <div className="cart-title"><span className="cart-title-text">Cart</span></div>
      <div className="cart-items-area">
      {
        cartItems.map((item, index)=> (
        <CartItem itemThumb={item.itemThumb} itemName={item.itemName} itemPrice={item.itemPrice} itemN={item.itemN} key={index} />
        ))
      }
      </div>
      <button className="checkout-button" onClick={checkOut}>Checkout</button>
    </div>
  );
  }
  else {
    return(
    <div className="cart-card">
      <div className="cart-title"><span className="cart-title-text">Cart</span></div>
      <div className="cart-items-area" style={{justifyContent: 'center', alignItems: 'center', height: '115px', color: 'var(--text-grey)', fontWeight:'800',}}>
          Your cart is Empty
      </div>
    </div>
    )}
}
