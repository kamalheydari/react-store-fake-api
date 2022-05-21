import styled, { css } from "styled-components";

import {
  FaBars,
  FaTimes,
  FaStore,
  FaShoppingCart,
  FaPlus,
  FaMinus,
  FaTrash,
} from "react-icons/fa";

import { BsFillGridFill, BsList } from "react-icons/bs";


//? base styles
const bigIcon = css`
  font-size: 2.5rem;
`;

const mediumIcon = css`
  font-size: 2rem;
`;

//? styled icons
const BsFillGridFillStyled = styled(BsFillGridFill)`
  color: var(--blue-color-1);
  ${mediumIcon}
`;

const BsListStyled = styled(BsList)`
  color: var(--blue-color-1);
  ${mediumIcon}
`;

const FaPlusStyled = styled(FaPlus)`
  ${mediumIcon}
  color: var(--green-color-1);
`;

const FaTrashStyled = styled(FaTrash)`
  ${mediumIcon}
  color: var(--red-color-1);
`;

const FaMinusStyled = styled(FaMinus)`
  ${mediumIcon}
  color: var(--red-color-1);
`;

const FaTimesStyled = styled(FaTimes)`
  ${bigIcon}
  color: var(--red-color-1);
`;

const FaBarsStyled = styled(FaBars)`
  ${bigIcon}
  color: var(--blue-color-1);
`;

const FaStoreStyled = styled(FaStore)`
  ${bigIcon}
  color: var(--blue-color-1);
`;

const FaShoppingCartStyled = styled(FaShoppingCart)`
  ${mediumIcon}
  color: var(--blue-color-1);
`;

const Icons = {
  FaBarsStyled,
  FaTimesStyled,
  FaStoreStyled,
  FaShoppingCartStyled,
  FaPlusStyled,
  FaMinusStyled,
  BsFillGridFillStyled,
  FaTrashStyled,
  BsListStyled,
};

export default Icons;
