import {useState} from 'react'

import "./Product.css"

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
            <img src={img.src} key={index} className="thumb" alt={"pro"+index} />
          ))
        }
    </div>
    </div>

    <div className='prod-desc-wrapper'>
      <div className='sneaker-comp'>SNEAKER COMPANY</div>
      <div className='prod-title'>
        {prodDesc.name}
      </div>
      <p className='prod-desc-para'>
        {prodDesc.descPara}
      </p>
      <div className='price-area'>
        <div className='price'>{prodDesc.price}</div>
        <div className='saving-percent'>{prodDesc.saving}</div>
        <div className='fake-price'><s>{prodDesc.fakePrice}</s></div>
      </div>
      <div className='order-area'>
        <div className='item-count-area'>
          <button className='item-add'>+</button>
          <div className='item-count'>0</div>
          <button className='item-deduct'>-</button>
        </div>
        <button className='add-to-cart-button'>Add to cart</button>
      </div>
    </div>

    </div>
    </>
  )
}


