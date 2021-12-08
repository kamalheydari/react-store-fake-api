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
    color: var(--green-color-1);
    border: var(--border);
    &:hover {
      color: var(--blue-color-1);
      background: transparent;
      box-shadow: var(--shadow);
    }
  }
`;

export default AddToCart;
