import {
  CLOSE_SIDEBAR,
  OPEN_SIDEBAR,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
} from "../utils/actions";

export const products_reducer = (state, action) => {
  let { type, payload } = action;

  if (type === CLOSE_SIDEBAR) {
    return { ...state, isSidebarOpen: false };
  }

  if (type === OPEN_SIDEBAR) {
    return { ...state, isSidebarOpen: true };
  }

  if (type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true };
  }

  if (type === GET_PRODUCTS_SUCCESS) {
    const popular_products = payload.filter(
      (product) => product.rating.rate >= 4.5
    );
    return {
      ...state,
      products_loading: false,
      products: payload,
      popular_products,
    };
  }

  if (type === GET_PRODUCTS_ERROR) {
    return { ...state, products_loading: false, products_error: true };
  }

  if (type === GET_SINGLE_PRODUCT_BEGIN) {
    return { ...state, single_product_loading: true };
  }

  if (type === GET_SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      single_product_loading: false,
      single_product: payload,
    };
  }

  if (type === GET_SINGLE_PRODUCT_ERROR) {
    return {
      ...state,
      single_product_loading: false,
      single_product_error: true,
    };
  }

  throw new Error(`No Matching "${type}" - action type `);
};
