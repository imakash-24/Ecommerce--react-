import React from 'react'
import  Breadcrum  from '../Components/Breadcrum/Breadcrum'
import ProductDisplay  from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'
import { useContext } from 'react'
import { shopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'

export const Product = () => {
  const {all_product} = useContext(shopContext)
  const {productId} = useParams()
  const product = all_product.find((e) => e.id === Number(productId))
  return (
    <>
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/> 
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  
    </>
  ) 
}
