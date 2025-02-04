
import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING } from './action-types/cart-actions'

export const AddToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id
  }
}

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id
  }
}

export const subtractQuantity = (id) => {
  return {
    type: SUB_QUANTITY,
    id
  }
}

export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    id
  }
}

export const addShipping = (id) => {
  return {
  type: ADD_SHIPPING,
  id
  }
}