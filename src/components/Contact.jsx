import React from "react";
import styled from "styled-components";

import Screen from "../utils/Screen";

const Contact = () => {
  return (
    <Wrapper>
      <div className="contact__text">
        <h2>Join our newsletter and get 20% off</h2>
        <p>
          Shop now, pay later. You'll only pay for the items you keep. Your
          payment will automatically be deducted from your card after 30 days,
          no additional charge
        </p>
      </div>
      <div className="contact__form">
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Enter Email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 4rem 1rem;
  max-width: 800px;
  .contact__text {
    ${Screen.md`
    align-self: flex-start;
      
    `}
    h2 {
      margin-bottom: 1rem;
    }
    p {
      max-width: 40rem;
    }
  }
  .contact__form {
    border-radius: var(--radius);
    border: 0.22rem solid var(--green-color-1);
    padding: 0.3rem;
    width: min(90%, 400px);
    ${Screen.md`
    align-self: flex-end;
      
    `}
    form {
      display: grid;
      gap: 1rem;
      grid-template-columns: 1fr auto;
    }

    input {
      padding: 0.5rem;
    }
    button {
      background: var(--green-color-1);
      border-radius: var(--radius);
      padding: 0.5rem 1rem;
      transition: var(--transition);
      &:hover {
        color: var(--white-color);
      }
    }
  }
`;

export default Contact;
