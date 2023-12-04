import { IoMdArrowDropdown } from "react-icons/io";
import styled from "styled-components";
import { useAuthContext } from "../context/AuthContext";

const Select = ({ label, options, multiple = false, color, name }) => {
  const { register } = useAuthContext();
  return (
    <Wrapper color={color}>
      <label htmlFor="">{label}</label>
      <div className="select-box">
        <select {...register(name)} className="select-item" multiple={multiple}>
          <option value="" disabled selected hidden>
            Select
          </option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.option}
            </option>
          ))}
        </select>
        <IoMdArrowDropdown className="select-icon" />
      </div>
    </Wrapper>
  );
};
export default Select;

const Wrapper = styled.div`
  label {
    display: block;
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 8px;
    /* color: var(--color-black-light); */
    color: ${({ color }) => color || "var(--color-black-mid)"};
  }
  .select-box {
    position: relative;
    width: 60%;
  }
  select {
    border: none;
    /* width: 60%; */
    width: 100%;
    padding: 0.8rem 1.5rem;
    color: var(--color-grey-400);
    box-shadow: 0px 2px 11px -5px rgba(0, 0, 0, 0.5);
    letter-spacing: 1.1px;
    outline: none;
    appearance: none;
    border-radius: 8px;
    position: relative;
  }
  .select-icon {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  }
  @media only screen and (max-width: ${({ theme }) => theme.mid}) {
  }
  @media only screen and (max-width: ${({ theme }) => theme.small}) {
  }

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    .select-box {
      width: 100% !important;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
  }
`;
