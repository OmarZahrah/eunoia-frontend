import { useEffect, useState } from "react";
import styled from "styled-components";

function RadioButton({
  packId,
  id,
  head,
  details,
  title,
  price,
  register,
  selectedOptions,
  setSelectedOptions,
}) {
  const handleChange = () => {
    setSelectedOptions({ ...selectedOptions, [packId]: price });
  };
  // useEffect(
  //   function () {
  //     const oldPrice = optionPrice;
  //     setTotalPrice((p) => p - optionPrice + selectedPrice);
  //   },
  //   [optionPrice, setTotalPrice, selectedPrice]
  // );

  return (
    <Wrapper>
      <input
        type="radio"
        id={head}
        value={id}
        {...register(`customize-package-${title}`)}
        onChange={handleChange}
      />
      <label htmlFor={head}>
        {head}
        <br /> {details}
      </label>
    </Wrapper>
  );
}

export default RadioButton;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: #00000099;

  label {
    font-size: 0.9rem;
    margin-left: 0.5rem;
  }

  input {
    width: 1.1rem;
    height: 1.1rem;
  }
`;
