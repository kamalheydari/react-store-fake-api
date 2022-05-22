import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { useProductsContext } from "../contexts/products_context";

import {
  Breadcrumb,
  Error,
  Loading,
  Stars,
  AddToCart,
  Button,
  Typography,
} from "../components";

import Screen from "../styles/Screen";

const SingleProductPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    single_product: product,
    single_product_loading: loading,
    single_product_error: error,
    fetchSingleProduct,
  } = useProductsContext();

  const { title, price, image, category, description, rating } = product;

  useEffect(() => {
    fetchSingleProduct(id);
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [error]);

  if (loading) {
    return (
      <div className='page-w-b'>
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className='page-w-b'>
        <Error />
      </div>
    );
  }

  return (
    <main>
      <Breadcrumb title={title} products />
      <Wrapper className='page'>
        <article>
          <div className='product__img'>
            <img src={image} alt={title} />
          </div>
          <div className='product__info'>
            <Button variant='secondary'>
              <Link to='/products'>back to products</Link>
            </Button>
            <Typography.H2>{title}</Typography.H2>
            <Stars stars={rating} />
            <Typography.P className='info__price'>
              Price : <span>${price}</span>
            </Typography.P>
            <Typography.P className='info__category'>
              Category : <span>{category}</span>
            </Typography.P>
            <Typography.P>{description}</Typography.P>
            <AddToCart product={product} />
          </div>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  article {
    padding: 1.5rem 1rem;
    background: #fff;
    display: grid;
    justify-items: center;
    gap: 2rem;
    ${Screen.lg`
    grid-template-columns: 1fr 1fr 1fr;
    `}

    .product__img {
      img {
        max-width: 20rem;
        object-fit: contain;
      }
    }

    .product__info {
      display: grid;
      gap: 1rem;
      ${Screen.lg`
      grid-column: 2/4;
    `}

      button {
        width: max-content;
      }

      .info__price {
        color: var(--green-color-1);
        span {
          color: var(--red-color-1);
        }
      }

      .info__category {
        color: var(--green-color-1);
        span {
          color: var(--gray-color-1);
        }
      }
    }
  }
`;

export default SingleProductPage;
