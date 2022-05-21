import React from "react";
import styled from "styled-components";

import { Breadcrumb, Filters, Products, Sort } from "../components";

import Screen from "../styles/Screen";

const ProductsPage = () => {
  return (
    <main>
      <Breadcrumb title="products" />
      <Wrapper className="page">
        <Filters />
        <div>
          <Sort />
          <Products />
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  padding: 1rem;
  ${Screen.lg`
  display: grid;
  gap: 3rem 2rem;
  grid-template-columns: 220px 1fr;
  `}
`;

export default ProductsPage;
