import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { truncate } from "../utils/helpers";

const ListProducts = ({ products }) => {
  return (
    <Wrapper>
      {products.map(({ title, image, id, price, description }) => (
        <article key={id}>
          <div className="product__img">
            <img src={image} alt={title} />
          </div>
          <div className="product__info">
            <h3>{title}</h3>
            <p className="price">${price}</p>
            <p>{truncate(description, 120)}</p>
            <Link to={`/products/${id}`}>Details</Link>
          </div>
        </article>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  article {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
    margin-bottom: 1.5rem;
    background: #fff;
    padding: 1rem;
    border-radius: var(--radius);
    transition: var(--transition);
    transform: scale(1);
    &:hover {
      box-shadow: 0 0 1rem 1rem var(--bg-color);
      transform: scale(1.01);
    }
    img {
      max-width: 15rem;
      object-fit: contain;
    }
    .product__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
    }
    h3 {
      min-height: 2.2rem;
      color: var(--blue-color-4);
    }
    .price {
      font-size: 1.8rem;
      color: var(--red-color-1);
    }
    a {
      width: max-content;
      padding: 0.3rem 1rem;
      border: 0.2rem solid var(--green-color-1);
      &:hover {
        border-color: var(--red-color-1);
        color: var(--red-color-1);
      }
    }
  }
`;

export default ListProducts;
