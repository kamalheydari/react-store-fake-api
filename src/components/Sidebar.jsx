import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

import { links } from "../utils/constants";

import { FaTimes, FaStore } from "react-icons/fa";

import { CartButtons } from ".";

import { useProductsContext } from "../contexts/products_context";

import Screen from "../utils/Screen";

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useProductsContext();
  const { pathname } = useLocation();
  return (
    <Wrapper>
      <aside className={isSidebarOpen ? "show-sidebar sidebar" : "sidebar"}>
        <div className="sidebar-header">
          <Link className="sidebar__logo" to="/" onClick={closeSidebar}>
            <FaStore />
          </Link>
          <button type="button" onClick={closeSidebar} className="sidebar__btn">
            <FaTimes />
          </button>
        </div>
        <nav className="sidebar__nav">
          <ul>
            {links.map(({ id, url, text }) => (
              <li key={id}>
                <Link
                  className={url === pathname ? "active" : null}
                  to={url}
                  onClick={closeSidebar}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="sidebar__cart">
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
    background: var(--blue-color-2);
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
    padding: 0 2rem;
    box-shadow: 0 0 1rem 1rem var(--bg-color);
  }

  .sidebar__nav {
    margin-bottom: 4rem;
    a {
      display: block;
      padding: 1rem;
      font-size: 1.8rem;
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
    margin: 0 auto;
  }

  .sidebar__btn {
    color: var(--red-color-1);
    font-size: 2.2rem;
  }
  .sidebar__logo {
    font-size: 2.2rem;
    color: var(--blue-color-1);
  }
`;

export default Sidebar;
