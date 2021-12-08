import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Breadcrumb = ({ title, products }) => {
  return (
    <Wrapper>
      <Link to="/home">Home /</Link>
      {products && <Link to="/products"> prodcuts / </Link>}
      <span>{title}</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: var(--breadcrumb-height);
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 1.3rem 1rem;
  width: 100%;
  a {
    color: var(--blue-color-1);
    transition: var(--transition);
    &:hover {
      color: var(--green-color-1);
    }
  }
  span {
    font-size: 1.1rem;
  }
`;

export default Breadcrumb;
