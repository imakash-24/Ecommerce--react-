import React from 'react'
import "./DescriptionBox.css"

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="description-navigator">
            <div className="description-nav-box">Description</div>
            <div className="description-nav-box fade">Reviews(122)</div>
        </div>
        <div className='descriptionbox-description'>
           <p>Discover a seamless shopping experience with our e-commerce platform, where we bring you a curated selection of high-quality products at competitive prices. From trendy fashion and cutting-edge electronics to everyday essentials, our store is designed to cater to all your needs in one place.</p>
           <p>E-commerce websites typically display products or services along with detailed descriptions, image, prices, and any available variants (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information</p>
        </div>

    </div>
  )
}
export default DescriptionBox
