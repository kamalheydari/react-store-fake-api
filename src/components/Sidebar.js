import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

import { links } from "../utils/constants";

import { CartButtons, Icons } from ".";

import { useProductsContext } from "../contexts/products_context";

import Screen from "../styles/Screen";

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useProductsContext();

  return (
    <Wrapper>
      <aside className={isSidebarOpen ? "show-sidebar sidebar" : "sidebar"}>
        <div className='sidebar-header'>
          <Link to='/' onClick={closeSidebar}>
            <Icons.FaStoreStyled />
          </Link>
          <button type='button' onClick={closeSidebar}>
            <Icons.FaTimesStyled />
          </button>
        </div>
        <nav className='sidebar__nav'>
          <ul>
            {links.map(({ id, url, text }) => (
              <li key={id}>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : null)}
                  to={url}
                  onClick={closeSidebar}
                >
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className='sidebar__cart'>
          <CartButtons />
        </div>
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${Screen.md`
    display:none;
`}
  .sidebar {
    background: var(--bg-color);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: var(--transition);
    transform: translate(-120%);
    z-index: -1;
  }

  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }

  .sidebar-header {
    height: var(--header-height);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--blue-color-2);
    padding: 0 2rem;
    box-shadow: 0 0 1rem 1rem var(--bg-color);
  }

  .sidebar__nav {
    margin-bottom: 4rem;
    a {
      display: block;
      padding: 1rem;
      font-size: var(--fs-600);
      &:hover {
        padding-left: 1.5rem;
      }
    }
    .active {
      color: var(--red-color-1);
    }
  }

  .sidebar__cart {
    width: max-content;
    margin-inline: auto;
  }
`;

export default Sidebar;
