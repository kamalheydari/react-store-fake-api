import React from "react";
import styled from "styled-components";

import { Breadcrumb, Filters, Products, Sort } from "../components";

import Screen from "../utils/Screen";

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
  ${Screen.md`
  display: grid;
  gap: 3rem 1.5rem;
  grid-template-columns: 200px 1fr;
  `}
`;

export default ProductsPage;
