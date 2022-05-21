import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import {Button,Typography} from '../components';

const ErrorPage = () => {
  return (
    <Wrapper className="page-w-b">
      <Typography.H2>404</Typography.H2>
      <Button variant='secondary'>

      <Link to="/">Back To Home</Link>
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4rem;
  h2 {
    font-size: 6rem;
    color: var(--red-color-1);
  }

`;

export default ErrorPage;
