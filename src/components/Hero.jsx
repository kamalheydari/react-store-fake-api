import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import heroImg from "../assets/hero_img.png";

const Hero = () => {
  return (
    <Wrapper>
      <div className="home__hero">
        <h1 className="hero__title">
          <span>Everything</span> <br /> you need to be good looking
        </h1>
        <Link to="/products" className="header__link green-box">
          Shop Now
        </Link>
        <div className="hero__img">
          <img src={heroImg} alt="hero - img" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  overflow: hidden;
  .home__hero {
    background: var(--blue-color-2);
    padding: 0 1rem 0 2rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 1rem;
  }
  .hero__title {
    align-self: flex-start;
    margin-top: 10vh;
    position: relative;
    z-index: 1;
    span {
      color: var(--green-color-1);
    }

    &::before {
      content: "";
      position: absolute;
      top: -1rem;
      left: -5rem;
      width: 12rem;
      height: 12rem;
      border-radius: 50%;
      background: yellow;
      z-index: -1;
    }
  }
  .header__link {
    width: max-content;
    z-index: 1;
  }
  .hero__img {
    width: min(90%, 480px);
    align-self: flex-end;
  }
`;

export default Hero;
