import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//? Contexts
import { ProductsProvider } from "./contexts/products_context";
import { FilterProvider } from "./contexts/filter_context";
import { CartProvider } from "./contexts/cart_context";


ReactDOM.render(
  <ProductsProvider>
    <FilterProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterProvider>
  </ProductsProvider>,
  document.getElementById("root")
);
