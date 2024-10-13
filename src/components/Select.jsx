import styled from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";

const Select = ({
  label,
  options,
  multiple = false,
  color,
  name,
  placeholder,
  register,
}) => {
  return (
    <Wrapper color={color}>
      <Label htmlFor={name}>{label}</Label>
      <SelectItem {...register(name)} multiple={multiple} defaultValue="">
        <option value="" disabled hidden>
          {placeholder || "Select"}
        </option>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.option}
          </option>
        ))}
      </SelectItem>
      <SelectIcon />
    </Wrapper>
  );
};

export default Select;

const Wrapper = styled.div`
  max-width: 100%;
  position: relative;
`;

const Label = styled.label`
  display: block;
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1rem !important;
  color: ${({ color }) => color || "var(--color-black-mid)"};
`;

const SelectItem = styled.select`
  width: 100%;
  padding: 0.8rem 1.5rem;
  color: var(--color-grey-400);
  box-shadow: 0px 2px 11px -5px rgba(0, 0, 0, 0.5);
  letter-spacing: 1.1px;
  outline: none;
  appearance: none;
  border-radius: 8px;
  border: none;
  background-color: white;

  &:focus {
    border: 1px solid var(--color-primary);
  }
`;

const SelectIcon = styled(IoMdArrowDropdown)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(50%);
`;
