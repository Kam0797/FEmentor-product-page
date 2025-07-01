import {useState} from 'react'

import "./Product.css"

// icons
import itemAddIcon from "../../assets/images/icon-plus.svg"
import itemDeductIcon from "../../assets/images/icon-minus.svg"
import cartIcon from "../../assets/images/icon-cart.svg"

export default function Product() {

  const [fullImageIndex, setFullImageIndex] = useState(0)

  const thumbImages = import.meta.glob("../../assets/images/thumbs/*.jpg", {eager:true});
  const loadedThumbs = Object.entries(thumbImages).map(([path, module])=> ({
    path,
    src: module.default,
  }))

  const fullImages = import.meta.glob("../../assets/images/image-product*.jpg", {eager:true});
  const loadedFullImgs = Object.entries(fullImages).map(([path, module]) => ({
    path,
    src: module.default
  }))



  const prodDesc = {
    name: "Fall Limited Edition Sneakers",
    price: "$125.00",
    saving: "50%",
    fakePrice: "$250.00",
    descPara: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber sole, they'll withstand everyting the weather has to offer."
  }
  return(
    <>
    <div className='prod-wrapper'>
    <div className="prod-image-wrapper">
      <img src={loadedFullImgs[fullImageIndex].src} alt="Product image" className="product-image-full" />
      <div className="prod-thumbs">
        {
          loadedThumbs.map((img,index)=> (
            <div className='thumb'><img src={img.src} key={index} className="thumb-img" alt={"pro"+index} /></div>
          ))
        }
    </div>
    </div>

    <div className='prod-desc-wrapper'>
      <div className='prod-desc-wrapper-inner'>
        <div className='sneaker-comp'>SNEAKER COMPANY</div>
        <div className='prod-title'>
          {prodDesc.name}
        </div>
        <p className='prod-desc-para'>
          {prodDesc.descPara}
        </p>
      
        <div className='price-area'>
          <div className='price-area-1'>
            <div className='price'>{prodDesc.price}</div>
            <div className='saving-percent'>{prodDesc.saving}</div>
          </div>
          <div className='fake-price'><s>{prodDesc.fakePrice}</s></div>
        </div>

        <div className='order-area'>
          <div className='item-count-area'>
            <button className='item-add'><img src={itemDeductIcon} alt="-" className="item-deduct-button" /></button>
            <div className='item-count'>0</div>
            <button className='item-deduct'><img src={itemAddIcon} alt="+" className="item-add-button" /></button>
          </div>
          <button className='add-to-cart-button'>
              <img src={cartIcon} alt="cart" className="cart-button-icon" /><span className="add-to-cart-button-text">Add to cart</span>
          </button>
        </div>
      </div>
    </div>

    </div>
    </>
  )
}


