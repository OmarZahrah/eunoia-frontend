import styled from "styled-components";
import photo from "../../images/business.svg";
import Button from "../../components/Button";

function CreateBussAcc() {
  return (
    <Wrapper>
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
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
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
      /* padding: 1rem; */
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
  }
`;
