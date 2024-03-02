import styled from "styled-components";
import NavBar from "../components/NavBar";
import photo from "../images/business.svg";
import Button from "../components/Button";

function CreateBussAcc() {
  return (
    <Wrapper>
      <NavBar />
      <div className="container">
        <div className="left">
          <h1>Business Account</h1>
          <p>
            You don’t have a business account
            <br /> Create business account?
          </p>
          <Button size="large" type="submit">
            Create Business Account
          </Button>
        </div>
        <div className="right">
          <img className="img" src={photo} alt="Business" />
        </div>
      </div>
    </Wrapper>
  );
}

export default CreateBussAcc;

const Wrapper = styled.div`
  height: 100vh;
  background: #fef9f0;

  .container {
    display: flex;
    margin-top: 20px;
    /* padding: 0 20px; */
  }

  .left {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 130px;
  }
  p,
  h1 {
    font-size: 27px;
    line-height: 50px;
    letter-spacing: 1px;
    text-align: left;
    color: rgba(0, 0, 0, 0.593);
  }
  p {
    padding-bottom: 35px;
  }
  h1 {
    font-size: 30px;
    padding-bottom: 10px;
    font-weight: 800;
  }
  .right {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img {
    height: 70%;
    width: auto;
  }
`;
