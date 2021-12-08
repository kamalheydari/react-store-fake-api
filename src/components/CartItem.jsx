import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { truncate } from "../utils/helpers";

import { AmountButtons } from ".";

import { FaTrash } from "react-icons/fa";

import { useCartContext } from "../contexts/cart_context";

const CartItem = ({ title, price, amount, id, image }) => {
  const { toggleAmount, removeItem } = useCartContext();
  //? Handlers
  const increase = () => {
    toggleAmount(id, "inc");
  };
  const decrease = () => {
    toggleAmount(id, "dec");
  };

  return (
    <Wrapper>
      <div className="item__img">
        <img src={image} alt={title} />
      </div>
      <div className="item__info">
        <Link to={`/products/${id}`} title={title}>
          {truncate(title, 20)}
        </Link>
        <p>
          ${price} &#9747; {amount} :
          <br />
          <span>${(price * amount).toFixed(2)}</span>
        </p>
      </div>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <button
        className={amount < 2 ? "item__btn active" : "item__btn "}
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 0.8rem;
  background: var(--white-color);
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: auto 1fr 1fr auto;
  gap: 0 1rem;
  margin-bottom: 0.5rem;

  img {
    max-width: 5rem;
  }
  .item__info {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
    padding-left: 1rem;

    span {
      color: var(--red-color-1);
    }
  }

  .item__btn {
    padding: 0.6rem;
    margin-bottom: 1rem;
    transition: var(--transition);
    transform: scale(1);
    svg {
      color: var(--red-color-1);
      font-size: 1.5rem;
    }
  }

  .active {
    /* padding: 0.2rem; */
    transform: scale(1.4);
  }
`;

export default CartItem;
