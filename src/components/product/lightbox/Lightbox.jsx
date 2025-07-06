import './Lightbox.css'
import closeIcon from "../../../assets/images/icon-close.svg"

export default function Lightbox({children, closeLightbox}) {
  return(
  <div className="lightbox-wrapper">
    <div className='lightbox-inbox'>
      <div className="lb-close-button-wrapper">
        <button className='lb-close-button' onClick={closeLightbox} ><img className='lb-close-icon' src={closeIcon} alt="close"/></button>
      </div>
      {children}
    </div>
    
  </div>
  )
}
