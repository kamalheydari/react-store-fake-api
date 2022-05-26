import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { truncate } from "../utils/helpers";

import { Button, Typography } from ".";

const ListProducts = ({ products }) => {
  return (
    <Wrapper>
      {products.map(({ title, image, id, price, description }) => (
        <article key={id}>
          <div className='product__img'>
            <img src={image} alt={title} />
          </div>
          <div className='product__info'>
            <Typography.H3>{title}</Typography.H3>
            <p className='price'>${price}</p>
            <Typography.P>{truncate(description, 120)}</Typography.P>
            <Button variant='primary'>
              <Link to={`/products/${id}`}>Details</Link>
            </Button>
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
    gap: 1.2rem;
    margin-bottom: 1.5rem;
    background: #fff;
    padding: 1rem;
    border-radius: var(--radius);
    transition: var(--transition);
    transform: scale(1);
    &:hover {
      box-shadow: 0 0 1rem 1rem var(--gray-color-2);
    }

    img {
      width: min(25vw, 220px);
      height: 20rem;
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

    button {
      width: max-content;
    }
  }
`;

export default ListProducts;
