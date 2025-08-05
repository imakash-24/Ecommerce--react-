import React from 'react'
import "./Newcollections.css"
import new_collection from "../../assets/new_collections"
import { Item } from '../Item/Item'


export const NewCollections = () => {
  return (
    <>
       <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className='collections'>
           {new_collection.map((items,i)=>{
            return <Item key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price}/>
           })}
        </div>
       </div>
    </>
   
  )
}
