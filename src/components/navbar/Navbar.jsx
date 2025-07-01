import {useState, useEffect} from 'react'

import "./Navbar.css"

// images
import profile from "../../assets/images/image-avatar.png"
import cartIcon from "../../assets/images/icon-cart.svg"
import menuIcon from "../../assets/images/icon-menu.svg"
import compNameIcon from "../../assets/images/logo.svg"

export default function Navbar() {

  const menuItems = [
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

  // let minMenu;
  // const [winWidth, setWinWidth] = useState(window.innerWidth)

  // useEffect(()=> {
  //   const setSetWinWidth = () => {
  //     setWinWidth(window.innerWidth)
  //   }
  //   window.addEventListener("resize",setSetWinWidth)
  //   return() => {
  //     window.removeEventListener("resize",setSetWinWidth)
  //   }
  // },[winWidth])




  // console.log(navigator.userAgent)
    // if(window.innerWidth <= 600) {
    //   minMenu = true
    // }
    // else{
    //   minMenu = false
    // }
  
  // useEffect(()=> {
  //   if(window.innerWidth < 600) {
  //     console.log(window.innerWidth);
  //     document.querySelector(".menus").style.display = "none";
  //     document.querySelector(".menu-button").style.display = "flex";
  //   }
  //   else {
  //     document.querySelector(".menus").style.display = "flex";
  //     document.querySelector(".menu-button").style.display = "none"
  //   }
  // },[window.innerWidth])


  return(
    <>
    <div className="navbar">
      <div className="navbar-left">
        <button className="menu-button"><img className='menu-icon' src={menuIcon} alt="Menu" /></button>
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
        <button className='cart-button'><img className='cart-button-icon' src={cartIcon} /></button>
        <img className="profile-pic" src={profile} alt="Profile" />
        
      </div>
    </div>
    </>
  )
}
