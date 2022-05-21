import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Typography, Button } from "../components";

const CheckoutPage = () => {
  return (
    <Wrapper className='page-w-b'>
      <div>
        <Typography.H2>Checkout Successfully</Typography.H2>
        <Button variant='primary'>
          <Link to='/products'>Back to shop</Link>
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  text-align: center;
  h2 {
    margin-bottom: 2rem;
  }
`;
export default CheckoutPage;
