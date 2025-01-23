import styled from "styled-components";
import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import { FaCheck } from "react-icons/fa";

const CreateMiniPackage = ({ packages, setPackages, setOpenPackage }) => {
  const [title, setTitle] = useState("");
  const [optionTitle, setOptionTitle] = useState("");
  const [optionPrice, setOptionPrice] = useState(0);
  const [openAddOption, setOpenAddOption] = useState(false);
  const [options, setOptions] = useState([]);
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && options.length) {
      //   handleSubmitOption();
      setPackages([...packages, { name: title, options: options }]);
      setTitle("");
      setOpenPackage(false);
    }
  };

  const handleDone = () => {
    if (optionTitle && optionPrice) {
      setOptions([...options, { title: optionTitle, price: optionPrice }]);
      setOpenAddOption(false);
      setOptionTitle("");
      setOptionPrice(0);
      setOpenAddOption(false);
      setDone(true);
    }
  };

  const handleSubmitOption = (done = false) => {
    if (optionTitle && optionPrice) {
      setOptions([...options, { title: optionTitle, price: optionPrice }]);
      setOpenAddOption(false);
      setOptionTitle("");
      setOptionPrice(0);
      setOpenAddOption(true);
      setDone(false);
    } else {
      setOpenAddOption(true);
    }
  };

  return (
    <Wrapper className="package">
      <div className="title field">
        <h3>title:</h3>
        <Input className="input" onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="options">
        <h3>options:</h3>
        <div className="options-list">
          {options?.map((option, i) => (
            <div className="option" key={i}>
              <span className="option-title">{option?.title}</span>
              <span className="price">{option?.price} EGP</span>
            </div>
          ))}
          {openAddOption && (
            <div className="option-inputs">
              <div className="option-field">
                <label className="option-label">title:</label>
                <Input
                  name="title"
                  className="option-title-input 
            option-input"
                  type="text"
                  value={optionTitle}
                  onChange={(e) => setOptionTitle(e.target.value)}
                />
              </div>
              <div className="option-field">
                <label className="option-label">price:</label>
                <Input
                  name="price"
                  className="option-price-input option-input"
                  type="number"
                  value={optionPrice}
                  onChange={(e) =>
                    e.target.value >= 0
                      ? setOptionPrice(e.target.value)
                      : setOptionPrice(0)
                  }
                />
              </div>
              {/* {done && (
                <button className="done">
                  Done <FaCheck />
                </button>
              )} */}
            </div>
          )}
          <span className="add" onClick={handleSubmitOption}>
            + Add option
          </span>
        </div>
      </div>
      {!done ? (
        <Button
          background="green"
          color="#fff"
          className="submit"
          size="small"
          type="button"
          onClick={handleDone}
        >
          Done
        </Button>
      ) : (
        <Button
          background="green"
          color="#fff"
          className="submit"
          size="small"
          type="button"
          onClick={handleSubmit}
        >
          Add
        </Button>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .title {
    display: flex;
    gap: 1.25rem;
  }
  .submit {
    margin-top: 1rem;
    width: fit-content;
  }
  .input {
    background: transparent;
    outline: none;
    width: 30%;
  }
  .input:hover,
  .input:focus {
    outline: none !important;
  }
  .add {
    background: transparent;
    outline: none;
    border: none;
    width: fit-content;
  }
  .field {
    align-items: end;
    gap: 2rem;
    justify-content: start !important;
  }
  .options-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  .option {
    display: flex;
    flex-direction: column;
  }
  .option-title {
    /* display: block; */
  }
  .price {
    font-size: 12px;
    color: gray;
  }
  .option-field {
    width: 30%;
    display: flex;
    align-items: end;
    gap: 15px;
    justify-content: space-between;
  }
  .option-label {
    font-size: 14px;
  }
  .option-input {
    background: transparent;
    width: 70%;
    padding: 2px;
  }
  .option-input:hover,
  .option-input:focus {
    outline: none !important;
  }
  .done {
    background: transparent;
    border: none;
    color: var(--color-brand-green);
    display: flex;
    align-items: center;
    gap: 5px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    .field {
      align-items: start;
      gap: 10px;
    }
    input {
      font-size: 20px;
    }

    .input {
      width: 60%;
    }
    .options-list {
      margin-top: 10px;
    }
    .option-field {
      width: 100%;
    }
  }
`;
export default CreateMiniPackage;
