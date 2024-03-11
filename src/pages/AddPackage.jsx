import styled from "styled-components";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import { useState } from "react";

function AddPackage() {
  const [imageSrc, setImageSrc] = useState();
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageSrc(URL.createObjectURL(file)); // Create a temporary URL for the file
    }
  };
  return (
    <Wrapper>
      <NavBar />
      <h1>Add Package</h1>
      <div className="packageDetails">
        <div className="packageInputs">
          <label>Package Name:</label>
          <input type="text" className="input-text" />
        </div>
        <div className="packageInputs">
          <label>Description:</label>
          <textarea />
        </div>
        <div className="packageInputs">
          <label>Price without offer:</label>
          <input type="text" className="input-text" />
        </div>
        <div className="packageInputs">
          <label>
            Offer?
            <input type="radio" id="offer" className="radio" />
            Yes
          </label>
        </div>
        <div className="packageInputs">
          <label>
            Package Photo:
            {/* <div className="select">Select Image</div> */}
            <input type="file" id="file" onChange={handleImageUpload} />
            <img
              src={imageSrc}
              alt="Select image"
              className="select selectImg"
            />
            {/* <div className="select">Select Image</div> */}
          </label>
        </div>
        <div className="packageInputs">
          <label>Customize Package:</label>
        </div>
        <div className="packageInputs">
          <label>
            Title:
            <input type="radio" id="option1" className="radio" />
            Option1
          </label>
        </div>
        <Button size="medium" type="submit">
          Add Package
        </Button>
      </div>
    </Wrapper>
  );
}

export default AddPackage;

const Wrapper = styled.div`
  background: #fef9f0;
  height: 100%;
  h1 {
    font-size: 27px;
    line-height: 50px;
    letter-spacing: 1px;
    text-align: center;
    color: rgba(0, 0, 0, 0.593);
  }

  .packageDetails {
    width: 50%;
    color: rgba(0, 0, 0, 0.619);
    font-weight: 500;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0 auto;
  }
  .packageInputs {
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
  }
  .radio {
    margin-left: 10.5rem;
  }
  #file {
    display: none;
  }
  .select {
    display: inline;
    border: 1px solid rgba(116, 171, 112, 1);
    color: rgba(116, 171, 112, 1);
    padding: 8px;
    border-radius: 5px;
    margin-left: 5rem;
    cursor: pointer;
  }
  .input-text,
  textarea {
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: transparent;
    color: rgba(0, 0, 0, 0.593);
    font-size: 15px;
    height: 3rem;
    width: 70%;
  }
  textarea {
    height: 6rem;
  }
  .selectImg {
    width: 20rem;
    height: 8rem;
    object-fit: cover;
  }
`;
