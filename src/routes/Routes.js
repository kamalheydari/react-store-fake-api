import React from "react";
import { Route, Switch } from "react-router-dom";

import {
  HomePage,
  ProductsPage,
  AboutPage,
  CartPage,
  ErrorPage,
  SingleProductPage,
  CheckoutPage,
} from "../pages";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/products/:id" exact={true} component={SingleProductPage} />
      <Route path="/products" component={ProductsPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/cart" component={CartPage} />
      <Route path="/checkout" component={CheckoutPage} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  );
};

export default Routes;
