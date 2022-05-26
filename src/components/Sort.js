import React from "react";
import styled from "styled-components";

import { useFilterContext } from "../contexts/filter_context";

import { Typography, Icons } from ".";

import Screen from "../styles/Screen";

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
      <div className='sort__btns'>
        <button
          type='button'
          onClick={setGridView}
          className={grid_view ? "active" : null}
        >
          <Icons.BsFillGridFillStyled />
        </button>
        <button
          type='button'
          onClick={setListView}
          className={!grid_view ? "active" : null}
        >
          <Icons.BsListStyled />
        </button>
      </div>
      <Typography.P className='sort__items'>
        <span>{products.length}</span> items found
      </Typography.P>
      <div className='sort__line' />
      <form className='sort__form'>
        <label htmlFor='sort'>sort by :</label>
        <select
          name='sort'
          id='sort'
          className='sort__input'
          value={sort}
          onChange={updateSort}
        >
          <option value='price-lowest'>price (lowest)</option>
          <option value='price-highest'>price (highest)</option>
          <option value='name-a'>name (a-z)</option>
          <option value='name-z'>name (z-a)</option>
        </select>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  ${Screen.sm`
        gap:0 1rem;
    `}

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
      ${Screen.md`
        padding: 0.5rem;
      `}
    }
  }

  .sort__items {
    font-size: 1.3rem;
    span {
      display: inline-block;
      min-width: 2rem;
      text-align: center;
      color: var(--blue-color-1);
    }
  }

  .sort__line {
    background-color: var(--red-color-1);
    height: 0.3rem;
    width: 30%;
    display: none;
    margin-inline: auto;

    ${Screen.lg`
    display: inline-block;
    `}
    ${Screen.xl`
    width:40%;
    `}
  }

  .sort__form {
    margin-left: auto;
    label {
      color: var(--blue-color-1);
      margin-right: 0.2rem;
      font-size: var(--fs-400);
    }
    option {
      font-size: var(--fs-600);
      padding: 1rem;
      background: var(--bg-color);
    }
  }

  .active {
    border: 0.2rem solid var(--green-color-1);
    border-radius: 0.3rem;
  }
`;

export default Sort;
