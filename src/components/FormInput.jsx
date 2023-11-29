import styled from "styled-components";

const FormInput = ({
  label,
  type,
  name,
  placeholder,
  defaultValue,
  required,
  icon,
}) => {
  return (
    <Wrapper>
      <label htmlFor="">
        {label} {required && <span>*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </Wrapper>
  );
};
export default FormInput;

const Wrapper = styled.div`
  label {
    display: block;
    text-transform: capitalize;
    font-size: 1rem;
    color: var(--color-black-dark);
  }
  span {
    color: red;
  }
  input {
    width: 70%;
    border: none;
    border-bottom: 1px solid #00000080;
    color: var(--color-black-light);
    padding: 5px;
    font-size: 0.85rem;
    outline: none;
    margin-top: 5px;
  }
  input:focus {
    border-bottom: 2px solid var(--color-brand-green);
  }
`;
