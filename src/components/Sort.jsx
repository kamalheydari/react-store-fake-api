import React from "react";
import styled from "styled-components";

import { BsFillGridFill, BsList } from "react-icons/bs";

import { useFilterContext } from "../contexts/filter_context";

const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
    updateSort,
    sort,
  } = useFilterContext();
  return (
    <Wrapper>
      <div className="sort__btns">
        <button
          type="button"
          onClick={setGridView}
          className={grid_view ? "active" : null}
        >
          <BsFillGridFill />
        </button>
        <button
          type="button"
          onClick={setListView}
          className={!grid_view ? "active" : null}
        >
          <BsList />
        </button>
      </div>
      <p className="sort__items">
        <span>{products.length}</span> products found
      </p>
      <hr />
      <form className="sort__form">
        <label htmlFor="sort">sort by</label>
        <select
          name="sort"
          id="sort"
          className="sort__input"
          value={sort}
          onChange={updateSort}
        >
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a-z)</option>
          <option value="name-z">name (z-a)</option>
        </select>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  gap: 0 0.1rem;

  .sort__btns {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    button {
      margin-right: 0.3rem;
      display: inline-block;
      padding: 0.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    svg {
      font-size: 1.3rem;
      color: var(--blue-color-1);
    }
  }
  .sort__items {
    font-size: 0.9rem;
    span {
      display: inline-block;
      min-width: 2rem;
      text-align: center;
    }
  }
  hr {
    border-bottom: 0.2rem solid red;
  }
  .sort__form {
    label {
      margin-right: 0.2rem;
    }
    option {
      font-size: 1rem;
      padding: 0 0.5rem;
      background: var(--bg-color);
    }
  }
  .active {
    border: 0.2rem solid var(--green-color-1);
    border-radius: 0.3rem;
  }
`;

export default Sort;
