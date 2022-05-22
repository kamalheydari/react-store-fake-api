import React from "react";
import styled from "styled-components";

import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Stars = ({ stars = { rate: "" } }) => {
  const { rate } = stars;

  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {rate >= index + 1 ? (
          <BsStarFill />
        ) : rate >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return <Wrapper>{tempStars}</Wrapper>;
};
const Wrapper = styled.div`
  span {
    font-size: 1.4rem;
    margin-inline: 0.1rem;
    color: var(--yellow-color-2);
  }
`;
export default Stars;
