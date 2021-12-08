import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import {
  HomePage,
  ProductsPage,
  AboutPage,
  CartPage,
  ErrorPage,
  SingleProductPage,
} from "../pages";

const Routes = () => {
  const location = useLocation();

  return (
    <TransitionGroup component={null}>
      <CSSTransition timeout={400} classNames="fade" key={location.key}>
        <Switch location={location}>
          <Route path="/" exact={true} component={HomePage} />
          <Route
            path="/products/:id"
            exact={true}
            component={SingleProductPage}
          />
          <Route path="/products" component={ProductsPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="*" component={ErrorPage} />
          {/* <Redirect from="/" to="/home" /> */}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Routes;
