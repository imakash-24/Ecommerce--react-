import React, { useContext } from 'react'
import { Item } from '../Components/Item/Item'
import "./CSS/ShopCategory.css"
import { shopContext } from '../Context/ShopContext'
import dropdown_icon from "../assets/dropdown_icon.png"

export const ShopCategory = (props) => {
  const {all_product} = useContext(shopContext)
  return (
    <>
      <div className='shop-category'>
        <img className="shopcategory-banner" src={props.banner} alt="" />
        <div className="shopcategory-indexSort">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className="shopcategory-sort">
             Sort by <img src={dropdown_icon} alt=""/>
          </div>
        </div>
        <div className="shopcategory-products">
          {all_product.map((items,i)=>{
            if(props.category === items.category){
              return <Item key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price}/>
            }
            else{
              return null
            }  
          })}
        </div>
        <div className='shopcategory-loadmore'>
          Explore More
        </div>
      </div>
    </>
  )
}
