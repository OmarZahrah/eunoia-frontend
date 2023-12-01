import styled from "styled-components";
import { useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
const FormInput = ({
  label,
  type,
  name,
  placeholder,
  defaultValue,
  required,
  icon,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <Wrapper>
      <label htmlFor={name}>
        {label} {required && label && <span className="required">*</span>}
      </label>
      <div className="row">
        {type === "password" ? (
          <>
            <input
              type={showPassword ? "text" : "password"}
              name={name}
              placeholder={placeholder}
              required={required}
              defaultValue={defaultValue}
            />
            <TogglePasswordButton onClick={togglePasswordVisibility}>
              {showPassword ? (
                <VscEye size="0.95rem" />
              ) : (
                <VscEyeClosed size="0.95rem" />
              )}
            </TogglePasswordButton>
          </>
        ) : (
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            required={required}
            defaultValue={defaultValue}
          />
        )}
      </div>
    </Wrapper>
  );
};

const TogglePasswordButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: -1.563rem !important;
`;

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

export default FormInput;
