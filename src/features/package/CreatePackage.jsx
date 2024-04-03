import styled from "styled-components";
import NavBar from "../../components/NavBar";
import { useState } from "react";

const CreatePackage = () => {
  const [miniPackage, setMiniPackage] = useState([]);
  const [options, setOptions] = useState([]);

  const handleNewPackage = () => {};
  return (
    <Wrapper>
      <NavBar />
      <div className="container">
        <h1>Add Package</h1>
        <div className="field">
          <label>Package Name:</label>
          <input type="text" className="top-input" />
        </div>
        <div className="field">
          <label>Description:</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div className="field">
          <label>Price:</label>
          <input type="number" className="top-input" />
        </div>
        <div className="field">
          <label>Package Photo:</label>
          <div className="img-container">
            <label className="img-label">
              Select File
              <input type="file" className="img-input top-input" />
            </label>
          </div>
        </div>
        <div className="customized-package">
          <h2>Customized Package:</h2>
          <span className="add" onClick={handleNewPackage}>
            + Add customized package
          </span>

          <div className="package">
            <div className="title">
              <h3>title:</h3>
              <input type="text" className="input-title" />
            </div>
            <div className="options">
              <h3>options:</h3>
              <span className="add" onClick={handleNewPackage}>
                + Add option
              </span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #fef9f0;
  padding-bottom: 3rem;
  .container {
    padding: 0 4rem;
    h1 {
      text-align: center;
      font-size: 1.5rem;
      color: #444;
      margin-top: 1rem;
      margin-bottom: 4rem;
    }
    .field {
      display: flex;
      justify-content: space-between;
      /* align-items: center; */
      margin-bottom: 2rem;
    }
    .top-input {
      width: 70%;
      height: 3rem;
      background: transparent;
      outline: none;
      border: 1px solid #ddd;
    }
    input:hover,
    input:focus {
      outline: 1px solid #ddd;
    }
    textarea {
      width: 70%;
      background: transparent;
      height: 6rem;
      border: 1px solid #ddd;
    }
    textarea:hover,
    textarea:focus {
      outline: 1px solid #ddd;
    }
    .img-container {
      width: 70%;
    }
    .img-label {
      border: 1px solid var(--color-brand-green);
      padding: 5px 10px;
      color: var(--color-brand-green);
    }
    .img-label:hover {
      background-color: var(--color-brand-green);
      color: #fff;
      cursor: pointer;
    }
    .img-input {
      display: none;
    }
    h2 {
      font-size: 1.25rem;
      color: #444;
      margin-top: 3rem;
    }
    .add {
      color: var(--color-brand-green);
      cursor: pointer;
      font-size: 0.875rem;
    }
    .title {
      display: flex;
      gap: 1.25rem;
    }
  }
`;

export default CreatePackage;
