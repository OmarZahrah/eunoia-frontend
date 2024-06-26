import img from "../../public/images/cuate.png";
import Button from "./Button";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ForgotPassword() {
  return (
    <Wrapper>
      <div className="container">
        <div className="left">
          <h1 className="forgot">Forgot Password </h1>
          <p className="forgotParg">
            Please write your email to receive a
            <br /> confirmation code to set a new <br /> password.
          </p>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="example@example.com"
            className="email-input"
          />
          <Link to="/confirmationcode">

          <Button size="medium" className="but">
            Confirm Email{" "}
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

export default ForgotPassword;

const Wrapper = styled.div`
  height: 100vh;
  background: #fef9f0;
  /* margin-top: 50px; */
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .container {
    display: flex;
    margin-top: 50px;
  }

  .left {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 65px;
    gap: 10px;
  }

  .forgot {
    font-family: Literata;
    font-size: 35px;
    font-weight: 700;
    letter-spacing: 4px;
    text-align: left;
    color: var(--text, #00000099);
    /* padding-left: 30px; */
    padding-top: 30px;
  }

  .forgotParg {
    font-family: Literata;
    font-size: 29px;
    font-weight: 300;
    letter-spacing: -0.41px;
    text-align: left;
    color: #000000bf;
    /* padding-left: 30px; */
    padding-bottom: 20px;
  }
  label {
    display: block;
    text-transform: capitalize;
    font-family: Literata;
    font-size: 22px;
    font-weight: 300;
    color: #312f2fbe;
    margin: 0;
  }

  .email-input {
    background-color: transparent;
    height: 20px;
    margin: 0;
    padding: 15px 0;
    font-size: 17px;
    font-family: Literata;
    border: none;
    outline: none;
    position: relative;
    border-bottom: 1.5px solid #00000099;
    width: 80%;
  }

  Button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 2.8125rem;
    margin-top: 30px;
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
    /* align-items: center; */
  }

  .img {
    height: 70%;
    width: auto;
  }

  /* @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    align-items: center;
    justify-content: center;
    .container {
      margin-top: 0px;
    }
    .right {
      display: none;
    }
    .left {
      width: 100%;
      padding: 1rem;
    }
    p,
    h1 {
      font-size: 20px;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;
    .container {
      margin-top: 0px;
    }
    .right {
      display: none;
    }
    .left {
      width: 100%;
      padding: 1rem;
    }
    p,
    h1 {
      font-size: 25px;
    }
  }

  @media only screen and (max-width: 52.5em) {
    .container {
      height: 80%;
    }

    .left {
      padding: 20px;
      margin-left: 10px;
    }
    p,
    h1 {
      font-size: 18px;
      line-height: 45px;
    }
    p {
      padding-bottom: 10px;
    }
    h1 {
      font-size: 25px;
      padding-bottom: 8px;
    }
    .img {
      width: 70%;
      height: auto;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.semi}) {
    .container {
      height: 80%;
    }

    .left {
      padding: 20px;
      margin-left: 10px;
    }
    p,
    h1 {
      font-size: 18px;
      line-height: 45px;
    }
    p {
      padding-bottom: 10px;
    }
    h1 {
      font-size: 25px;
      padding-bottom: 8px;
    }
    .img {
      width: 70%;
      height: auto;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.small}) {
    .container {
      height: 80%;
    }

    .left {
      padding: 50px;
      margin-left: 10px;
    }
    p,
    h1 {
      font-size: 18px;
      line-height: 45px;
    }
    p {
      padding-bottom: 10px;
    }
    h1 {
      font-size: 25px;
      padding-bottom: 8px;
    }
    .img {
      width: 60%;
      height: auto;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.mid}) {
    .container {
      height: 80%;
    }

    .left {
      padding: 30px;
      margin-left: 10px;
    }
    p,
    h1 {
      font-size: 18px;
      line-height: 45px;
    }
    p {
      padding-bottom: 10px;
    }
    h1 {
      font-size: 25px;
      padding-bottom: 8px;
    }
    .img {
      width: 60%;
      height: auto;
    }
  } */
`;
