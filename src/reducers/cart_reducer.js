import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  CHECKOUT,
} from "../utils/actions";

export const cart_reducer = (state, action) => {
  const { type, payload } = action;

  if (type === ADD_TO_CART) {
    const { product, amount } = payload;
    const tempItem = state.cart.find((item) => item.id === product.id);
    if (tempItem) {
      const tempCart = state.cart.map((item) => {
        if (item.id === tempItem.id) {
          let newAmount = item.amount + amount;
          return { ...item, amount: newAmount };
        } else {
          return item;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const { id, title, image, price } = product;
      const newItem = {
        id,
        title,
        image,
        price,
        amount,
      };
      return { ...state, cart: [...state.cart, newItem], isCheckout: false };
    }
  }

  if (type === TOGGLE_CART_ITEM) {
    const { id, value } = payload;
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === "inc") {
          let newAmount = item.amount + 1;
          return { ...item, amount: newAmount };
        }
        if (value === "dec") {
          let newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...item, amount: newAmount };
        }
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }

  if (type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => item.id !== payload);
    return { ...state, cart: tempCart };
  }

  if (type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (type === COUNT_CART_TOTALS) {
    const { total_items, total_price } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;
        total.total_items += amount;
        total.total_price += price * amount;

        return total;
      },
      {
        total_price: 0,
        total_items: 0,
      }
    );
    return { ...state, total_items, total_price };
  }

  if (type === CHECKOUT) {
    return {
      ...state,
      isCheckout: true,
      cart: [],
    };
  }

  throw new Error(`No Matching "${type}" - action type `);
};
