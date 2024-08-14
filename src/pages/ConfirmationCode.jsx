import NavBar from "../components/NavBar";
import styled from "styled-components";
import img from "../../public/images/cuate.png";
import Button from "../components/Button";
import VerificationCode from "../components/VerificationCode";
import { Link } from "react-router-dom";


function ConfirmationCode() {
  return (
    <Wrapper>
      <NavBar />
      <div className="container">
        <div className="left">
          <h1 className="verify">Verify email address </h1>
          <p className="verification">Verification code sent to your mail</p>
          <VerificationCode />

<Link to ="/setnewpass">
          <Button size="medium" className="but">
            Confirm Code{" "}
          </Button>
          </Link>
        </div>
        <div className="right">
          <img className="img" src={img} alt="Business" />
        </div>
      </div>
    </Wrapper>
  );
}

export default ConfirmationCode;

const Wrapper = styled.div`
  height: 100vh;
  background: #fef9f0;
  align-items: center;
  justify-content: center;
  overflow: hidden; 

  .container {
    display: flex;
    margin-top: 80px;
  }
  .left {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 65px;
    gap: 10px;
  }

  .verify {
    font-family: Literata;
    font-size: 35px;
    font-weight: 700;
    letter-spacing: 4px;
    text-align: left;
    color: var(--text, #00000099);
    padding-top: 30px;
  }

  .verification {
    font-family: Literata;
    font-size: 20px;
    font-weight: 300;
    letter-spacing: -0.41px;
    text-align: left;
    color: #000000bf;
    padding-bottom: 20px;
  }
  

  Button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.8125rem;
  }
  .but {
    color: var(--white, #fff);
    font-family: Literata;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 1.375rem;
    letter-spacing: 0.0625rem;
    padding-left: 30px;
  }

  .right {
    width: 50%;
    display: flex;
    justify-content: center;
  }

  .img {
    height: 70%;
    width: auto;
  }
`;
