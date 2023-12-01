import styled from "styled-components";
import { useSignUpContext } from "../context/SignUpContext";

const FormInput = ({
  label,
  type,
  name,
  placeholder,
  defaultValue,
  required,
  icon,
}) => {
  const { register } = useSignUpContext();
  return (
    <Wrapper>
      <label htmlFor={name}>
        {label} {required && label && <span className="required">*</span>}
      </label>
      <div className="row">
        <input
          type={type}
          {...register(name)}
          placeholder={placeholder}
          required={required}
        />
      </div>
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
  .required {
    color: red;
  }
  .row {
    display: flex;
    align-items: center;
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
