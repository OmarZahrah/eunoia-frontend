import styled from "styled-components";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useEffect, useRef, useState } from "react";

const FormInput = ({ children, label, required, error, type, icon }) => {
  const [showPassword, setShowPassword] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const inputs = containerRef.current.querySelectorAll("input");

    inputs.forEach((input) => {
      if (type === "password") {
        input.type = showPassword ? "text" : "password";
      }
    });
  }, [children, showPassword, type]);

  const togglePasswordVisibility = () => {
    setShowPassword((s) => !s);
  };
  return (
    <Wrapper>
      <label htmlFor={children.props.id}>
        {label} {required && label && <span className="required">*</span>}
      </label>
      <InputRow ref={containerRef} className="input" icon={icon}>
        {icon && icon}
        {children}
        {type === "password" && (
          <TogglePasswordButton
            className="passIcon"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <VscEye size="0.95rem" />
            ) : (
              <VscEyeClosed size="0.95rem" />
            )}
          </TogglePasswordButton>
        )}
      </InputRow>
      {error && <span className="error">{error}</span>}
    </Wrapper>
  );
};

const TogglePasswordButton = styled.span`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: -1.563rem !important;
`;

const Wrapper = styled.div`
  width: 100%;
  /* position: relative; */
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
  .error {
    font-size: 14px;
    color: red;
    /* display: block; */
  }

  .icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    padding-right: 8px;
    border-right: 1px solid black;
  }
  .passIcon {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;
const InputRow = styled.div`
  position: relative;
  input {
    padding-left: ${({ icon }) => (icon ? "3rem" : "0")};
  }
`;

export default FormInput;
