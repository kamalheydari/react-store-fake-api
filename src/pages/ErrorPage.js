import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorPage = () => {
  return (
    <Wrapper className="page-w-b">
      <h2>404</h2>
      <Link to="/">Back To Home</Link>
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
  a {
    display: inline-block;
    border: 0.15rem solid var(--green-color-1);
    padding: 0.5rem;
  }
`;

export default ErrorPage;
