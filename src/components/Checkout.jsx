import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Checkout = () => {
  return (
    <Wrapper className="page-w-b">
      <div>
        <h2>Checkout Successfully</h2>
        <Link to="/products" className="green-box">
          Back to shop
        </Link>
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
`;
export default Checkout;
