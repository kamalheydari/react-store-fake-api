import React from "react";
import styled from "styled-components";

import { services } from "../utils/constants";

import Screen from "../styles/Screen";

import { Typography } from ".";

const Services = () => {
  return (
    <Wrapper>
      {services.map(({ id, name, icon, text }) => (
        <article key={id} className='service'>
          <div className='service__header'>
            {icon}
            <Typography.H3>{name}</Typography.H3>
          </div>
          <Typography.P>{text}</Typography.P>
        </article>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2rem 1.5rem;
  display: grid;
  justify-items: center;
  gap: 1.5rem;
  ${Screen.md`  
  grid-template-columns: 1fr 1fr 1fr;
  `}

  .service {
    padding: 1rem 1.5rem;
    border: 0.2rem solid var(--green-color-1);
    border-radius: var(--radius);
    transition: var(--transition);
    &:hover {
      box-shadow: 0 0 1rem 1rem var(--bg-color);
    }
  }

  .service__header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    svg {
      color: var(--green-color-1);
      font-size: 3rem;
      margin-right: 2rem;
    }
  }

  p {
    text-align: justify;
  }
`;

export default Services;
