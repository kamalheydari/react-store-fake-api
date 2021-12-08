import React from "react";
import styled from "styled-components";

import { FaPlus, FaMinus } from "react-icons/fa";

const AmountButtons = ({ increase, decrease, amount }) => {
  return (
    <Wrapper>
      <button
        type="button"
        className={amount < 2 ? "dec-btn opacity " : "dec-btn"}
        onClick={decrease}
      >
        <FaMinus />
      </button>
      <h2>{amount}</h2>
      <button type="button" className="inc-btn" onClick={increase}>
        <FaPlus />
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: max-content;
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
  .dec-btn {
    color: var(--red-color-1);
  }
  .inc-btn {
    color: var(--green-color-1);
  }

  .opacity {
    opacity: 0.5;
    cursor: auto;
  }

  h2 {
    text-align: center;
    min-width: 2.6rem;
  }

  button {
    padding: 0.3rem;
    display: inline-block;
    transform: scale(1);
    svg {
      font-size: 1.5rem;
    }
  }
  button:active {
    transform: scale(0.9);
  }
`;
export default AmountButtons;
