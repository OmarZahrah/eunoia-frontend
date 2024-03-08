import styled from "styled-components";
import NavBar from "../components/NavBar";

function AddPackage() {
  return (
    <Wrapper>
      <NavBar />
      <h1>Add Package</h1>
      <div className="packageDetails">
        <div className="packageInputs">
          <label>Package Name:</label>
          <input type="text" />
        </div>
        <div className="packageInputs">
          <label>Description:</label>
          <textarea />
        </div>
        <div className="packageInputs">
          <label>Price without offer:</label>
          <input type="text" />
        </div>
        {/* <label>Offer?</label>
        <input type="radio" id="offer" />
        <label htmlFor="offer">yes</label> */}
      </div>
    </Wrapper>
  );
}

export default AddPackage;

const Wrapper = styled.div`
  background: #fef9f0;
  height: 100vh;
  h1 {
    font-size: 27px;
    line-height: 50px;
    letter-spacing: 1px;
    text-align: center;
    color: rgba(0, 0, 0, 0.593);
  }

  .packageDetails {
    width: 60%;
    color: rgba(0, 0, 0, 0.619);
    font-weight: 500;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0 auto;
  }
  input,
  textarea {
    width: 70%;
    height: 100%;
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: transparent;
    color: rgba(0, 0, 0, 0.593);
    font-size: 17px;
  }
  .packageInputs {
    height: 3rem;
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
  }
  textarea {
    height: 5rem;
    resize: none;
  }
`;
