import React from "react";
import styled from "styled-components";

const Loading = (props) => {
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
  min-height: ${(props) =>
    props.lazy ||
    "calc(100vh - (var(--header-height) + var(--footer-height)))"};

  margin-top: ${(props) => props.lazy || "var(--header-height)"};

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  .loading {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    border: 4px solid #ccc;
    border-top-color: var(--red-color-1);
    animation: spinner 0.6s linear infinite;
  }
`;

export default Loading;
