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
            <Link to="/products">Buy more</Link>
            <button className="clear-btn  " onClick={clearCart}>
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
  .cart__items {
    padding: 1rem;
  }
  .cart__links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    a {
      border: 0.2rem solid var(--green-color-1);
      border-radius: var(--radius);
      padding: 0.3rem 1rem;
      &:hover {
        background: var(--white-color);
      }
    }
    .clear-btn {
      padding: 0.3rem 1rem;
      letter-spacing: 1px;
      font-size: 1.3rem;
      border: 0.2rem solid var(--red-color-1);
      border-radius: var(--radius);
      transition: var(--transition);
      &:hover {
        background: var(--red-color-1);
        color: var(--white-color);
      }
    }
  }
`;
export default CartPage;
