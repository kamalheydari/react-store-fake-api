import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { useProductsContext } from "../contexts/products_context";

import { Breadcrumb, Error, Loading, Stars, AddToCart } from "../components";

import Screen from "../utils/Screen";

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
      <div className="page-w-b">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-w-b">
        <Error />
      </div>
    );
  }

  return (
    <main>
      <Breadcrumb title={title} products />
      <Wrapper className="page">
        <article>
          <div className="product__img">
            <img src={image} alt={title} />
          </div>
          <div className="product__info">
            <Link to="/products">back to products</Link>
            <h2>{title}</h2>
            <Stars stars={rating} />
            <p className="info__price">
              Price : <span>${price}</span>
            </p>
            <p className="info__category">
              Category : <span>{category}</span>
            </p>
            <p>{description}</p>
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
    ${Screen.md`
    grid-template-columns: 1fr 1fr 1fr;
    `}
    .product__img {
      img {
        max-width: 20rem;
      }
    }
    .product__info {
      display: grid;
      gap: 1rem;
      ${Screen.md`
    grid-column: 2/4;
    `}
      a {
        height: max-content;
        width: max-content;
        padding: 0.2rem 1.5rem;
        letter-spacing: 1px;
        color: var(--gray-color-1);
        transition: var(--transition);
        border: 0.2rem solid var(--red-color-1);
        &:hover {
          background: var(--red-color-1);
          color: var(--white-color);
        }
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
