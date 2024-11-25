import React, {createContext} from "react"
import { useState } from "react"
import all_product from "../assets/all_product"

export const shopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for (let index = 0; index < all_product.length; index++) {
      cart[index] = 0
    }
    return cart
} 

const shopContextProvider = (props) =>{
    const[cartItems, setCartItems] = useState(getDefaultCart())
    

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        console.log(cartItems)  
      }
    
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
      }
     
    const getTotalCartAmount = () => {
        let totalAmount = 0
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            let itemInfo = all_product.find((product) => product.id === Number(item))
            totalAmount += cartItems[item] * itemInfo.new_price
          }
        }
        return totalAmount
      }

      const getTotalCartItems = () => {
        let totalCount = 0
        for (const item in cartItems) {
          totalCount += cartItems[item]
        }
        return totalCount
      }

      const contextValue = {all_product,cartItems,addToCart,removeFromCart,getTotalCartAmount, getTotalCartItems}

    return(
        <shopContext.Provider value={contextValue}>
            {props.children}
        </shopContext.Provider>
    )
}
export default shopContextProvider;