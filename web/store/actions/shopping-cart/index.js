import { SHOPPING_CART } from '../'

export const addItem = (product, quantity) => (dispatch) => {
  return dispatch({
    type: SHOPPING_CART.ADD_ITEM,
    payload: {
      product: product,
      quantity,
    },
  });
};

export const fetchItems = () => (dispatch) => {
  return dispatch({
    type: SHOPPING_CART.FETCH,
  });
};

export const clear = () => (dispatch) => {
  return dispatch({
    type: SHOPPING_CART.CLEAR,
  });
};

export const removeItem = (product) => (dispatch) => {
  return dispatch({
    type: SHOPPING_CART.REMOVE_ITEM,
    payload: {
      product: product
    },
  });
};

export const incrementItem = (product) => (dispatch) => {
  return dispatch({
    type: SHOPPING_CART.INCREMENT_ITEM,
    payload: {
      product: product,
      quantity: 1,
    },
  });
};

export const decrementItem = (product) => (dispatch) => {
  return dispatch({
    type: SHOPPING_CART.DECREMENT_ITEM,
    payload: {
      product: product,
      quantity: 1,
    },
  });
};

