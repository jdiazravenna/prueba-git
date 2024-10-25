import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [
    // { id: 1, title: 'product 1'},
    // { id: 2, title: 'product 2'},
  ],
  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload

      const productInCartIndex = state.findIndex(
        item => item.id === newProduct.id
      )

      // console.log(productInCartIndex)

      // Se ejecuta esta línea cuando el producto ya existe en el carrito de compras
      if (productInCartIndex >= 0) {
        const newState = state.map(product => {
          if (product.id === newProduct.id) {
            return {
              ...product,
              quantity: product.quantity + 1
            }
          }
          return product
        })

        return newState
      }

      // Se ejecuta esta línea cuando el producto es nuevo en el carrito de compras
      return [
        ...state,
        {
          ...newProduct,
          quantity: 1
        }
      ]
    },
    removeToCart: (state, action) => {
      const productId = action.payload

      return state.filter(product => product.id !== productId)
    },
    clearCart: () => {
      return []
    }
  }
})

export default cartSlice.reducer

export const { addToCart, clearCart, removeToCart } = cartSlice.actions