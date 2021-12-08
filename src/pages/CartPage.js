import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Screen from "../utils/Screen";

import {
  Breadcrumb,
  CartItem,
  CartTotals,
  Checkout,
  EmptyCart,
} from "../components";

import { useCartContext } from "../contexts/cart_context";

const CartPage = () => {
  const { cart, clearCart, isCheckout } = useCartContext();

  if (isCheckout) {
    return <Checkout />;
  }

  if (cart.length < 1) {
    return <EmptyCart />;
  }
  return (
    <main>
      <Breadcrumb title="Cart" />
      <Wrapper className="page">
        <div className="cart-content">
          <div className="cart__items">
            {cart.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
          <div className="cart__links">
            <Link to="/products" className="green-box">
              Buy more
            </Link>
            <button className="clear-btn red-box " onClick={clearCart}>
              Clear shopping cart
            </button>
          </div>
        </div>
        <CartTotals />
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  display: grid;
  place-items: center;
  ${Screen.lg`
    grid-template-columns: 1fr 1fr 1fr;
    `}
  .cart-content {
    display: grid;
    gap: 1rem;
    ${Screen.lg`
    grid-column: 1/3;
    `}
  }
  .cart__links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    a {
      padding: 0.2rem 1rem;
    }
    .clear-btn {
      padding: 0.2rem 1rem;
      font-size: 1.3rem;
    }
  }
`;
export default CartPage;
