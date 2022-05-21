import React, { useState } from "react";
import { Link } from "react-router-dom";

import { AmountButtons } from ".";

import { useCartContext } from "../contexts/cart_context";

import { Button } from ".";

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
    <>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <Button variant='primary'>
        <Link to='/cart' id='link' onClick={() => addToCart(product, amount)}>
          Add to cart
        </Link>
      </Button>
    </>
  );
};

export default AddToCart;
