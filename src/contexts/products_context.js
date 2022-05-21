import React, { createContext, useContext, useEffect, useReducer } from "react";

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

import { products_reducer as reducer } from "../reducers/products_reducer";

const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  popular_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
};

const ProductsContext = createContext();

const API_ENDPOINT = "https://fakestoreapi.com/products";

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await fetch(url);
      const products = await response.json();
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  const fetchSingleProduct = async (params) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const response = await fetch(`${API_ENDPOINT}/${params}`);
      const singleProduct = await response.json();
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts(API_ENDPOINT);
  }, []);

  //? Handlers
  const openSidebar = () => {
    dispatch({ type: OPEN_SIDEBAR });
  };
  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR });
  };
  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchSingleProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
