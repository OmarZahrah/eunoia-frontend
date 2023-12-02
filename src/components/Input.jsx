import styled from "styled-components";

const Input = styled.input`
  width: 70%;
  border: none;
  border-bottom: 1px solid #00000080;
  color: var(--color-black-light);
  padding: 5px;
  font-size: 0.85rem;
  outline: none;
  margin-top: 5px;
  &:focus {
    border-bottom: 2px solid var(--color-brand-green);
  }
`;

export default Input;
