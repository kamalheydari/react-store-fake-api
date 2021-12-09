import React from "react";
import styled from "styled-components";

import { useFilterContext } from "../contexts/filter_context";

import { getUniqueValues } from "../utils/helpers";

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
        <div className="content">
          <form className="filter__form" onSubmit={(e) => e.preventDefault()}>
            <div className="form__control">
              <input
                type="text"
                name="text"
                placeholder="Search"
                className="search__input"
                value={text}
                onChange={updateFilters}
              />
            </div>
            <div className="form__control">
              <h4>Categories</h4>
              <div className="form__categories">
                {categories.map((c, index) => (
                  <button
                    key={index}
                    type="button"
                    name="category"
                    className={category === c ? "active" : null}
                    onClick={updateFilters}
                    data-category={c}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div className="form__control">
              <h4>Price</h4>
              <p className="price">${price}</p>
              <input
                type="range"
                name="price"
                min={min_price}
                max={max_price}
                value={price}
                onChange={updateFilters}
              />
            </div>
          </form>
          <button type="button" className="clear-btn " onClick={clearFilters}>
            Reset Filters
          </button>
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
    top: 1rem;
  }
  .filter__form {
    display: grid;
    gap: 1rem;
  }
  .search__input {
    background: var(--blue-color-3);
    border-radius: 0.3rem;
    padding: 0.5rem;
  }
  .form__categories {
    display: grid;
    justify-items: flex-start;
    gap: 0.8rem;
    button {
      color: var(--blue-color-1);
      font-size: 1.4rem;
      padding-right: 0.5rem;
      transition: var(--transition);
      border-bottom: 0.2rem solid transparent;
      &:hover {
        padding-left: 0.5rem;
      }
    }
    .active {
      border-bottom-color: var(--green-color-1);
    }
  }

  .price {
    color: var(--red-color-1);
  }

  .clear-btn {
    font-size: 1.3rem;
    padding: 0.3rem 0.7rem;
    letter-spacing: 1px;
    transition: var(--transition);
    border: 0.2rem solid var(--red-color-1);
    &:hover {
      background: var(--red-color-1);
      color: var(--white-color);
    }
  }
  h4 {
    color: var(--blue-color-4);
  }
`;

export default Filters;
