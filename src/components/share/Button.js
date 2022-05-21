import styled, { css } from "styled-components";

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius);
  transition: var(--transition);
  letter-spacing: 1px;
  font-size: var(--fs-400);
  font-weight: bold;

  ${(props) => {
    switch (props.variant) {
      case "primary":
        return css`
          border: 0.2rem solid var(--green-color-1);
          &:hover {
            background: var(--green-color-1);
            a {
              color: var(--white-color);
            }
          }
        `;

      case "secondary":
        return css`
          border: 0.2rem solid var(--red-color-1);
          color: var(--gray-color-1);
          a {
            color: var(--gray-color-1);
          }
          &:hover {
            background: var(--red-color-1);
            color: var(--white-color);
            a {
              color: var(--white-color);
            }
          }
        `;

      default:
        break;
    }
  }}
`;
export default Button;
