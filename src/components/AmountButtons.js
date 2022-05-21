import React from "react";
import styled from "styled-components";

import { Icons } from ".";

const AmountButtons = ({ increase, decrease, amount }) => {
  return (
    <Wrapper>
      <button
        type='button'
        className={amount < 2 && "opacity "}
        onClick={decrease}
      >
        <Icons.FaMinusStyled />
      </button>
      <span>{amount}</span>
      <button type='button' onClick={increase}>
        <Icons.FaPlusStyled />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: max-content;
  display: flex;
  gap: 1rem;

  .opacity {
    opacity: 0.5;
    cursor: auto;
  }

  span {
    text-align: center;
    min-width: 2.6rem;
    font-size: var(--fs-700);
    color: var(--gray-color-1);
  }

  button {
    padding: 0.3rem;
    display: inline-block;
    transform: scale(1);
  }

  button:active {
    transform: scale(0.9);
  }
`;
export default AmountButtons;
