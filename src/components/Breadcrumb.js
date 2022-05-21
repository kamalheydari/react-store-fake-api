import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { truncate } from "../utils/helpers";

const Breadcrumb = ({ title, products }) => {
  return (
    <Wrapper>
      <Link to='/'>Home /</Link>
      {products && <Link to='/products'> prodcuts / </Link>}
      <span>  {truncate(title, 20)}</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: var(--breadcrumb-height);
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 1.3rem 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    font-size: var(--fs-400);
    color: var(--blue-color-1);
    transition: var(--transition);
    &:hover {
      color: var(--green-color-1);
    }
  }
  
  span {
    font-size: var(--fs-400);
    color: var(--green-color-1);

  }
`;

export default Breadcrumb;
