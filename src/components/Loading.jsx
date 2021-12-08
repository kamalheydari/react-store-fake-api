import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <Wrapper>
      <div className="loading"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Loading;
