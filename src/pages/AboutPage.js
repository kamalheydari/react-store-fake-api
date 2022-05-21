import React from "react";
import styled from "styled-components";

import { Breadcrumb,Typography } from "../components";

import Screen from "../styles/Screen";

import img from "../assets/about_img.jpg";

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb title="About" />
      <Wrapper className="page">
        <div className="about__text">
          <Typography.H1>About Us</Typography.H1>
          <Typography.P>
            H&M Group is a family of brands and businesses, making it possible
            for customers around the world to express themselves through fashion
            and design, and to choose a more sustainable lifestyle. We create
            value for people and society in general by delivering our customer
            offering and by developing with a focus on sustainable and
            profitable growth.
          </Typography.P>
        </div>
        <div className="about__img">
          <img src={img} alt="about-img" />
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  justify-items: center;
  align-items: center;
  padding: 1rem;

  ${Screen.lg`
  grid-template-columns: repeat(3,1fr);
  gap:2rem;
`}
  .about__text {
    max-width: 600px;
  }
  .about__img {
    max-width: 700px;
    ${Screen.lg`
  grid-column: 2/4;
`}
  }

  h1 {
    color: var(--green-color-1);
    margin-bottom: 2rem;
  }
`;

export default AboutPage;
