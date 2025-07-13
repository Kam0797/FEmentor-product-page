import './Menu.css'
import closeButton from '../../../assets/images/icon-close.svg'
import { menuItems } from "./../Navbar.jsx"

export default function Menu() {
  return(
  <>
    <div className="menu-wrapper">
      <div className="menu-inbox">
        <button className="close-menu" onClick={()=>document.querySelector(".menu-wrapper").classList.remove("visible")}><img src={closeButton} alt="close" /></button>
        {
          menuItems.map((menuItem,index)=>(
          <a href="" className="menu-item-mob" key={index}>{menuItem.item}</a>
          ))
        }
        <div className='attribution'>
          FrontEnd Mentor project: Product Page<br/>Kam - 2025       </div>
      </div>
    </div>
  </>
  )
}
