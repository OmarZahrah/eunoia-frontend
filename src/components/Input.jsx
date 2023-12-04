import styled from "styled-components";

const Input = styled.input`
  width: 70%;
  border: none;
  border-bottom: 1px solid #00000080;
  color: var(--color-black-light);
  padding: 10px 5px;
  font-size: 0.85rem;
  outline: none;
  margin-top: 5px;
  &:focus {
    border-bottom: 2px solid var(--color-brand-green);
  }
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    width: 100%;
  }
`;

export default Input;
