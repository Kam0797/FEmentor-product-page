import {useState, useContext} from 'react'
import {Context} from '../../Context.jsx'

import Lightbox from './lightbox/Lightbox.jsx'
import "./Product.css"

// icons
import itemAddIcon from "../../assets/images/icon-plus.svg"
import itemDeductIcon from "../../assets/images/icon-minus.svg"
import cartIcon from "../../assets/images/icon-cart.svg"
import prevImgIcon from "../../assets/images/icon-previous.svg"
import nextImgIcon from "../../assets/images/icon-next.svg"

// this part need so much reinforement
const thumbImages = import.meta.glob("../../assets/images/thumbs/*.jpg", {eager:true});
export const loadedThumbs = Object.entries(thumbImages).map(([path, module])=> ({
  path,
  src: module.default,
}))

const fullImages = import.meta.glob("../../assets/images/image-product*.jpg", {eager:true});
const loadedFullImgs = Object.entries(fullImages).map(([path, module]) => ({
  path,
  src: module.default
}))


export const prodDesc = {
  name: "Fall Limited Edition Sneakers",
  price: "125.00",
  saving: "50%",
  fakePrice: "250.00",
  descPara: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber sole, they'll withstand everyting the weather has to offer."
}

export default function Product() {

  const [fullImageIndex, setFullImageIndex] = useState(0) //fine. not anymore. yes anyway
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const { itemCount, setItemCount, nInCart, setNInCart} = useContext(Context);



  //funcs
  function addItem() {
    if (itemCount >= 0) setItemCount(count => count+1)
  }
  function deductItem() {
    if (itemCount > 0) setItemCount(count => count-1)
  }
  function prevImage() {
    if(fullImageIndex > 0) {
      setFullImageIndex(index=>index-1)
    }
    else if(fullImageIndex <= 0) {
      setFullImageIndex(loadedFullImgs.length-1)
    }
  }
  function nextImage() {
    if(fullImageIndex < loadedFullImgs.length-1) {
      setFullImageIndex(index=>index+1)
    }
    else if(fullImageIndex >= loadedFullImgs.length-1) {
      setFullImageIndex(0)
    }
  }

  // function openLightbox() {
//   console.log("i work");
  //   return(
  //   <Lightbox>
  //     <div className="prod-image-wrapper">
  //       <img src={loadedFullImgs[fullImageIndex].src} alt="Product image" className="product-image-full" />
  //       <div className="prod-thumbs">
  //         {
  //           loadedThumbs.map((img,index)=> (
  //             <div className='thumb' key={index} ><img src={img.src} className="thumb-img" alt={"pro"+index} onClick={()=>setFullImageIndex(index)} /></div>
  //           ))
  //         }
  //       </div>
  //     </div>      
  //   </Lightbox>
  //   );
  // }

  return(
    <>
    <div className='prod-wrapper'>
    <div className="prod-image-wrapper">
          <button className='prev-img-button not-lb-left' onClick={prevImage} ><img src={prevImgIcon} /> </button>
          <button className='next-img-button not-lb-right' onClick={nextImage} ><img src={nextImgIcon} /> </button>
      <img src={loadedFullImgs[fullImageIndex].src} alt="Product image" onClick={()=>{setIsLightboxOpen(true);console.log("fu")}} className="product-image-full" />
      <div className="prod-thumbs">
        {
          loadedThumbs.map((img,index)=> (
            <div className='thumb' key={index} ><img src={img.src} className="thumb-img" alt={"pro"+index} onClick={()=>setFullImageIndex(index)} /></div>
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
            <div className='price'>${prodDesc.price}</div>
            <div className='saving-percent'>{prodDesc.saving}</div>
          </div>
          <div className='fake-price'><s>${prodDesc.fakePrice}</s></div>
        </div>

        <div className='order-area'>
          <div className='item-count-area'>
            <button className='item-deduct' onClick={deductItem} ><img src={itemDeductIcon} alt="-" className="item-deduct-button" /></button>
            <div className='item-count'>{itemCount}</div>
            <button className='item-add' onClick={addItem}><img src={itemAddIcon} alt="+" className="item-add-button" /></button>
          </div>
          <button className='add-to-cart-button' onClick={()=> {setNInCart(count => count+itemCount); setItemCount(0)}}>
              <img src={cartIcon} alt="cart" className="cart-button-icon" /><span className="add-to-cart-button-text">Add to cart</span>
          </button>
        </div>
      </div>
    </div>

    </div>
    {
      isLightboxOpen && (
      <Lightbox closeLightbox={()=>setIsLightboxOpen(false)}>
        <div className='lb-product-image-full-wrapper' style={{position: 'relative'}}>
          <button className='prev-img-button' onClick={prevImage} ><img src={prevImgIcon} /> </button>
          <button className='next-img-button' onClick={nextImage} ><img src={nextImgIcon} /> </button>
        <img src={loadedFullImgs[fullImageIndex].src} alt="Product image" className="lb-product-image-full" />
        </div>  
        <div className="lb-prod-thumbs">
            {
              loadedThumbs.map((img,index)=> (
                <div className='lb-thumb' key={index} ><img src={img.src} className="thumb-img" alt={"pro"+index} onClick={()=>setFullImageIndex(index)} /></div>
              ))
            }
          </div>
      </Lightbox>
      )
    }
    </>
  )
}


