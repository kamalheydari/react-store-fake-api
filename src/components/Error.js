import React from "react";
import styled from "styled-components";

import { Typography } from ".";

const Error = () => {
  return (
    <Wrapper>
      <Typography.H2>there was an error</Typography.H2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--red-color-1);
`;
export default Error;
