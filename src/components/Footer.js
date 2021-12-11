import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        &copy;{new Date().getFullYear()} by kamal heydari, All rights reserved
      </p>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background: var(--green-color-1);
  height: var(--footer-height);
  padding: 1rem;
  color: var(--blue-color-2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Footer;
