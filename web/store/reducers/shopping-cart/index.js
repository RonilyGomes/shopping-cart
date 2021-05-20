import { SHOPPING_CART } from '../../actions';

import { getCookie, setCookie } from '../../../libs/cookie';

const SHOPPING_CART_COOKIE_KEY = 'SHOPPING_CART';
const initialState = {
  items: getCookie(SHOPPING_CART_COOKIE_KEY),
};

function clear() {
  const shoppingCart = [];

  setCookie(SHOPPING_CART_COOKIE_KEY, shoppingCart);

  return shoppingCart;
}

function removeItem(data) {
  let items = getCookie(SHOPPING_CART_COOKIE_KEY);
  const { product } = data;

  items = items.filter((item) => item.product.id !== product.product.id);

  setCookie(SHOPPING_CART_COOKIE_KEY, items);

  return items;
}

function incrementItem(data) {
  let items = getCookie(SHOPPING_CART_COOKIE_KEY);
  const { product } = data;
  const itemExists = items?.some((item) => item.product.id === product?.product.id);

  if (itemExists) {
    items.forEach((item) => {
      if (item.product.id === product?.product.id) {
        item.quantity++;
      }

      return item;
    });
  }
  setCookie(SHOPPING_CART_COOKIE_KEY, items);

  return items;
}

function decrementItem(data) {
  let items = getCookie(SHOPPING_CART_COOKIE_KEY);
  const { product } = data;
  const itemExists = items?.some((item) => item.product.id === product?.product.id);

  if (itemExists) {
    items.forEach((item) => {
      if (item.product.id === product?.product.id) {
        item.quantity--;
      }

      return item;
    });
  }
  setCookie(SHOPPING_CART_COOKIE_KEY, items);

  return items;
}

function getItems() {
  return getCookie(SHOPPING_CART_COOKIE_KEY);
}

function addItem(data) {
  let items = getCookie(SHOPPING_CART_COOKIE_KEY);

  let itemExists = items?.some((item) => item.product.id === data.product.id);

  if (itemExists) {
    items.forEach((item) => {
      if (item.product.id === data.product.id) {
        item.quantity += data.quantity;
      }

      return item;
    });
  } else {
    items.push(data);
  }
  setCookie(SHOPPING_CART_COOKIE_KEY, items);

  return items;
}

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SHOPPING_CART.ADD_ITEM:
      state = {
        items: addItem(payload),
      };
      return state;

    case SHOPPING_CART.REMOVE_ITEM:
      state = {
        items: removeItem(payload),
      };
      return state;

    case SHOPPING_CART.CLEAR:
      state = {
        items: clear(),
      };
      return state;

    case SHOPPING_CART.FETCH:
      state = {
        items: getItems(),
      };
      return state;

    case SHOPPING_CART.DECREMENT_ITEM:
      state = {
        items: decrementItem(payload),
      };
      return state;

    case SHOPPING_CART.INCREMENT_ITEM:
      state = {
        items: incrementItem(payload),
      };
      return state;

    default:
      state = {
        items: getItems(),
      };
      return state;
  }
};
