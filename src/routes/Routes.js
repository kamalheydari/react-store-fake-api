import React from "react";
import { Route, Switch } from "react-router-dom";

import { Loading } from "../components";

const HomePage = React.lazy(() => import("../pages/HomePage"));
const ProductsPage = React.lazy(() => import("../pages/ProductsPage"));
const AboutPage = React.lazy(() => import("../pages/AboutPage"));
const ErrorPage = React.lazy(() => import("../pages/ErrorPage"));
const SingleProductPage = React.lazy(() =>
  import("../pages/SingleProductPage")
);
const CartPage = React.lazy(() => import("../pages/CartPage"));
const CheckoutPage = React.lazy(() => import("../pages/CheckoutPage"));

const Routes = () => {
  return (
    <React.Suspense fallback={<Loading lazy />}>
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route
          path="/products/:id"
          exact={true}
          component={SingleProductPage}
        />
        <Route path="/products" component={ProductsPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </React.Suspense>
  );
};

export default Routes;
