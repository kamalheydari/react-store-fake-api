import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { AmountButtons } from ".";

import { useCartContext } from "../contexts/cart_context";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();

  //? Local State
  const [amount, setAmount] = useState(1);

  //? Handlers
  const increase = () => {
    setAmount((oldAmount) => oldAmount + 1);
  };
  const decrease = () => {
    setAmount((oldAmount) => {
      let newAmount = oldAmount - 1;
      if (newAmount < 1) {
        newAmount = 1;
      }
      return newAmount;
    });
  };

  return (
    <Wrapper>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <Link to="/cart" id="link" onClick={() => addToCart(product, amount)}>
        Add to cart
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  #link {
    padding: 0.3rem 0.8rem;
    color: var(--green-color-1);
    border-radius: var(--radius);
    border: 0.2rem solid var(--green-color-1);
    &:hover {
      color: var(--blue-color-1);
      background: transparent;
      box-shadow: 0 0 1rem 1rem var(--bg-color);
    }
  }
`;

export default AddToCart;
