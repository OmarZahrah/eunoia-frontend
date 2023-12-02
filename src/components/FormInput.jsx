// import styled from "styled-components";
// import { useState } from "react";
// import { VscEye, VscEyeClosed } from "react-icons/vsc";
// import { useAuthContext } from "../context/AuthContext";
// const FormInput = ({
//   label,
//   type,
//   name,
//   placeholder,
//   defaultValue,
//   required,
// }) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const { register } = useAuthContext();
//   const togglePasswordVisibility = () => {
//     setShowPassword((prevState) => !prevState);
//   };

//   return (
//     <Wrapper>
//       <label htmlFor={name}>
//         {label} {required && label && <span className="required">*</span>}
//       </label>
//       <div className="row">
//         {type === "password" ? (
//           <>
//             <input
//               {...register(name)}
//               type={showPassword ? "text" : "password"}
//               placeholder={placeholder}
//               required={required}
//               defaultValue={defaultValue}
//             />
//             <TogglePasswordButton onClick={togglePasswordVisibility}>
//               {showPassword ? (
//                 <VscEye size="0.95rem" />
//               ) : (
//                 <VscEyeClosed size="0.95rem" />
//               )}
//             </TogglePasswordButton>
//           </>
//         ) : (
//           <input
//             type={type}
//             {...register(name)}
//             placeholder={placeholder}
//             required={required}
//             defaultValue={defaultValue}
//           />
//         )}
//       </div>
//     </Wrapper>
//   );
// };

// const TogglePasswordButton = styled.button`
//   background: none;
//   border: none;
//   cursor: pointer;
//   margin-left: -1.563rem !important;
// `;

// const Wrapper = styled.div`
//   label {
//     display: block;
//     text-transform: capitalize;
//     font-size: 1rem;
//     color: var(--color-black-dark);
//   }
//   .required {
//     color: red;
//   }
//   .row {
//     display: flex;
//     align-items: center;
//   }

//   input {
//     width: 70%;
//     border: none;
//     border-bottom: 1px solid #00000080;
//     color: var(--color-black-light);
//     padding: 5px;
//     font-size: 0.85rem;
//     outline: none;
//     margin-top: 5px;
//   }
//   input:focus {
//     border-bottom: 2px solid var(--color-brand-green);
//   }
// `;

// export default FormInput;

import styled from "styled-components";
import { useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useAuthContext } from "../context/AuthContext";
const FormInput = ({ children, label, required, error, type, icon }) => {
  // const [showPassword, setShowPassword] = useState(false);
  // const togglePasswordVisibility = () => {
  //   setShowPassword((prevState) => !prevState);
  // };
  const { showPassword, togglePasswordVisibility } = useAuthContext();
  return (
    <Wrapper>
      <label htmlFor={children.props.id}>
        {label} {required && label && <span className="required">*</span>}
      </label>
      <div className="input">
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
      </div>
      {error && <span className="error">{error}</span>}
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
  .input {
    position: relative;
  }
  .icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    /* margin: 2.313rem 0; */
    width: 24px;
    height: 24px;
    padding-right: 5px;
    border-right: 1px solid #333;
  }
  .passIcon {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  /* input {
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
  } */
`;

export default FormInput;
