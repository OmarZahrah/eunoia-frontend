// import styled from "styled-components";

// const Button = ({ children, type, background, color, onClick }) => {
//   return (
//     <StyledButton
//       type={type}
//       color={color}
//       background={background}
//       onClick={onClick}
//     >
//       {children}
//     </StyledButton>
//   );
// };
// export default Button;

// const primary = {};

// const StyledButton = styled.button`
//   border: none;
//   padding: 0.5rem 1.5rem;
//   border-radius: 100px;
//   font-size: 1.1rem;
//   background-color: ${({ background }) => background || "transparent"};
//   color: ${({ color }) => color || "#fff"};
// `;
import styled, { css } from "styled-components";

const sizes = {
  small: css`
    width: 8rem;
    font-size: 1.1rem;
    padding: 0.5rem 1.5rem;
  `,
  medium: css`
    width: 25rem;
    padding: 0.7rem 1.5rem;
    font-size: 1.4rem;
  `,
  large: css`
    width: 100%;
    padding: 0.7rem 2rem;
    font-size: 1.6rem;
    font-weight: 500;
  `,
};

const colors = {
  green: css`
    color: var(--color-brand-green);
  `,
  pink: css`
    color: var(--color-brand-pink);
  `,
};

const backgrounds = {
  green: css`
    color: #fff;
    background-color: var(--color-brand-green);

    &:hover {
      background-color: var(--color-green-light);
    }
  `,
  pink: css`
    color: #fff;
    background: var(--color-brand-pink);
    /* border: 1px solid var(--color-grey-200); */

    &:hover {
      background-color: var(--color-pink-light);
    }
  `,
  transparent: css`
    background-color: transparent;
  `,
  transparentGreen: css`
    background-color: transparent;
    &:hover {
      background-color: var(--color-green-light);
      color: #fff;
    }
  `,
  transparentPink: css`
    background-color: transparent;
    &:hover {
      background-color: var(--color-pink-light);
      color: #fff;
    }
  `,
};

const borders = {
  green: css`
    border: 2px solid var(--color-brand-green);
  `,
  pink: css`
    border: 2px solid var(--color-brand-pink);
  `,
};

const Button = styled.button`
  border: none;
  border-radius: 100px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  ${(props) => sizes[props.size]};
  ${(props) => backgrounds[props.background]};
  ${(props) => colors[props.color]};
  ${(props) => borders[props.border]};
`;

Button.defaultProps = {
  background: "green",
  size: "medium",
  colors: "#fff",
};
export default Button;
