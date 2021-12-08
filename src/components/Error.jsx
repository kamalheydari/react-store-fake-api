import React from "react";
import styled from "styled-components";

const Error = () => {
  return (
    <Wrapper>
      <h2>there was an error</h2>
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
