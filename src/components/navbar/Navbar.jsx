import {useContext, useEffect} from 'react'
import {Context } from "../../Context.jsx"

import "./Navbar.css"
import CartCard from './CartCard.jsx'
import Menu from "./menu/Menu.jsx"

// images
import profile from "../../assets/images/image-avatar.png"
import cartIcon from "../../assets/images/icon-cart.svg"
import menuIcon from "../../assets/images/icon-menu.svg"
import compNameIcon from "../../assets/images/logo.svg"

 export const menuItems = [
    {
      item: "Collection",
      href: ""
    },
    {
      item: "Men",
      href: ""
    },
    {
      item: "Women",
      href: ""
    },
    {
     item: "About",
      href: ""
    },
    {
      item: "Contact",
      href: ""
    }
  ];

export default function Navbar() {

  const { nInCart, setNICart, itemCount } = useContext(Context);
 
  return(
    <>
    <div className="navbar">
      <div className="navbar-left">
          <Menu />
        <button className="menu-button"><img className='menu-icon' src={menuIcon} alt="Menu" onClick={()=>document.querySelector(".menu-wrapper").classList.add("visible")}/></button>
        <img className="comp-name" src={compNameIcon} />
        <div className="menus">
          {
            menuItems.map((menuItem,index)=> (
              <a className='menu-text' href={menuItem.href} key={index}>{menuItem.item}</a>
            ))
          }
          
        </div>
      </div>

      <div className="navbar-right">
        <div className="just-wrap">
          <button className='cart-button' onClick={()=> {const cartCard = document.querySelector(".cart-card"); cartCard.classList.toggle("show")}}>
            <div height="100%" width="100%">
              <div className='n-cart-items' style={{display: nInCart<1?"none":"block"}}>{nInCart < 100? nInCart: "99+"}</div>
              <img className='cart-button-icon' src={cartIcon} />
            </div>
          </button>
          <CartCard />
        </div>
        <img className="profile-pic" src={profile} alt="Profile" />
      </div>
    </div>
    </>
  )
}
