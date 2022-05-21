import React from "react";

import { GridProducts, ListProducts } from ".";

import { useProductsContext } from "../contexts/products_context";
import { useFilterContext } from "../contexts/filter_context";

import { Loading, Error, Typography } from ".";
const Products = () => {
  const { filtered_products: products, grid_view } = useFilterContext();
  const {
    products_loading: loading,
    products_error: error,
  } = useProductsContext();

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  if (products.length < 1) {
    return (
      <Typography.H4>Sorry, no products matched your search...</Typography.H4>
    );
  }

  if (grid_view === false) {
    return <ListProducts products={products} />;
  }
  return <GridProducts products={products} />;
};

export default Products;
