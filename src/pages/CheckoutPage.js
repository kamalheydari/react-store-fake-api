import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CheckoutPage = () => {
  return (
    <Wrapper className="page-w-b">
      <div>
        <h2>Checkout Successfully</h2>
        <Link to="/products">Back to shop</Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: grid;
  place-items: center;
  h2 {
    margin-bottom: 1rem;
  }
  a {
    border: 0.2rem solid var(--green-color-1);
    border-radius: var(--radius);
    padding: 0.2rem 1rem;
  }
`;
export default CheckoutPage;
