import React, { createContext, useState } from "react"
import { element } from "prop-types"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = element => {
    setCart([...cart, ...element])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}
