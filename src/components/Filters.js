import React from "react";
import styled from "styled-components";

import { useFilterContext } from "../contexts/filter_context";

import { getUniqueValues } from "../utils/helpers";

import { Typography, Button } from ".";

const Filters = () => {
  const {
    filters: { text, category, min_price, max_price, price },
    updateFilters,
    all_products: products,
    clearFilters,
  } = useFilterContext();

  const categories = getUniqueValues(products, "category");

  if (products.length > 0) {
    return (
      <Wrapper>
        <div className='content'>
          <form className='filter__form' onSubmit={(e) => e.preventDefault()}>
            <div className='form__control'>
              <input
                type='text'
                name='text'
                placeholder='Search'
                className='search__input'
                value={text}
                onChange={updateFilters}
              />
            </div>
            <div className='form__control'>
              <Typography.H4>Categories</Typography.H4>
              <div className='form__categories'>
                {categories.map((c, index) => (
                  <button
                    key={index}
                    type='button'
                    name='category'
                    className={category === c ? "active" : null}
                    onClick={updateFilters}
                    data-category={c}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div className='form__control'>
              <Typography.H4>Price</Typography.H4>
              <p className='price'>${price}</p>
              <input
                type='range'
                name='price'
                min={min_price}
                max={max_price}
                value={price}
                onChange={updateFilters}
              />
            </div>
          </form>
          <Button
            variant='secondary'
            className='clear-btn'
            onClick={clearFilters}
          >
            Reset Filters
          </Button>
        </div>
      </Wrapper>
    );
  }
  return <div></div>;
};

const Wrapper = styled.div`
  margin-bottom: 2rem;

  .content {
    position: sticky;
    top: 7rem;
  }

  .filter__form {
    display: grid;
    gap: 2rem;
  }

  .search__input {
    background: var(--blue-color-3);
    border-radius: 0.5rem;
    padding: 1rem;
    width: min(100%, 200px);
    font-size: var(--fs-400);
  }

  .form__control > *:not(:first-child) {
    margin-top: 1rem;
  }

  .form__categories {
    display: grid;
    justify-items: flex-start;
    gap: 1rem;

    button {
      color: var(--blue-color-1);
      font-size: var(--fs-500);
      padding-right: 0.5rem;
      text-transform: capitalize;
      transition: var(--transition);
      border-bottom: 0.3rem solid transparent;
      &:hover {
        padding-left: 0.5rem;
      }
    }

    .active {
      border-bottom-color: var(--green-color-1);
      padding-left: 0.5rem;
    }
  }

  .price {
    color: var(--red-color-1);
    font-size: var(--fs-500);
  }

  .clear-btn {
    margin-block: 2rem;
    padding: 0.75rem 1.5rem;
  }
`;

export default Filters;
